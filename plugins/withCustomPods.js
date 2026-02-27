const { withDangerousMod } = require('@expo/config-plugins');
const fs = require('fs');
const path = require('path');

const withCustomPods = (config) => {
  return withDangerousMod(config, [
    'ios',
    async (config) => {
      // 1. Patch RNCAsyncStorage.mm
      const asyncStoragePath = path.join(
        config.modRequest.projectRoot,
        'node_modules',
        '@react-native-async-storage',
        'async-storage',
        'ios',
        'RNCAsyncStorage.mm',
      );
      if (fs.existsSync(asyncStoragePath)) {
        let content = fs.readFileSync(asyncStoragePath, 'utf8');
        const targetStore =
          'RCTAssertThread(RCTGetMethodQueue(), @"Must be executed on storage thread");';
        if (content.includes(targetStore)) {
          content = content.replace(targetStore, `// ${targetStore}`);
          fs.writeFileSync(asyncStoragePath, content);
        }
      }

      // 2. Patch RCTBridgeModule.h
      const bridgeModulePath = path.join(
        config.modRequest.projectRoot,
        'node_modules',
        'react-native',
        'React',
        'RCTBridgeModule.h',
      );
      if (fs.existsSync(bridgeModulePath)) {
        let content = fs.readFileSync(bridgeModulePath, 'utf8');
        const targetLine =
          '@property (nonatomic, strong, readonly) dispatch_queue_t methodQueue RCT_DEPRECATED;';
        const replacementLine =
          '@property (nonatomic, assign, readonly) dispatch_queue_t methodQueue RCT_DEPRECATED;';
        if (content.includes(targetLine)) {
          content = content.replace(targetLine, replacementLine);
          fs.writeFileSync(bridgeModulePath, content);
        }
      }

      // 3. Inject post_install hook into Podfile for DT_TOOLCHAIN_DIR
      const podfilePath = path.join(config.modRequest.platformProjectRoot, 'Podfile');
      if (fs.existsSync(podfilePath)) {
        let podfile = fs.readFileSync(podfilePath, 'utf8');
        const podfilePatch = `
  # --- MoodMap DT_TOOLCHAIN_DIR Patch ---
  installer.pods_project.targets.each do |target|
    target.build_configurations.each do |config|
      if config.base_configuration_reference
        xcconfig_path = config.base_configuration_reference.real_path
        if File.exist?(xcconfig_path)
          xcconfig = File.read(xcconfig_path)
          xcconfig = xcconfig.gsub(/DT_TOOLCHAIN_DIR/, "TOOLCHAIN_DIR")
          File.open(xcconfig_path, "w") { |file| file << xcconfig }
        end
      end
    end
  end
  # --------------------------------------`;

        if (
          !podfile.includes('MoodMap DT_TOOLCHAIN_DIR Patch') &&
          podfile.includes('post_install do |installer|')
        ) {
          podfile = podfile.replace(
            /post_install do \|installer\|/,
            `post_install do |installer|\n${podfilePatch}`,
          );
          fs.writeFileSync(podfilePath, podfile);
        }
      }
      return config;
    },
  ]);
};

module.exports = withCustomPods;

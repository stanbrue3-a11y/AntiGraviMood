// @ts-nocheck
const { withDangerousMod } = require('@expo/config-plugins');
const fs = require('fs');
const path = require('path');

function safeReplace(content, startMarker, endMarker, replacement) {
  if (content.includes(startMarker) && content.includes(endMarker)) {
    const s = content.indexOf(startMarker);
    const e = content.indexOf(endMarker);
    return content.substring(0, s) + replacement + content.substring(e);
  }
  return content;
}

const withHighFidelity = (config) => {
  return withDangerousMod(config, [
    'ios',
    async (config) => {
      const mapPath = path.join(config.modRequest.projectRoot, 'app', '(tabs)', 'map.tsx');
      if (!fs.existsSync(mapPath)) return config;
      let content = fs.readFileSync(mapPath, 'utf8');

      const overlapTarget =
        'iconAllowOverlap: false,\\n                            iconIgnorePlacement: false,';
      const overlapReplacement =
        "iconAllowOverlap: true, // Allow overlap so they don't vanish\\n                            iconIgnorePlacement: true, // Always show clusters";
      if (content.includes(overlapTarget)) {
        content = content.replace(overlapTarget, overlapReplacement);
      }

      // 2. High Fidelity / Smart Atlas Patches
      const typesStart = '// 2. CLUSTER TEMPLATES (The Pie Charts)';
      const typesEnd = '// Minimal map for normalization checking';
      const newTypes = `// 2. CLUSTER TEMPLATES (The Pie Charts)
    const CLUSTER_TYPES = [
        // A. PURE (100%)
        { id: 'chill-pure', colors: ['#8ccaf7', '#8ccaf7'] },
        { id: 'festif-pure', colors: ['#ffab60', '#ffab60'] },
        { id: 'culturel-pure', colors: ['#c499ff', '#c499ff'] },

        // B. DOMINANT (66% / 33%)
        { id: 'chill-festif', colors: ['#8ccaf7', '#ffab60'] },
        { id: 'chill-culturel', colors: ['#8ccaf7', '#c499ff'] },

        { id: 'festif-chill', colors: ['#ffab60', '#8ccaf7'] },
        { id: 'festif-culturel', colors: ['#ffab60', '#c499ff'] },

        { id: 'culturel-chill', colors: ['#c499ff', '#8ccaf7'] },
        { id: 'culturel-festif', colors: ['#c499ff', '#ffab60'] },

        // C. EQUAL SPLIT (50% / 50%) - Avoids "Fake Tricolor"
        { id: 'chill-festif-equal', colors: ['#8ccaf7', '#ffab60'] },
        { id: 'chill-culturel-equal', colors: ['#8ccaf7', '#c499ff'] },
        { id: 'festif-culturel-equal', colors: ['#ffab60', '#c499ff'] },

        // D. BALANCED (True Tricolor Mix)
        { id: 'balanced', colors: ['#8ccaf7', '#ffab60', '#c499ff'] },
    ];
`;

      const brainStart = '// --- THE BRAIN: EXPRESSION LOGIC V2 (PROPORTIONAL) 🧠 ---';
      const brainEnd = 'return (';
      const newBrain = `// --- THE BRAIN: EXPRESSION LOGIC V3 (HIGH FIDELITY) 🧠 ---
    const getClusterImage = [
        'case',
        // 1. PURE (>85%)
        ['>', ['/', ['get', 'chill_count'], ['get', 'point_count']], 0.85], 'cluster-chill-pure',
        ['>', ['/', ['get', 'festif_count'], ['get', 'point_count']], 0.85], 'cluster-festif-pure',
        ['>', ['/', ['get', 'culturel_count'], ['get', 'point_count']], 0.85], 'cluster-culturel-pure',

        // 2. DOMINANT (>50% Major)
        ['>', ['/', ['get', 'chill_count'], ['get', 'point_count']], 0.5],
        ['case',
            ['>', ['get', 'festif_count'], ['get', 'culturel_count']], 'cluster-chill-festif',
            'cluster-chill-culturel'
        ],

        ['>', ['/', ['get', 'festif_count'], ['get', 'point_count']], 0.5],
        ['case',
            ['>', ['get', 'chill_count'], ['get', 'culturel_count']], 'cluster-festif-chill',
            'cluster-festif-culturel'
        ],

        ['>', ['/', ['get', 'culturel_count'], ['get', 'point_count']], 0.5],
        ['case',
            ['>', ['get', 'chill_count'], ['get', 'festif_count']], 'cluster-culturel-chill',
            'cluster-culturel-festif'
        ],

        // 3. EQUAL SPLITS (Check for ~50/50 pairs where the 3rd is minimal)
        ['>', ['/', ['+', ['get', 'chill_count'], ['get', 'festif_count']], ['get', 'point_count']], 0.85], 'cluster-chill-festif-equal',
        ['>', ['/', ['+', ['get', 'chill_count'], ['get', 'culturel_count']], ['get', 'point_count']], 0.85], 'cluster-chill-culturel-equal',
        ['>', ['/', ['+', ['get', 'festif_count'], ['get', 'culturel_count']], ['get', 'point_count']], 0.85], 'cluster-festif-culturel-equal',

        // 4. BALANCED (True Tricolor Mix)
        'cluster-balanced'
    ];

    `;

      const svgStart = '{/* B. CLUSTER TEMPLATES (SVG PIE CHARTS V3) 🧠 */}';
      const svgEnd = '{/* Selected Pin Template */}';
      const newSvg = `{/* B. CLUSTER TEMPLATES (SVG PIE CHARTS V4 - HIGH FIDELITY) 🧠 */}
                    {\\CLUSTER_TYPES.map(type => {
                        const isPure = type.id.endsWith('pure');
                        const isBalanced = type.id === 'balanced';
                        const isEqual = type.id.includes('equal');
                        
                        return (
                            <Mapbox.Image key={type.id} name={\`cluster-\\\${type.id}\`}>
                                <View style={{ width: 60, height: 60, alignItems: 'center', justifyContent: 'center' }} collapsable={false}>
                                    <Svg height="60" width="60" viewBox="0 0 44 44">
                                        <Circle cx="22" cy="22" r="22" fill="white" />{/* Border */}
                                        <G origin="22, 22" rotation="0">
                                            {\\isPure && (
                                                 <Circle cx="22" cy="22" r="20" fill={type.colors[0]} />
                                            )}
                                            
                                            {\\!isPure && !isBalanced && !isEqual && (
                                                <>
                                                    {/* Primary (65% = 234 deg) */}
                                                    <Path d={describeArc(22, 22, 20, 0, 234)} fill={type.colors[0]} />
                                                    {/* Secondary (35% = 126 deg) */}
                                                    <Path d={describeArc(22, 22, 20, 234, 360)} fill={type.colors[1]} />
                                                </>
                                            )}

                                            {\\isEqual && (
                                                <>
                                                    {/* 50/50 Split (180 deg each) */}
                                                    <Path d={describeArc(22, 22, 20, 0, 180)} fill={type.colors[0]} />
                                                    <Path d={describeArc(22, 22, 20, 180, 360)} fill={type.colors[1]} />
                                                </>
                                            )}

                                            {\\isBalanced && (
                                                <>
                                                    <Path d={describeArc(22, 22, 20, 0, 120)} fill={type.colors[0]} />
                                                    <Path d={describeArc(22, 22, 20, 120, 240)} fill={type.colors[1]} />
                                                    <Path d={describeArc(22, 22, 20, 240, 360)} fill={type.colors[2]} />
                                                </>
                                            )}
                                        </G>
                                    </Svg>
                                </View>
                            </Mapbox.Image>
                        );
                    })}

                    `.replace(/\\\\/g, ''); // Remove the escaping mechanism used for template literal

      content = safeReplace(content, typesStart, typesEnd, newTypes);
      content = safeReplace(content, brainStart, brainEnd, newBrain);
      content = safeReplace(content, svgStart, svgEnd, newSvg);

      fs.writeFileSync(mapPath, content);

      return config;
    },
  ]);
};

module.exports = withHighFidelity;

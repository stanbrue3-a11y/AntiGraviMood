import os

path = 'app/(tabs)/map.tsx'
with open(path, 'r') as f:
    content = f.read()

start_marker = "{/* B. CLUSTER TEMPLATES (The \"Smart Atlas\") */}"
end_marker = "{/* Selected Pin Template */}"

new_block = """                    {/* B. CLUSTER TEMPLATES (The "Smart Atlas" V2 - Proportional Slices) */}
                    {CLUSTER_TYPES.map(type => {
                        const isPure = type.id.endsWith('pure');
                        const isBalanced = type.id === 'balanced';
                        
                        return (
                            <Mapbox.Image key={type.id} name={`cluster-${type.id}`}>
                                <View style={{ width: 44, height: 44, alignItems: 'center', justifyContent: 'center' }} collapsable={false}>
                                    
                                    {/* 1. CONTAINER (Masked Circle) - White Border */}
                                    <View style={{ 
                                        width: 44, height: 44, borderRadius: 22, 
                                        backgroundColor: 'white', 
                                        overflow: 'hidden',
                                        alignItems: 'center', justifyContent: 'center',
                                        borderWidth: 2, borderColor: 'white'
                                    }} collapsable={false}>
                                        
                                        {/* A. BACKGROUND (Primary Color or Solid) */}
                                        <View style={{ width: 44, height: 44, backgroundColor: type.colors[0], position: 'absolute' }} collapsable={false} />

                                        {/* B. DUAL MODE: Render Secondary Color in Bottom-Right Quadrant (25% Slice) */}
                                        {!isPure && !isBalanced && (
                                            <View style={{ position: 'absolute', bottom: 0, right: 0, width: 22, height: 22, backgroundColor: type.colors[1] }} collapsable={false} />
                                        )}

                                        {/* C. BALANCED MODE: Tricolor Vertical Stripes */}
                                        {isBalanced && (
                                            <View style={{ flexDirection: 'row', width: 44, height: 44 }} collapsable={false}>
                                                <View style={{ flex: 1, backgroundColor: type.colors[0] }} collapsable={false} />
                                                <View style={{ flex: 1, backgroundColor: type.colors[1] }} collapsable={false} />
                                                <View style={{ flex: 1, backgroundColor: type.colors[2] }} collapsable={false} />
                                            </View>
                                        )}

                                    </View>
                                </View>
                            </Mapbox.Image>
                        );
                    })}

                    """

if start_marker in content and end_marker in content:
    start_idx = content.find(start_marker)
    end_idx = content.find(end_marker)
    
    new_content = content[:start_idx] + new_block + content[end_idx:]
    
    with open(path, 'w') as f:
        f.write(new_content)
    print("SUCCESS")
else:
    print("MARKERS NOT FOUND")

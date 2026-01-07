import os

path = 'app/(tabs)/map.tsx'
with open(path, 'r') as f:
    content = f.read()

# 1. Update CLUSTER_TYPES
types_start = "// 2. CLUSTER TEMPLATES (The Pie Charts)"
types_end = "// Minimal map for normalization checking"

new_types = """// 2. CLUSTER TEMPLATES (The Pie Charts)
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
"""

# 2. Update BRAIN Logic
brain_start = "// --- THE BRAIN: EXPRESSION LOGIC V2 (PROPORTIONAL) 🧠 ---"
brain_end = "return ("

new_brain = """// --- THE BRAIN: EXPRESSION LOGIC V3 (HIGH FIDELITY) 🧠 ---
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
        // If Chill+Festif > 85% (meaning Culturel < 15%), it's a 2-way split
        ['>', ['/', ['+', ['get', 'chill_count'], ['get', 'festif_count']], ['get', 'point_count']], 0.85], 'cluster-chill-festif-equal',
        ['>', ['/', ['+', ['get', 'chill_count'], ['get', 'culturel_count']], ['get', 'point_count']], 0.85], 'cluster-chill-culturel-equal',
        ['>', ['/', ['+', ['get', 'festif_count'], ['get', 'culturel_count']], ['get', 'point_count']], 0.85], 'cluster-festif-culturel-equal',

        // 4. BALANCED (True Tricolor Mix)
        'cluster-balanced'
    ];

    """

# 3. Update SVG Renderer
svg_start = "{/* B. CLUSTER TEMPLATES (SVG PIE CHARTS V3) 🧠 */}"
svg_end = "{/* Selected Pin Template */}"

new_svg = """{/* B. CLUSTER TEMPLATES (SVG PIE CHARTS V4 - HIGH FIDELITY) 🧠 */}
                    {CLUSTER_TYPES.map(type => {
                        const isPure = type.id.endsWith('pure');
                        const isBalanced = type.id === 'balanced';
                        const isEqual = type.id.includes('equal');
                        
                        return (
                            <Mapbox.Image key={type.id} name={`cluster-${type.id}`}>
                                <View style={{ width: 60, height: 60, alignItems: 'center', justifyContent: 'center' }} collapsable={false}>
                                    <Svg height="60" width="60" viewBox="0 0 44 44">
                                        <Circle cx="22" cy="22" r="22" fill="white" />{/* Border */}
                                        <G origin="22, 22" rotation="0">
                                            {isPure && (
                                                 <Circle cx="22" cy="22" r="20" fill={type.colors[0]} />
                                            )}
                                            
                                            {!isPure && !isBalanced && !isEqual && (
                                                <>
                                                    {/* Primary (65% = 234 deg) */}
                                                    <Path d={describeArc(22, 22, 20, 0, 234)} fill={type.colors[0]} />
                                                    {/* Secondary (35% = 126 deg) */}
                                                    <Path d={describeArc(22, 22, 20, 234, 360)} fill={type.colors[1]} />
                                                </>
                                            )}

                                            {isEqual && (
                                                <>
                                                    {/* 50/50 Split (180 deg each) */}
                                                    <Path d={describeArc(22, 22, 20, 0, 180)} fill={type.colors[0]} />
                                                    <Path d={describeArc(22, 22, 20, 180, 360)} fill={type.colors[1]} />
                                                </>
                                            )}

                                            {isBalanced && (
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

                    """

# PERFORM REPLACEMENTS
def safe_replace(content, start_marker, end_marker, replacement):
    if start_marker in content and end_marker in content:
        s = content.find(start_marker)
        e = content.find(end_marker)
        print(f"Replacing block: {start_marker[:20]}...")
        return content[:s] + replacement + content[e:]
    else:
        print(f"ERROR: Marker not found: {start_marker[:20]}...")
        return content

content = safe_replace(content, types_start, types_end, new_types)
content = safe_replace(content, brain_start, brain_end, new_brain)
content = safe_replace(content, svg_start, svg_end, new_svg)

with open(path, 'w') as f:
    f.write(content)
print("SUCCESS: ALL BLOCKS PATCHED")

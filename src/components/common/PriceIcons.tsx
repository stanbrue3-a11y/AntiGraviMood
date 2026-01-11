import React from 'react';
import Svg, { Path, Circle, G, Rect } from 'react-native-svg';

interface IconProps {
    size?: number;
    color?: string;
    strokeWidth?: number;
}

// LUXE OUTLINE ICONS - "Gravure" Style (Fine strokes, no fill)

export const CrabIcon = ({ size = 24, color = '#000', strokeWidth = 1.5 }: IconProps) => (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        {/* Simplified Elegant Crab Silhouette (Outline) */}
        {/* Body */}
        <Path
            d="M5 13C5 10 8 8 12 8C16 8 19 10 19 13C19 16 16 18 12 18C8 18 5 16 5 13Z"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        {/* Legs L */}
        <Path d="M5 13L2 11" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" />
        <Path d="M5 15L2 16" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" />
        <Path d="M6 17L4 20" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" />
        {/* Legs R */}
        <Path d="M19 13L22 11" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" />
        <Path d="M19 15L22 16" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" />
        <Path d="M18 17L20 20" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" />
        {/* Claws */}
        <Path d="M5 11L3 6C3 6 5 4 7 6L8 9" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
        <Path d="M19 11L21 6C21 6 19 4 17 6L16 9" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
        {/* Eyes */}
        <Circle cx="10" cy="11" r="0.5" fill={color} />
        <Circle cx="14" cy="11" r="0.5" fill={color} />
    </Svg>
);

export const SafeIcon = ({ size = 24, color = '#000', strokeWidth = 1.5 }: IconProps) => (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        {/* Elegant Safe/Vault Box */}
        <Rect
            x="4" y="4" width="16" height="16" rx="2"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        {/* Dial Circle */}
        <Circle
            cx="12" cy="12" r="3"
            stroke={color}
            strokeWidth={strokeWidth}
        />
        {/* Dial Center */}
        <Circle cx="12" cy="12" r="0.5" fill={color} />
        {/* Handle */}
        <Path d="M15 12H17" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" />
    </Svg>
);

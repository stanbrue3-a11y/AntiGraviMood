import React from 'react';
import { usePlacesStore } from '../../stores';
import { PlaceDetailSheetMap } from './PlaceDetailSheetMap';
import { PlaceDetailSheetExplore } from './PlaceDetailSheetExplore';

/**
 * PlaceDetailSheet Router
 * Connects the global store to the appropriate sheet implementation
 * based on the 'sheetMode' ('map' | 'explore').
 */
export const PlaceDetailSheet = () => {
    const sheetMode = usePlacesStore((state) => state.sheetMode);

    if (sheetMode === 'explore') {
        // console.log('[PlaceDetailSheet] Rendering Explore Mode');
        return <PlaceDetailSheetExplore />;
    }

    // console.log('[PlaceDetailSheet] Rendering Map Mode (Default)');
    return <PlaceDetailSheetMap />;
};

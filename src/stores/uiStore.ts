import { create } from 'zustand';

export type SheetMode = 'map' | 'explore' | 'feed';

interface UIState {
  selectedPlaceId: string | null;
  sheetMode: SheetMode;
  mapCameraRequest: {
    center: [number, number];
    zoom?: number;
    timestamp: number;
  } | null;

  setMapCameraRequest: (center: [number, number], zoom?: number) => void;
  setSheetMode: (mode: SheetMode) => void;
}

export const useUIStore = create<UIState>((set) => ({
  selectedPlaceId: null,
  sheetMode: 'map',
  mapCameraRequest: null,

  setMapCameraRequest: (center, zoom) =>
    set({
      mapCameraRequest: { center, zoom, timestamp: Date.now() },
    }),
  setSheetMode: (mode) => set({ sheetMode: mode }),
}));

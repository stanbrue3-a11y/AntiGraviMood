import React, { createContext, useContext, ReactNode, useState } from 'react';
import { usePlacesStore } from '../stores/placesStore';
import { PlaceDetailViewModel } from '../viewmodels/PlaceDetailViewModel';
import { moodColors, type MoodType } from '../design';

/**
 * PlaceDetailContext - State & Action Dispatcher 🕹️
 *
 * Provides both the View Model and Interaction Handlers directly to children.
 * No separate Zustand store needed for this route-level local state.
 */
export interface PlaceDetailContextType {
  // --- STATE ---
  viewModel: PlaceDetailViewModel | null;
  primaryColor: string;
  dominantMood: string;
  isHoursExpanded: boolean;
  isLiked: boolean; // Pre-calculated from PlacesStore

  // --- ACTIONS ---
  toggleHours: () => void;
  onClose: () => void;
  onNavigate: () => void;
  onShare: () => void;
  onLike: () => void;
  onVibeCheck: () => void;
  onBooking: () => void;
}

const PlaceDetailContext = createContext<PlaceDetailContextType | undefined>(undefined);

export const usePlaceDetail = () => {
  const context = useContext(PlaceDetailContext);
  if (!context) {
    throw new Error('usePlaceDetail must be used within a PlaceDetailProvider');
  }
  return context;
};

interface ProviderProps {
  children: ReactNode;
  viewModel: PlaceDetailViewModel | null;
  dominantMoodStr: string;
  onClose: () => void;
  onNavigate: () => void;
  onShare: () => void;
  onLike: () => void;
  onVibeCheck: () => void;
  onBooking: () => void;
}

export const PlaceDetailProvider: React.FC<ProviderProps> = ({
  children,
  viewModel,
  dominantMoodStr,
  ...handlers
}) => {
  const [isHoursExpanded, setIsHoursExpanded] = useState(false);

  // Calculate colors
  const dominantMood = (dominantMoodStr || 'chill') as MoodType;
  const primaryColor = moodColors[dominantMood]?.primary || '#000000';

  // Reactive subscription to global likes (ensures heart toggles visually)
  const likedPlaceIds = usePlacesStore((s) => s.likedPlaceIds);
  const isLiked = viewModel ? likedPlaceIds.includes(viewModel.id) : false;

  const toggleHours = () => setIsHoursExpanded((prev) => !prev);

  const value: PlaceDetailContextType = {
    viewModel,
    primaryColor,
    dominantMood,
    isHoursExpanded,
    isLiked,
    toggleHours,
    ...handlers,
  };

  return <PlaceDetailContext.Provider value={value}>{children}</PlaceDetailContext.Provider>;
};

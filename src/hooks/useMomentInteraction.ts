import { useState, useRef, useEffect } from 'react';
import { Share } from 'react-native';
import * as Haptics from 'expo-haptics';
import { Moment } from '../types/model';
import {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withSpring,
  withSequence,
  withDelay,
  withRepeat,
} from 'react-native-reanimated';

interface UseMomentInteractionReturn {
  // State
  isLiked: boolean;
  likes: number;
  menuVisible: boolean;
  currentMood: 'chill' | 'festif' | 'culturel';
  interfaceVisible: boolean;

  // Setters
  setMenuVisible: (visible: boolean) => void;

  // Handlers
  handleSmartTap: () => void;
  handleLongPress: () => void;
  handleHeartPress: () => void;
  handleCommentPress: () => void;
  handleSharePress: () => Promise<void>;
  handleMoodSelect: (mood: 'chill' | 'festif' | 'culturel') => void;

  // Animations
  interfaceAnimatedStyle: any;
  buttonAnimatedStyle: any;
  bigHeartAnimatedStyle: any;
}

export function useMomentInteraction(
  item: Moment,
  onCommentPress?: () => void,
): UseMomentInteractionReturn {
  const [isLiked, setIsLiked] = useState(item.isLikedByMe);
  const [likes, setLikes] = useState(item.likes);
  const [menuVisible, setMenuVisible] = useState(false);
  const [currentMood, setCurrentMood] = useState(item.mood);

  // Sync state if item changes
  useEffect(() => {
    setCurrentMood(item.mood);
  }, [item.mood]);

  const [interfaceVisible, setInterfaceVisible] = useState(true);

  // UI REANIMATED SHARED VALUES
  const interfaceOpacity = useSharedValue(1);
  const bigHeartScale = useSharedValue(0.5);
  const bigHeartOpacity = useSharedValue(0);
  const bigHeartRotation = useSharedValue(0);
  const buttonPulse = useSharedValue(1);

  const lastTapTime = useRef(0);
  const singleTapTimeout = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    buttonPulse.value = withRepeat(
      withSequence(
        withDelay(4000, withTiming(1.05, { duration: 600 })),
        withTiming(1, { duration: 600 }),
      ),
      -1,
      true,
    );
  }, []);

  const toggleInterface = () => {
    const toValue = interfaceVisible ? 0 : 1;
    interfaceOpacity.value = withTiming(toValue, { duration: 300 });
    setInterfaceVisible(!interfaceVisible);
  };

  const triggerBigHeart = () => {
    const randomRotation = (Math.random() - 0.5) * 30;
    bigHeartRotation.value = randomRotation;
    bigHeartScale.value = 0.5;
    bigHeartOpacity.value = 1;

    bigHeartScale.value = withSpring(1.2, { damping: 10, stiffness: 400 });
    bigHeartOpacity.value = withTiming(0, { duration: 800 });
  };

  const handleSmartTap = () => {
    if (!interfaceVisible) {
      toggleInterface();
      return;
    }

    const now = Date.now();
    const DOUBLE_TAP_DELAY = 300;

    if (lastTapTime.current && now - lastTapTime.current < DOUBLE_TAP_DELAY) {
      if (singleTapTimeout.current) clearTimeout(singleTapTimeout.current);
      triggerBigHeart();
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
      if (!isLiked) {
        setIsLiked(true);
        setLikes((l) => l + 1);
      }
    }
    lastTapTime.current = now;
  };

  const handleLongPress = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    if (interfaceVisible) {
      toggleInterface();
    }
  };

  const handleHeartPress = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    setIsLiked(!isLiked);
    setLikes((prev) => (isLiked ? prev - 1 : prev + 1));
    if (!isLiked) triggerBigHeart();
  };

  const handleCommentPress = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    if (onCommentPress) onCommentPress();
  };

  const handleSharePress = async () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    try {
      await Share.share({
        message: `Regarde ce moment sur MoodMap : ${item.placeName} ! 📍\n\nTélécharge l'app pour voir plus.`,
        url: 'https://moodmap.app/moment/' + item.id,
      });
    } catch (error) {
      console.error(error);
    }
  };

  const handleMoodSelect = (moodItem: 'chill' | 'festif' | 'culturel') => {
    setCurrentMood(moodItem);
    setMenuVisible(false);
    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
  };

  const interfaceAnimatedStyle = useAnimatedStyle(() => ({
    opacity: interfaceOpacity.value,
  }));

  const buttonAnimatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: buttonPulse.value }],
  }));

  const bigHeartAnimatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: bigHeartScale.value }, { rotate: `${bigHeartRotation.value}deg` }],
    opacity: bigHeartOpacity.value,
  }));

  return {
    isLiked,
    likes,
    menuVisible,
    currentMood,
    interfaceVisible,
    setMenuVisible,
    handleSmartTap,
    handleLongPress,
    handleHeartPress,
    handleCommentPress,
    handleSharePress,
    handleMoodSelect,
    interfaceAnimatedStyle,
    buttonAnimatedStyle,
    bigHeartAnimatedStyle,
  };
}

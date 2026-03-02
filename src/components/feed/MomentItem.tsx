import React, { useState, useRef, useEffect } from 'react';
import { View, Text, StyleSheet, Dimensions, Pressable, Platform, Share } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withSpring,
  withSequence,
  withDelay,
  withRepeat,
} from 'react-native-reanimated';
import { useMomentInteraction } from '../../hooks/useMomentInteraction';
import { MoodImage } from '../common/MoodImage';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import * as Haptics from 'expo-haptics';
import { BlurView } from 'expo-blur';

import { useTheme } from '../../design';
import { MOODS } from '../../design/tokens/moods';
import { useMomentsStore } from '../../stores/momentsStore';
import { useUIStore } from '../../stores/uiStore';
import { ReactionMenu } from './ReactionMenu';
import { Moment } from '../../types/model';
import { ScalePressable } from '../design/ScalePressable';
import { useRouter } from 'expo-router';

const { width, height } = Dimensions.get('window');
// Default full height logic per instructions, fallback to feed height if not full
const ITEM_HEIGHT = height - 85;

interface MomentItemProps {
  item: Moment;
  isActive: boolean;
  isFullScreen?: boolean;
  onCommentPress?: () => void;
}

export const MomentItem = ({
  item,
  isActive,
  isFullScreen = true,
  onCommentPress,
}: MomentItemProps) => {
  const router = useRouter();
  const { theme } = useTheme();
  const {
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
  } = useMomentInteraction(item, onCommentPress);

  const moodColor = MOODS[currentMood].color;

  return (
    <View style={[styles.container, !isFullScreen && styles.containerRounded]}>
      {/* 1. BACKGROUND TAPPABLE LAYER */}
      <Pressable
        style={StyleSheet.absoluteFill}
        onLongPress={handleLongPress}
        delayLongPress={300}
        onPress={handleSmartTap}
      >
        <MoodImage
          source={item.imageUri}
          style={styles.image}
          resolution="FULL"
          priority="high"
        />

        {/* 2. THE SCRIM (Premium Gradient Overlay) */}
        <LinearGradient
          colors={[
            'transparent',
            'rgba(0,0,0,0)',
            'rgba(0,0,0,0.2)',
            'rgba(0,0,0,0.6)',
            'rgba(0,0,0,0.9)',
          ]}
          locations={[0, 0.4, 0.6, 0.8, 1]}
          style={StyleSheet.absoluteFill}
          pointerEvents="none"
        />
      </Pressable>

      {/* 3. IMMERSIVE UI WRAPPER (Sibling) */}
      <Animated.View
        style={[StyleSheet.absoluteFill, interfaceAnimatedStyle]}
        pointerEvents="box-none"
      >
        {/* A. TOP ZONE (Progress Bars) */}
        <View
          style={[styles.topZone, { top: Platform.OS === 'ios' ? 60 : 40 }]}
          pointerEvents="none"
        >
          <View style={styles.progressBarPlaceholder} />
          <View style={styles.progressBarPlaceholder} />
          <View style={styles.progressBarPlaceholder} />
        </View>

        {/* B. BOTTOM CONTENT ZONE (CARTEL) */}
        <View style={styles.bottomContentZone} pointerEvents="box-none">
          {/* 1. Mood Label (Top of Cartel) */}
          <View style={[styles.moodBadgeWrapper, { borderColor: moodColor + '40' }]}>
            <BlurView intensity={40} tint="dark" style={styles.moodBadgeBlur}>
              <Text style={[styles.moodText, { color: moodColor }]}>
                {MOODS[currentMood].emoji}
              </Text>
            </BlurView>
          </View>

          {/* 2. Place Name (The Star - Serif) */}
          <View style={styles.placeTagWrapper}>
            <View style={styles.placeTagContent}>
              <Text style={styles.placeText}>{item.placeName}</Text>
            </View>
          </View>

          {/* NEW: Place Button (Glassmorphic + Mood Tint + PULSE) */}
          <Animated.View style={buttonAnimatedStyle}>
            <ScalePressable
              style={styles.placeButtonWrapper}
              onPress={() => {
                router.push({ pathname: '/place/[id]', params: { id: item.placeId } });
              }}
              scaleTo={0.95}
            >
              <BlurView
                intensity={80}
                tint="light"
                style={[
                  styles.placeButtonBlur,
                  {
                    backgroundColor: 'rgba(255,255,255,0.15)',
                    borderColor: 'rgba(255,255,255,0.3)',
                    borderWidth: 1,
                    borderRadius: 30,
                  },
                ]}
              >
                <Ionicons name="navigate-circle" size={20} color={moodColor} />
                <Text style={[styles.placeButtonText, { letterSpacing: 1, fontSize: 12 }]}>
                  VOIR LE LIEU
                </Text>
                <Ionicons name="arrow-forward" size={12} color={moodColor} />
              </BlurView>
            </ScalePressable>
          </Animated.View>

          {/* 3. Description & Details */}
          <Text style={styles.description} numberOfLines={2}>
            {item.caption || 'Un moment unique à Paris ✨'}
          </Text>

          {/* 4. Fine Print: User & Time */}
          <View style={styles.userInfo}>
            <View style={[styles.avatar, { borderColor: moodColor }]}>
              <Text style={{ fontSize: 10 }}>{item.user.avatar}</Text>
            </View>
            <Text style={styles.userName}>{item.user.name}</Text>
            <Text style={styles.timeText}>• {item.verbatimDate}</Text>
          </View>
        </View>
      </Animated.View>

      {/* 4. RIGHT ACTIONS (HOISTED FOR TOUCH RELIABILITY) */}
      <View
        style={[styles.rightActionsZone, { opacity: interfaceVisible ? 1 : 0, zIndex: 999 }]}
        pointerEvents={interfaceVisible ? 'auto' : 'none'}
      >
        <ScalePressable style={styles.actionBtn} onPress={handleHeartPress} scaleTo={0.85}>
          <Ionicons
            name={isLiked ? 'heart' : 'heart-outline'}
            size={30}
            color={isLiked ? moodColor : '#fff'}
            style={{
              shadowColor: '#000',
              shadowOpacity: 0.4,
              shadowRadius: 4,
              shadowOffset: { width: 0, height: 2 },
              transform: [{ scale: isLiked ? 1.1 : 1 }],
            }}
          />
          <Text style={styles.actionText}>{likes}</Text>
        </ScalePressable>

        {/* COMMENTS BUTTON -> Opens Sheet via Parent */}
        <Pressable
          style={({ pressed }) => [styles.actionBtn, { opacity: pressed ? 0.7 : 1 }]}
          onPress={handleCommentPress}
          hitSlop={20}
        >
          <Ionicons
            name="chatbubble-outline"
            size={28}
            color="#fff"
            style={{
              shadowColor: '#000',
              shadowOpacity: 0.4,
              shadowRadius: 4,
              shadowOffset: { width: 0, height: 2 },
            }}
          />
          <Text style={styles.actionText}>24</Text>
        </Pressable>

        {/* SHARE BUTTON -> Native Share */}
        <ScalePressable style={styles.actionBtn} onPress={handleSharePress} scaleTo={0.85}>
          <Ionicons
            name="paper-plane-outline"
            size={28}
            color="#fff"
            style={{
              shadowColor: '#000',
              shadowOpacity: 0.4,
              shadowRadius: 4,
              shadowOffset: { width: 0, height: 2 },
            }}
          />
        </ScalePressable>
      </View>

      {/* BIG HEART ANIMATION OVERLAY */}
      <View
        style={[
          StyleSheet.absoluteFill,
          { alignItems: 'center', justifyContent: 'center', pointerEvents: 'none' },
        ]}
      >
        <Animated.View style={bigHeartAnimatedStyle}>
          <Ionicons
            name="heart"
            size={120}
            color={moodColor}
            style={{
              shadowColor: '#000',
              shadowOpacity: 0.5,
              shadowRadius: 10,
              shadowOffset: { width: 0, height: 4 },
            }}
          />
        </Animated.View>
      </View>

      {/* Reaction Menu Overlay */}
      <ReactionMenu
        visible={menuVisible}
        onSelect={handleMoodSelect}
        onClose={() => setMenuVisible(false)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: width,
    height: ITEM_HEIGHT,
    backgroundColor: '#000',
    overflow: 'hidden',
  },
  containerRounded: {
    borderRadius: 24,
  },
  content: {
    flex: 1,
    position: 'relative',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  topZone: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 40,
    paddingHorizontal: 12,
    flexDirection: 'row',
    gap: 4,
    zIndex: 20,
  },
  progressBarPlaceholder: {
    flex: 1,
    height: 1,
    backgroundColor: 'rgba(255,255,255,0.3)',
    borderRadius: 1,
  },
  bottomContentZone: {
    position: 'absolute',
    bottom: 20,
    left: 24,
    right: 80,
    zIndex: 20,
    justifyContent: 'flex-end',
    gap: 8,
  },
  rightActionsZone: {
    position: 'absolute',
    bottom: 50,
    right: 0,
    paddingRight: 16,
    alignItems: 'center',
    gap: 24,
    zIndex: 30,
  },
  moodBadgeWrapper: {
    alignSelf: 'flex-start',
    marginBottom: 8,
    borderRadius: 8,
    overflow: 'hidden',
    borderWidth: 1,
  },
  moodBadgeBlur: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  moodText: {
    fontSize: 10,
    fontWeight: '800',
    textTransform: 'uppercase',
    letterSpacing: 1.5,
  },
  placeTagWrapper: {
    alignSelf: 'flex-start',
    marginBottom: 8,
  },
  placeTagContent: {},
  placeText: {
    color: '#fff',
    fontSize: 34,
    fontFamily: 'PlayfairDisplay-Bold',
    fontWeight: '400',
    letterSpacing: -0.5,
  },
  placeButtonWrapper: {
    alignSelf: 'flex-start',
    borderRadius: 30,
    overflow: 'hidden',
    marginBottom: 16,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.3)',
  },
  placeButtonBlur: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 30,
    gap: 8,
    overflow: 'hidden',
  },
  placeButtonText: {
    color: '#fff',
    fontSize: 13,
    fontWeight: '700',
    letterSpacing: 0.5,
  },
  description: {
    color: 'rgba(255,255,255,0.95)',
    fontSize: 15,
    lineHeight: 22,
    fontFamily: Platform.select({ ios: 'Arial', android: 'sans-serif' }),
    marginBottom: 8,
    textShadowColor: 'rgba(0,0,0,0.3)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 2,
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    opacity: 0.9,
  },
  avatar: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: 'rgba(255,255,255,0.2)',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 8,
    borderWidth: 1.5,
  },
  userName: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 14,
    marginRight: 6,
    textShadowColor: 'rgba(0,0,0,0.5)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 2,
  },
  timeText: {
    color: 'rgba(255,255,255,0.8)',
    fontSize: 13,
    fontWeight: '500',
  },
  actionBtn: {
    alignItems: 'center',
    gap: 6,
  },
  actionBtnCircle: {
    width: 48,
    height: 48,
    borderRadius: 24,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.2)',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.2)',
  },
  actionBtnBlur: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  shadowIcon: {
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
  },
  actionText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '700',
    textAlign: 'center',
    textShadowColor: 'rgba(0,0,0,0.5)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 2,
  },
});

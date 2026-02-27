import React from 'react';
import { View, Text, StyleSheet, Platform, Pressable, ScrollView } from 'react-native';
import { Image } from 'expo-image';
import { Ionicons } from '@expo/vector-icons';
import { Place } from '../../types/model';

import { usePlaceDetail } from '../../contexts/PlaceDetailContext';

import { useMomentsStore } from '../../stores/momentsStore';

export const PlaceSocialFeed = () => {
  const { viewModel } = usePlaceDetail();
  const moments = useMomentsStore((state) => state.moments);

  if (!viewModel) return null;

  // Filter moments for this specific place
  const placeMoments = moments.filter((m) => m.placeId === viewModel.id);

  const displayMoments = placeMoments.length > 0 ? placeMoments : [];

  if (displayMoments.length === 0) return null;

  return (
    <View>
      <Text style={styles.sectionTitle}>
        Moments partagés ({placeMoments.length + (viewModel.social?.momentCount || 120)})
      </Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.momentsScroll}
      >
        {displayMoments.map((moment, index) => (
          <View key={moment.id} style={styles.momentCard}>
            <Image
              source={moment.imageUri}
              style={styles.momentImg}
              contentFit="cover"
              transition={400}
            />
            <View style={styles.momentOverlay}>
              <View
                style={{
                  width: 16,
                  height: 16,
                  borderRadius: 8,
                  backgroundColor: '#4e55f0',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderWidth: 1,
                  borderColor: '#fff',
                }}
              >
                <Ionicons name="person" size={8} color="#fff" />
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    fontFamily: 'PlayfairDisplay-Bold',
    color: '#FFF',
    marginBottom: 16,
    marginTop: 8,
  },
  momentsScroll: {
    paddingRight: 24,
    gap: 12,
    marginBottom: 32,
  },
  momentCard: {
    width: 100,
    height: 140,
    borderRadius: 16,
    overflow: 'hidden',
    backgroundColor: '#1C1C1E',
  },
  momentImg: {
    width: '100%',
    height: '100%',
  },
  momentOverlay: {
    position: 'absolute',
    bottom: 6,
    right: 6,
    backgroundColor: 'rgba(0,0,0,0.5)',
    borderRadius: 8,
    padding: 4,
  },
});

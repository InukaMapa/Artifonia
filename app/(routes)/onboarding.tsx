import { ThemedText } from '@/components/themed-text';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { ImageBackground, StyleSheet } from 'react-native';

export default function Onboarding() {
  // Use an existing PNG in the repo so require() won't fail at runtime. Replace the path
  // with your own `assets/images/svgs/onboarding1.png` when you add that file.
  const bg = require('../../assets/images/react-logo.png');

  return (
    <ImageBackground source={bg} style={styles.container} resizeMode="cover">
      <LinearGradient
        colors={["#250152AA", "#000000EE"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={StyleSheet.absoluteFill}
      />

      <ThemedText type="title"></ThemedText>
      <ThemedText type="default"></ThemedText>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
});

import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { StyleSheet, Text } from 'react-native';

export default function OnboardingScreen() {
  return (
    <LinearGradient
      colors={['#250152',"#000000"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.container}
    >
      <Text>Welcome to the app!</Text>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

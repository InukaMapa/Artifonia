import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import React from 'react';
import { StyleSheet } from 'react-native';

export default function Onboarding() {
  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title">Welcome to Artifonia</ThemedText>
      <ThemedText type="default">Let's get you started with a quick tour.</ThemedText>
    </ThemedView>
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

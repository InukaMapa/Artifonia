import { Redirect } from 'expo-router';
import React from 'react';

export default function Index() {
  // Redirect root to the onboarding page (route: /onboarding)
  return <Redirect href="/onboarding" />;
}
 

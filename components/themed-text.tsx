import { useThemeColor } from '@/hooks/use-theme-color';
import React from 'react';
import { StyleSheet, Text, type TextProps } from 'react-native';

export type ThemedTextProps = TextProps & {
  lightColor?: string;
  darkColor?: string;
  type?: 'default' | 'defaultSemiBold' | 'title';
};

export function ThemedText({ style, lightColor, darkColor, type = 'default', ...otherProps }: ThemedTextProps) {
  const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text');

  const textStyle = [styles.base, type === 'title' && styles.title, type === 'defaultSemiBold' && styles.semiBold, { color }, style];

  return <Text style={textStyle} {...otherProps} />;
}

const styles = StyleSheet.create({
  base: {
    fontSize: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 8,
  },
  semiBold: {
    fontWeight: '600',
  },
});

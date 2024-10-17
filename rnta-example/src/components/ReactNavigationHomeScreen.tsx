import * as React from 'react';
import { Button, Text } from 'react-native';
import type { ScreenProps } from '../types/Navigation';
import { SafeAreaViewVisualizer } from './SafeAreaViewVisualizer';

export default function ReactNavigationHomeScreen({
  navigation,
}: ScreenProps<'Home'>) {
  return (
    <SafeAreaViewVisualizer>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
      <Button
        title="Go to Modal Details"
        onPress={() => navigation.push('ModalDetails')}
      />
    </SafeAreaViewVisualizer>
  );
}

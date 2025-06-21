import * as React from 'react';
import { Button, Text } from 'react-native';
import type { Routes } from '../types/Navigation';
import { SafeAreaViewVisualizer } from './SafeAreaViewVisualizer';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';

export default function ReactNavigationSettingsScreen() {
  const { navigate, push } = useNavigation<NativeStackNavigationProp<Routes>>();

  return (
    <SafeAreaViewVisualizer>
      <Text>Settings Screen</Text>
      <Button title="Go to Details" onPress={() => navigate('Details')} />
      <Button
        title="Go to Modal Details"
        onPress={() => push('ModalDetails')}
      />
    </SafeAreaViewVisualizer>
  );
}

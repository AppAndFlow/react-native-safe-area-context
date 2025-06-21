import * as React from 'react';
import { Button, Text } from 'react-native';
import type { Routes } from '../types/Navigation';
import { SafeAreaViewVisualizer } from './SafeAreaViewVisualizer';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export default function ReactNavigationHomeScreen() {
  const { navigate, push } = useNavigation<NativeStackNavigationProp<Routes>>();

  return (
    <SafeAreaViewVisualizer>
      <Text>Home Screen</Text>
      <Button title="Go to Details" onPress={() => navigate('Details')} />
      <Button
        title="Go to Modal Details"
        onPress={() => push('ModalDetails')}
      />
    </SafeAreaViewVisualizer>
  );
}

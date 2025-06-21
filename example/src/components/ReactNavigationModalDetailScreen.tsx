import * as React from 'react';
import { Button, Text } from 'react-native';
import type { Routes } from '../types/Navigation';
import { SafeAreaViewVisualizer } from './SafeAreaViewVisualizer';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export default function ReactNavigationModalDetailScreen() {
  const [headerShown, setHeaderShown] = React.useState(false);
  const { navigate, goBack, setOptions, push } =
    useNavigation<NativeStackNavigationProp<Routes>>();

  React.useLayoutEffect(() => {
    setOptions({ headerShown });
  }, [setOptions, headerShown]);

  return (
    <SafeAreaViewVisualizer>
      <Text>Modal Details Screen</Text>
      <Button
        title="Go to Modal Details... again"
        onPress={() => push('ModalDetails')}
      />
      <Button title="Go to Home" onPress={() => navigate('Home')} />
      <Button title="Go back" onPress={() => goBack()} />
      <Button
        title="Toggle header"
        onPress={() => {
          setHeaderShown((state) => !state);
        }}
      />
    </SafeAreaViewVisualizer>
  );
}

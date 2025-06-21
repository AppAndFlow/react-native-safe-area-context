import * as React from 'react';
import { Button, Text } from 'react-native';
import type { Routes } from '../types/Navigation';
import { SafeAreaViewVisualizer } from './SafeAreaViewVisualizer';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export default function ReactNavigationDetailScreen() {
  const [headerShown, setHeaderShown] = React.useState(true);
  const { navigate, goBack, setOptions, push } =
    useNavigation<NativeStackNavigationProp<Routes>>();

  const isV5 = typeof setOptions === 'function';

  React.useLayoutEffect(() => {
    if (isV5) {
      setOptions({ headerShown });
    }
  }, [setOptions, isV5, headerShown]);

  return (
    <SafeAreaViewVisualizer>
      <Text>Details Screen</Text>
      <Button title="Go to Details... again" onPress={() => push('Details')} />
      <Button title="Go to Home" onPress={() => navigate('Home')} />
      <Button title="Go back" onPress={() => goBack()} />
      {isV5 && (
        <Button
          title="Toggle header"
          onPress={() => {
            setHeaderShown((state) => !state);
          }}
        />
      )}
    </SafeAreaViewVisualizer>
  );
}

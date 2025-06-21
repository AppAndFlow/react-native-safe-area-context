import * as React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export function withProvider<T extends object>(
  Component: React.ComponentType<T>,
) {
  return function WrappedScreen(props: T) {
    return (
      <SafeAreaProvider>
        <Component {...props} />
      </SafeAreaProvider>
    );
  };
}

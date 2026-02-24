import * as React from 'react';
import { Text, View } from 'react-native';

export function Card({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <View style={{ padding: 16, backgroundColor: 'white', marginBottom: 4 }}>
      <Text
        style={{
          fontSize: 20,
          fontWeight: 'bold',
          marginBottom: 16,
          color: '#292929',
        }}
      >
        {title}
      </Text>
      {children}
    </View>
  );
}

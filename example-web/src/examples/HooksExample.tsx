import * as React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import {
  SafeAreaProvider,
  useSafeAreaInsets,
  useSafeAreaFrame,
  initialWindowMetrics,
} from 'react-native-safe-area-context';
import { DataView } from '../components/DataView';
import { Card } from '../components/Card';

function HooksExampleScreen() {
  const insets = useSafeAreaInsets();
  const frame = useSafeAreaFrame();

  return (
    <View
      style={{
        width: frame.width,
        height: frame.height,
        backgroundColor: 'red',
        paddingTop: insets.top - BORDER_WIDTH,
        paddingLeft: insets.left - BORDER_WIDTH,
        paddingBottom: insets.bottom - BORDER_WIDTH,
        paddingRight: insets.right - BORDER_WIDTH,
        borderColor: 'blue',
        borderWidth: BORDER_WIDTH,
      }}
    >
      <ScrollView style={{ flex: 1, backgroundColor: '#eee' }}>
        <Card title="Provider insets">
          <DataView data={insets} />
        </Card>
        <Card title="Provider frame">
          <DataView data={frame} />
        </Card>
        <Card title="Initial window insets">
          <DataView data={initialWindowMetrics?.insets} />
        </Card>
        <Card title="Initial window frame">
          <DataView data={initialWindowMetrics?.frame} />
        </Card>
        <Card title="Note">
          <Text style={styles.note}>
            On desktop browsers, insets will be 0. The CSS env(safe-area-inset-*)
            values only report non-zero on devices with notches (e.g. iPhone in
            Safari). The frame values reflect the current window dimensions.
          </Text>
        </Card>
      </ScrollView>
    </View>
  );
}

const BORDER_WIDTH = 8;

export default function HooksExample() {
  return (
    <View style={{ flex: 1 }}>
      <SafeAreaProvider>
        <HooksExampleScreen />
      </SafeAreaProvider>
    </View>
  );
}

const styles = StyleSheet.create({
  note: {
    fontSize: 14,
    lineHeight: 20,
    color: '#576574',
  },
});

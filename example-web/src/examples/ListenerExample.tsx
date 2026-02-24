import * as React from 'react';
import { View } from 'react-native';
import {
  EdgeInsets,
  Rect,
  SafeAreaListener,
} from 'react-native-safe-area-context';
import { DataView } from '../components/DataView';
import { Card } from '../components/Card';

export default function ListenerExample() {
  const [data, setData] = React.useState<{
    insets: EdgeInsets;
    frame: Rect;
  } | null>(null);

  return (
    <SafeAreaListener onChange={setData}>
      <View style={{ flex: 1, backgroundColor: '#eee' }}>
        <Card title="Listener insets">
          <DataView data={data?.insets} />
        </Card>
        <Card title="Listener frame">
          <DataView data={data?.frame} />
        </Card>
      </View>
    </SafeAreaListener>
  );
}

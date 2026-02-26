import * as React from 'react';
import { View, Text, Pressable } from 'react-native';
import SafeAreaViewExample from './examples/SafeAreaViewExample';
import SafeAreaViewEdgesExample from './examples/SafeAreaViewEdgesExample';
import HooksExample from './examples/HooksExample';
import ListenerExample from './examples/ListenerExample';

const EXAMPLES = [
  {
    key: 'safe-area-view',
    title: 'SafeAreaView',
    component: SafeAreaViewExample,
  },
  { key: 'edges', title: 'Edges', component: SafeAreaViewEdgesExample },
  { key: 'hooks', title: 'Hooks', component: HooksExample },
  { key: 'listener', title: 'Listener', component: ListenerExample },
] as const;

export default function App() {
  const [activeKey, setActiveKey] =
    React.useState<(typeof EXAMPLES)[number]['key']>('safe-area-view');
  const ActiveComponent = EXAMPLES.find((e) => e.key === activeKey)!.component;

  return (
    <View style={{ flex: 1 }}>
      <View style={{ flexDirection: 'row', backgroundColor: '#222f3e' }}>
        {EXAMPLES.map((example) => (
          <Pressable
            key={example.key}
            style={[
              { flex: 1, paddingVertical: 12, alignItems: 'center' },
              activeKey === example.key && {
                borderBottomWidth: 3,
                borderBottomColor: '#10ac84',
              },
            ]}
            onPress={() => setActiveKey(example.key)}
          >
            <Text
              style={[
                { fontSize: 14, fontWeight: '600', color: '#8395a7' },
                activeKey === example.key && { color: '#ffffff' },
              ]}
            >
              {example.title}
            </Text>
          </Pressable>
        ))}
      </View>
      <View style={{ flex: 1 }}>
        <ActiveComponent />
      </View>
    </View>
  );
}

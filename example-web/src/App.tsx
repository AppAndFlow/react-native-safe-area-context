import * as React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
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
    <View style={styles.container}>
      <View style={styles.tabBar}>
        {EXAMPLES.map((example) => (
          <Pressable
            key={example.key}
            style={[styles.tab, activeKey === example.key && styles.activeTab]}
            onPress={() => setActiveKey(example.key)}
          >
            <Text
              style={[
                styles.tabText,
                activeKey === example.key && styles.activeTabText,
              ]}
            >
              {example.title}
            </Text>
          </Pressable>
        ))}
      </View>
      <View style={styles.content}>
        <ActiveComponent />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tabBar: {
    flexDirection: 'row',
    backgroundColor: '#222f3e',
  },
  tab: {
    flex: 1,
    paddingVertical: 12,
    alignItems: 'center',
  },
  activeTab: {
    borderBottomWidth: 3,
    borderBottomColor: '#10ac84',
  },
  tabText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#8395a7',
  },
  activeTabText: {
    color: '#ffffff',
  },
  content: {
    flex: 1,
  },
});

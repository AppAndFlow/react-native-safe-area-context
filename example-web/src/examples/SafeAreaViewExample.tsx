import * as React from 'react';
import { View, Text, ScrollView, Switch, Pressable } from 'react-native';
import {
  SafeAreaProvider,
  SafeAreaView,
  Edge,
} from 'react-native-safe-area-context';

const marginColor = '#5f27cd';
const paddingColor = '#10ac84';

export default function SafeAreaViewExample() {
  const [mode, setMode] = React.useState<'padding' | 'margin'>('padding');
  const [additionalMargin, setAdditionalMargin] = React.useState(false);
  const [additionalPadding, setAdditionalPadding] = React.useState(false);

  const [top, setTop] = React.useState(true);
  const [right, setRight] = React.useState(true);
  const [bottom, setBottom] = React.useState(true);
  const [left, setLeft] = React.useState(true);

  const edges: Edge[] = [];
  if (top) {
    edges.push('top');
  }
  if (right) {
    edges.push('right');
  }
  if (bottom) {
    edges.push('bottom');
  }
  if (left) {
    edges.push('left');
  }

  const modeTint = mode === 'padding' ? paddingColor : marginColor;

  return (
    <SafeAreaProvider>
      <View style={{ flex: 1, backgroundColor: marginColor }}>
        <SafeAreaView
          style={[
            { flex: 1, backgroundColor: paddingColor, borderRadius: 16 },
            {
              margin: additionalMargin ? 8 : 0,
              padding: additionalPadding ? 8 : 0,
              backgroundColor: 'blue',
            },
          ]}
          mode={mode}
          edges={edges}
        >
          <ScrollView
            contentContainerStyle={{
              flexGrow: 1,
              backgroundColor: 'white',
              padding: 20,
              justifyContent: 'center',
            }}
          >
            <Text style={{ fontSize: 17, lineHeight: 24, color: '#222f3e' }}>
              Edges{'\n'}
              <Text style={{ fontSize: 14, color: '#576574' }}>
                Make sure at least one is picked!
              </Text>
            </Text>
            <View
              style={{
                alignSelf: 'center',
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: 40,
                marginBottom: 100,
                width: 200,
                height: 200,
                borderWidth: 0.5,
                borderColor: '#c8d6e5',
                borderRadius: 6,
              }}
            >
              <Switch
                value={top}
                onValueChange={setTop}
                style={{ position: 'absolute', top: 5 }}
                trackColor={{ true: modeTint, false: '' }}
              />
              <Switch
                value={right}
                onValueChange={setRight}
                style={{ position: 'absolute', right: 5 }}
                trackColor={{ true: modeTint, false: '' }}
              />
              <Switch
                value={bottom}
                onValueChange={setBottom}
                style={{ position: 'absolute', bottom: 5 }}
                trackColor={{ true: modeTint, false: '' }}
              />
              <Switch
                value={left}
                onValueChange={setLeft}
                style={{ position: 'absolute', left: 5 }}
                trackColor={{ true: modeTint, false: '' }}
              />
            </View>
            <Pressable
              style={{
                marginVertical: 4,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
              onPress={() => setMode(mode === 'padding' ? 'margin' : 'padding')}
            >
              <Text style={{ fontSize: 17, lineHeight: 24, color: '#222f3e' }}>
                Safe areas added to{' '}
                <Text style={{ color: modeTint }}>{mode}</Text>
                {'\n'}
                <Text style={{ fontSize: 14, color: '#576574' }}>
                  Tap to toggle
                </Text>
              </Text>
            </Pressable>
            <View
              style={{
                marginVertical: 12,
                backgroundColor: '#c8d6e5',
                height: 0.5,
              }}
            />
            <View
              style={{
                marginVertical: 4,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <Text style={{ fontSize: 17, lineHeight: 24, color: '#222f3e' }}>
                Add additional{' '}
                <Text style={{ color: paddingColor }}>padding</Text>
              </Text>
              <Switch
                value={additionalPadding}
                onValueChange={setAdditionalPadding}
                trackColor={{ true: paddingColor, false: '' }}
              />
            </View>
            <View
              style={{
                marginVertical: 4,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <Text style={{ fontSize: 17, lineHeight: 24, color: '#222f3e' }}>
                Add additional{' '}
                <Text style={{ color: marginColor }}>margin</Text>
              </Text>
              <Switch
                value={additionalMargin}
                onValueChange={setAdditionalMargin}
                trackColor={{ true: marginColor, false: '' }}
              />
            </View>
          </ScrollView>
        </SafeAreaView>
      </View>
    </SafeAreaProvider>
  );
}

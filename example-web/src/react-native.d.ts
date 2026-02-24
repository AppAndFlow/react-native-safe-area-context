// Type shim for react-native aliased to react-native-web.
// Vite resolves 'react-native' to 'react-native-web' at runtime.
// This provides minimal types so the library source compiles correctly.
declare module 'react-native' {
  import type { ComponentProps, ComponentType, ReactNode } from 'react';

  export type ViewProps = {
    children?: ReactNode;
    style?: any;
    testID?: string;
    [key: string]: any;
  };

  export type TextProps = {
    children?: ReactNode;
    style?: any;
    [key: string]: any;
  };

  export const View: ComponentType<ViewProps>;
  export const Text: ComponentType<TextProps>;
  export const ScrollView: ComponentType<any>;
  export const Switch: ComponentType<any>;
  export const Pressable: ComponentType<any>;
  export const TextInput: ComponentType<any>;
  export const StyleSheet: {
    create: <T extends Record<string, any>>(styles: T) => T;
    flatten: (style: any) => Record<string, any>;
    hairlineWidth: number;
  };
  export const Dimensions: {
    get: (dim: string) => { width: number; height: number };
  };
  export const AppRegistry: {
    registerComponent: (name: string, getComponent: () => ComponentType) => void;
    runApplication: (name: string, config: { rootTag: Element | null }) => void;
  };
}

"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[111],{363:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>l});const s=JSON.parse('{"id":"api/use-safe-area-insets","title":"useSafeAreaInsets","description":"Returns the safe area insets of the nearest provider. This allows manipulating the inset values from JavaScript. Note that insets are not updated synchronously so it might cause a slight delay for example when rotating the screen.","source":"@site/docs/api/use-safe-area-insets.mdx","sourceDirName":"api","slug":"/api/use-safe-area-insets","permalink":"/react-native-safe-area-context/docs/api/use-safe-area-insets","draft":false,"unlisted":false,"editUrl":"https://github.com/AppAndFlow/react-native-safe-area-context/tree/main/docs/docs/api/use-safe-area-insets.mdx","tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"sidebar_position":3,"title":"useSafeAreaInsets","sidebar_label":"useSafeAreaInsets"},"sidebar":"docsSidebar","previous":{"title":"SafeAreaView","permalink":"/react-native-safe-area-context/docs/api/safe-area-view"},"next":{"title":"useSafeAreaFrame","permalink":"/react-native-safe-area-context/docs/api/use-safe-area-frame"}}');var n=a(4848),r=a(8453);const i={sidebar_position:3,title:"useSafeAreaInsets",sidebar_label:"useSafeAreaInsets"},o=void 0,c={},l=[{value:"Example",id:"example",level:3}];function u(e){const t={code:"code",h3:"h3",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"Returns the safe area insets of the nearest provider. This allows manipulating the inset values from JavaScript. Note that insets are not updated synchronously so it might cause a slight delay for example when rotating the screen."}),"\n",(0,n.jsxs)(t.p,{children:["Object with ",(0,n.jsx)(t.code,{children:"{ top: number, right: number, bottom: number, left: number }"}),"."]}),"\n",(0,n.jsx)(t.h3,{id:"example",children:"Example"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-tsx",children:"import { useSafeAreaInsets } from 'react-native-safe-area-context';\n\nfunction HookComponent() {\n  const insets = useSafeAreaInsets();\n\n  return <View style={{ paddingBottom: Math.max(insets.bottom, 16) }} />;\n}\n"})})]})}function p(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}},8453:(e,t,a)=>{a.d(t,{R:()=>i,x:()=>o});var s=a(6540);const n={},r=s.createContext(n);function i(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);
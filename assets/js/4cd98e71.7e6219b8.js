"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[988],{6186:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>n,toc:()=>d});const n=JSON.parse('{"id":"optimizations","title":"Optimizations","description":"Web SSR","source":"@site/docs/optimizations.mdx","sourceDirName":".","slug":"/optimizations","permalink":"/react-native-safe-area-context/docs/optimizations","draft":false,"unlisted":false,"editUrl":"https://github.com/AppAndFlow/react-native-safe-area-context/tree/main/docs/docs/optimizations.mdx","tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"sidebar_position":4,"title":"Optimizations","sidebar_label":"Optimizations"},"sidebar":"docsSidebar","previous":{"title":"Deprecated APIs","permalink":"/react-native-safe-area-context/docs/api/deprecated"},"next":{"title":"Testing","permalink":"/react-native-safe-area-context/docs/testing"}}');var r=t(4848),s=t(8453);const a={sidebar_position:4,title:"Optimizations",sidebar_label:"Optimizations"},o=void 0,c={},d=[{value:"Web SSR",id:"web-ssr",level:3},{value:"SafeAreaView",id:"safeareaview",level:3},{value:"initialWindowMetrics",id:"initialwindowmetrics",level:3}];function l(e){const i={code:"code",h3:"h3",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.h3,{id:"web-ssr",children:"Web SSR"}),"\n",(0,r.jsxs)(i.p,{children:["If you are doing server side rendering on the web you can use ",(0,r.jsx)(i.code,{children:"initialMetrics"})," to inject insets and frame value based on the device the user has, or simply pass zero values. Since insets measurement is async it will break rendering your page content otherwise."]}),"\n",(0,r.jsx)(i.h3,{id:"safeareaview",children:"SafeAreaView"}),"\n",(0,r.jsxs)(i.p,{children:["If you can, use ",(0,r.jsx)(i.code,{children:"SafeAreaView"}),". It's implemented natively so when rotating the device, there is no delay from the asynchronous bridge."]}),"\n",(0,r.jsx)(i.h3,{id:"initialwindowmetrics",children:"initialWindowMetrics"}),"\n",(0,r.jsxs)(i.p,{children:["To speed up the initial render, you can import ",(0,r.jsx)(i.code,{children:"initialWindowMetrics"})," from this package and set as the ",(0,r.jsx)(i.code,{children:"initialMetrics"})," prop on the provider as described in Web SSR. You cannot do this if your provider remounts, or you are using ",(0,r.jsx)(i.code,{children:"react-native-navigation"}),"."]}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-tsx",children:"import {\n  SafeAreaProvider,\n  initialWindowMetrics,\n} from 'react-native-safe-area-context';\n\nfunction App() {\n  return (\n    <SafeAreaProvider initialMetrics={initialWindowMetrics}>\n      ...\n    </SafeAreaProvider>\n  );\n}\n"})})]})}function p(e={}){const{wrapper:i}={...(0,s.R)(),...e.components};return i?(0,r.jsx)(i,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},8453:(e,i,t)=>{t.d(i,{R:()=>a,x:()=>o});var n=t(6540);const r={},s=n.createContext(r);function a(e){const i=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function o(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),n.createElement(s.Provider,{value:i},e.children)}}}]);
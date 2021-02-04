(window.webpackJsonp=window.webpackJsonp||[]).push([[302],{361:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return u})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return b})),n.d(t,"default",(function(){return m}));var r=n(2),o=n(6),a=(n(0),n(368)),i=n(372),c=n(373),s=n(375),u={id:"third-party-mobx",title:"MobX",sidebar_label:"MobX"},l={unversionedId:"docs/third-party-mobx",id:"version-7.8.1/docs/third-party-mobx",isDocsHomePage:!1,title:"MobX",description:"MobX is one of the most popular state management libraries used by applications sized from small to large.",source:"@site/versioned_docs/version-7.8.1/docs/third-party-mobx.mdx",slug:"/docs/third-party-mobx",permalink:"/react-native-navigation/docs/third-party-mobx",editUrl:"https://github.com/wix/react-native-navigation/edit/master/website/versioned_docs/version-7.8.1/docs/third-party-mobx.mdx",version:"7.8.1",sidebar_label:"MobX",sidebar:"version-7.8.1/docs",previous:{title:"TypeScript",permalink:"/react-native-navigation/docs/third-party-typescript"},next:{title:"React Context API",permalink:"/react-native-navigation/docs/third-party-react-context"}},b=[{value:"Sharing a store between multiple screens",id:"sharing-a-store-between-multiple-screens",children:[{value:"Step 1 - Create a Counter store",id:"step-1---create-a-counter-store",children:[]},{value:"Step 2 - Consuming the store",id:"step-2---consuming-the-store",children:[]}]},{value:"How to use MobX persistent data",id:"how-to-use-mobx-persistent-data",children:[]}],p={rightToc:b};function m(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"MobX is one of the most popular state management libraries used by applications sized from small to large.\nWith the introduction of the new React Context API, MobX can now be very easily integrated in React Native Navigation\nprojects."),Object(a.b)("div",{className:"admonition admonition-info alert alert--info"},Object(a.b)("div",{parentName:"div",className:"admonition-heading"},Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",{parentName:"h5",className:"admonition-icon"},Object(a.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(a.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Note")),Object(a.b)("div",{parentName:"div",className:"admonition-content"},Object(a.b)("p",{parentName:"div"},"With the introduction of the new Context API, there is no need to use ",Object(a.b)("inlineCode",{parentName:"p"},"Provider")," pattern with MobX and you\ncan now just use the React Context API."),Object(a.b)("p",{parentName:"div"},"Also the example uses ",Object(a.b)("inlineCode",{parentName:"p"},"mobx-react-lite")," but you can use the normal ",Object(a.b)("inlineCode",{parentName:"p"},"mobx-react"),"."))),Object(a.b)("h2",{id:"sharing-a-store-between-multiple-screens"},"Sharing a store between multiple screens"),Object(a.b)("p",null,"In the example below we will be creating a small Counter app. We will learn how to integrate Mobx with React-Native-Navigation and demonstrate how updating the store from one component, triggers renders in other components connected to the same store."),Object(a.b)("p",null,"Once you finish implementing the example, your screen should look similar to this:"),Object(a.b)("img",{width:"30%",src:Object(s.a)("/img/mobx_counter.png")}),Object(a.b)("h3",{id:"step-1---create-a-counter-store"},"Step 1 - Create a Counter store"),Object(a.b)("p",null,"Let's first create a counter store using MobX. Our store has a single ",Object(a.b)("inlineCode",{parentName:"p"},"count")," object and two methods to increment and decrement it."),Object(a.b)(i.a,{defaultValue:"makeObservable",values:[{label:"MakeObservable",value:"makeObservable"},{label:"Decorator",value:"decorator"}],mdxType:"Tabs"},Object(a.b)(c.a,{value:"makeObservable",mdxType:"TabItem"},Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-tsx",metastring:"file=./third-party-mobx/counter-store.tsx",file:"./third-party-mobx/counter-store.tsx"},"// counter.store.js\nimport React from 'react';\nimport { makeObservable, action, observable } from 'mobx';\n\nclass CounterStore {\n  count = 0;\n\n  constructor() {\n    makeObservable(this, {\n      count: observable,\n      increment: action.bound,\n      decrement: action.bound\n    })\n  }\n\n  increment() {\n    this.count += 1;\n  }\n\n  decrement() {\n    this.count -= 1;\n  }\n}\n\n// Instantiate the counter store.\nconst counterStore = new CounterStore();\n// Create a React Context with the counter store instance.\nexport const CounterStoreContext = React.createContext(counterStore);\nexport const useCounterStore = () => React.useContext(CounterStoreContext)\n"))),Object(a.b)(c.a,{value:"decorator",mdxType:"TabItem"},Object(a.b)("p",null,"  From ",Object(a.b)("inlineCode",{parentName:"p"},"mobx@6.0.0")," decorators have become an opt-in feature. To enable decorators for ",Object(a.b)("inlineCode",{parentName:"p"},"mobx"),", follow the ",Object(a.b)("a",{parentName:"p",href:"https://mobx.js.org/enabling-decorators.html"},"official guide"),"."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-tsx",metastring:"file=./third-party-mobx/counter-store-decorator.tsx",file:"./third-party-mobx/counter-store-decorator.tsx"},"// counter.store.js\nimport React from 'react';\nimport { observable, action, makeObservable } from 'mobx';\n\nclass CounterStore {\n  @observable count = 0;\n\n  constructor() {\n    makeObservable(this)\n  }\n\n  @action.bound\n  increment() {\n    this.count += 1;\n  }\n\n  @action.bound\n  decrement() {\n    this.count -= 1;\n  }\n}\n\n// Instantiate the counter store.\nconst counterStore = new CounterStore();\n\n// Create a React Context with the counter store instance.\nexport const CounterStoreContext = React.createContext(counterStore);\nexport const useCounterStore = () => React.useContext(CounterStoreContext)\n")))),Object(a.b)("h3",{id:"step-2---consuming-the-store"},"Step 2 - Consuming the store"),Object(a.b)("p",null,"You can consume the Counter store in any React components using ",Object(a.b)("inlineCode",{parentName:"p"},"useCounterStore")," hook or ",Object(a.b)("inlineCode",{parentName:"p"},"React.useContext")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-tsx",metastring:"file=./third-party-mobx/counter-screen.tsx",file:"./third-party-mobx/counter-screen.tsx"},"// CounterScreen.js\nimport React, { useContext } from 'react';\nimport { Button, Text, View } from 'react-native';\nimport { Navigation } from 'react-native-navigation'\nimport { observer } from 'mobx-react-lite';\n\nimport { useCounterStore, CounterStoreContext } from './counter.store';\n\nexport const CounterScreen = observer(({ componentId }) => {\n  const { count, increment, decrement } = useCounterStore(); // OR useContext(CounterStoreContext)\n\n  const navigateToNextScreen = () => {\n    Navigation.push(componentId, {\n      component: {\n        name: 'NextScreen'\n      }\n    })\n  }\n\n  return (\n    <Root>\n      <Text>{`Clicked ${count} times!`}</Text>\n      <Button title=\"Increment\" onPress={increment} />\n      <Button title=\"Decrement\" onPress={decrement} />\n      <Button title=\"Push\" onPress={navigateToNextScreen} />\n    </Root>\n  );\n});\n")),Object(a.b)("h2",{id:"how-to-use-mobx-persistent-data"},"How to use MobX persistent data"),Object(a.b)("p",null,"Often the app will require a persistent data solution and with MobX you can use ",Object(a.b)("a",{parentName:"p",href:"https://github.com/pinqy520/mobx-persist"},Object(a.b)("inlineCode",{parentName:"a"},"mobx-react-persist")),".\nIt only takes few extra steps to integrate the library. "),Object(a.b)("p",null,"Also the integration assumes that you are using the decorator pattern for ",Object(a.b)("inlineCode",{parentName:"p"},"mobx"),"."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-tsx",metastring:"file=./third-party-mobx/persistent-data.tsx",file:"./third-party-mobx/persistent-data.tsx"},"//counter.store.js\nimport React from 'react';\nimport { makeObservable, observable, action } from 'mobx';\nimport { persist } from 'mobx-persist'; // add this.\n\nclass CounterStore {\n  constructor() {\n    makeObservable(this)\n  }\n  \n  @persist @observable count = 0; // count is now persistent.\n\n\n  @action.bound\n  increment() {\n    this.count += 1;\n  }\n\n  @action.bound\n  decrement() {\n    this.count -= 1;\n  }\n}\n\nexport const counterStore = new CounterStore(); // You need to export the counterStore instance.\nexport const CounterStoreContext = React.createContext(counterStore);\nexport const useCounterStore = () => React.useContext(CounterStoreContext)\n\n// index.js\nimport { Navigation } from 'react-native-navigation';\nimport AsyncStorage from '@react-native-community/async-storage';\nimport { create } from 'mobx-persist';\nimport { counterStore } from './counter.store'; // import the counter store instance.\n\n// Create a store hydration function.\nasync function hydrateStores() {\n  const hydrate = create({ storage: AsyncStorage });\n  await hydrate('CounterStore', counterStore);\n}\n\nNavigation.events().registerAppLaunchedListener(() => {\n  hydrateStores().then(() => {\n    // ...register screens and start the app.\n  });\n});\n")))}m.isMDXComponent=!0},368:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=o.a.createContext({}),l=function(e){var t=o.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=l(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),b=l(n),m=r,d=b["".concat(i,".").concat(m)]||b[m]||p[m]||a;return n?o.a.createElement(d,c(c({ref:t},u),{},{components:n})):o.a.createElement(d,c({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var u=2;u<a;u++)i[u]=n[u];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},369:function(e,t,n){"use strict";function r(e){var t,n,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(o&&(o+=" "),o+=n);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}t.a=function(){for(var e,t,n=0,o="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(o&&(o+=" "),o+=t);return o}},370:function(e,t,n){"use strict";var r=n(0),o=Object(r.createContext)(void 0);t.a=o},371:function(e,t,n){"use strict";var r=n(0),o=n(370);t.a=function(){var e=Object(r.useContext)(o.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},372:function(e,t,n){"use strict";var r=n(0),o=n.n(r),a=n(371),i=n(369),c=n(47),s=n.n(c),u=37,l=39;t.a=function(e){var t=e.block,n=e.children,c=e.defaultValue,b=e.values,p=e.groupId,m=Object(a.a)(),d=m.tabGroupChoices,f=m.setTabGroupChoices,h=Object(r.useState)(c),v=h[0],x=h[1],O=Object(r.useState)(!1),g=O[0],y=O[1];if(null!=p){var j=d[p];null!=j&&j!==v&&b.some((function(e){return e.value===j}))&&x(j)}var C=function(e){x(e),null!=p&&f(p,e)},w=[],S=function(e){e.metaKey||e.altKey||e.ctrlKey||y(!0)},N=function(){y(!1)};return Object(r.useEffect)((function(){window.addEventListener("keydown",S),window.addEventListener("mousedown",N)}),[]),o.a.createElement("div",null,o.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(i.a)("tabs",{"tabs--block":t})},b.map((function(e){var t=e.value,n=e.label;return o.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":v===t,className:Object(i.a)("tabs__item",s.a.tabItem,{"tabs__item--active":v===t}),style:g?{}:{outline:"none"},key:t,ref:function(e){return w.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case l:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case u:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(w,e.target,e),S(e)},onFocus:function(){return C(t)},onClick:function(){C(t),y(!1)},onPointerDown:function(){return y(!1)}},n)}))),o.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},r.Children.toArray(n).filter((function(e){return e.props.value===v}))[0]))}},373:function(e,t,n){"use strict";var r=n(0),o=n.n(r);t.a=function(e){return o.a.createElement("div",null,e.children)}},374:function(e,t,n){"use strict";var r=n(0),o=n(20);t.a=function(){var e=Object(r.useContext)(o.a);if(null===e)throw new Error("Docusaurus context not provided");return e}},375:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return i}));var r=n(374),o=n(376);function a(){var e=Object(r.a)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,a=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var a=void 0===r?{}:r,i=a.forcePrependBaseUrl,c=void 0!==i&&i,s=a.absolute,u=void 0!==s&&s;if(!n)return n;if(n.startsWith("#"))return n;if(Object(o.b)(n))return n;if(c)return t+n;var l=!n.startsWith(t)?t+n.replace(/^\//,""):n;return u?e+l:l}(a,n,e,t)}}}function i(e,t){return void 0===t&&(t={}),(0,a().withBaseUrl)(e,t)}},376:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!r(e)}n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return o}))}}]);
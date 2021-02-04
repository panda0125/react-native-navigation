(window.webpackJsonp=window.webpackJsonp||[]).push([[257],{315:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return b}));var a=n(2),r=n(6),i=(n(0),n(368)),o={id:"stack-backButton",title:"The Back button",sidebar_label:"Back button"},c={unversionedId:"docs/stack-backButton",id:"version-6.12.2/docs/stack-backButton",isDocsHomePage:!1,title:"The Back button",description:"The back button is added automatically when two or more screens are pushed into the stack.",source:"@site/versioned_docs/version-6.12.2/docs/stack-backButton.mdx",slug:"/docs/stack-backButton",permalink:"/react-native-navigation/6.12.2/docs/stack-backButton",editUrl:"https://github.com/wix/react-native-navigation/edit/master/website/versioned_docs/version-6.12.2/docs/stack-backButton.mdx",version:"6.12.2",sidebar_label:"Back button"},l=[{value:"Styling the back button",id:"styling-the-back-button",children:[]},{value:"Controling visibility",id:"controling-visibility",children:[]},{value:"Changing visbility programmatically",id:"changing-visbility-programmatically",children:[]},{value:"Handling the back button",id:"handling-the-back-button",children:[]}],s={rightToc:l};function b(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"The back button is added automatically when two or more screens are pushed into the stack."),Object(i.b)("h2",{id:"styling-the-back-button"},"Styling the back button"),Object(i.b)("p",null,"The back button's style can be customised by declaring a backButton options object. This configuration can be part of a screen's static options, or default options."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},"backButton: {\n  color: 'red',\n  icon: require('../../img/customChevron.png')\n}\n")),Object(i.b)("h2",{id:"controling-visibility"},"Controling visibility"),Object(i.b)("p",null,"The back buttons visbility can be controlled with the visible property."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},"backButton: {\n  visible: false\n}\n")),Object(i.b)("h2",{id:"changing-visbility-programmatically"},"Changing visbility programmatically"),Object(i.b)("p",null,"Back button visibility can be changed dynamically using the mergeOptions command. When using a screen's componentId, the change will affect only that specific screen. But when using the stack's id, the change will affect all screens pushed into the stack."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},"Navigation.mergeOptions(this.props.componentId, {\n  backButton: {\n    visible: false\n  }\n});\n")),Object(i.b)("h2",{id:"handling-the-back-button"},"Handling the back button"),Object(i.b)("p",null,"Handling the back button is not possible. However, you can set a left button with a chevron and handle it like you'd handle any other button and calling ",Object(i.b)("inlineCode",{parentName:"p"},"Navigation.pop")," when desired."))}b.isMDXComponent=!0},368:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return h}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),b=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=b(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=b(n),d=a,h=u["".concat(o,".").concat(d)]||u[d]||p[d]||i;return n?r.a.createElement(h,c(c({ref:t},s),{},{components:n})):r.a.createElement(h,c({ref:t},s))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var s=2;s<i;s++)o[s]=n[s];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);
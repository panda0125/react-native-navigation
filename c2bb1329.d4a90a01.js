(window.webpackJsonp=window.webpackJsonp||[]).push([[240],{298:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return c})),t.d(n,"rightToc",(function(){return l})),t.d(n,"default",(function(){return p}));var r=t(2),a=t(6),o=(t(0),t(368)),i={id:"externalComponent",title:"External Component",sidebar_label:"External Component"},c={unversionedId:"docs/externalComponent",id:"version-6.12.2/docs/externalComponent",isDocsHomePage:!1,title:"External Component",description:"The ExternalComponent layout allows you to display any native view as a screen. To use the External Component we'll need to register it with a string name. This name is then used when declaring layouts in JS.",source:"@site/versioned_docs/version-6.12.2/docs/docs-externalComponent.mdx",slug:"/docs/externalComponent",permalink:"/react-native-navigation/6.12.2/docs/externalComponent",editUrl:"https://github.com/wix/react-native-navigation/edit/master/website/versioned_docs/version-6.12.2/docs/docs-externalComponent.mdx",version:"6.12.2",sidebar_label:"External Component",sidebar:"version-6.12.2/docs",previous:{title:"Side Menu",permalink:"/react-native-navigation/6.12.2/docs/sideMenu"},next:{title:"Root",permalink:"/react-native-navigation/6.12.2/docs/root"}},l=[{value:"Android",id:"android",children:[{value:"Implementing the native component",id:"implementing-the-native-component",children:[]},{value:"Registering the component",id:"registering-the-component",children:[]}]},{value:"iOS",id:"ios",children:[{value:"ViewController registration",id:"viewcontroller-registration",children:[]}]},{value:"Using the component from JS",id:"using-the-component-from-js",children:[]}],s={rightToc:l};function p(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The ExternalComponent layout allows you to display any native view as a screen. To use the External Component we'll need to register it with a string name. This name is then used when declaring layouts in JS."),Object(o.b)("h2",{id:"android"},"Android"),Object(o.b)("h3",{id:"implementing-the-native-component"},"Implementing the native component"),Object(o.b)("p",null,"When it comes to implementing an external component on Android, you have two choices. We recommend you use a base class extending ",Object(o.b)("inlineCode",{parentName:"p"},"View"),". If you're required to use Fragments, you'll find an basic example below."),Object(o.b)("h4",{id:"viewgroup"},"ViewGroup"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-java"},"public class ViewGroupComponent implements ExternalComponent {\n    private final FrameLayout content;\n\n    ViewGroupComponent(FragmentActivity activity, JSONObject props) {\n        content = new FrameLayout(activity);\n    }\n\n    @Override\n    public View asView() {\n        return content;\n    }\n}\n")),Object(o.b)("h4",{id:"fragment"},"Fragment"),Object(o.b)("p",null,"Using a Fragment as an external component is done by attaching the Fragment to a FrameLayout, and returning the FrameLayout from the ",Object(o.b)("inlineCode",{parentName:"p"},"asView()")," method of the ExternalComponent."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-java"},'public class FragmentComponent implements ExternalComponent {\n    private final FrameLayout content;\n\n    FragmentComponent(FragmentActivity activity, JSONObject props) {\n        // Create the FrameLayout to which we\'ll attach our Fragment to\n        content = new FrameLayout(activity);\n        content.setId(R.id.fragment_screen_content);\n        // Attach the Fragment to the FrameLayout\n        activity.getSupportFragmentManager()\n                .beginTransaction()\n                .add(R.id.fragment_screen_content, createFragment(props))\n                .commitAllowingStateLoss();\n    }\n\n    private FragmentScreen createFragment(JSONObject props) {\n        FragmentScreen fragment = new FragmentScreen();\n        // Pass the props sent from Js in a bundle\n        Bundle args = new Bundle();\n        args.putString("text", props.optString("text", ""));\n        fragment.setArguments(args);\n        return fragment;\n    }\n\n    @Override\n    public View asView() {\n        return content;\n    }\n}\n')),Object(o.b)("h3",{id:"registering-the-component"},"Registering the component"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-java"},'public class MainApplication extends NavigationApplication {\n  @Override\n    public void onCreate() {\n        super.onCreate();\n        registerExternalComponent("MyExternalComponent", new FragmentCreator());\n    }\n}\n')),Object(o.b)("h2",{id:"ios"},"iOS"),Object(o.b)("h3",{id:"viewcontroller-registration"},"ViewController registration"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-objectivec"},'[ReactNativeNavigation registerExternalComponent:@"MyExternalComponent" callback:^UIViewController *(NSDictionary *props, RCTBridge *bridge) {\n    return [[ExternalViewController alloc] initWithProps:props];\n}];\n\n')),Object(o.b)("h2",{id:"using-the-component-from-js"},"Using the component from JS"),Object(o.b)("p",null,"Once you've registered the external component in native, you can use it in your layout declarations.\nFor example, to show an external component modally:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"Navigation.showModal({\n  externalComponent: {\n    name: 'MyExternalComponent',\n    passProps: {\n      text: \"Text from JS\"\n    }\n  }\n});\n")),Object(o.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"props passed to external components are sent over the bridge and therefore must be serializable."))))}p.isMDXComponent=!0},368:function(e,n,t){"use strict";t.d(n,"a",(function(){return m})),t.d(n,"b",(function(){return b}));var r=t(0),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=a.a.createContext({}),p=function(e){var n=a.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},m=function(e){var n=p(e.components);return a.a.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},d=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=p(t),d=r,b=m["".concat(i,".").concat(d)]||m[d]||u[d]||o;return t?a.a.createElement(b,c(c({ref:n},s),{},{components:t})):a.a.createElement(b,c({ref:n},s))}));function b(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=d;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<o;s++)i[s]=t[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[129],{187:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return p})),n.d(t,"rightToc",(function(){return b})),n.d(t,"default",(function(){return u}));var a=n(2),i=n(6),o=(n(0),n(368)),r=n(372),s=n(373),l=n(375),c={id:"style-animations",title:"Animations",sidebar_label:"Animations"},p={unversionedId:"docs/style-animations",id:"docs/style-animations",isDocsHomePage:!1,title:"Animations",description:"Various UI elements can be animated by declaring animation options.",source:"@site/docs/docs/style-animations.mdx",slug:"/docs/style-animations",permalink:"/react-native-navigation/next/docs/style-animations",editUrl:"https://github.com/wix/react-native-navigation/edit/master/website/docs/docs/style-animations.mdx",version:"current",sidebar_label:"Animations",sidebar:"docs",previous:{title:"Orientation",permalink:"/react-native-navigation/next/docs/style-orientation"},next:{title:"Changing fonts",permalink:"/react-native-navigation/next/docs/style-fonts"}},b=[{value:"Layout animations",id:"layout-animations",children:[{value:"Stack animations",id:"stack-animations",children:[]},{value:"Modal animations",id:"modal-animations",children:[]}]},{value:"Shared element transitions",id:"shared-element-transitions",children:[{value:"Transition breakdown",id:"transition-breakdown",children:[]},{value:"Implementing shared element transitions",id:"implementing-shared-element-transitions",children:[]}]},{value:"Element Transitions",id:"element-transitions",children:[{value:"Recreating",id:"recreating",children:[]}]},{value:"Peek and Pop (iOS 11.4+)",id:"peek-and-pop-ios-114",children:[]}],m={rightToc:b};function u(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},m,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Various UI elements can be animated by declaring animation options.\nYou can change the default animations for various commands, like push and pop, and even animate elements in\nyour screens during screen transitions."),Object(o.b)("h4",{id:"animation-properties"},"Animation properties"),Object(o.b)("p",null,"The following properties can be animated with our animation framework:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"x")," - Translate the view to a coordinate along the x axis."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"y")," - Translate the view to a coordinate along the y axis."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"translationX")," - Translate the view along the x axis relative to its current x position."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"translationY")," - Translate the view along the y axis relative to its current y position."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"alpha")," - Apply alpha animation to the view. A value of 0 means the view is not visible, 1 means it's visible."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"scaleX")," - Scale the view on the x axis. A value of 1 means that no scaling is applied."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"scaleY")," - Scale the view on the y axis. A value of 1 means that no scaling is applied."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"rotationX")," - Applies rotation around the x axis (in degrees, passed as a float)."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"rotationY")," - Applies rotation around the y axis (in degrees, passed as a float)."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"rotation")," - Rotates the view on all axis. Positive values result in clockwise rotation.")),Object(o.b)("h2",{id:"layout-animations"},"Layout animations"),Object(o.b)("h3",{id:"stack-animations"},"Stack animations"),Object(o.b)("p",null,"When animating screens in and out of a stack, there are three elements you can work with:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("strong",{parentName:"li"},"content")," - screen being pushed or popped"),Object(o.b)("li",{parentName:"ol"},Object(o.b)("strong",{parentName:"li"},"topBar")," - stack's TopBar"),Object(o.b)("li",{parentName:"ol"},Object(o.b)("strong",{parentName:"li"},"bottomTabs")," - if stack is a child of a bottomTabs layout, we can control the ",Object(o.b)("inlineCode",{parentName:"li"},"hide")," and ",Object(o.b)("inlineCode",{parentName:"li"},"show")," animations of the bottomTabs.")),Object(o.b)("p",null,"The following example demonstrates how to replace the default push and pop animations with slide animations."),Object(o.b)(r.a,{defaultValue:"push",values:[{label:"Push",value:"push"},{label:"Pop",value:"pop"}],mdxType:"Tabs"},Object(o.b)(s.a,{value:"push",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"options: {\n  animations: {\n    push: {\n      content: {\n        translationX: {\n          from: require('react-native').Dimensions.get('window').width,\n          to: 0,\n          duration: 300\n        }\n      }\n    }\n  }\n}\n"))),Object(o.b)(s.a,{value:"pop",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"options: {\n  animations: {\n    pop: {\n      content: {\n        translationX: {\n          from: 0,\n          to: -require('react-native').Dimensions.get('window').width,\n          duration: 300\n        }\n      }\n    }\n  }\n}\n")))),Object(o.b)("h3",{id:"modal-animations"},"Modal animations"),Object(o.b)("p",null,"Modal animations are declared similarly to stack animations, only this time we animate the entire view and not only part of the UI (content)."),Object(o.b)(r.a,{defaultValue:"show",values:[{label:"Show",value:"show"},{label:"Dismiss",value:"dismiss"}],mdxType:"Tabs"},Object(o.b)(s.a,{value:"show",mdxType:"TabItem"},Object(o.b)("p",null,"The following example demonstrates how to show a modal with a fade-in animation."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"options: {\n  animations: {\n    showModal: {\n      alpha: {\n        from: 0,\n        to: 1,\n        duration: 300\n      }\n    }\n  }\n}\n"))),Object(o.b)(s.a,{value:"dismiss",mdxType:"TabItem"},Object(o.b)("p",null,"The following example demonstrates how to dismiss a modal with a fade-out animation."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"options: {\n  animations: {\n    dismissModal: {\n      alpha: {\n        from: 1,\n        to: 0,\n        duration: 300\n      }\n    }\n  }\n}\n")))),Object(o.b)("h2",{id:"shared-element-transitions"},"Shared element transitions"),Object(o.b)("p",null,"Shared element transitions allow us to provide visual continuity when navigating between destinations. This also focuses user attention on a particular significant element, which then also gives such user better context when transitioning to some other destination."),Object(o.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"At the moment, the transition is available for push and pop commands. We are working on expanding supported commands to show/dismiss modal and change BottomTabs."))),Object(o.b)("h3",{id:"transition-breakdown"},"Transition breakdown"),Object(o.b)("p",null,"Let's take a more in-depth look at the following example, which you can find in the playground app:"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("a",{parentName:"p",href:"https://github.com/wix/react-native-navigation/blob/master/playground/src/screens/sharedElementTransition/CocktailsListScreen.tsx"},"Source screen")," and the ",Object(o.b)("a",{parentName:"p",href:"https://github.com/wix/react-native-navigation/blob/master/playground/src/screens/sharedElementTransition/CocktailDetailsScreen.tsx"},"Destination screen"))),Object(o.b)("p",{align:"center"},Object(o.b)("img",{alt:"Shared Element Transition",src:Object(l.a)("img/sharedElement.gif")})),Object(o.b)("p",null,"Four elements are animated in this example. Let's list the elements involved in the transition and note which properties are being animated."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"image")," - the item image is animated to the next screen."),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"image scale (resizeMode)"),Object(o.b)("li",{parentName:"ul"},"position on screen"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"image background"),' - each item has a "shadow" view which transitions to the next screen and turns into a colorful header.'),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"scale"),Object(o.b)("li",{parentName:"ul"},"position on screen"),Object(o.b)("li",{parentName:"ul"},"color"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"title")," - the title of the item is animated to the next screen."),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"font size"),Object(o.b)("li",{parentName:"ul"},"font color"),Object(o.b)("li",{parentName:"ul"},"position on screen"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"Description")," - the description of the item in the destination screen."),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"fade-in"),Object(o.b)("li",{parentName:"ul"},"translation y")))),Object(o.b)("h3",{id:"implementing-shared-element-transitions"},"Implementing shared element transitions"),Object(o.b)("h4",{id:"step-1---set-a-nativeid-prop-to-elements-in-the-source-screen"},"Step 1 - set a nativeID prop to elements in the source screen"),Object(o.b)("p",null,"In order for RNN to be able to detect the corresponding native views of the elements,\neach element must include a unique ",Object(o.b)("inlineCode",{parentName:"p"},"nativeID")," prop."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx"},"<Image\n  source={item.image}\n  nativeID={`image${item.id}`}\n  style={styles.image}\n  resizeMode={'contain'}\n/>\n")),Object(o.b)("h4",{id:"step-2---set-a-nativeid-prop-to-elements-in-the-destination-screen"},"Step 2 - set a nativeID prop to elements in the destination screen"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx"},"<Image source={this.props.image} nativeID={`image${this.props.id}Dest`} style={styles.image} />\n")),Object(o.b)("h4",{id:"step-3---declare-the-shared-element-animation-when-pushing-the-screen"},"Step 3 - Declare the shared element animation when pushing the screen"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx"},"Navigation.push(this.props.componentId, {\n  component: {\n    name: Screens.CocktailDetailsScreen,\n    passProps: { ...item },\n    options: {\n      animations: {\n        push: {\n          sharedElementTransitions: [\n            {\n              fromId: `image${item.id}`,\n              toId: `image${item.id}Dest`,\n              interpolation: { type: 'linear' }\n            },\n          ],\n        },\n      },\n    },\n  },\n});\n")),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"interpolation")," property is an object which consists of a ",Object(o.b)("inlineCode",{parentName:"p"},"type")," property, and optional parameters to further configure the interpolation function. The following ",Object(o.b)("inlineCode",{parentName:"p"},"type"),"s are supported:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"'accelerate'"),": Begin building up speed until destination has been reached.",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"factor"),": The acceleration factor. Higher values look faster."))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"'decelerate'"),": Start at a high speed and slow down to settle.",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"factor"),": The acceleration factor. Higher values look slower."))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"'accelerateDecelerate'"),": Begin building up speed until half of the animation is complete, then begin slowing down to settle."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"'decelerateAccelerate'"),": Start at a high speed and slow down until half of the animation is complete, then speed up again to settle."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"'linear'"),": Linearly move towards the destination."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"'overshoot'"),": Begin building up speed and overshoot the destination, then fling back to settle.",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"tension"),": The tension of the overshoot animation defines how far the object can overshoot. ",Object(o.b)("em",{parentName:"li"},"Default: ",Object(o.b)("inlineCode",{parentName:"em"},"1"))))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"'spring'"),": Acts like an actual spring. Depending on the configuration, this interpolation can overshoot the destination multiple times, or be very stiff and smoothly ease towards the destination.",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"mass"),': The mass defines how "heavy" the object is. ',Object(o.b)("em",{parentName:"li"},"Default: ",Object(o.b)("inlineCode",{parentName:"em"},"3"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"damping"),": The damping property specifies how much the moving object is being slowed down. Higher values can lead to overdamping, lower values to underdamping. ",Object(o.b)("em",{parentName:"li"},"Default: ",Object(o.b)("inlineCode",{parentName:"em"},"500"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"stiffness"),": The stiffness property defines how stiff the animated object is. ",Object(o.b)("em",{parentName:"li"},"Default: ",Object(o.b)("inlineCode",{parentName:"em"},"1000")))))),Object(o.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"Since a Spring interpolation is not a time based animation, you have to manually tweak the configuration to match the duration of the animation, otherwise the remaining time of the Spring interpolation will get skipped."))),Object(o.b)("h2",{id:"element-transitions"},"Element Transitions"),Object(o.b)("p",null,"Element transitions also allow you to animate elements during shared element transitions."),Object(o.b)("h3",{id:"recreating"},"Recreating"),Object(o.b)("h4",{id:"step-1---set-a-nativeid-prop-to-the-element-youd-like-to-animate"},"Step 1 - Set a nativeID prop to the element you'd like to animate"),Object(o.b)("p",null,"An element can either be in the source or destination screen."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx"},'<Text nativeID="description" style={styles.description}>\n  {this.props.description}\n</Text>\n')),Object(o.b)("h4",{id:"step-2---declare-the-element-animation-when-pushing-the-screen"},"Step 2 - Declare the element animation when pushing the screen"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx"},"Navigation.push(this.props.componentId, {\n  component: {\n    name: Screens.CocktailDetailsScreen,\n    passProps: { ...item },\n    options: {\n      animations: {\n        push: {\n          elementTransitions: [\n            {\n              id: 'description',\n              alpha: {\n                from: 0, // We don't declare 'to' value as that is the element's current alpha value, here we're essentially animating from 0 to 1\n                duration: SHORT_DURATION,\n              },\n              translationY: {\n                from: 16, // Animate translationY from 16dp to 0dp\n                duration: SHORT_DURATION,\n              },\n            },\n          ],\n        },\n      },\n    },\n  },\n});\n")),Object(o.b)("h2",{id:"peek-and-pop-ios-114"},"Peek and Pop (iOS 11.4+)"),Object(o.b)("p",null,"react-native-navigation supports ",Object(o.b)("a",{parentName:"p",href:"https://developer.apple.com/library/content/documentation/UserExperience/Conceptual/Adopting3DTouchOniPhone/#//apple_ref/doc/uid/TP40016543-CH1-SW3"},"Peek and pop")," feature in iOS 11.4 and newer."),Object(o.b)("p",null,"This works by passing a ref to a component you want to transform into peek view. We have included a handy component to handle all the touches and ref for you:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx"},"const handlePress ({ reactTag }) => {\n  Navigation.push(this.props.componentId, {\n    component {\n      name: 'previewed.screen',\n      options: {\n        preview: {\n          reactTag,\n          height: 300,\n          width: 300,\n          commit: true,\n          actions: [{\n            title: \"Displayed Name\",\n            id: \"actionId\",\n            style: 'default', /* or 'selected', 'destructive'*/\n            actions: [/*define a submenu of actions with the same options*/]\n          }]\n        },\n      },\n    },\n  });\n};\n\nconst Button = (\n  <Navigation.TouchablePreview\n    touchableComponent={TouchableHighlight}\n    onPress={handlePress}\n    onPressIn={handlePress}\n  >\n    <Text>My button</Text>\n  </Navigation.TouchablePreview>\n);\n")),Object(o.b)("p",null,"All options except for reactTag are optional. Actions trigger the same event as ",Object(o.b)("a",{parentName:"p",href:"https://wix.github.io/react-native-navigation/#/docs/topBar-buttons?id=handling-button-press-events"},"navigation button presses"),". To react when a preview is committed, listen to the ",Object(o.b)("a",{parentName:"p",href:"https://wix.github.io/react-native-navigation/#/docs/events?id=previewcompleted-ios-114-only"},"previewCompleted")," event."))}u.isMDXComponent=!0},368:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var a=n(0),i=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=i.a.createContext({}),p=function(e){var t=i.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},b=function(e){var t=p(e.components);return i.a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},u=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,r=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),b=p(n),u=a,d=b["".concat(r,".").concat(u)]||b[u]||m[u]||o;return n?i.a.createElement(d,s(s({ref:t},c),{},{components:n})):i.a.createElement(d,s({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,r[1]=s;for(var c=2;c<o;c++)r[c]=n[c];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},369:function(e,t,n){"use strict";function a(e){var t,n,i="";if("string"==typeof e||"number"==typeof e)i+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(i&&(i+=" "),i+=n);else for(t in e)e[t]&&(i&&(i+=" "),i+=t);return i}t.a=function(){for(var e,t,n=0,i="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(i&&(i+=" "),i+=t);return i}},370:function(e,t,n){"use strict";var a=n(0),i=Object(a.createContext)(void 0);t.a=i},371:function(e,t,n){"use strict";var a=n(0),i=n(370);t.a=function(){var e=Object(a.useContext)(i.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},372:function(e,t,n){"use strict";var a=n(0),i=n.n(a),o=n(371),r=n(369),s=n(47),l=n.n(s),c=37,p=39;t.a=function(e){var t=e.block,n=e.children,s=e.defaultValue,b=e.values,m=e.groupId,u=Object(o.a)(),d=u.tabGroupChoices,h=u.setTabGroupChoices,O=Object(a.useState)(s),j=O[0],f=O[1],g=Object(a.useState)(!1),v=g[0],N=g[1];if(null!=m){var w=d[m];null!=w&&w!==j&&b.some((function(e){return e.value===w}))&&f(w)}var y=function(e){f(e),null!=m&&h(m,e)},x=[],T=function(e){e.metaKey||e.altKey||e.ctrlKey||N(!0)},k=function(){N(!1)};return Object(a.useEffect)((function(){window.addEventListener("keydown",T),window.addEventListener("mousedown",k)}),[]),i.a.createElement("div",null,i.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(r.a)("tabs",{"tabs--block":t})},b.map((function(e){var t=e.value,n=e.label;return i.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":j===t,className:Object(r.a)("tabs__item",l.a.tabItem,{"tabs__item--active":j===t}),style:v?{}:{outline:"none"},key:t,ref:function(e){return x.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case p:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case c:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(x,e.target,e),T(e)},onFocus:function(){return y(t)},onClick:function(){y(t),N(!1)},onPointerDown:function(){return N(!1)}},n)}))),i.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},a.Children.toArray(n).filter((function(e){return e.props.value===j}))[0]))}},373:function(e,t,n){"use strict";var a=n(0),i=n.n(a);t.a=function(e){return i.a.createElement("div",null,e.children)}},374:function(e,t,n){"use strict";var a=n(0),i=n(20);t.a=function(){var e=Object(a.useContext)(i.a);if(null===e)throw new Error("Docusaurus context not provided");return e}},375:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return r}));var a=n(374),i=n(376);function o(){var e=Object(a.a)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,o=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,a){var o=void 0===a?{}:a,r=o.forcePrependBaseUrl,s=void 0!==r&&r,l=o.absolute,c=void 0!==l&&l;if(!n)return n;if(n.startsWith("#"))return n;if(Object(i.b)(n))return n;if(s)return t+n;var p=!n.startsWith(t)?t+n.replace(/^\//,""):n;return c?e+p:p}(o,n,e,t)}}}function r(e,t){return void 0===t&&(t={}),(0,o().withBaseUrl)(e,t)}},376:function(e,t,n){"use strict";function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function i(e){return void 0!==e&&!a(e)}n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return i}))}}]);
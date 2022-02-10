(window.webpackJsonp=window.webpackJsonp||[]).push([[361],{435:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return l})),t.d(n,"toc",(function(){return s})),t.d(n,"default",(function(){return d}));var a=t(3),i=t(7),o=(t(0),t(470)),r=["components"],c={id:"installing",title:"Installation",sidebar_label:"Installation"},l={unversionedId:"docs/installing",id:"version-7.25.3/docs/installing",isDocsHomePage:!1,title:"Installation",description:"Requirements",source:"@site/versioned_docs/version-7.25.3/docs/docs-Installing.mdx",slug:"/docs/installing",permalink:"/react-native-navigation/docs/installing",editUrl:"https://github.com/wix/react-native-navigation/edit/master/website/versioned_docs/version-7.25.3/docs/docs-Installing.mdx",version:"7.25.3",sidebar_label:"Installation",sidebar:"version-7.25.3/docs",previous:{title:"Before you start",permalink:"/react-native-navigation/docs/before-you-start"},next:{title:"Playground app",permalink:"/react-native-navigation/docs/playground-app"}},s=[{value:"Requirements",id:"requirements",children:[]},{value:"npm or yarn",id:"npm-or-yarn",children:[]},{value:"Installing with <code>npx rnn-link</code>",id:"installing-with-npx-rnn-link",children:[{value:"CocoaPods",id:"cocoapods",children:[]},{value:"Update index.js file",id:"update-indexjs-file",children:[]},{value:"Finish",id:"finish",children:[]}]},{value:"Manual Installation",id:"manual-installation",children:[{value:"iOS",id:"ios",children:[]},{value:"Android",id:"android",children:[]},{value:"App root",id:"app-root",children:[]}]},{value:"Troubleshooting",id:"troubleshooting",children:[{value:"Build app with gradle command",id:"build-app-with-gradle-command",children:[]},{value:"Force the same support library version across all dependencies",id:"force-the-same-support-library-version-across-all-dependencies",children:[]}]}],p={toc:s};function d(e){var n=e.components,t=Object(i.a)(e,r);return Object(o.b)("wrapper",Object(a.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"requirements"},"Requirements"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"node >= 8"),Object(o.b)("li",{parentName:"ul"},"react-native >= 0.51")),Object(o.b)("h2",{id:"npm-or-yarn"},"npm or yarn"),Object(o.b)("p",null,"npm:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-sh"},"npm install --save react-native-navigation\n")),Object(o.b)("p",null,"yarn:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-sh"},"yarn add react-native-navigation\n")),Object(o.b)("h2",{id:"installing-with-npx-rnn-link"},"Installing with ",Object(o.b)("inlineCode",{parentName:"h2"},"npx rnn-link")),Object(o.b)("p",null,"If you're using RN 0.60 or higher, you can benefit from autolinking for some of the necessary installation steps. But unlike most other libraries, react-native-navigation requires you to make a few changes to native files."),Object(o.b)("p",null,"We've simplified the process through a set of scripts. So to make all the necessary changes automatically, in your project's root folder run:"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"npx rnn-link")),Object(o.b)("p",null,"Make sure to commit the changes introduced by the ",Object(o.b)("inlineCode",{parentName:"p"},"rnn-link")," script."),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"The automatic linking is optimized for new applications created via the ",Object(o.b)("inlineCode",{parentName:"p"},"react-native init")," command. If you are migrating from a version of react-native-navigation older than v5, it's recommended to check the steps manually after the script runs.")),Object(o.b)("p",null,"If one of the steps failed or you can't run (or are not comfortable with) the automatic scripts, you'll need to complete the relevant steps in the manual installation steps below, for both platforms."),Object(o.b)("h3",{id:"cocoapods"},"CocoaPods"),Object(o.b)("p",null,"After the the automatic scripts completed successfully, run pod install:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-sh"},"pod install --project-directory=ios\n")),Object(o.b)("h3",{id:"update-indexjs-file"},"Update index.js file"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"index.js")," is typically used as an entry point into the app. It's first parsed and executed by the JS engine, therefore we'll want to show our UI from there."),Object(o.b)("p",null,"The following diff demonstrates changes needed to be made to ",Object(o.b)("inlineCode",{parentName:"p"},"index.js"),", initialized by ",Object(o.b)("inlineCode",{parentName:"p"},"react-native init"),"."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-diff"},"+import { Navigation } from \"react-native-navigation\";\n-import {AppRegistry} from 'react-native';\nimport App from \"./App\";\n-import {name as appName} from './app.json';\n\n-AppRegistry.registerComponent(appName, () => App);\n+Navigation.registerComponent('com.myApp.WelcomeScreen', () => App);\n\n+Navigation.events().registerAppLaunchedListener(() => {\n+   Navigation.setRoot({\n+     root: {\n+       stack: {\n+         children: [\n+           {\n+             component: {\n+               name: 'com.myApp.WelcomeScreen'\n+             }\n+           }\n+         ]\n+       }\n+     }\n+  });\n+});\n")),Object(o.b)("h3",{id:"finish"},"Finish"),Object(o.b)("p",null,"If you followed the steps successfully up to this point, then rebuild your application and you are good to go:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-sh"},"react-native run-ios\nreact-native run-android\n")),Object(o.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"This is a good moment to build your application in both platforms, validate that everything is working properly and commit your changes. If you're coming from a fresh ",Object(o.b)("inlineCode",{parentName:"p"},"react-native init")," project, then you should be seeing the Welcome screen as usual, but under the hood your application is using react-native-navigation!"))),Object(o.b)("hr",null),Object(o.b)("h2",{id:"manual-installation"},"Manual Installation"),Object(o.b)("p",null,"If installation with ",Object(o.b)("inlineCode",{parentName:"p"},"npx rnn-link")," did not work, follow the manual installation steps below."),Object(o.b)("h3",{id:"ios"},"iOS"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Make sure your Xcode is updated. We recommend editing ",Object(o.b)("inlineCode",{parentName:"p"},".h")," and ",Object(o.b)("inlineCode",{parentName:"p"},".m")," files in Xcode as the IDE will usually point out common errors.")),Object(o.b)("h4",{id:"installation-with-cocoapods"},"Installation with CocoaPods"),Object(o.b)("p",null,"Projects generated using newer versions of react-native use CocoaPods by default. In that case it's easier to install react-native-navigation using CocoaPods."),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Update your ",Object(o.b)("inlineCode",{parentName:"li"},"Podfile"),":\n",Object(o.b)("strong",{parentName:"li"},"If you're upgrading to v5 from a previous RNN version"),", make sure to remove manual linking of RNN")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-diff"},"platform :ios, '9.0'\nrequire_relative '../node_modules/@react-native-community/cli-platform-ios/native_modules'\n\ntarget 'YourApp' do\n  # Pods for YourApp\n  pod 'React', :path => '../node_modules/react-native/'\n  pod 'React-Core', :path => '../node_modules/react-native/React'\n  pod 'React-DevSupport', :path => '../node_modules/react-native/React'\n  pod 'React-fishhook', :path => '../node_modules/react-native/Libraries/fishhook'\n  pod 'React-RCTActionSheet', :path => '../node_modules/react-native/Libraries/ActionSheetIOS'\n  pod 'React-RCTAnimation', :path => '../node_modules/react-native/Libraries/NativeAnimation'\n  pod 'React-RCTBlob', :path => '../node_modules/react-native/Libraries/Blob'\n  pod 'React-RCTImage', :path => '../node_modules/react-native/Libraries/Image'\n  pod 'React-RCTLinking', :path => '../node_modules/react-native/Libraries/LinkingIOS'\n  pod 'React-RCTNetwork', :path => '../node_modules/react-native/Libraries/Network'\n  pod 'React-RCTSettings', :path => '../node_modules/react-native/Libraries/Settings'\n  pod 'React-RCTText', :path => '../node_modules/react-native/Libraries/Text'\n  pod 'React-RCTVibration', :path => '../node_modules/react-native/Libraries/Vibration'\n  pod 'React-RCTWebSocket', :path => '../node_modules/react-native/Libraries/WebSocket'\n\n  pod 'React-cxxreact', :path => '../node_modules/react-native/ReactCommon/cxxreact'\n  pod 'React-jsi', :path => '../node_modules/react-native/ReactCommon/jsi'\n  pod 'React-jsiexecutor', :path => '../node_modules/react-native/ReactCommon/jsiexecutor'\n  pod 'React-jsinspector', :path => '../node_modules/react-native/ReactCommon/jsinspector'\n  pod 'yoga', :path => '../node_modules/react-native/ReactCommon/yoga'\n\n  pod 'DoubleConversion', :podspec => '../node_modules/react-native/third-party-podspecs/DoubleConversion.podspec'\n  pod 'glog', :podspec => '../node_modules/react-native/third-party-podspecs/glog.podspec'\n  pod 'Folly', :podspec => '../node_modules/react-native/third-party-podspecs/Folly.podspec'\n\n- pod 'ReactNativeNavigation', :podspec => '../node_modules/react-native-navigation/ReactNativeNavigation.podspec'\n\n  use_native_modules!\nend\n")),Object(o.b)("ol",{start:2},Object(o.b)("li",{parentName:"ol"},Object(o.b)("inlineCode",{parentName:"li"},"cd ios && pod install"))),Object(o.b)("h4",{id:"native-installation"},"Native Installation"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"If the React Native version in your project is above 0.60 and you are following the manual installation, skip to step 3.")),Object(o.b)("p",null,"If autolinking is not available in your project (RN version < 0.60), you can always try and install the hardcore way:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"In Xcode, in Project Navigator (left pane), right-click on the ",Object(o.b)("inlineCode",{parentName:"p"},"Libraries")," > ",Object(o.b)("inlineCode",{parentName:"p"},"Add files to [project name]"),". Add ",Object(o.b)("inlineCode",{parentName:"p"},"node_modules/react-native-navigation/lib/ios/ReactNativeNavigation.xcodeproj")," (",Object(o.b)("a",{parentName:"p",href:"https://facebook.github.io/react-native/docs/linking-libraries-ios.html#manual-linking"},"screenshots"),").")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"In Xcode, in Project Navigator (left pane), click on your project (top), then click on your ",Object(o.b)("em",{parentName:"p"},"target"),' row (on the "project and targets list", which is on the left column of the right pane) and select the ',Object(o.b)("inlineCode",{parentName:"p"},"Build Phases")," tab (right pane). In the ",Object(o.b)("inlineCode",{parentName:"p"},"Link Binary With Libraries")," section add ",Object(o.b)("inlineCode",{parentName:"p"},"libReactNativeNavigation.a")," (",Object(o.b)("a",{parentName:"p",href:"https://facebook.github.io/react-native/docs/linking-libraries-ios.html#step-2"},"screenshots"),")."))),Object(o.b)("p",null,"a. If you're seeing an error message in Xcode such as:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"'ReactNativeNavigation/ReactNativeNavigation.h' file not found.\n")),Object(o.b)("p",null,"You may also need to add a Header Search Path: (",Object(o.b)("a",{parentName:"p",href:"https://facebook.github.io/react-native/docs/linking-libraries-ios.html#step-3"},"screenshots"),")."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-objectivec"},"$(SRCROOT)/../node_modules/react-native-navigation/lib/ios\n")),Object(o.b)("ol",{start:3},Object(o.b)("li",{parentName:"ol"},"In Xcode, you will need to edit this file: ",Object(o.b)("inlineCode",{parentName:"li"},"AppDelegate.m"),". This function is the main entry point for your app:")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-objectivec"}," - (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions { ... }\n")),Object(o.b)("p",null,"Its content should look like this:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-objectivec"},'#import "AppDelegate.h"\n\n#import <React/RCTBundleURLProvider.h>\n#import <React/RCTRootView.h>\n#import <ReactNativeNavigation/ReactNativeNavigation.h>\n\n@implementation AppDelegate\n\n- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions\n{\n  [ReactNativeNavigation bootstrapWithDelegate:self launchOptions:launchOptions];\n\n  return YES;\n}\n\n- (NSURL *)sourceURLForBridge:(RCTBridge *)bridge\n{\n  #if DEBUG\n    return [[RCTBundleURLProvider sharedSettings] jsBundleURLForBundleRoot:@"index" fallbackResource:nil];\n  #else\n    return [[NSBundle mainBundle] URLForResource:@"main" withExtension:@"jsbundle"];\n  #endif\n}\n\n- (NSArray<id<RCTBridgeModule>> *)extraModulesForBridge:(RCTBridge *)bridge {\n  return [ReactNativeNavigation extraModulesForBridge:bridge];\n}\n\n@end\n')),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"a. If, in Xcode, you see the following error message in `AppDelegate.m` next to `#import \"RCTBundleURLProvider.h\"`:\n```\n! 'RCTBundleURLProvider.h' file not found\n```\nThis is because the `React` scheme is missing from your project. You can verify this by opening the `Product` menu and the `Scheme` submenu.\nTo make the `React` scheme available to your project, run `npm install -g react-native-git-upgrade` followed by `react-native-git-upgrade`. Once this is done, you can click back to the menu in Xcode: `Product -> Scheme -> Manage Schemes`, then click '+' to add a new scheme. From the `Target` menu, select \"React\", and click the checkbox to make the scheme `shared`. This should make the error disappear.\n")),Object(o.b)("h3",{id:"android"},"Android"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Make sure your Android Studio installation is up to date. We recommend editing ",Object(o.b)("inlineCode",{parentName:"p"},"gradle")," and ",Object(o.b)("inlineCode",{parentName:"p"},"java")," files in Android Studio as the IDE will suggest fixes and point out errors, this way you avoid most common pitfalls.")),Object(o.b)("h4",{id:"1-update-androidbuildgradle"},"1 Update ",Object(o.b)("inlineCode",{parentName:"h4"},"android/build.gradle"),":"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-diff"},"buildscript {\n  ext {\n-   minSdkVersion = 16\n+   minSdkVersion = 21 // Or higher\n    compileSdkVersion = 30\n    targetSdkVersion = 30\n-   supportLibVersion = \"26.1.0\" // use AndroidX when possible\n+   kotlinVersion = \"1.5.31\" // Or any version above 1.4.x\n+   RNNKotlinVersion = kotlinVersion\n  }\n  repositories {\n        google()\n        jcenter()\n+        mavenLocal()\n+        mavenCentral()\n  }\n  dependencies {\n+        classpath(\"org.jetbrains.kotlin:kotlin-gradle-plugin:$kotlinVersion\")\n+        classpath 'com.android.tools.build:gradle:4.0.1' // Or higher\n-        classpath 'com.android.tools.build:gradle:2.2.3'\n  }\n}\n\nallprojects {\n  repositories {\n+   google()\n    mavenLocal()\n-   jcenter()\n+   mavenCentral()\n    maven {\n      // All of React Native (JS, Obj-C sources, Android binaries) is installed from npm\n      url \"$rootDir/../node_modules/react-native/android\"\n    }\n-        maven {\n-            url 'https://maven.google.com/'\n-            name 'Google'\n-        }\n+   maven { url 'https://jitpack.io' }\n  }\n}\n")),Object(o.b)("h4",{id:"2-update-mainactivityjava"},"2 Update ",Object(o.b)("inlineCode",{parentName:"h4"},"MainActivity.java")),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"MainActivity.java")," should extend ",Object(o.b)("inlineCode",{parentName:"p"},"com.reactnativenavigation.NavigationActivity")," instead of ",Object(o.b)("inlineCode",{parentName:"p"},"ReactActivity"),"."),Object(o.b)("p",null,"This file is located in ",Object(o.b)("inlineCode",{parentName:"p"},"android/app/src/main/java/com/<yourproject>/MainActivity.java"),"."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-diff"},'-import com.facebook.react.ReactActivity;\n+import com.reactnativenavigation.NavigationActivity;\n\n-public class MainActivity extends ReactActivity {\n+public class MainActivity extends NavigationActivity {\n-    @Override\n-    protected String getMainComponentName() {\n-        return "yourproject";\n-    }\n}\n')),Object(o.b)("p",null,"If you have any ",Object(o.b)("strong",{parentName:"p"},"react-native")," related methods, you can safely delete them."),Object(o.b)("h4",{id:"3-update-mainapplicationjava"},"3 Update ",Object(o.b)("inlineCode",{parentName:"h4"},"MainApplication.java")),Object(o.b)("p",null,"This file is located in ",Object(o.b)("inlineCode",{parentName:"p"},"android/app/src/main/java/com/<yourproject>/MainApplication.java"),"."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-diff"},'...\nimport android.app.Application;\n\nimport com.facebook.react.ReactApplication;\nimport com.facebook.react.ReactNativeHost;\nimport com.facebook.react.ReactPackage;\nimport com.facebook.react.shell.MainReactPackage;\nimport com.facebook.soloader.SoLoader;\n\n+import com.reactnativenavigation.NavigationApplication;\n+import com.reactnativenavigation.react.NavigationReactNativeHost;\n\n-public class MainApplication extends Application implements ReactApplication {\n+public class MainApplication extends NavigationApplication {\n\nprivate final ReactNativeHost mReactNativeHost =\n-      new ReactNativeHost(this) {\n+      new NavigationReactNativeHost(this) {\n        @Override\n        public boolean getUseDeveloperSupport() {\n          return BuildConfig.DEBUG;\n        }\n\n        @Override\n        protected List<ReactPackage> getPackages() {\n          @SuppressWarnings("UnnecessaryLocalVariable")\n          List<ReactPackage> packages = new PackageList(this).getPackages();\n          // Packages that cannot be autolinked yet can be added manually here, for example:\n          // packages.add(new MyReactNativePackage());\n          return packages;\n        }\n\n        @Override\n        protected String getJSMainModuleName() {\n          return "index";\n        }\n      };\n\n  @Override\n  public ReactNativeHost getReactNativeHost() {\n    return mReactNativeHost;\n  }\n\n  @Override\n  public void onCreate() {\n    super.onCreate();\n-    SoLoader.init(this, /* native exopackage */ false);\n    initializeFlipper(this, getReactNativeHost().getReactInstanceManager());\n  }\n}\n')),Object(o.b)("h3",{id:"app-root"},"App root"),Object(o.b)("p",null,"Now that you're done, don't forget to update the ",Object(o.b)("inlineCode",{parentName:"p"},"index.js")," file, as ",Object(o.b)("a",{parentName:"p",href:"#update-indexjs-file"},"shown above"),"."),Object(o.b)("h2",{id:"troubleshooting"},"Troubleshooting"),Object(o.b)("h3",{id:"build-app-with-gradle-command"},"Build app with gradle command"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"prefered solution")," - The RNN flavor you would like to build is specified in ",Object(o.b)("inlineCode",{parentName:"p"},"app/build.gradle"),". Therefore in order to compile only that flavor, instead of building your entire project using ",Object(o.b)("inlineCode",{parentName:"p"},"./gradlew assembleDebug"),", you should instruct gradle to build the app module: ",Object(o.b)("inlineCode",{parentName:"p"},"./gradlew app:assembleDebug"),". The easiest way is to add a package.json command to build and install your debug Android APK ."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},'"scripts": {\n  ...\n  "android": "cd ./android && ./gradlew app:assembleDebug && ./gradlew installDebug"\n}\n')),Object(o.b)("p",null,"Now run ",Object(o.b)("inlineCode",{parentName:"p"},"npm run android")," to build your application"),Object(o.b)("h3",{id:"force-the-same-support-library-version-across-all-dependencies"},"Force the same support library version across all dependencies"),Object(o.b)("p",null,"Some of your dependencies might require a different version of one of Google's support library packages. This results in compilation errors similar to this:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"FAILURE: Build failed with an exception.\n\n* What went wrong:\nExecution failed for task ':app:preDebugBuild'.\n> Android dependency 'com.android.support:design' has different version for the compile (25.4.0) and runtime (26.1.0) classpath. You should manually set the same version via DependencyResolution\n")),Object(o.b)("p",null,"To resolve these conflicts, add the following to your ",Object(o.b)("inlineCode",{parentName:"p"},"app/build.gradle"),":"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-groovy"},"android {\n    ...\n}\n\nconfigurations.all {\n    resolutionStrategy.eachDependency { DependencyResolveDetails details ->\n        def requested = details.requested\n        if (requested.group == 'com.android.support' && requested.name != 'multidex') {\n            details.useVersion \"${rootProject.ext.supportLibVersion}\"\n        }\n    }\n}\n\ndependencies {\n    ...\n    implementation 'com.android.support:design:25.4.0'\n    implementation \"com.android.support:appcompat-v7:${rootProject.ext.supportLibVersion}\"\n}\n\n")))}d.isMDXComponent=!0},470:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return m}));var a=t(0),i=t.n(a);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=i.a.createContext({}),p=function(e){var n=i.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},d=function(e){var n=p(e.components);return i.a.createElement(s.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},u=i.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,r=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=p(t),u=a,m=d["".concat(r,".").concat(u)]||d[u]||b[u]||o;return t?i.a.createElement(m,c(c({ref:n},s),{},{components:t})):i.a.createElement(m,c({ref:n},s))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,r=new Array(o);r[0]=u;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,r[1]=c;for(var s=2;s<o;s++)r[s]=t[s];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"}}]);
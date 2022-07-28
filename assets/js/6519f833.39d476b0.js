"use strict";(self.webpackChunkherbjs_website=self.webpackChunkherbjs_website||[]).push([[3191],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=l(n),g=a,h=d["".concat(c,".").concat(g)]||d[g]||u[g]||s;return n?r.createElement(h,i(i({ref:t},p),{},{components:n})):r.createElement(h,i({ref:t},p))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,i=new Array(s);i[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var l=2;l<s;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},89338:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var r=n(87462),a=(n(67294),n(3905));const s={id:"gettingStarted",title:"Getting Started with Specs",sidebar_label:"Getting Started",slug:"/specs/getting-started"},i=void 0,o={unversionedId:"specs/gettingStarted",id:"specs/gettingStarted",title:"Getting Started with Specs",description:"What's a Spec?",source:"@site/docs/specs/getting-started.md",sourceDirName:"specs",slug:"/specs/getting-started",permalink:"/docs/specs/getting-started",draft:!1,editUrl:"https://github.com/herbsjs/herbsjs.github.io/blob/master/docs/specs/getting-started.md",tags:[],version:"current",frontMatter:{id:"gettingStarted",title:"Getting Started with Specs",sidebar_label:"Getting Started",slug:"/specs/getting-started"},sidebar:"sidebar",previous:{title:"Validations",permalink:"/docs/entity/validation"},next:{title:"Features",permalink:"/docs/specs/features"}},c={},l=[{value:"What&#39;s a Spec?",id:"whats-a-spec",level:2},{value:"Installing",id:"installing",level:2},{value:"Using",id:"using",level:2}],p={toc:l};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"whats-a-spec"},"What's a Spec?"),(0,a.kt)("p",null,"A use case describes WHAT an application does, but it does not capture the intentions (expected behavior) that led to the creation of that use case, in other words, WHY this use case exists."),(0,a.kt)("p",null,'For instance, a scenario for an application that involves payment would be "When paying the full amount, the discount applies" and the use case to support it would be "Pay for a Product". '),(0,a.kt)("p",null,"So, Specs capture the usage intent of an application through its scenarios. "),(0,a.kt)("p",null,"In doing that it also ensures that the scenario will exercise the application with known inputs and validate the expected outputs."),(0,a.kt)("h2",{id:"installing"},"Installing"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ npm install @herbsjs/herbs\n")),(0,a.kt)("h2",{id:"using"},"Using"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"const { spec, scenario, given, check, samples } = require('@herbsjs/herbs').specs\n\nconst taskCountSpec = spec({\n    'Change count for the task': scenario({\n        'Given a valid task': given({ task: 'do it', count: 0 }),\n        'When increase count': when((ctx) => (ctx.count++)),\n        'Must have a increased count': check((ctx) => { assert.ok(ctx.count === 1) }),\n    }),\n})\n")))}u.isMDXComponent=!0}}]);
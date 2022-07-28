"use strict";(self.webpackChunkherbjs_website=self.webpackChunkherbjs_website||[]).push([[5304],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>f});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=c(t),f=a,m=d["".concat(l,".").concat(f)]||d[f]||u[f]||s;return t?r.createElement(m,i(i({ref:n},p),{},{components:t})):r.createElement(m,i({ref:n},p))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var s=t.length,i=new Array(s);i[0]=d;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var c=2;c<s;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},79552:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var r=t(87462),a=(t(67294),t(3905));const s={},i=void 0,o={unversionedId:"tutorial/final-step",id:"tutorial/final-step",title:"final-step",description:"Folder Structure",source:"@site/docs/tutorial/final-step.md",sourceDirName:"tutorial",slug:"/tutorial/final-step",permalink:"/docs/tutorial/final-step",draft:!1,editUrl:"https://github.com/herbsjs/herbsjs.github.io/blob/master/docs/tutorial/final-step.md",tags:[],version:"current",frontMatter:{}},l={},c=[{value:"Folder Structure",id:"folder-structure",level:4}],p={toc:c};function u(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h4",{id:"folder-structure"},"Folder Structure"),(0,a.kt)("p",null,"The folder structure generated by the CLI is as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"\u251c\u2500\u2500 node_modules\n\u251c\u2500\u2500 package-lock.json\n\u251c\u2500\u2500 package.json\n\u251c\u2500\u2500 knexFile.js\n\u2514\u2500\u2500 src\n    \u251c\u2500\u2500 index.js\n    \u251c\u2500\u2500 domain\n    \u2502   \u251c\u2500\u2500 entities\n    \u2502   \u2514\u2500\u2500 herbarium.js \n    \u2514\u2500\u2500 infra\n        \u251c\u2500\u2500 api\n        \u2502   \u251c\u2500\u2500 graphql\n        \u2502   \u2502   \u251c\u2500\u2500 index.js\n        \u2502   \u2502   \u251c\u2500\u2500 queries.js\n        \u2502   \u2502   \u251c\u2500\u2500 mutations.js\n        \u2502   \u2502   \u2514\u2500\u2500 types.js\n        \u2502   \u2514\u2500\u2500 server.js      \n        \u251c\u2500\u2500 config\n        \u2502   \u251c\u2500\u2500 api.js\n        \u2502   \u251c\u2500\u2500 index.js\n        \u2502   \u2514\u2500\u2500 postgres.js\n        \u251c\u2500\u2500 data\n        \u2502   \u251c\u2500\u2500 database\n        \u2502   \u2502   \u2514\u2500\u2500 connection.js\n        \u2502   \u2514\u2500\u2500 repositories\n        \u2514\u2500\u2500 index.js\n        \n")),(0,a.kt)("p",null,"After creating our entities, setup the database and set databases credentials in configuration files. We will run a special ",(0,a.kt)("inlineCode",{parentName:"p"},"herbs-cli")," command thats will generate migrations files in ",(0,a.kt)("inlineCode",{parentName:"p"},"src/infra/data/database/migrations"),", repositories files in ",(0,a.kt)("inlineCode",{parentName:"p"},"src/infra/data/database/repositories"),"."),(0,a.kt)("p",null,"Let's run in terminal inside our project root:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"herbs update\n")),(0,a.kt)("p",null,"In this moment some magic happens \ud83c\udf89!!\nNow we can see our project structure folder it should be like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"\u251c\u2500\u2500 node_modules\n\u251c\u2500\u2500 package-lock.json\n\u251c\u2500\u2500 package.json\n\u251c\u2500\u2500 knexFile.js\n\u2514\u2500\u2500 src\n    \u251c\u2500\u2500 index.js\n    \u251c\u2500\u2500 domain\n    \u2502   \u251c\u2500\u2500 entities\n    \u2502   \u2502   \u251c\u2500\u2500 Item.js\n    \u2502   \u2502   \u2514\u2500\u2500 List.js\n    \u2502   \u251c\u2500\u2500 usecases\n    \u2502   \u2502   \u251c\u2500\u2500 item\n    \u2502   \u2502   \u2502    \u2514\u2500\u2500 ...\n    \u2502   \u2502   \u2514\u2500\u2500 list\n    \u2502   \u2502        \u2514\u2500\u2500 ...\n    \u2502   \u2514\u2500\u2500 herbarium.js \n    \u2514\u2500\u2500 infra\n        \u251c\u2500\u2500 api\n        \u2502   \u251c\u2500\u2500 graphql\n        \u2502   \u2502   \u251c\u2500\u2500 index.js\n        \u2502   \u2502   \u251c\u2500\u2500 queries.js\n        \u2502   \u2502   \u251c\u2500\u2500 mutations.js\n        \u2502   \u2502   \u2514\u2500\u2500 types.js\n        \u2502   \u2514\u2500\u2500 server.js      \n        \u251c\u2500\u2500 config\n        \u2502   \u251c\u2500\u2500 api.js\n        \u2502   \u251c\u2500\u2500 index.js\n        \u2502   \u2514\u2500\u2500 postgres.js\n        \u251c\u2500\u2500 data\n        \u2502   \u2514\u2500\u2500 database\n        \u2502       \u251c\u2500\u2500 migrations\n        \u2502       \u2502   \u2514\u2500\u2500 ...\n        \u2502       \u251c\u2500\u2500 repositories\n        \u2502       \u2502   \u2514\u2500\u2500 ...\n        \u2502       \u2514\u2500\u2500 connection.js\n        \u2514\u2500\u2500 index.js\n        \n")))}u.isMDXComponent=!0}}]);
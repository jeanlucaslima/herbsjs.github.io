"use strict";(self.webpackChunkherbjs=self.webpackChunkherbjs||[]).push([[696],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return h}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(n),h=a,m=d["".concat(l,".").concat(h)]||d[h]||p[h]||o;return n?r.createElement(m,i(i({ref:t},c),{},{components:n})):r.createElement(m,i({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},51508:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return c},default:function(){return d}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],s={id:"new-project",title:"1. Creating a New Herbs Project",sidebar_label:"1. New Project",slug:"/tutorial/new-project"},l=void 0,u={unversionedId:"tutorial/new-project",id:"tutorial/new-project",isDocsHomePage:!1,title:"1. Creating a New Herbs Project",description:"Introduction to Herbs",source:"@site/docs/tutorial/new-project.md",sourceDirName:"tutorial",slug:"/tutorial/new-project",permalink:"/docs/tutorial/new-project",editUrl:"https://github.com/herbsjs/herbsjs.github.io/docs/tutorial/new-project.md",tags:[],version:"current",frontMatter:{id:"new-project",title:"1. Creating a New Herbs Project",sidebar_label:"1. New Project",slug:"/tutorial/new-project"},sidebar:"sidebar",previous:{title:"How to contribute",permalink:"/docs/introduction/contributing"},next:{title:"2. Creating Entities",permalink:"/docs/tutorial/create-entity"}},c=[{value:"Introduction to Herbs",id:"introduction-to-herbs",children:[]},{value:"What to Expect",id:"what-to-expect",children:[]},{value:"Requirements",id:"requirements",children:[]},{value:"Project Setup",id:"project-setup",children:[{value:"With herbs-cli",id:"with-herbs-cli",children:[]},{value:"Manually",id:"manually",children:[]}]}],p={toc:c};function d(e){var t=e.components,s=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"introduction-to-herbs"},"Introduction to Herbs"),(0,o.kt)("p",null,"Herbs helps you to build backend applications faster and given more value for your domain and business logic. You can found more about in ",(0,o.kt)("a",{parentName:"p",href:"/docs/introduction/whats-herbs"},"What's Herbs?")),(0,o.kt)("p",null,"If you don't want to see a step-by-step tutorial but an application running with herbs, you can visit our ",(0,o.kt)("a",{parentName:"p",href:"/docs"},"Getting Started")," section."),(0,o.kt)("p",null,"To help in the setup process, Herbs has the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/herbsjs/herbs-cli"},(0,o.kt)("inlineCode",{parentName:"a"},"herbs-cli"))," which start up a new project scaffolding."),(0,o.kt)("p",null,"In this tutorial we are going to walk through all the features from Herbs, building an User application."),(0,o.kt)("h2",{id:"what-to-expect"},"What to Expect"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"You will learn Herbs architectural concepts"),(0,o.kt)("li",{parentName:"ul"},"2 entities"),(0,o.kt)("li",{parentName:"ul"},"3 use cases"),(0,o.kt)("li",{parentName:"ul"},"Database access and Repositories"),(0,o.kt)("li",{parentName:"ul"},"Graph QL Types, Mutations and Queries"),(0,o.kt)("li",{parentName:"ul"},"Documentation with Herbs Shelf")),(0,o.kt)("h2",{id:"requirements"},"Requirements"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"You need to have ",(0,o.kt)("a",{parentName:"li",href:"https://nodejs.org/en/"},"Node.js")," installed into your machine with LTS version")),(0,o.kt)("h2",{id:"project-setup"},"Project Setup"),(0,o.kt)("p",null,"You will see how to use this tutorial with hebs-cli or manually. But we strongly recommend to use our ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/herbsjs/herbs-cli"},(0,o.kt)("inlineCode",{parentName:"a"},"herbs-cli"))),(0,o.kt)("h3",{id:"with-herbs-cli"},"With herbs-cli"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Install ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/herbsjs/herbs-cli"},(0,o.kt)("inlineCode",{parentName:"a"},"herbs-cli"))," globally:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"npm i -g @herbsjs/herbs-cli \n")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Create a new project using it:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"herbs new\n")),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"Answer the questions and create the project:")),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(64476).Z})),(0,o.kt)("h4",{id:"folder-structure"},"Folder Structure"),(0,o.kt)("p",null,"The folder structure generated by the CLI is as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},".\n\u251c\u2500\u2500 node_modules\n\u251c\u2500\u2500 package-lock.json\n\u251c\u2500\u2500 package.json\n\u2514\u2500\u2500 src\n    \u251c\u2500\u2500 config\n    \u2502   \u251c\u2500\u2500 api.js\n    \u2502   \u251c\u2500\u2500 index.js\n    \u2502   \u2514\u2500\u2500 mongo.js\n    \u251c\u2500\u2500 domain\n    \u2502   \u251c\u2500\u2500 entities\n    \u2502   \u2502   \u251c\u2500\u2500 index.js\n    \u2502   \u2502   \u2514\u2500\u2500 user.js\n    \u2502   \u251c\u2500\u2500 errors\n    \u2502   \u2502   \u251c\u2500\u2500 index.js\n    \u2502   \u2502   \u251c\u2500\u2500 notFound.js\n    \u2502   \u2502   \u2514\u2500\u2500 notValid.js\n    \u2502   \u2514\u2500\u2500 usecases\n    \u2502       \u251c\u2500\u2500 index.js\n    \u2502       \u2514\u2500\u2500 user\n    \u2502           \u251c\u2500\u2500 createUser.js\n    \u2502           \u251c\u2500\u2500 deleteUser.js\n    \u2502           \u251c\u2500\u2500 findOneUser.js\n    \u2502           \u2514\u2500\u2500 updateUser.js\n    \u251c\u2500\u2500 index.js\n    \u2514\u2500\u2500 infra\n        \u251c\u2500\u2500 api\n        \u2502   \u251c\u2500\u2500 graphql\n        \u2502   \u2502   \u251c\u2500\u2500 defaultResolver.js\n        \u2502   \u2502   \u251c\u2500\u2500 index.js\n        \u2502   \u2502   \u251c\u2500\u2500 inputs.js\n        \u2502   \u2502   \u251c\u2500\u2500 mutations.js\n        \u2502   \u2502   \u251c\u2500\u2500 queries.js\n        \u2502   \u2502   \u2514\u2500\u2500 types.js\n        \u2502   \u251c\u2500\u2500 rest\n        \u2502   \u2502   \u2514\u2500\u2500 index.js\n        \u2502   \u2514\u2500\u2500 server.js\n        \u2514\u2500\u2500 data\n            \u251c\u2500\u2500 database\n            \u2502   \u2514\u2500\u2500 index.js\n            \u2514\u2500\u2500 repositories\n                \u251c\u2500\u2500 baseRepository.js\n                \u251c\u2500\u2500 index.js\n                \u2514\u2500\u2500 userRepository.js\n")),(0,o.kt)("h3",{id:"manually"},"Manually"),(0,o.kt)("p",null,"You can also set up the file by your own. To help you on that we have an ",(0,o.kt)("a",{parentName:"p",href:"https://marketplace.visualstudio.com/items?itemName=EndersonCosta.herbs-snippets"},"extension for VS Code")," with code snippets and templates."))}d.isMDXComponent=!0},64476:function(e,t,n){t.Z=n.p+"assets/images/herbs-new-acb8373c9586589937d586fac604ce73.gif"}}]);
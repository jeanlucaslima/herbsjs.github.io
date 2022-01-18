"use strict";(self.webpackChunkherbjs=self.webpackChunkherbjs||[]).push([[7724],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return d}});var r=n(67294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,s=e.mdxType,a=e.originalType,u=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),h=c(n),d=s,m=h["".concat(u,".").concat(d)]||h[d]||p[d]||a;return n?r.createElement(m,i(i({ref:t},l),{},{components:n})):r.createElement(m,i({ref:t},l))}));function d(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var a=n.length,i=new Array(a);i[0]=h;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:s,i[1]=o;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},41197:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return l},default:function(){return h}});var r=n(87462),s=n(63366),a=(n(67294),n(3905)),i=["components"],o={id:"create-usecase",title:"4. Creating Use Cases",sidebar_label:"4. Creating Use Cases",slug:"/tutorial/create-usecase"},u=void 0,c={unversionedId:"tutorial/create-usecase",id:"tutorial/create-usecase",isDocsHomePage:!1,title:"4. Creating Use Cases",description:"Introduction to the Use Case concept",source:"@site/docs/tutorial/create-usecase.md",sourceDirName:"tutorial",slug:"/tutorial/create-usecase",permalink:"/docs/tutorial/create-usecase",editUrl:"https://github.com/herbsjs/herbsjs.github.io/docs/tutorial/create-usecase.md",tags:[],version:"current",frontMatter:{id:"create-usecase",title:"4. Creating Use Cases",sidebar_label:"4. Creating Use Cases",slug:"/tutorial/create-usecase"},sidebar:"sidebar",previous:{title:"3. Generating Repositories",permalink:"/docs/tutorial/repository"},next:{title:"5. Generating GraphQL Endpoint",permalink:"/docs/tutorial/graphql"}},l=[{value:"Introduction to the Use Case concept",id:"introduction-to-the-use-case-concept",children:[]},{value:"Create User",id:"create-user",children:[{value:"Use Case Name",id:"use-case-name",children:[]},{value:"Request",id:"request",children:[]},{value:"Response",id:"response",children:[]},{value:"Setup / DI",id:"setup--di",children:[]},{value:"Authorize",id:"authorize",children:[]},{value:"Steps",id:"steps",children:[]}]}],p={toc:l};function h(e){var t=e.components,n=(0,s.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"introduction-to-the-use-case-concept"},"Introduction to the Use Case concept"),(0,a.kt)("p",null,"A use case reflects a single action exposed by the Domain to the end user."),(0,a.kt)("p",null,"For exemple: Reopen Ticket, Reply Message, Add User"),(0,a.kt)("p",null,"Internally a use case is responsible to control the interaction between entities, repositories and other domain components."),(0,a.kt)("p",null,"With the entities set properly, we can start to use them. For this, we have to set the use cases for the app."),(0,a.kt)("p",null,"We are going to set use cases to interact with the User entity created in the previous step."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Learn more: ",(0,a.kt)("a",{parentName:"p",href:"/docs/usecase/getting-started#whats-a-use-case"},"What's a Use Case?"))),(0,a.kt)("h2",{id:"create-user"},"Create User"),(0,a.kt)("p",null,"Let's understante the use case to create an user that is generated by the CLI. And so on, we are going to walk through the following topics:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Use Case Name"),(0,a.kt)("li",{parentName:"ul"},"Request "),(0,a.kt)("li",{parentName:"ul"},"Response"),(0,a.kt)("li",{parentName:"ul"},"Setup / DI"),(0,a.kt)("li",{parentName:"ul"},"Authorize"),(0,a.kt)("li",{parentName:"ul"},"Steps - Basic"),(0,a.kt)("li",{parentName:"ul"},"Step return (Ok, Err)"),(0,a.kt)("li",{parentName:"ul"},"Use Case return (ctx.ret)")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Know more about ",(0,a.kt)("a",{parentName:"p",href:"/docs/usecase/features#creating-a-use-case"},"create usecases"),".")),(0,a.kt)("h3",{id:"use-case-name"},"Use Case Name"),(0,a.kt)("p",null,"First, is set the name for the usecase."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// src/domain/usecases/user/createUser.js\nconst { usecase } = require('@herbsjs/herbs')\n\nconst createUser = () => usecase('Create User', {})\n")),(0,a.kt)("h3",{id:"request"},"Request"),(0,a.kt)("p",null,"Now, we have to specify what are the parameters accepted from the user on request."),(0,a.kt)("p",null,"In this case, we need the nickname and the password of the user, which are both ",(0,a.kt)("inlineCode",{parentName:"p"},"String")," since we want a text."),(0,a.kt)("p",null,"Here we can use any other ",(0,a.kt)("inlineCode",{parentName:"p"},"Object")," type, like: ",(0,a.kt)("inlineCode",{parentName:"p"},"Boolean"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Number"),", etc. To set up an array, we have to add brackets around the type, like: ",(0,a.kt)("inlineCode",{parentName:"p"},"[String]"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// src/domain/usecases/user/createUser.js\nconst { usecase } = require('@herbsjs/herbs')\n\nconst createUser = () => usecase('Create User', {\n    // Input/Request metadata and validation \n    request: {\n        nickname: String,\n        password: String\n    },\n})\n")),(0,a.kt)("p",null,"If we were using an Entity in the request field, the validations set in the Entity will also be checked there."),(0,a.kt)("h3",{id:"response"},"Response"),(0,a.kt)("p",null,"Once we have the request object specified, we must specify the response model."),(0,a.kt)("p",null,"If your use case does not need to return a response and just perform operations, you can ommit this field."),(0,a.kt)("p",null,"In this case, it will return the User Entity."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// src/domain/usecases/user/createUser.js\nconst { usecase } = require('@herbsjs/herbs')\nconst User = require('../entities/user');\n\nconst createUser = () => usecase('Create User', {\n    // Input/Request metadata and validation \n    request: {\n        nickname: String,\n        password: String\n    },\n\n    // Output/Response metadata\n    response: User,\n})\n")),(0,a.kt)("h3",{id:"setup--di"},"Setup / DI"),(0,a.kt)("p",null,"The use case is divided by steps, they run one-by-one and can share a context object. You are free to use this object setting useful values between the steps. Besides that, you can also have an initial object setup, where you can set initially required values for steps, like repositories (what makes possible the interaction with the database)."),(0,a.kt)("p",null,'In each step of the usecase (which we are going to set soon), a context object is provided to handle the "data sharing" between different steps. And other useful data, such as repositories, the request values, etc.'),(0,a.kt)("p",null,"On the ",(0,a.kt)("inlineCode",{parentName:"p"},"setup")," function, we can manually add values to this context, so we can use them later in the steps."),(0,a.kt)("p",null,"In this case of the CLI, it was not necessary, but wel could do something like:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// src/domain/usecases/user/createUser.js\nconst { usecase } = require('@herbsjs/herbs')\nconst User = require('../entities/user');\n\nconst createUser = () => usecase('Create User', {\n    // Input/Request metadata and validation \n    request: {\n        nickname: String,\n        password: String\n    },\n\n    // Output/Response metadata\n    response: User,\n\n    // Pre-run setup\n    setup: ctx => {\n        ctx.myCustomData = \"any useful data\";\n    },\n})\n")),(0,a.kt)("h3",{id:"authorize"},"Authorize"),(0,a.kt)("p",null,"Use cases may also have an ",(0,a.kt)("inlineCode",{parentName:"p"},"authorize")," function, which can be implemented with any logic and must return ",(0,a.kt)("inlineCode",{parentName:"p"},"Ok()")," if user is authorized to perform that operation and ",(0,a.kt)("inlineCode",{parentName:"p"},"Err()")," otherwise."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"authorize")," function is runned before any use case, the use cases will only run if the user is authorized."),(0,a.kt)("p",null,"The CLI default function just allow all requests by constant returning ",(0,a.kt)("inlineCode",{parentName:"p"},"Ok()"),", but you can implement any logic for that. For exemple, we can suppose that the ",(0,a.kt)("inlineCode",{parentName:"p"},"user")," object has a property called ",(0,a.kt)("inlineCode",{parentName:"p"},"canCreateUser"),"."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Learn more: ",(0,a.kt)("a",{parentName:"p",href:"/docs/usecase/features#authorize"},"Use Cases Features - Authorize"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// src/domain/usecases/user/createUser.js\nconst { Ok, Err, usecase } = require('@herbsjs/herbs')\nconst User = require('../entities/user');\n\nconst createUser = () => usecase('Create User', {\n    // Input/Request metadata and validation \n    request: {\n        nickname: String,\n        password: String\n    },\n\n    // Output/Response metadata\n    response: User,\n\n    // Authorization with Audit\n    authorize: async (user) => (user.canCreateUser ? Ok() : Err()),\n})\n")),(0,a.kt)("h3",{id:"steps"},"Steps"),(0,a.kt)("p",null,"Since we have the request, response, setup and authorization set, we can finally start writing the actual logic in the steps."),(0,a.kt)("p",null,"Steps are the building blocks of a use case. Its main goal is to generate metadata before and during the execution of a use case like the code intention, audit trail, etc. The first thing to note is that we encourage the description of the steps with the business intent (never the technical intent)."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Learn more about ",(0,a.kt)("a",{parentName:"p",href:"/docs/usecase/steps"},"usecase steps"),".")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// src/domain/usecases/user/createUser.js\nconst { Ok, Err, usecase } = require('@herbsjs/herbs')\nconst User = require('../entities/user');\n\n// Here, we receive an object with the `userRepository` in it.\n// So we can interact  with the database.\nconst createUser = ({ userRepository }) => usecase('Create User', {\n    // Input/Request metadata and validation \n    request: {\n        nickname: String,\n        password: String\n    },\n\n    // Output/Response metadata\n    response: User,\n\n    // Authorization with Audit\n    authorize: async (user) => (user.canCreateUser ? Ok() : Err()),\n\n    // Step description and function\n    'Check if the User is valid': step(ctx => {\n        // Creates a new user from the request.\n        // And stores it in the context.\n        ctx.user = User.fromJSON(ctx.req)\n\n        // Check if the fields are valid.\n        if (!ctx.user.isValid())\n            return UserNotValidError('User ', 'The User entity is invalid', ctx.user.errors)\n\n        // returning Ok continues to the next step. Err stops the use case execution.\n        return Ok()\n    }),\n\n    'Save the User': step(async ctx => {\n        // Insert the new user to the repository\n        // and then return it to the client using\n        // the `ret` property of context object.\n        return (ctx.ret = await userRepository.insert(ctx.user))\n    })\n})\n")))}h.isMDXComponent=!0}}]);
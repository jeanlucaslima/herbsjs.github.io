"use strict";(self.webpackChunkherbjs_website=self.webpackChunkherbjs_website||[]).push([[2105],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return h}});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=o.createContext({}),l=function(e){var t=o.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=l(e.components);return o.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,u=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),p=l(n),h=r,m=p["".concat(u,".").concat(h)]||p[h]||d[h]||i;return n?o.createElement(m,s(s({ref:t},c),{},{components:n})):o.createElement(m,s({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=p;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a.mdxType="string"==typeof e?e:r,s[1]=a;for(var l=2;l<i;l++)s[l]=n[l];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},62842:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return u},default:function(){return h},frontMatter:function(){return a},metadata:function(){return l},toc:function(){return d}});var o=n(87462),r=n(63366),i=(n(67294),n(3905)),s=["components"],a={id:"herbsjs",title:"Why Herbs?",sidebar_label:"Why Herbs?",slug:"/introduction/why-herbs",custom_edit_url:null},u=void 0,l={unversionedId:"introduction/herbsjs",id:"introduction/herbsjs",title:"Why Herbs?",description:"While most of the current ecosystem is focused, for example, on who has the best HTML rendering time, which is a legitimate issue, we understand that some fundamental issues are not being addressed.",source:"@site/docs/introduction/why-herbjs.md",sourceDirName:"introduction",slug:"/introduction/why-herbs",permalink:"/docs/introduction/why-herbs",editUrl:null,tags:[],version:"current",frontMatter:{id:"herbsjs",title:"Why Herbs?",sidebar_label:"Why Herbs?",slug:"/introduction/why-herbs",custom_edit_url:null},sidebar:"sidebar",previous:{title:"Getting Started",permalink:"/docs/"},next:{title:"1. Introduction",permalink:"/docs/tutorial/Introduction"}},c={},d=[{value:"Fast development: Now and Always",id:"fast-development-now-and-always",level:2},{value:"More Time Spent On The Domain",id:"more-time-spent-on-the-domain",level:2},{value:"Domain Knowledge: Retention and Propagation",id:"domain-knowledge-retention-and-propagation",level:2},{value:"Enterprise Features Out Of The Box",id:"enterprise-features-out-of-the-box",level:2}],p={toc:d};function h(e){var t=e.components,n=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"While most of the current ecosystem is focused, for example, on who has the best HTML rendering time, which is a legitimate issue, we understand that some fundamental issues are not being addressed."),(0,i.kt)("p",null,"Herbs goes in a completely different direction. Herbs was created to solve fundamental software development problems such as delivering real business value, maintainability and knowledge retention."),(0,i.kt)("p",null,"Let's delve deeper!"),(0,i.kt)("h2",{id:"fast-development-now-and-always"},"Fast development: Now and Always"),(0,i.kt)("p",null,"With Herbs it is very fast to create a new project. Using the Herbs CLI it is possible to create a new microservice focused on your business problem and in a short time deploy it to your preferred infrastructure."),(0,i.kt)("p",null,"However, it is not enough to be quick in creating a new project. You need to keep the cost of evolution and maintenance low over the lifespan of the software."),(0,i.kt)("p",null,"Herbs was designed with maintenance in mind from day one. So you can keep evolving your software with new business demands with the peace of mind that your system won't quickly turn into a big ball of mud."),(0,i.kt)("h2",{id:"more-time-spent-on-the-domain"},"More Time Spent On The Domain"),(0,i.kt)("p",null,"Software must deliver value to the business. Period. Why spend so much time writing code about worthless things like the URL format in the REST endpoint? POST or PUT? Or rewrite dozens of resolvers for your GraphQL? Postgres ou Mongo?"),(0,i.kt)("p",null,"Some of this discussion has value, but it shouldn't be where we put most of our energy."),(0,i.kt)("p",null,"With Herbs the focus of the discussion is on delivering value, not the accidental complexity of the software. The time spent is put into specs, use cases, entities, business rules, etc."),(0,i.kt)("h2",{id:"domain-knowledge-retention-and-propagation"},"Domain Knowledge: Retention and Propagation"),(0,i.kt)("p",null,'Knowing languages and tools is not enough when we are developing software. One also needs to know about the application domain aka "business rules". '),(0,i.kt)("p",null,"So, new team members need to know and become familiar with the business rules. Leaving members cannot take the knowledge with them. Some contexts can be very challenging in this sense, such as specialist domains, difficulty in hiring, high turnover, etc."),(0,i.kt)("p",null,"With Herbs code and documentation go together. New developers can access the documentation or just read the code to learn about the business. And for those who leave the team, the impact is low because the knowledge is retained in the code."),(0,i.kt)("h2",{id:"enterprise-features-out-of-the-box"},"Enterprise Features Out Of The Box"),(0,i.kt)("p",null,"With Herbs, features such as authorization and execution audits are native. We believe that applications should be safe and reliable."))}h.isMDXComponent=!0}}]);
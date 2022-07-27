"use strict";(self.webpackChunkherbjs_website=self.webpackChunkherbjs_website||[]).push([[471],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),d=p(r),m=o,b=d["".concat(c,".").concat(m)]||d[m]||l[m]||i;return r?n.createElement(b,s(s({ref:t},u),{},{components:r})):n.createElement(b,s({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,s=new Array(i);s[0]=d;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:o,s[1]=a;for(var p=2;p<i;p++)s[p]=r[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},3234:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return a},metadata:function(){return p},toc:function(){return l}});var n=r(87462),o=r(63366),i=(r(67294),r(3905)),s=["components"],a={id:"repositories",title:"6. Repositories",sidebar_label:"6. Repositories",slug:"/tutorial/repositories"},c=void 0,p={unversionedId:"tutorial/repositories",id:"tutorial/repositories",title:"6. Repositories",description:"Introduction to the repository concept",source:"@site/docs/tutorial/repositories.md",sourceDirName:"tutorial",slug:"/tutorial/repositories",permalink:"/docs/tutorial/repositories",editUrl:"https://github.com/herbsjs/herbsjs.github.io/blob/master/docs/tutorial/repositories.md",tags:[],version:"current",frontMatter:{id:"repositories",title:"6. Repositories",sidebar_label:"6. Repositories",slug:"/tutorial/repositories"},sidebar:"sidebar",previous:{title:"5. Specs",permalink:"/docs/tutorial/specs"},next:{title:"7. Migrations",permalink:"/docs/tutorial/migrations"}},u={},l=[{value:"Introduction to the repository concept",id:"introduction-to-the-repository-concept",level:2},{value:"itemRepository.js",id:"itemrepositoryjs",level:2}],d={toc:l};function m(e){var t=e.components,r=(0,o.Z)(e,s);return(0,i.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"introduction-to-the-repository-concept"},"Introduction to the repository concept"),(0,i.kt)("p",null,"A repository is a design pattern intended to decouple database code from your business logic."),(0,i.kt)("p",null,"This pattern bring some important benefits. First, makes your code easier to read and maintain, because database code is not spread throughout application. Second, the code becomes significantly easier to unit test. Its be easily mock repositories while testing your business logic instead of having to set up databases, tables and seeding them with data. And third, the business logic does not depend strongly on a specific database platform."),(0,i.kt)("p",null,"After ",(0,i.kt)("inlineCode",{parentName:"p"},"herbs update")," run, its automatic create inside ",(0,i.kt)("inlineCode",{parentName:"p"},"src/infra/data/database/repositories")," a repository file for each entity we previous created."),(0,i.kt)("p",null,"These repositories files abstract ",(0,i.kt)("inlineCode",{parentName:"p"},"knex.js")," to make queries in database and any class created in these files will be exported for ",(0,i.kt)("inlineCode",{parentName:"p"},"herbarium.repositories"),", so we will can access theses repositories inside any place in our application importing ",(0,i.kt)("inlineCode",{parentName:"p"},"herbarium"),"."),(0,i.kt)("h2",{id:"itemrepositoryjs"},"itemRepository.js"),(0,i.kt)("p",null,"A repository file it should be like:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"// src/infra/data/database/repositories/itemRepository.js\n\nconst { Repository } = require(\"@herbsjs/herbs2knex\")\nconst { herbarium } = require('@herbsjs/herbarium')\nconst Item = require('../../../domain/entities/item')\nconst connection = require('../database/connection')\n\nclass ItemRepository extends Repository {\n    constructor(injection) {\n        super({\n            entity: Item,\n            table: \"items\",\n            knex: connection\n        })\n    }\n}\n\nmodule.exports =\n    herbarium.repositories\n        .add(ItemRepository, 'ItemRepository')\n        .metadata({ entity: Item })\n        .repository\n")))}m.isMDXComponent=!0}}]);
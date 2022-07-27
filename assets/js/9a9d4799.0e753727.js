"use strict";(self.webpackChunkherbjs_website=self.webpackChunkherbjs_website||[]).push([[2773],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return c}});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=i.createContext({}),d=function(e){var t=i.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=d(e.components);return i.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=d(n),c=a,f=m["".concat(o,".").concat(c)]||m[c]||p[c]||r;return n?i.createElement(f,s(s({ref:t},u),{},{components:n})):i.createElement(f,s({ref:t},u))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,s=new Array(r);s[0]=m;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:a,s[1]=l;for(var d=2;d<r;d++)s[d]=n[d];return i.createElement.apply(null,s)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},70788:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return o},default:function(){return c},frontMatter:function(){return l},metadata:function(){return d},toc:function(){return p}});var i=n(87462),a=n(63366),r=(n(67294),n(3905)),s=["components"],l={id:"create-entity",title:"3. Creating Entities",sidebar_label:"3. Creating Entities",slug:"/tutorial/create-entity"},o=void 0,d={unversionedId:"tutorial/create-entity",id:"tutorial/create-entity",title:"3. Creating Entities",description:"Introduction to the Entity concept",source:"@site/docs/tutorial/create-entity.md",sourceDirName:"tutorial",slug:"/tutorial/create-entity",permalink:"/docs/tutorial/create-entity",editUrl:"https://github.com/herbsjs/herbsjs.github.io/blob/master/docs/tutorial/create-entity.md",tags:[],version:"current",frontMatter:{id:"create-entity",title:"3. Creating Entities",sidebar_label:"3. Creating Entities",slug:"/tutorial/create-entity"},sidebar:"sidebar",previous:{title:"2. New Project",permalink:"/docs/tutorial/new-project"},next:{title:"4. Working with Use Cases",permalink:"/docs/tutorial/working-usecases"}},u={},p=[{value:"Introduction to the Entity concept",id:"introduction-to-the-entity-concept",level:2},{value:"Generated User Entity",id:"generated-user-entity",level:2},{value:"Entity fields",id:"entity-fields",level:4},{value:"List Entity",id:"list-entity",level:2},{value:"Item Entity",id:"item-entity",level:2},{value:"Entity fields default value",id:"entity-fields-default-value",level:2},{value:"Entity fields validation",id:"entity-fields-validation",level:2}],m={toc:p};function c(e){var t=e.components,n=(0,a.Z)(e,s);return(0,r.kt)("wrapper",(0,i.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"introduction-to-the-entity-concept"},"Introduction to the Entity concept"),(0,r.kt)("p",null,"Entities are the natural place for abstractions from your domain. Usually, big things like User, Order, Contract Agreement, Shopping Cart, Schedule, etc. are entities."),(0,r.kt)("p",null,"Entities have properties (fields), actions (methods) and often is uniquely identified by an ID."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Refer to ",(0,r.kt)("a",{parentName:"p",href:"/docs/entity/getting-started#whats-an-entity"},"Getting Started - What's and Entity")," to know more.")),(0,r.kt)("p",null,"For this project, the most basic entity is the User. The CLI generates it out-of-the-box, so let's understand how it works:"),(0,r.kt)("h2",{id:"generated-user-entity"},"Generated User Entity"),(0,r.kt)("p",null,"First, let's understand how entity code works:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// Path: src/domain/entities/user.js\n\n/* \n    First, import from herbsjs package the main functions \n    to create a entity, define entity fields and make\n    entity avaible for application.\n*/\nconst { entity, id, field } = require('@herbsjs/herbs')\nconst { herbarium } = require('@herbsjs/herbarium')\n\n\n/*\n    Here we start a const called User, thats receives\n    from entity() function a instance of Entity that will\n    represent an User.\n    \n    The entity() function expects two arguments,\n    in this sintax entity(entity_name, entity_body).\n\n    - First argument entity_name is a string thats determines this Entity name \n    - Second argument entity_body is a object with properties \n    thats represents Entity attributes\n*/\nconst User = entity('User', {\n    // The key of this object defines a field name.\n    // The value is the object type of determined by `field()` function.\n\n    // `id()` is a special field to define a entity unique identifier. \n    id: id(Number),\n\n    // Both the fields \"nickname\" and \"password\" are texts, therefore we are using `String`.\n    nickname: field(String),\n    password: field(String)\n})\n\n/*\n    Finally we are exporting our entity, but we don't do\n    this direct like `module.exports = User`. \n    \n    herbsjs works with automagic dependecy injection, so to do\n    magic works we will need use a herbarium to export our entities\n    and make it avaible for all application.\n    \n    It's only necessary pass to module.export, herbarium.entities.add().entity,\n    passing by add() as first argument our entity object, in this case is User,\n    and as second argument a string with a name of entity 'User'.    \n*/\nmodule.exports =\n  herbarium.entities\n    .add(User, 'User')\n    .entity\n\n")),(0,r.kt)("h4",{id:"entity-fields"},"Entity fields"),(0,r.kt)("p",null,"In the User entity, we has seen the fields:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"id"),": The unique identifier for the user."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"nickname"),': The nickname for the user like "user123".'),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"password"),": The user's access password.")),(0,r.kt)("p",null,"But within the entity fields properties, we can do more,\nis possible set a default value for a field or make\nsome validation, for now, is important know the type\nof field are Scalar types, tere are some of them:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Number"),": double-precision 64-bit binary format IEEE 754 value"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"String"),": a UTF\u201016 character sequence"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Boolean"),": true or false"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Date"),": represents a single moment in time in a platform-independent format.")),(0,r.kt)("h2",{id:"list-entity"},"List Entity"),(0,r.kt)("p",null,"For our TODO api we need 2 entities, List and Item, first let's creates a list.\nfor this entity let's reuse a User Entity previous auto generated by ",(0,r.kt)("inlineCode",{parentName:"p"},"herbs-cli")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Rename de file from user.js to list.js\n",(0,r.kt)("inlineCode",{parentName:"p"},"src/domain/entities/user.js")," -> ",(0,r.kt)("inlineCode",{parentName:"p"},"src/domain/entities/list.js"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Inside a file let's rename User to List"),(0,r.kt)("p",{parentName:"li"},"From this"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const User = entity('User', {  ...\n")),(0,r.kt)("p",{parentName:"li"},"To this"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const List = entity('List', {  ...\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Rename in exports to"),(0,r.kt)("p",{parentName:"li"},"From this:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-js"},"module.exports =\nherbarium.entities\n    .add(User, 'User')\n    .entity\n")),(0,r.kt)("p",{parentName:"li"},"To this:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-js"},"module.exports =\nherbarium.entities\n    .add(List, 'List')\n    .entity\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Finaly, let's update fields for List Entity"),(0,r.kt)("p",{parentName:"li"},"From this:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-js"},"{     \n    id: id(Number),\n    nickname: field(String),\n    password: field(String)\n}\n")),(0,r.kt)("p",{parentName:"li"},"To this:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-js"},"{     \n    id: id(Number),\n    name: field(String),\n    description: field(String)\n}\n")))),(0,r.kt)("p",null,"Now our List entity code will looks like:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const { entity, id, field } = require('@herbsjs/herbs')\nconst { herbarium } = require('@herbsjs/herbarium')\n\nconst List = entity('List', { \n    id: id(Number),\n    name: field(String),\n    description: field(String)\n})\n\nmodule.exports =\n    herbarium.entities\n        .add(List, 'List')\n        .entity\n\n")),(0,r.kt)("p",null,"and as a final touch, ",(0,r.kt)("strong",{parentName:"p"},"delete user folder inside ",(0,r.kt)("inlineCode",{parentName:"strong"},"src/domain/usecases/")),", because we will run the ",(0,r.kt)("inlineCode",{parentName:"p"},"herbs update")," command that will create the uses cases for our new entity, besides of repository and migration files that we will deal with in the next steps."),(0,r.kt)("h2",{id:"item-entity"},"Item Entity"),(0,r.kt)("p",null,"Let's create a new entity Item"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"create a file  ",(0,r.kt)("inlineCode",{parentName:"p"},"item.js")," inside folder ",(0,r.kt)("inlineCode",{parentName:"p"},"src/domain/entities/"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"very similar with List lets create our Item entity code:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-js"},"//start a file importing dependencies:\nconst { entity, id, field } = require('@herbsjs/herbs')\nconst { herbarium } = require('@herbsjs/herbarium')\n\n/*\ncreate a const Item and assign a entity() \npassing all arguments needed with fields for the item\n*/\nconst Item = entity('Item', { \n    id: id(Number),\n    name: field(String),\n    completed: field(Boolean)\n})\n\n// finally exports Item entity\nmodule.exports =\nherbarium.entities\n    .add(Item, 'Item')\n    .entity\n\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"again after create a entity let's run the ",(0,r.kt)("inlineCode",{parentName:"p"},"herbs update")," command and keep things up to date."))),(0,r.kt)("h2",{id:"entity-fields-default-value"},"Entity fields default value"),(0,r.kt)("p",null,"When CLI generate code to us, we have a just a base, but we can go further."),(0,r.kt)("p",null,"Just for example, imagine that Item entity as a task, so when we created it, the field ",(0,r.kt)("inlineCode",{parentName:"p"},"completed")," must be\nfalse, because we don't do task yet."),(0,r.kt)("p",null,"To make this happen, we can set a default value for field ",(0,r.kt)("inlineCode",{parentName:"p"},"completed"),", we just need\nadapt our entity creating code to:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// src/domain/entities/item.js\nconst Item = entity('Item', { \n    id: id(Number),\n    name: field(String),\n    completed: field(Boolean, {\n        default: false\n    })\n})\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Learn more about ",(0,r.kt)("a",{parentName:"p",href:"/docs/entity/features#default-value"},"default values"),".")),(0,r.kt)("h2",{id:"entity-fields-validation"},"Entity fields validation"),(0,r.kt)("p",null,"Once we have the fields set, other important thing to do is implement validation to them. For example,\nwhen we create a List, we need indentify there, so we will set a name, but to prevents thats\nsome user try save a list whitout a name we can set a validation to field name, thats make field be\nrequired."),(0,r.kt)("p",null,"The validation is passed as an ",(0,r.kt)("inlineCode",{parentName:"p"},"Object")," and it can have different kinds of parameters, such as presence, length and numericality. For example:"),(0,r.kt)("p",null,"In our List entity will set some validations in field ",(0,r.kt)("inlineCode",{parentName:"p"},"id")," to make it required, just accept integer values an must be greater than 0 and field ",(0,r.kt)("inlineCode",{parentName:"p"},"name")," to be required and have a minimum of three letters."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// src/domain/entities/List.js\n...\nconst List = entity('List', { \n    id: id(Number, {\n        validation: {\n            // The field MUST be present\n            presence: true,\n            numericality: {\n                // Must be greater than 0\n                greaterThan: 0,\n                // Cannot be a float\n                onlyInteger: true\n            }\n        }\n    }),\n    name: field(String, {\n        validation: {\n            // The field MUST be present\n            presence: true,\n             // Here, the name MUST have 3 letters at least\n            length: { minimum: 3 },\n        }\n    }),\n    description: field(String)\n})\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Learn more about ",(0,r.kt)("a",{parentName:"p",href:"/docs/entity/validation"},"validations with Herbs"),".")),(0,r.kt)("hr",null),(0,r.kt)("p",null,"Feel free to implement more fields and add different kinds of validation to it."),(0,r.kt)("p",null,"Now that we have the List and Item entities, let's move on to setting up a database, where we will save our Lists and Items."))}c.isMDXComponent=!0}}]);
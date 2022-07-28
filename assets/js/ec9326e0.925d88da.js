"use strict";(self.webpackChunkherbjs_website=self.webpackChunkherbjs_website||[]).push([[7218],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>v});var n=a(67294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=u(a),v=l,m=c["".concat(s,".").concat(v)]||c[v]||d[v]||i;return a?n.createElement(m,r(r({ref:t},p),{},{components:a})):n.createElement(m,r({ref:t},p))}));function v(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=a.length,r=new Array(i);r[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:l,r[1]=o;for(var u=2;u<i;u++)r[u]=a[u];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},44808:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var n=a(87462),l=(a(67294),a(3905));const i={id:"validations",title:"Validations",sidebar_label:"Validations",slug:"/validation/validations"},r=void 0,o={unversionedId:"validation/validations",id:"validation/validations",title:"Validations",description:"Presence",source:"@site/docs/validation/validations.md",sourceDirName:"validation",slug:"/validation/validations",permalink:"/docs/validation/validations",draft:!1,editUrl:"https://github.com/herbsjs/herbsjs.github.io/blob/master/docs/validation/validations.md",tags:[],version:"current",frontMatter:{id:"validations",title:"Validations",sidebar_label:"Validations",slug:"/validation/validations"},sidebar:"sidebar",previous:{title:"Getting Started",permalink:"/docs/validation/getting-started"},next:{title:"Checkers",permalink:"/docs/validation/checkers"}},s={},u=[{value:"Presence",id:"presence",level:2},{value:"Allow Null",id:"allow-null",level:2},{value:"Null Values",id:"null-values",level:2},{value:"Presence vs allowNull",id:"presence-vs-allownull",level:2},{value:"Contains",id:"contains",level:2},{value:"Length",id:"length",level:2},{value:"Numericality",id:"numericality",level:2},{value:"Datetime",id:"datetime",level:2},{value:"E-mail",id:"e-mail",level:2},{value:"Format",id:"format",level:2},{value:"Type",id:"type",level:2},{value:"Javascript Identifier",id:"javascript-identifier",level:2},{value:"URL",id:"url",level:2},{value:"Custom functions",id:"custom-functions",level:2}],p={toc:u};function d(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"presence"},"Presence"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"presence")," (boolean) - Validates that the specified value is not empty."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"const value = ''\nconst validations = { presence: true }\nconst result = validate(value, validations)\n/* {\n    value: '',\n    errors: [{ cantBeEmpty: true }]\n} */\n")),(0,l.kt)("h2",{id:"allow-null"},"Allow Null"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"allowNull")," (boolean) - Validates that the specified value is not ",(0,l.kt)("inlineCode",{parentName:"p"},"null")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"undefined"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"const value = null\nconst validations = { allowNull: false }\nconst result = validate(value, validations)\n/* {\n    value: null,\n    errors: [{ cantBeNull: true }]\n} */\n")),(0,l.kt)("h2",{id:"null-values"},"Null Values"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"type"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"length"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"numericality"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"format")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"datetime")," validators won't validate a value if it's ",(0,l.kt)("inlineCode",{parentName:"p"},"null")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"undefined"),"."),(0,l.kt)("p",null,"To ensure your value is not null, use ",(0,l.kt)("inlineCode",{parentName:"p"},"allowNull: false")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"presence: true"),"."),(0,l.kt)("h2",{id:"presence-vs-allownull"},"Presence vs allowNull"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null},"presence: true"),(0,l.kt)("th",{parentName:"tr",align:null},"allowNull: false"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"'Text'"),(0,l.kt)("td",{parentName:"tr",align:null},"Valid"),(0,l.kt)("td",{parentName:"tr",align:null},"Valid")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"123"),(0,l.kt)("td",{parentName:"tr",align:null},"Valid"),(0,l.kt)("td",{parentName:"tr",align:null},"Valid")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"0"),(0,l.kt)("td",{parentName:"tr",align:null},"Valid"),(0,l.kt)("td",{parentName:"tr",align:null},"Valid")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"' '"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Valid")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"''"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Valid")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"[]"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Valid")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"{}"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Valid")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"null"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"undefined"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h2",{id:"contains"},"Contains"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"contains")," -  The contains validator is useful for validating allowance or restriction in certain values.\nIt checks that the given value exists in the target given by the ",(0,l.kt)("strong",{parentName:"p"},"allowed")," or  ",(0,l.kt)("strong",{parentName:"p"},"notAllowed")," option."),(0,l.kt)("p",null,"You can specify the validator as a list, string or as an object (in which case the keys of the object are used)."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"allowed option examples:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},'\nconst value = \'xlarge\'\nconst validations = { contains: { allowed: ["small", "medium", "large"] } }\nconst result = validate(value, validations)\n/* {\n    value: \'xlarge\',\n    errors: [{ notContains: ["small", "medium", "large"] }]\n} */\n\nconst value = \'hello\'\nconst validations = { contains: { allowed: "lorem ipsum dolor" } }\nconst result = validate(value, validations)\n/* {\n    value: \'hello\',\n    errors: [{ notContains: "lorem ipsum dolor" }]\n} */\n\n\nconst attr = \'price\'\nconst validations = { contains: { allowed: {type:"Fiat", model:"500", color:"white"} } }\nconst result = validate(attr, validations)\n/* {\n    value: \'price\',\n     errors: [{ notContains: {type:"Fiat", model:"500", color:"white"} }]\n} */\n\n')),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"notAllowed option examples:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},'\nconst value = \'small\'\nconst validations = { contains: { notAllowed: ["small", "medium", "large"] } }\nconst result = validate(value, validations)\n/* {\n    value: \'small\',\n    errors: [{ contains: ["small", "medium", "large"] }]\n} */\n\n\nconst value = \'hello\'\nconst validations = { contains: { notAllowed: "hello world" } }\nconst result = validate(value, validations)\n/* {\n    value: \'hello\',\n    errors: [{ contains: "hello world" }]\n} */\n\n\nconst attr = \'type\'\nconst validations = { contains: { notAllowed: {type:"Fiat", model:"500", color:"white"} } }\nconst result = validate(attr, validations)\n/* {\n     value: \'type\',\n     errors: [{ contains: {type:"Fiat", model:"500", color:"white"} }]\n} */\n\n')),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"using both options examples:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},'\nconst value = \'regular\'\nconst validations = { contains: { notAllowed: ["xlarge", "xxlarge", "tiny"], allowed: ["small", "medium", "large"] } }\nconst result = validate(value, validations)\n/* {\n    value: \'regular\',\n    errors: [{ notContains: ["small", "medium", "large"] }]\n} */\n\nconst value = \'xlarge\'\nconst validations = { contains: { notAllowed: ["xlarge", "xxlarge", "tiny"], allowed: ["small", "medium", "large"] } }\nconst result = validate(value, validations)\n/* {\n    value: \'xlarge\',\n    errors: [\n             { notContains: ["small", "medium", "large"] },\n             { contains: ["xlarge", "xxlarge", "tiny"] }\n            ]\n} */\n\n\n')),(0,l.kt)("h2",{id:"length"},"Length"),(0,l.kt)("p",null,"Validates the length of the value."),(0,l.kt)("p",null,"It is possible to specify length constraints in different ways:"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"minimum")," (number) - The value cannot have less than the specified length"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"maximum")," (number) - The value cannot have more than the specified length"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"is")," (number) - The value length must be equal to the given length"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"const value = 'john'\nconst validations = { length: { minimum: 5, maximum: 3, is: 1 } }\nconst result = validate(value, validations)\n/* {\n    value: 'john',\n    errors: [\n        { isTooShort: 5 },\n        { isTooLong: 3 },\n        { wrongLength: 1 }\n    ]\n} */\n")),(0,l.kt)("h2",{id:"numericality"},"Numericality"),(0,l.kt)("p",null,"Validates constraints to acceptable numeric values."),(0,l.kt)("p",null,"It must be a valid ",(0,l.kt)("inlineCode",{parentName:"p"},"Number")," JS object. Use ",(0,l.kt)("inlineCode",{parentName:"p"},"{ type: Number }")," to validate if the value is a valid JS ",(0,l.kt)("inlineCode",{parentName:"p"},"Number")," object."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"equalTo")," (number) - Specifies the value must be equal to the supplied value."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"greaterThan")," (number) - Specifies the value must be greater than the supplied value."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"greaterThanOrEqualTo")," (number) - Specifies the value must be greater than or equal to the supplied value."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"lessThan")," (number) - Specifies the value must be less than the supplied value."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"lessThanOrEqualTo")," (number) - Specifies the value must be less than or equal to the supplied value."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"onlyInteger")," (boolean) - To specify that only integral numbers are allowed."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"const value = 123.4\nconst validations = {\n    numericality: {\n        equalTo: 123,\n        greaterThan: 200,\n        greaterThanOrEqualTo: 123,\n        lessThan: 0,\n        lessThanOrEqualTo: 123,\n        onlyInteger: true\n    }\n}\nconst result = validate(value, validations)\n/* {\n    value: 123.4,\n    errors: [\n        { notEqualTo: 123 },\n        { notGreaterThan: 200 },\n        { notLessThan: 0 },\n        { notLessThanOrEqualTo: 123 },\n        { notAnInteger: true }\n    ]\n} */\n")),(0,l.kt)("h2",{id:"datetime"},"Datetime"),(0,l.kt)("p",null,"Validates constraints to acceptable date and time values."),(0,l.kt)("p",null,"It must be a valid ",(0,l.kt)("inlineCode",{parentName:"p"},"Date")," time JS object. Use ",(0,l.kt)("inlineCode",{parentName:"p"},"{ type: Date }")," to validate if the value is a valid JS ",(0,l.kt)("inlineCode",{parentName:"p"},"Date")," object."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"before")," (date) - A date must be before this value to be valid"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"after")," (date) - A date must be after this value to be valid"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"isAt")," (date) - A date must be equal to value to be valid"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"const value = new Date('2001-01-02')\nconst validations = {\n    datetime : {\n            before: new Date('2001-01-01'),\n            after: new Date('2001-01-03'),\n            isAt: new Date('2001-02-02')\n        }\n}\nconst result = validate(value, validations)\n/* {\n    value: '2001-01-02T00:00:00.000Z',\n    errors: [\n        { tooLate: '2001-01-01T00:00:00.000Z' },\n        { tooEarly: '2001-01-03T00:00:00.000Z') },\n        { notAt: '2001-02-02T00:00:00.000Z') }\n    ]\n} */\n")),(0,l.kt)("h2",{id:"e-mail"},"E-mail"),(0,l.kt)("p",null,"The email validator attempts to make sure the input is a valid email.\nValidating emails is tricky business due to the complex rules of email address formatting."),(0,l.kt)("p",null,"For example ",(0,l.kt)("strong",{parentName:"p"},"john.doe@gmail")," is a perfectly valid email but it's most likely just the case that John has forgotten to write .com at the end."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"const value = 'just\\\"not\\\"right@example.com'\nconst validations = { email: true }\nconst result = validate(value, validations)\n/* {\n    value: 'just\\\"not\\\"right@example.com'\n    errors: [{ invalidEmail: true }]\n} */\n")),(0,l.kt)("h2",{id:"format"},"Format"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"format")," (regex) -The format validator will validate a value against a regular expression of your chosing."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"\nconst pattern = /^[0-9]{8}$/ // or you can use new RegExp('^[0-9]{8}$')\nconst value = '05547-022'\nconst validations = { format: pattern }\nconst result = validate(value, validations)\n/* {\n    value: '05547-022',\n    errors: [{ invalidFormat: true }]\n} */\n\n\n")),(0,l.kt)("h2",{id:"type"},"Type"),(0,l.kt)("p",null,"Type validator ensures a value is of the correct JavaScript type or a custom type."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"type")," - A valid native JavaScript type, a custom type or a array with type"),(0,l.kt)("p",null,"Native JavaScript types:"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Number")," - double-precision 64-bit binary format IEEE 754 value"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"String")," - a UTF\u201016 character sequence"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Boolean")," - true or false"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Date")," - represents a single moment in time in a platform-independent format."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Object")," - the Object class represents one of JavaScript's data types."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Array")," - the Array class is a object that is used in the construction of arrays."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"const value = '2001'\nconst validations = { type: Date }\nconst result = validate(value, validations)\n/* {\n    value: '2001',\n    errors:[{ wrongType: 'Date' }]\n} */\n\n")),(0,l.kt)("p",null,"Custom types:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"\nclass User { ... }\n\nconst value = 'Admin'\nconst validations = { type: User }\nconst result = validate(value, validations)\n/* {\n    value: 'Admin',\n    errors:[{ wrongType: 'User' }]\n} */\n\n")),(0,l.kt)("p",null,"Lists - Array with types:"),(0,l.kt)("p",null,"It is possible to validate the type of elements of an array. Just use ",(0,l.kt)("inlineCode",{parentName:"p"},"[type]"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"const value = ['2']\nconst validations = { type: [Number] }\nconst result = validate(value, validations)\n/* {\n    value: ['2'],\n    errors:[{ wrongType: ['Number'] }]\n} */\n")),(0,l.kt)("h2",{id:"javascript-identifier"},"Javascript Identifier"),(0,l.kt)("p",null," The javascript identifier validator ensures that the input is a valid javascript identifier. Javascript identifiers validator rules can be found ",(0,l.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/pt-BR/docs/Glossary/Identifier"},(0,l.kt)("inlineCode",{parentName:"a"},"here")),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"const value = \"1GetTest\"\nconst validations = { javascriptIdentifier: true }\nconst result = validate(value, validations)\n/* {\n    value: '1GetTest',\n    errors: [{ invalidJavascriptIdentifier: true }]\n} */\n")),(0,l.kt)("h2",{id:"url"},"URL"),(0,l.kt)("p",null," The URL validator ensures that the input is a valid URL. Validating URLs are pretty tricky but this validator is inspired on a gist that can be found ",(0,l.kt)("a",{parentName:"p",href:"https://gist.github.com/dperini/729294"},(0,l.kt)("inlineCode",{parentName:"a"},"here")),"."),(0,l.kt)("p",null," The following options are supported:"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"schemes")," - (array of string) A list of schemes to allow. If you want to support any scheme you can use a regexp here (for example ",(0,l.kt)("strong",{parentName:"p"},'[".+"]'),"). The default value is ",(0,l.kt)("strong",{parentName:"p"},'["http", "https"]'),"."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"allowLocal")," (boolean) - A boolean that if true allows local hostnames such as ",(0,l.kt)("strong",{parentName:"p"},"10.0.1.1")," or localhost. The default is ",(0,l.kt)("strong",{parentName:"p"},"false"),"."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"allowDataUrl")," (boolean) - A boolean that if true allows data URLs as defined in ",(0,l.kt)("a",{parentName:"p",href:"https://tools.ietf.org/html/rfc2397"},(0,l.kt)("inlineCode",{parentName:"a"},"RFC 2397")),". The default is ",(0,l.kt)("strong",{parentName:"p"},"false")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"const value = \"google.com\"\nconst validations = { url: true }\nconst result = validate(value, validations)\n/* {\n    value: 'google.com',\n    errors: [{ invalidURL: true }]\n} */\n\nconst value = \"http://localhost\"\nconst validations = { url: {allowLocal: true} }\nconst result = validate(value, validations)\n/* {\n    value: 'http://localhost',\n    errors: []\n} */\n\nconst options = {schemes: ['ftp']}\nconst value = \"ftp://google.com\"\nconst validations = { url: options }\nconst result = validate(value, validations)\n/* {\n    value: 'ftp://google.com',\n    errors: []\n} */\n")),(0,l.kt)("h2",{id:"custom-functions"},"Custom functions"),(0,l.kt)("p",null,"Execute custom functions to specific validations cases"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"propName")," (string) - Name of the validation rule returned on error - ",(0,l.kt)("em",{parentName:"p"},"this is optional, see below example of usage")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"validation")," (function: boolean) - Function that will be called with value argument ",(0,l.kt)("em",{parentName:"p"},"this is optional, see below example of usage")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},'\nconst cardNumber = "123467890123456"\n// Single function validation with valid value\nconst validations = { custom: { invalidCardNumber: (value) => value.length === 16 } }\nconst result = validate(cardNumber, validations);\n/* {\n    value: \'123467890123456\',\n    errors: []\n} */\n//\n\nconst cardNumber = "1234"\n\n// Single function validation with invalid value\nconst validations = { custom: { invalidCardNumber: (value) => value.length === 16 } }\nconst result = validate(cardNumber, validations);\n/* {\n    value: \'1234\',\n    errors: [{ "invalidCardNumber": true }]\n} */\n//\n\n// Multiple functions validation with invalid value\nconst validations = {\n    custom: {\n        invalidCardNumber: (value) => value.length === 16,\n        invalidDigit: (value) => value[0] !== "2",\n    },\n}\nconst result = validate(cardNumber, validations)\n/* {\n    value: \'1234\',\n    errors: [\n        {  "invalidCardNumber": true },\n        {  "invalidDigit": true },\n    }]\n} */\n//\n\n\n// Multiple functions validation with parcial valid values\nconst cardNumber = "12345678910111213"\n\nconst validations = {\n    custom: {\n        invalidCardNumber: (value) => value.length === 16,\n        invalidDigit: (value) => value[0] !== "2",\n    },\n}\nconst result = validate(cardNumber, validations)\n/* {\n    value: \'12345678910111213\',\n    errors: [\n        {  "invalidDigit": true },\n    }]\n} */\n//\n\n')),(0,l.kt)("p",null,"You can also extract validation for variables, if you want to make your code more reusable and customizable"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},'\n// Single Validation with custom propName\n\nconst cardNumber = "1234"\n\nconst propName = "invalidCardNumber";\nconst validation = (value) => value.length === 16\nconst validations = {\n    custom: { [propName]: validation }, }\n\nconst result = validate(cardNumber, validations);\n/* {\n    value: \'1234\',\n    errors: [{ "invalidCardNumber": true }]\n} */\n//\n\n')))}d.isMDXComponent=!0}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{129:function(e,a,n){"use strict";n.r(a),n.d(a,"frontMatter",(function(){return i})),n.d(a,"metadata",(function(){return c})),n.d(a,"rightToc",(function(){return s})),n.d(a,"default",(function(){return u}));var r=n(1),t=n(6),o=(n(0),n(140)),i={id:"initial-setup",title:"Como instalar y configurar Docusaurus sin morir en el intento",sidebar_label:"Configuraci\xf3n inicial"},c={id:"initial-setup",title:"Como instalar y configurar Docusaurus sin morir en el intento",description:"![alt zonas de git](https://v2.docusaurus.io/img/slash-introducing.svg)\r",source:"@site/docs\\initial-setup.md",permalink:"/personal-docusaurus/docs/initial-setup",editUrl:"https://github.com/vgrados2/personal-docusaurus/edit/master/docs/initial-setup.md",sidebar_label:"Configuraci\xf3n inicial",sidebar:"someSidebar",previous:{title:"Semantic Versioning",permalink:"/personal-docusaurus/docs/quick-guides/quick-guide-semver"},next:{title:"Style Guide",permalink:"/personal-docusaurus/docs/doc1"}},s=[{value:"Instalaci\xf3n con Node.Js y NPM",id:"instalaci\xf3n-con-nodejs-y-npm",children:[]},{value:"Styling and Layout",id:"styling-and-layout",children:[]},{value:"Subir mi proyecto en GitHub Pages",id:"subir-mi-proyecto-en-github-pages",children:[]},{value:"Usando Algolia DocSearch",id:"usando-algolia-docsearch",children:[{value:"Conect\xe1ndose con Algolia",id:"conect\xe1ndose-con-algolia",children:[]}]}],l={rightToc:s};function u(e){var a=e.components,n=Object(t.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:a,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("img",Object(r.a)({parentName:"p"},{src:"https://v2.docusaurus.io/img/slash-introducing.svg",alt:"alt zonas de git"}))),Object(o.b)("h2",{id:"instalaci\xf3n-con-nodejs-y-npm"},"Instalaci\xf3n con Node.Js y NPM"),Object(o.b)("h4",{id:"requerimientos"},"Requerimientos"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://nodejs.org/en/download/"}),"Node.js")," version >= 10.9.0 o superior (que se puede verificar ejecutando node -v). Puede usar ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/nvm-sh/nvm"}),"nvm")," para administrar m\xfaltiples versiones de Nodo en una sola m\xe1quina instalada")),Object(o.b)("h4",{id:"para-descargar-el-proyecto-base-ejecute-lo-siguiente"},"Para descargar el proyecto base ejecute lo siguiente:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"# my-website: Nombre del proyecto\n# classic: Tema que usaras en el proyecto\n\nnpx @docusaurus/init@next init my-website classic\n")),Object(o.b)("h4",{id:"ub\xedquense-en-el-directorio-del-proyecto-e-instale-las-dependencias"},"Ub\xedquense en el directorio del proyecto e instale las dependencias:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"npm install\n")),Object(o.b)("h4",{id:"ejecutando-el-servidor-de-desarrollo"},"Ejecutando el servidor de desarrollo"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"npm start\n")),Object(o.b)("h4",{id:"para-general-el-compilado-del-proyecto"},"Para general el compilado del proyecto"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"npm run build\n")),Object(o.b)("h4",{id:"para-mayor-informaci\xf3n-puede-consultar-en-la-documentaci\xf3n-de-docusaurus"},Object(o.b)("em",{parentName:"h4"},"Para mayor informaci\xf3n puede consultar en la documentaci\xf3n de")," ",Object(o.b)("a",{href:"http://docusaurus-2.netlify.com/docs/installation",target:"_blank"},"Docusaurus")),Object(o.b)("h2",{id:"styling-and-layout"},"Styling and Layout"),Object(o.b)("h4",{id:"para-mayor-informaci\xf3n-puede-consultar-en-la-documentaci\xf3n-de-docusaurus-1"},Object(o.b)("em",{parentName:"h4"},"Para mayor informaci\xf3n puede consultar en la documentaci\xf3n de")," ",Object(o.b)("a",{href:"http://docusaurus-2.netlify.com/docs/styling-layout",target:"_blank"},"Docusaurus")),Object(o.b)("h2",{id:"subir-mi-proyecto-en-github-pages"},"Subir mi proyecto en GitHub Pages"),Object(o.b)("p",null,"Una ves que su repositorio se encuentre subido en github (este debe ser de modo publico), necesitara hacer las configuraciones correspondientes en el archivo ",Object(o.b)("inlineCode",{parentName:"p"},"docusaurus.config.js"),"."),Object(o.b)("p",null,"configura tu "),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"module.export = {\n    url: 'https://vgrados2.github.io/personal-docusaurus/', // Url publica generada por github Pages\n    baseUrl: '/personal-docusaurus/', // nombre del repositorio de git\n    organizationName: 'vgrados2', // usuario de git.\n    projectName: 'personal-docusaurus', // nombre del repositorio de git\n}\n")),Object(o.b)("p",null,"para obtener la ",Object(o.b)("inlineCode",{parentName:"p"},"url")," publica de github pages debe ingresar a las configuraciones del repositorio, inicialmente debe generala con la rama ",Object(o.b)("inlineCode",{parentName:"p"},"master")),Object(o.b)("p",null,Object(o.b)("img",Object(r.a)({parentName:"p"},{src:"/personal-docusaurus/img/docs/github-pages.png",alt:"github-pages"}))),Object(o.b)("p",null,"luego debe ejecutar lo siguiente, esto creara una rama gh-pages con el compilado de su proyecto, en ",Object(o.b)("inlineCode",{parentName:"p"},"GIT_USER")," debe ingresar su usuario de git."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"GIT_USER=vgrados2 CURRENT_BRANCH=source USE_SSH=false npm run deploy\n")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"una ves que se subieron sus cambios de manera correcta debera ingresar nuevamente a la configuraci\xf3n del repositorio y configurar la rama gh-pages como principal\ny listo. ingrese a la url publica.")),Object(o.b)("h2",{id:"usando-algolia-docsearch"},"Usando Algolia DocSearch"),Object(o.b)("h3",{id:"conect\xe1ndose-con-algolia"},"Conect\xe1ndose con Algolia"),Object(o.b)("p",null,"Para conectar sus documentos con Algolia, ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://docsearch.algolia.com/apply/"}),"debe ingresar aqu\xed"),". donde tendr\xe1 que ingresar la url publica del proyecto y su correo, este proceso\nes gratuito, es importante que el correo sea valido, ya que le escribir\xe1n consult\xe1ndole, si es usted quien administra el sitio web, tendr\xe1 que responder que si, luego le volver\xe1n a escribir\nbrind\xe1ndole una ",Object(o.b)("inlineCode",{parentName:"p"},"apiKey")," y un ",Object(o.b)("inlineCode",{parentName:"p"},"indexName")," los cuales le permitir\xe1n hacer funcionar el buscador en su proyecto. estas 2 configuraciones se deben agregar en el archivo ",Object(o.b)("inlineCode",{parentName:"p"},"docusaurus.config.js")," dentro de ",Object(o.b)("inlineCode",{parentName:"p"},"themeConfig")," como ",Object(o.b)("inlineCode",{parentName:"p"},"algolia")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json"}),'{\n    "themeConfig": {\n        "algolia": {\n            "apiKey": "api-key",\n            "indexName": "index-name"\n        }\n    }\n}\n')),Object(o.b)("h4",{id:"una-ves-configurado-inicialice-el-servidor-de-desarrollo"},"Una ves configurado inicialice el servidor de desarrollo"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"npm start\n")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Nota: Si el buscador no funciona es por que a\xfan puede estar en proceso el pull request esto puede tardar hasta 24horas. en mi caso tarde un par de horas.")),Object(o.b)("h4",{id:"una-ves-configurado-inicialice-el-servidor-de-desarrollo-1"},"Una ves configurado inicialice el servidor de desarrollo"),Object(o.b)("h4",{id:"para-mayor-informaci\xf3n-de-como-agregar-documentos-y-otras-configuraciones-docusaurus"},Object(o.b)("em",{parentName:"h4"},"Para mayor informaci\xf3n de como agregar documentos y otras configuraciones")," ",Object(o.b)("a",{href:"http://docusaurus-2.netlify.com/",target:"_blank"},"Docusaurus")))}u.isMDXComponent=!0},140:function(e,a,n){"use strict";n.d(a,"a",(function(){return d})),n.d(a,"b",(function(){return m}));var r=n(0),t=n.n(r);function o(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function i(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?i(Object(n),!0).forEach((function(a){o(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function s(e,a){if(null==e)return{};var n,r,t=function(e,a){if(null==e)return{};var n,r,t={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],a.indexOf(n)>=0||(t[n]=e[n]);return t}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(t[n]=e[n])}return t}var l=t.a.createContext({}),u=function(e){var a=t.a.useContext(l),n=a;return e&&(n="function"==typeof e?e(a):c({},a,{},e)),n},d=function(e){var a=u(e.components);return t.a.createElement(l.Provider,{value:a},e.children)},b={inlineCode:"code",wrapper:function(e){var a=e.children;return t.a.createElement(t.a.Fragment,{},a)}},p=Object(r.forwardRef)((function(e,a){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=u(n),p=r,m=d["".concat(i,".").concat(p)]||d[p]||b[p]||o;return n?t.a.createElement(m,c({ref:a},l,{components:n})):t.a.createElement(m,c({ref:a},l))}));function m(e,a){var n=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=p;var c={};for(var s in a)hasOwnProperty.call(a,s)&&(c[s]=a[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return t.a.createElement.apply(null,i)}return t.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{108:function(e,a,n){"use strict";n.r(a),n.d(a,"frontMatter",(function(){return c})),n.d(a,"metadata",(function(){return i})),n.d(a,"rightToc",(function(){return o})),n.d(a,"default",(function(){return u}));var r=n(1),t=n(6),l=(n(0),n(140)),c={id:"quick-guide-angular",title:"Gu\xeda para Angular",sidebar_label:"Angular \u2013 Gu\xeda r\xe1pida"},i={id:"quick-guides/quick-guide-angular",title:"Gu\xeda para Angular",description:"### Librer\xedas en angular\r",source:"@site/docs\\quick-guides\\quick-guide-angular.md",permalink:"/personal-docusaurus/docs/quick-guides/quick-guide-angular",editUrl:"https://github.com/vgrados2/personal-docusaurus/edit/master/docs/quick-guides/quick-guide-angular.md",sidebar_label:"Angular \u2013 Gu\xeda r\xe1pida",sidebar:"someSidebar",previous:{title:"NPM \u2013 Gu\xeda r\xe1pida",permalink:"/personal-docusaurus/docs/quick-guides/quick-guide-npm"},next:{title:"Gu\xeda para Lerna",permalink:"/personal-docusaurus/docs/quick-guides/quick-guide-lerna"}},o=[{value:"Librer\xedas en angular",id:"librer\xedas-en-angular",children:[]},{value:"CREACI\xd3N DE UNA APLICACI\xd3N ANGULAR",id:"creaci\xf3n-de-una-aplicaci\xf3n-angular",children:[]},{value:"BUNDLE-ANALIZER",id:"bundle-analizer",children:[]},{value:"INSTALAR REPOSITORIO LOCAL VERDACCIO",id:"instalar-repositorio-local-verdaccio",children:[]},{value:"ANGULAR CLI",id:"angular-cli",children:[]}],b={rightToc:o};function u(e){var a=e.components,n=Object(t.a)(e,["components"]);return Object(l.b)("wrapper",Object(r.a)({},b,n,{components:a,mdxType:"MDXLayout"}),Object(l.b)("h3",{id:"librer\xedas-en-angular"},"Librer\xedas en angular"),Object(l.b)("p",null,"Para la instalaci\xf3n de una librer\xeda de angular se requiere lo siguiente:"),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"npm install @angular/cli@latest -g  # Angular Cli\n")),Object(l.b)("p",null,"Para la creaci\xf3n de una librer\xeda ejecute lo siguiente"),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"ng new my-library --create-application=false  \n")),Object(l.b)("p",null,"Una ves creada la librer\xeda nos adentramos en la carpeta "),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"cd my-library\n")),Object(l.b)("p",null,"Para generar una librer\xeda "),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"ng generate library my-commons\n")),Object(l.b)("p",null,"Para generar una aplicaci\xf3n de prueba "),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"ng generate application application-test-example \n")),Object(l.b)("p",null,"Para agregar la librer\xeda a la aplicaci\xf3n de prueba"),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json"}),'{\n    "paths" : {\n        "my-commons": [ \n            "dist/my-commons"\n        ]\n    }\n}\n')),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"Tener en cuenta para versiones de angular que usan Ivy deber\xe1 deshabilitarla en el archivo ",Object(l.b)("inlineCode",{parentName:"p"},"tsconfig.lib.json"),"  para poder publicar las librer\xedas")),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json"}),'{\n    "angularCompilerOptions": { \n        "enableIvy": false \n    }\n}\n\n')),Object(l.b)("p",null,"para hacer el build de una librer\xeda"),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"ng build --project my-commons\n")),Object(l.b)("h3",{id:"creaci\xf3n-de-una-aplicaci\xf3n-angular"},"CREACI\xd3N DE UNA APLICACI\xd3N ANGULAR"),Object(l.b)("p",null,"Para la creaci\xf3n de un proyecto de angular, activamos el routing y de preferencia scss "),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"$ ng new onboarding-app\n? Would you like to add Angular routing? Yes\n? Which stylesheet format would you like to use? SCSS   [ https://sass-lang.com/documentation/syntax#scss]\n")),Object(l.b)("h3",{id:"bundle-analizer"},"BUNDLE-ANALIZER"),Object(l.b)("p",null,"Como estamos interesados en el rendimiento, tambi\xe9n instalemos una dependencia de desarrollo llamada ",Object(l.b)("inlineCode",{parentName:"p"},"webpack-bundle-analyzer"),"."),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{}),"npm i -D webpack-bundle-analyzer\n")),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},Object(l.b)("inlineCode",{parentName:"p"},"*webpack-bundle-analyzer*"),"permite visualizar el tama\xf1o de los archivos de salida del paquete web con un mapa de \xe1rbol interactivo con zoom.")),Object(l.b)("p",null,"La mejor manera de analizar nuestro paquete es agregar el siguiente script de an\xe1lisis a nuestro ",Object(l.b)("inlineCode",{parentName:"p"},"package.json"),"."),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),'"analyze": "ng build --prod --stats-json && webpack-bundle-analyzer ./dist/onboarding-app/stats-es2015.json"\n')),Object(l.b)("p",null,"Si ejecutamos este comando, Angular realiza una compilaci\xf3n de producci\xf3n y tambi\xe9n genera uno ",Object(l.b)("inlineCode",{parentName:"p"},"stats-es2015.json"),"que luego es recogido y visualizado por ",Object(l.b)("inlineCode",{parentName:"p"},"webpack-bundle-anlyzer"),"."),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-shell"}),"npm run analize\n")),Object(l.b)("h3",{id:"instalar-repositorio-local-verdaccio"},"INSTALAR REPOSITORIO LOCAL VERDACCIO"),Object(l.b)("p",null,"Para instalar verdaccio globalmente"),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-shell"}),"npm install -g verdaccio\n")),Object(l.b)("p",null,"Para utilizarlo"),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-shell"}),"verdaccio\n")),Object(l.b)("p",null,"Para configurar el registry ejecute el siguiente comando."),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"npm set registry http://localhost:4873/\n")),Object(l.b)("p",null,"o puede instalar los m\xf3dulos de la siguiente manera ",Object(l.b)("inlineCode",{parentName:"p"},"--registry")),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"npm install --registry http://localhost:4873\n")),Object(l.b)("p",null,"puede tambi\xe9n configurarlo en el  ",Object(l.b)("inlineCode",{parentName:"p"},".npmrc"),"en ",Object(l.b)("inlineCode",{parentName:"p"},"registry")," "),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"//.npmrc\nregistry=http://localhost:4873\n")),Object(l.b)("p",null,"o tambi\xe9n puede configurar",Object(l.b)("inlineCode",{parentName:"p"},"publishConfig")," en su ",Object(l.b)("inlineCode",{parentName:"p"},"package.json")),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json"}),'{\n  "publishConfig": {\n    "registry": "http://localhost:4873"\n  }\n}\n')),Object(l.b)("h4",{id:"publicar-un-modulo-en-verdaccio"},"PUBLICAR UN MODULO EN VERDACCIO"),Object(l.b)("p",null,"Para la publicaci\xf3n de un modulo en verdaccio deber\xe1 ingresar en la carpeta ",Object(l.b)("inlineCode",{parentName:"p"},"dist")," y ejecutar modulo"),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-shell"}),"npm publish\n")),Object(l.b)("p",null,"para remover un modulo de verdaccio"),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-shell"}),"npm unpublish my-module@1.0.0\n")),Object(l.b)("h3",{id:"angular-cli"},"ANGULAR CLI"),Object(l.b)("p",null,"La CLI angular es una herramienta de interfaz de l\xednea de comandos que se usa para inicializar, desarrollar y mantener aplicaciones de angular."),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"ng --version        #Para obtener la version\nng help             #Para ver las opciones de la cli\nng generate --help  #Para ver las opciones de un opcion en especifico\n")),Object(l.b)("p",null,"Comandos mas utilizados en el flujo de trabajo"),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-shell"}),"ng generate module my-module\nng generate component my-component\nng generate service my-service\nng generate directive my-directive\nng generate pipe my-pipe\n")),Object(l.b)("p",null,"Flags mas utilizados en el flujo de trabajo"),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-shell"}),"--flat           #Para crear en el mismo nivel del directorio\n#Para Modulos\n#--------------------------------------------------------------\n--routing        #Para crear el routing en el module\n#Para componentes / directivas / pipes\n#--------------------------------------------------------------\n--export         #Para exportar en el module\n--prefix         #prefix para el tag del selector\n--skipTests      #Para omitir el archivo .spec\n#Unicamente para componentes\n#--------------------------------------------------------------\n--inlineTemplate #Html en el mismo componente\n--inlineStyle    #Style en el mismo componente\n")))}u.isMDXComponent=!0},140:function(e,a,n){"use strict";n.d(a,"a",(function(){return p})),n.d(a,"b",(function(){return m}));var r=n(0),t=n.n(r);function l(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function c(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?c(Object(n),!0).forEach((function(a){l(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function o(e,a){if(null==e)return{};var n,r,t=function(e,a){if(null==e)return{};var n,r,t={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],a.indexOf(n)>=0||(t[n]=e[n]);return t}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(t[n]=e[n])}return t}var b=t.a.createContext({}),u=function(e){var a=t.a.useContext(b),n=a;return e&&(n="function"==typeof e?e(a):i({},a,{},e)),n},p=function(e){var a=u(e.components);return t.a.createElement(b.Provider,{value:a},e.children)},s={inlineCode:"code",wrapper:function(e){var a=e.children;return t.a.createElement(t.a.Fragment,{},a)}},d=Object(r.forwardRef)((function(e,a){var n=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,b=o(e,["components","mdxType","originalType","parentName"]),p=u(n),d=r,m=p["".concat(c,".").concat(d)]||p[d]||s[d]||l;return n?t.a.createElement(m,i({ref:a},b,{components:n})):t.a.createElement(m,i({ref:a},b))}));function m(e,a){var n=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var l=n.length,c=new Array(l);c[0]=d;var i={};for(var o in a)hasOwnProperty.call(a,o)&&(i[o]=a[o]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var b=2;b<l;b++)c[b]=n[b];return t.a.createElement.apply(null,c)}return t.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);
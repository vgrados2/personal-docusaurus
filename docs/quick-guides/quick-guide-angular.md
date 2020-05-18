---
id: quick-guide-angular
title: Guía para Angular
sidebar_label: Angular – Guía rápida
---

### Librerías en angular

Para la instalación de una librería de angular se requiere lo siguiente:

```bash
npm install @angular/cli@latest -g  # Angular Cli
```

Para la creación de una librería ejecute lo siguiente

```bash
ng new my-library --create-application=false  
```

Una ves creada la librería nos adentramos en la carpeta 

```bash
cd my-library
```

Para generar una librería 

```bash
ng generate library my-commons
```

Para generar una aplicación de prueba 

```bash
ng generate application application-test-example 
```

Para agregar la librería a la aplicación de prueba

```json
{
    "paths" : {
        "my-commons": [ 
            "dist/my-commons"
        ]
    }
}
```

> Tener en cuenta para versiones de angular que usan Ivy deberá deshabilitarla en el archivo `tsconfig.lib.json`  para poder publicar las librerías

```json
{
    "angularCompilerOptions": { 
        "enableIvy": false 
    }
}

```

para hacer el build de una librería

```bash
ng build --project my-commons
```

### CREACIÓN DE UNA APLICACIÓN ANGULAR

Para la creación de un proyecto de angular, activamos el routing y de preferencia scss 

```bash
$ ng new onboarding-app
? Would you like to add Angular routing? Yes
? Which stylesheet format would you like to use? SCSS   [ https://sass-lang.com/documentation/syntax#scss]
```

### BUNDLE-ANALIZER

Como estamos interesados en el rendimiento, también instalemos una dependencia de desarrollo llamada `webpack-bundle-analyzer`.

```
npm i -D webpack-bundle-analyzer
```

> `*webpack-bundle-analyzer*`permite visualizar el tamaño de los archivos de salida del paquete web con un mapa de árbol interactivo con zoom.

La mejor manera de analizar nuestro paquete es agregar el siguiente script de análisis a nuestro `package.json`.

```bash
"analyze": "ng build --prod --stats-json && webpack-bundle-analyzer ./dist/onboarding-app/stats-es2015.json"
```

Si ejecutamos este comando, Angular realiza una compilación de producción y también genera uno `stats-es2015.json`que luego es recogido y visualizado por `webpack-bundle-anlyzer`.

```shell
npm run analize
```

### INSTALAR REPOSITORIO LOCAL VERDACCIO

Para instalar verdaccio globalmente

```shell
npm install -g verdaccio
```

Para utilizarlo

```shell
verdaccio
```

Para configurar el registry ejecute el siguiente comando.

```bash
npm set registry http://localhost:4873/
```

o puede instalar los módulos de la siguiente manera `--registry`

```bash
npm install --registry http://localhost:4873
```

puede también configurarlo en el  `.npmrc`en `registry` 

```bash
//.npmrc
registry=http://localhost:4873
```

o también puede configurar`publishConfig` en su `package.json`

```json
{
  "publishConfig": {
    "registry": "http://localhost:4873"
  }
}
```

#### PUBLICAR UN MODULO EN VERDACCIO

Para la publicación de un modulo en verdaccio deberá ingresar en la carpeta `dist` y ejecutar modulo

```shell
npm publish
```

para remover un modulo de verdaccio

```shell
npm unpublish my-module@1.0.0
```

### ANGULAR CLI

La CLI angular es una herramienta de interfaz de línea de comandos que se usa para inicializar, desarrollar y mantener aplicaciones de angular.

```bash
ng --version        #Para obtener la version
ng help 			#Para ver las opciones de la cli
ng generate --help  #Para ver las opciones de un opcion en especifico
```

Comandos mas utilizados en el flujo de trabajo

```shell
ng generate module my-module
ng generate component my-component
ng generate service my-service
ng generate directive my-directive
ng generate pipe my-pipe
```

Flags mas utilizados en el flujo de trabajo

```shell
--flat     		 #Para crear en el mismo nivel del directorio
#Para Modulos
#--------------------------------------------------------------
--routing  		 #Para crear el routing en el module
#Para componentes / directivas / pipes
#--------------------------------------------------------------
--export		 #Para exportar en el module
--prefix         #prefix para el tag del selector
--skipTests		 #Para omitir el archivo .spec
#Unicamente para componentes
#--------------------------------------------------------------
--inlineTemplate #Html en el mismo componente
--inlineStyle	 #Style en el mismo componente
```


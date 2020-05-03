---
id: initial-setup
title: Como instalar y configurar Docusaurus sin morir en el intento
sidebar_label: Configuración inicial
---
![alt zonas de git](https://v2.docusaurus.io/img/slash-introducing.svg)

## Instalación con Node.Js y NPM

#### Requerimientos

- [Node.js](https://nodejs.org/en/download/) version >= 10.9.0 o superior (que se puede verificar ejecutando node -v). Puede usar [nvm](https://github.com/nvm-sh/nvm) para administrar múltiples versiones de Nodo en una sola máquina instalada

#### Para descargar el proyecto base ejecute lo siguiente:

```bash
# my-website: Nombre del proyecto
# classic: Tema que usaras en el proyecto

$ npx @docusaurus/init@next init my-website classic
```

#### Ubíquense en el directorio del proyecto e instale las dependencias:

```bash
$ npm install
```
#### Ejecutando el servidor de desarrollo
```bash
$ npm start
```
#### Para general el compilado del proyecto
```bash
$ npm run build
```
#### _Para mayor información puede consultar en la documentación de_ <a href="http://docusaurus-2.netlify.com/docs/installation" target="_blank">Docusaurus</a>

## Styling and Layout

#### _Para mayor información puede consultar en la documentación de_ <a href="http://docusaurus-2.netlify.com/docs/styling-layout" target="_blank">Docusaurus</a>

## Subir mi proyecto en GitHub Pages

Una ves que su repositorio se encuentre subido en github (este debe ser de modo publico), necesitara hacer las configuraciones correspondientes en el archivo `docusaurus.config.js`.

configura tu 
```javascript
module.export = {
    url: 'https://vgrados2.github.io/personal-docusaurus/', // Url publica generada por github Pages
    baseUrl: '/personal-docusaurus/', // nombre del repositorio de git
    organizationName: 'vgrados2', // usuario de git.
    projectName: 'personal-docusaurus', // nombre del repositorio de git
}
```
para obtener la `url` publica de github pages debe ingresar a las configuraciones del repositorio, inicialmente debe generala con la rama `master`

![github-pages](/personal-docusaurus/img/docs/github-pages.png)

luego debe ejecutar lo siguiente, esto creara una rama gh-pages con el compilado de su proyecto, en `GIT_USER` debe ingresar su usuario de git.

```bash
$ GIT_USER=vgrados2 CURRENT_BRANCH=source USE_SSH=false npm run deploy
```

> una ves que se subieron sus cambios de manera correcta debera ingresar nuevamente a la configuración del repositorio y configurar la rama gh-pages como principal
y listo. ingrese a la url publica.

## Usando Algolia DocSearch

### Conectándose con Algolia

Para conectar sus documentos con Algolia, [debe ingresar aquí](https://docsearch.algolia.com/apply/). donde tendrá que ingresar la url publica del proyecto y su correo, este proceso
es gratuito, es importante que el correo sea valido, ya que le escribirán consultándole, si es usted quien administra el sitio web, tendrá que responder que si, luego le volverán a escribir
brindándole una `apiKey` y un `indexName` los cuales le permitirán hacer funcionar el buscador en su proyecto. estas 2 configuraciones se deben agregar en el archivo `docusaurus.config.js` dentro de `themeConfig` como `algolia`


```json
{
    "themeConfig": {
        "algolia": {
            "apiKey": "api-key",
            "indexName": "index-name"
        }
    }
}
```

#### Una ves configurado inicialice el servidor de desarrollo
```bash
$ npm start
```

> Nota: Si el buscador no funciona es por que aún puede estar en proceso el pull request esto puede tardar hasta 24horas. en mi caso tarde un par de horas.


#### Una ves configurado inicialice el servidor de desarrollo

#### _Para mayor información de como agregar documentos y otras configuraciones_ <a href="http://docusaurus-2.netlify.com/" target="_blank">Docusaurus</a>


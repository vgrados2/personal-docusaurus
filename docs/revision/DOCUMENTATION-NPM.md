## INSTALANDO DEPENDENCIAS COMO DEBE SER

PARA INSTALAR "devDependencies  y  dependencies"

```javascript
npm install 
```
PARA  INSTALAR "dependencies"
```javascript
npm install --only=prod
```
PARA INSTALAR "devDependencies"
```javascript
npm install --only=dev
```

NOTA: 

> Si ya ha instalado todas sus dependencias y desea evitar tener que volver a descargar sus paquetes de producción de NPM, simplemente escriba: 

```
npm prune --production
```



## INSTALANDO MODULOS CON NPM

> `npm install`guarda cualquier paquete especificado en `dependencies`forma predeterminada. Además, puede controlar dónde y cómo se guardan con algunos indicadores adicionales:

- `-P, --save-prod`: El paquete aparecerá en tu `dependencies`. Este es el valor predeterminado a menos que `-D`o `-O`estén presentes.

- `-D, --save-dev`: El paquete aparecerá en tu `devDependencies`.

- `-O, --save-optional`: El paquete aparecerá en tu `optionalDependencies`.

- `--no-save`: Impide guardar en `dependencies`.

  > Para instalar una version en especifico 

  

  ```
   npm install sax@0.1.1     /  npm install sax@">=0.1.0 <0.2.0"
  ```

  FUENTE : https://docs.npmjs.com/cli/install

## EMPAQUETADO DE APIS

1.- Instalación ROLLUP

```javascript
npm i rollup -D
```

2.- creamos un archivo  rollup.config.js con el siguiente contenido

```javascript
export default {
    entry: 'src/start.js', // EL ARCHIVO DE ENTRADA
    dest: 'build/start.min.js', // EL ARCHIVO DE DESTINO
    format: 'cjs' // FORMATO NODEJS
};
```

3.- agregamos el script en package.jon 

```json
"build": "./node_modules/.bin/rollup -c"
```



## AGREGADO VARIABLES DE ENTORNO EN UN ARCHIVO EXTERNO

1.-  Instalación (DOTENV) 

```javascript
npm i dotenv -D
```

 2.- creamos un archivo .env 

```json
CGS_NORTHWIND_STAGE=DEV
```

> NOTA: Si una variable  agregada en el archivo .env se encuentra en el sistema operativo , predominara la ENV del S.O.

3.- importamos dotenv a nuestro proyecto file env.js.

```javascript
import dotenv from 'dotenv';
dotenv.config();
```

- se puede modificar para que solo importe dotenv  en desarrollo

```javascript
if (process.env.API_GENENERAL_STAGE !== 'PROD'){
	require('dotenv').config()
}
```
> NPM SET REGISTRY DEFAULT npm
npm set registry https://registry.npmjs.org/


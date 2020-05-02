---
id: quick-guide-npm
title: NPM – Guía rápida
sidebar_label: NPM – Guía rápida
---
![alt zonas de git](https://codigoonclick.com/wp-content/uploads/2019/05/npm-nodejs.jpeg)

Inicializar proyecto
-------
```bash
$ npm -v #ver version de npm 
$ npm update -g npm #para actualizacion de npm
$ npm init #crear un nuevo proyecto
$ npm init -y #si a todas las opciones
```

Instalación de paquetes
-------
### Instalacion de paquetes de manera global

```bash
$ npm install -global bootstrap 
$ npm i -g bootstrap #Forma reducida
```
### Instalacion de paquetes de manera local

- **dependencies:** El paquete aparecerá en tu `dependencies`. Este es el valor predeterminado a menos que `-D`o `-O`estén presentes.
```bash
$ npm install bootstrap --save-prod
$ npm i bootstrap -P #Forma reducida
```
- **devDependencies:** El paquete aparecerá en tu `devDependencies`.
```bash
$ npm install bootstrap --save-dev
$ npm i bootstrap -D #Forma reducida
```
- **optionalDependencies:** El paquete aparecerá en tu `optionalDependencies`.
```bash
$ npm install bootstrap --save-optional
$ npm i bootstrap -O #Forma reducida
```
- **perDependencies:** Usabo normalmente para librerias, se agrega la lista de paquetes manualmente, esta 
lista debe estar instalada en aquel que use este modulo.

```json
{
  "peerDependencies": {
    "@angular/common": "^7.2.0"
  }
}

```

### Instalacion de paquetes version especifica
```bash
$ npm install bootstrap@lastest #instalar la ultima version (por defecto)
$ npm install bootstrap@next #actualice a la versión más reciente
$ npm install bootstrap@0.1.0 #instalar version especifica
$ npm install bootstrap@">=0.1.0 <0.2.0"
```
### Eliminar paquete de forma global
```bash
$ npm rm -g [nombreDelPaquete]
$ npm uninstall -g [nombreDelPaquete]
```

### Eliminar paquete local
```bash
$ npm rm [nombreDelPaquete]
$ npm uninstall [nombreDelPaquete]
```
### Actualizacion de paquetes
```bash
$ npm outdated #lista los paquetes desactualizados
$ npm update #Actualizacion de todos los paquetes
$ npm update [nombreDelPaquete]
```
Registry
-------
```bash
npm get registry #Consultar donde esta registrado actualmente
npm set registry https://registry.npmjs.org/ #Setear registry de NPM
npm set proxy http://proxy.yourproxydomain.com  #Setear registry privado
```

Problemas clásicos
-------

### Reparar la cache de npm
```bash
$ npm cache verify
```
### Limpiar la cache de npm forzadamente
```bash
$ npm cache clean --force
```
### npm ERR! code EINTEGRITY
```bash
$ #Reinstalar el modulo correspondiente
```
Mantenimiento de npm
-------
### Libreria para actualizacion de paquetes
```bash
$ npm i -g npm-check-updates
$ ncu
```


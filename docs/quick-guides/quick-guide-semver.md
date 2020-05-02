---
id: quick-guide-semver
title: Semantic Versioning
sidebar_label: SEMVER – Guía rápida
---
![test](/personal-docusaurus/img/docs/semver.jpg)

El versionamiento semántico es un convenio o estándar a la hora de definir la versión de tu código, dependiendo de la naturaleza del cambio que estás introduciendo. De tal forma, se identifican 3 tipos de cambios:

- **Major:** Cambio drástico en el software. No es compatible con código hecho en versiones anteriores.
- **Minor:** Cambio que añade alguna característica nueva al software o modifica alguna ya existente, pero que sigue siendo compatible con código existente. También cuando marcamos algo como obsoleto.
- **Patch:** Cuando arreglamos un bug siendo el cambio retrocompatible.

| Símbolo    | Dependencia | Versiones | Cambios                                                                                                                |
| ---------  | ----------  | --------  | ---------------------------------------------------------------------------------------------------------------------- |
| caret (^)  | ^3.9.2      | 3.\*.\*     | - backwards compatible <br/> - new functionality <br/> - old functionality deprecated, but operational <br/> -large internal refactor bug fix |
| tilde (~)  | ~3.9.2      | 3.9.\*    | bug fix                                                                                                                |

```bash
$ npm -v #ver version de npm 
$ npm update -g npm #para actualización de npm
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

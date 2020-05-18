---
id: quick-guide-semver
title: Semantic Versioning
sidebar_label: SEMVER – Guía rápida
---
![test](/personal-docusaurus/img/docs/semver.jpg)

Seguir la [especificación de versiones semánticas](https://semver.org/) ayuda a otros desarrolladores que dependen de su código a comprender el alcance de los cambios en una versión determinada y ajustar su código si es necesario.

El versionamiento semántico es un convenio o estándar a la hora de definir la versión de tu código, dependiendo de la naturaleza del cambio que estás introduciendo. De tal forma, se identifican 3 tipos de cambios:

- Versión **MAJOR** cuando realiza cambios de API incompatibles,
- Versión **MINOR** cuando agrega funcionalidad de una manera compatible con versiones anteriores, y
- Versión **PATCH** cuando realiza correcciones de errores compatibles con versiones anteriores.

| Símbolo    | Dependencia | Versiones | Cambios                                                                                                                |
| ---------  | ----------  | --------  | ---------------------------------------------------------------------------------------------------------------------- |
| caret (^)  | ^3.9.2      | 3.\*.\*     | - backwards compatible <br/> - new functionality <br/> - old functionality deprecated, but operational <br/> -large internal refactor bug fix |
| tilde (~)  | ~3.9.2      | 3.9.\*    | bug fix                                                                                                                |

Convenciones para commits 

https://www.conventionalcommits.org/en/v1.0.0/


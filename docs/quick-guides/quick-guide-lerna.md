---
id: quick-guide-lerna
title: Guía para Lerna
sidebar_label: Lerna – Guía rápida

---

## Lerna

**Lerna es una herramienta que optimiza el flujo de trabajo en torno a la gestión de repositorios de paquetes múltiples con git y npm.**

Esta herramienta realmente ayuda cuando se trata con versiones semánticas, configurando el flujo de trabajo de construcción, empujando sus paquetes, etc. La idea principal detrás de Lerna es que su proyecto tiene una carpeta de paquetes, que contiene todas sus partes de código aisladas. Y además de los paquetes, tiene una aplicación principal, que por ejemplo puede vivir en la carpeta src. Casi todas las operaciones en Lerna funcionan a través de una regla simple: itera a través de todos sus paquetes y realiza algunas acciones sobre ellos, por ejemplo, aumentar la versión del paquete, actualizar la dependencia de todos los paquetes, construir todos los paquetes, etc.

### Configurar Lerna

Lerna es una herramienta CLI (interfaz de línea de comandos), por lo que la instalo globalmente.

```bash
npm i lerna -g
npm lerna --help  #Para visualizar los comandos
```

#### Opciones

por defecto se encuentra configurado con `Fixed/Locked` este mantendra la misma version en todos los modulos

si quiere que cada uno de estos modulos mantenga una version independiente debera configurarlo de esta forma.

`--independent`/ `-i`- Utiliza el modo de control de versiones independiente.

```json
{
  "npmClient": "npm",
  "command": {
    "publish": {
      "ignoreChanges": ["ignored-file", "*.md"],
      "message": "chore(release): publish",
      "registry": "https://npm.pkg.github.com"
    },
    "version": {
    	"push": false
  	}
  },
  "packages": ["packages/*"]
}
```

`packages`: Matriz de globos para usar como ubicaciones de paquetes.

`command.publish.message`: un mensaje de confirmación personalizado al realizar actualizaciones de versión para publicación.

`command.publish.registry`: utilícelo para establecer una URL de registro personalizada para publicar en lugar de npmjs.org, ya debe estar autenticado si es necesario.

`command.publish.ignoreChanges`: una variedad de globos que no se incluirán en `lerna changed/publish`. Use esto para evitar publicar una nueva versión innecesariamente para cambios, como arreglar un `README.md`

`command.version.push`: evita que se ejecute el push del version automaticamente.

`npmClient`: una opción para especificar un cliente específico para ejecutar comandos (esto también se puede especificar por comando). Cambie a `"yarn"`para ejecutar todos los comandos con hilo. El valor predeterminado es "npm".

## Comandos

Cree un nuevo repositorio de lerna o actualice un repositorio existente a la versión actual de Lerna.

```bash
lerna init
lerna ls     #Para ver los modulos afectados
lerna run    #Para ejecutar un script de cada paquete (npm run start)
```

tener en cuenta que lerna no tomara los modulos que esten marcados como `private: true` en el package.son

### lerna version

```bash
lerna version 1.0.1 # explicit
lerna version patch # semver keyword
lerna version       # select from prompt(s)
```

Cuando se ejecuta, este comando hace lo siguiente:

1. Identifica los paquetes que se han actualizado desde la versión etiquetada anterior.
2. Solicita una nueva versión.
3. Modifica los metadatos del paquete para reflejar la nueva versión, ejecutando los [scripts de ciclo de vida](https://github.com/lerna/lerna/tree/master/commands/version#lifecycle-scripts) apropiados en la raíz y por paquete.
4. Confirma esos cambios y etiqueta genera la etiqueta (tag).
5. Ejecuta el push.

```bash
lerna version [major | minor | patch | premajor | preminor | prepatch | prerelease]
#Cuando le pasamos uno de los parametros podemos usar --yes para evitar la confirmacion.
```

Para utilizar `lerna version` tenemos 2 opciones 

- **from-git**:  Este comando identifica los tags que se encuentran en git publicados por `lerna version` y incrementa la version en base a este.

- **from-package**: Este comando inspecciona cada uno de los `package.json`  y verifica si una de las versiones no esta presente en el registry. Cualquier versión que no esté presente en el registro será publicada. Esto es útil cuando un anterior `lerna publish`no pudo publicar todos los paquetes en el registro.

#### Opciones

- ###### --allow-branch

```json
{
  "command": {
    "version": {
      "allowBranch": "master"
    }
  }
}
```
- ###### --amend

  ```bash
  lerna version --amend
  # commit message es retennido y agrega los cambios al commit actual, `git push` es omitido.
  ```

- ###### --ignore-scripts

  Cuando se pasa, este indicador deshabilitará la ejecución de [scripts de ciclo de vida](https://github.com/lerna/lerna/tree/master/commands/version#lifecycle-scripts) durante `lerna version`.

- ###### --no-git-tag-version

  De manera predeterminada, `lerna version`confirmará los cambios en los archivos package.json y etiquetará la versión. Pase `--no-git-tag-version`para deshabilitar el comportamiento.

- ###### --no-push

  Por defecto, `lerna version`enviará los cambios confirmados y etiquetados al [control remoto git](https://github.com/lerna/lerna/tree/master/commands/version#--git-remote-name) configurado . Pase `--no-push`para deshabilitar este comportamiento.

- ###### --sign-git-commit

  Esta opción es análoga a la `npm version` [opción](https://docs.npmjs.com/misc/config#sign-git-commit) del mismo nombre.

- ###### --sign-git-tag

  Esta opción es análoga a la `npm version` [opción](https://docs.npmjs.com/misc/config#sign-git-tag) del mismo nombre.

- ###### --yes

  ```bash
  lerna version --yes
  # omite la confirmacion
  ```

### lerna publish

```
lerna publish               # publique paquetes que han cambiado desde la última versión 
lerna publish fron-git      # explícitamente publique paquetes etiquetados en el compromiso actual 
lerna publish fron-package # Publique explícitamente paquetes donde la última versión no está presente en el registro
```

> `lerna publish`admite todas las opciones proporcionadas [`lerna version`](https://github.com/lerna/lerna/tree/master/commands/version#options)además de lo siguiente:

#### Opciones

- ###### --contents dir

  ```bash
  lerna publish --contents dist
  #publica la subcarpeta "dist" de cada paquete hoja administrado por Lerna (debe ser configurado en cada paquete)
  ```

- ###### --legacy-auth

  Al publicar paquetes que requieren autenticación pero está trabajando con un registro NPM alojado internamente que solo utiliza la versión heredada de Base64 del nombre de usuario: contraseña. Esto es lo mismo que el `_auth`indicador de publicación de NPM .

  ```bash
  publicar lerna --legacy-auth aGk6bW9t
  ```

  para generar este codigo en base 64 puede hacerlo de la siguiente manera

  ```bash
  echo -n 'username:password' | openssl base64
  ```

- ###### --no-verify-access

  De forma predeterminada, `lerna`verificará el acceso del usuario npm conectado a los paquetes que están por publicarse. Pasar esta bandera deshabilitará esa verificación.

  Si está utilizando un registro de terceros que no es compatible `npm access ls-packages`, tendrá que pasar esta bandera (o conjunto `command.publish.verifyAccess`de `false`en lerna.json).

  > Por favor, use con precaución

- ###### --registry url

Cuando se ejecuta con este indicador, los comandos npm reenviados utilizarán el registro especificado para su (s) paquete (s).

Esto es útil si no desea configurar explícitamente la configuración de su registro en todos sus archivos package.json individualmente, por ejemplo, cuando usa registros privados.

```json
{
  "publishConfig": {
    "registry": "http://my-awesome-registry.com/"
  }
}
```

- ###### --tag-version-prefix

```json
{
  "tagVersionPrefix": "",
  "packages": ["packages/*"],
  "version": "independent"
}
```

### Scripts de ciclo de vida lerna

```bash
#preversion: Ejecutar ANTES de encontrar la versión del paquete. 
#version: Ejecutar DESPUÉS de encontrar la versión del paquete, pero ANTES de confirmar. 
#postversion: Ejecutar DESPUÉS de encontrar la versión del paquete, y DESPUÉS de confirmar.
```

Lerna ejecutará [scripts de ciclo de vida npm](https://docs.npmjs.com/misc/scripts#description) durante `lerna version`el siguiente orden:

1. Detectar paquetes modificados, elegir versión (s)

2. Ejecute el `preversion`ciclo de vida en la raíz

3. Para cada paquete modificado, en orden topológico (todas las dependencias antes que las dependientes):

   1. Ejecutar `preversion`ciclo de vida
   2. Actualizar versión en package.json
   3. Ejecutar `version`ciclo de vida

4. Ejecute el `version`ciclo de vida en la raíz

5. Agregar archivos modificados al índice, si está [habilitado](https://github.com/lerna/lerna/tree/master/commands/version#--no-git-tag-version)

6. Crear confirmación y etiqueta (s), si está [habilitado](https://github.com/lerna/lerna/tree/master/commands/version#--no-git-tag-version)

7. Para cada paquete modificado, en orden 

   léxico

    (alfabético según la estructura del directorio):

   1. Ejecutar `postversion`ciclo de vida

8. Ejecute el `postversion`ciclo de vida en la raíz

9. Empuje commit y tag (s) a control remoto, si está [habilitado](https://github.com/lerna/lerna/tree/master/commands/version#--no-push)

10. Crear versión, si está [habilitada](https://github.com/lerna/lerna/tree/master/commands/version#--create-release-type)


---
id: quick-guide-git
title: GIT – Guía rápida
sidebar_label: GIT – Guía rápida
---
Las zonas de Git
------
![alt zonas de git](https://www.kindpng.com/picc/m/368-3680560_git-push-pull-commit-hd-png-download.png)

- **WORKING DIRECTORY:** Es el directorio de trabajo , lo q aun no se ha subido

- **STAGING AREA:** Es donde se agregan temporalmente archivos persistentes.

- **REPOSITORY (localrepo):** Cuando ya se realiza un commit los archivos pasan del staging a repository

Inicializar repositorio
-------

```bash
$ git init
$ git add .                           # Marca todos los ficheros para el próximo commit.
$ git add index.html                  # Marcar un fichero en especifico
$ git commit -am "Mensaje"            # add y commit
$ git status                          # Estaod actual del repositorio
$ git commit -m "Commit inicial"      # Crea un nuevo commit con los ficheros marcados.
```
Manejo de Ramas en Git
-------
#### Creación de ramas
```bash
$ git branch <nombre>                 # Crear la rama en el punto actual. Es necesario hacer checkout a la misma.
$ git checkout -b <nombre>            # Crear rama en el punto actual y hacerle checkout.
```
#### Actualización de ramas
```bash
$ git branch -m <actual> <nuevo>      # Renombrar la rama
$ git branch -d <nombre>              # Borrar la rama
```
#### Listar ramas
```bash
$ git branch                          # Listar todas las ramas
$ git branch -v                       # Mostrar último commit en cada rama y su situación respecto a su rama remota (si hay)
$ git branch --merged                 # Mostrar ramas que se han fusionado con la actual, y por tanto pueden borrarse
$ git branch --no-merged              # Mostrar ramas con trabajos sin funsionar. Intentar borrarlas dará un error.
```
#### Moverse a una rama o a un commit específico
```bash
$ git checkout <COMMIT>            # No toca los cambios locales
$ git checkout -f <COMMIT>         # Sobreescribe los cambios locales
```
#### Fusionar ramas (merge)
```bash
$ git merge <nombre>               # Fusiona la rama indicada en la rama actual
```

Manejo de Commits
-------

#### Deshacer cambios
```bash
$ git revert <COMMIT>              # Deshacer de forma segura los cambios introducidos por un commit cualquiera
$ git reset --hard                 # Deshace los cambios locales
$ git reset --hard HEAD~1          # Elimina el último commit
```

#### Editar ultimo commit (aun no pushed)
```bash
# Realizar el add previamente
$ git commit --amend          # cuando ya metiste el comentario pero no has hecho aun push, puedes editarlo
```

Manejo de Tags de git
-------
#### tags
```bash
$ git tag                              # Mostrar lista de tags
$ git tag -n                           # Mostrar lista y descripción
$ git tag -d <nombre>                  # Eliminar Tag
$ git tag -a <nombre>                  # Crear Tag no firmado
$ git push --tags                      # Subir Tags al repositorio remoto
$ git push origin :refs/tags/<nombre>  # Eliminar Tag remoto borrado localmente
```


Guardar cambios actuales para recuperarlos después
-------

```bash
$ git stash                    # Guarda cambios hechos desde el ultimo commit
$ git stash pop                # Recupera los cambios guardados
$ git stash list               # Lista los estados guardados
$ git stash apply              # Aplica cambios guardados sin borrarlos de la lista
```

Configuraciones
-------

#### Configurar el usuario y dirección de correo en git global
```bash
git config --global user.name "username"
git config --global user.email "name@domain.com"
git config --global color.diff true
```

#### Configurar el usuario y dirección de correo para un repo
```bash
git config user.name "username"
git config user.email "name@domain.com"
```
#### Configurar repositorios remotos
```bash
git remote -v #ver ramas remotas
git remote set-url origin https://github.com/USERNAME/REPOSITORY.git #Cambiar url remota
git remote add origin https://github.com/user/repo.git    #Setear una nueva url remota
git remote rm $name #Eliminar url remota
```

# GIT RESUMEN

##### LAS 3 ZONAS DE GIT

##### 			WORKING DIRECTORY  =>  STAGING AREA (INDEX) (U E)  => REPOSITORY

WORKING DIRECTORY: Es el directorio de trabajo , lo q aun no se ha subido

STAGING AREA: Es donde se agregan temporalmente archivos persistentes.

REPOSITORY: Cuando ya se realiza un commit los archivos pasan del staging a repository

##### CONFIGURACIONES

```shell
git config --global user.name "victor grados"
```

```shell
git config --global user.email  v@v.com
```
para saber en que repo esta.
```shell
git config --get remote.origin.url
```
```shell
git config -l
```

```shell
git init / git fetch --all / git pull / git push
```

```shell
git add my-fiiles / git add *.xml / git add .
```

```shell
git commit -m "yyy"
```
##### Mostrar información
```shell
git log 
```
```shell
git log --oneline
```
```shell
git show
```

##### RESTABLECER CAMBIOS

> para agregar al STAGING media 

```shell
git reset --soft ID_COMMIT
```

> para agregar al working directory

```shell
git reset --mixed ID_COMMIT
```

> destruye el commit con los cambios

```shell
git reset --hard ID_COMMIT
```

##### BRANCHES

- CREAR RAMAS

```shell
git branch new-branch-name
```
-  VER RAMAS
```shell
git branch
```
- CAMBIAR ENTRE RAMAS
```shell
git checkout branch-name
```
- CREAR Y POSICIONARTE EN UNA RAMA EN ESPECIFICO
```shell
git checkout -b new-branch-name
```

```shell
git branch -d branch-name
```

##### REMOTE

```shell
git remote add origin URL-GIT
get remote set-url URL-NEW
```

```shell
git remote -v
```

##### MERGE

> Nos ubicamos en la rama a donde pasaremos los cambios y hacemos merge

```bash
git merge second-branch
```

##### STASH (cuarta zona)

```bash
git stash list
```
> Para agregar archivos modificados  al stash 
```bash
git stash 
```
> Para agregar archivos todos los archivos  al stash 
```bash
git stash --include-untracked
```

- EXTRACCION 
APLICA Y QUITA
  ```bash
  git stash pop
  ```
APLICA PERO NO QUITA DEL STASH
  ```bash
  git stash aply
  ```

  ```bash
  git stash clear
  ```

  ```bash
  git stash drop stash@{0}
  ```

##### SUBMODULOS

```shell
git submodule add https://mi-demo-submodule.git
```

```shell
git clone https://demo.git --recursive
```

##### TAG

```shell
git tag -l
```

```shell
git tag <tag-name>
```

```shell
git tag -a <tag-name> -m "Message"
```

```shell
git show <tag-name>
```

##### AMEND (agregar algo al commit previo)

```shell
git add .
```

```shell
git commit --amend
```

##### REBASE

```
REBASE => new "base" for a commit

git rebase <branch>

git checkout dev

git rebase master
```

##### REBASE INTERACTIVO

git rebase --interactive <branch>

- PICK: Conserva el commit 
- Reword: cambiar mensaje
- Edit: Editar mas cosas a parte del mensaje
- Squash: combinar commit con el previo (conservando el mensaje)

##### FIXUP + AUTOSQUASH

```bash
git commit --fixup <name-commit>
```

```bash
git rebase --interactive --autosquash <commit-future>^
```

##### HOOKS (Disparadores)

.git/hooks/

> Nos permiten ejecutar ciertos eventos luego de alguna accion de git

##### PARA PRACTICAR SIN MALOGRAR

> Crear una rama backup

git branch backup

git branch 

git reset backup --hard

##### ELIMINAR ARCHIVO SUBIDO 

```shell
git rm --cached .env
```


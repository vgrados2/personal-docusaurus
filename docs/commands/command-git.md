---
id: command-git
title: Git / Comandos Básicos
sidebar_label: Comandos GIT
---
Config
-------

#### Global config
```bash
git config --global user.name "username"
git config --global user.email "name@domain.com"
git config --global color.diff true
```

#### Config for a dedicated repo
```bash
git config user.name "username"
git config user.email "name@domain.com"
```

#### Show git branch in terminal `name@host ~/git/fun-stuff [master] $`
```bash
# put this into the ~/.bashrc
parse_git_branch() {
  git branch 2> /dev/null | sed -e '/^[^*]/d' -e 's/* \(.*\)/[\1] /'
}
export PS1="\[\033[01;32m\]\u@\h\[\033[01;34m\] \w \[\033[01;31m\]\$(parse_git_branch)\[\033[00m\]$\[\033[00m\] "
```

#### If cygwin ssl error occurs
```bash
git config --global http.sslVerify false
```

#### Check SSH access
```bash
ssh -T git@github.com
```

#### switch remote url
```bash
git remote set-url origin http://akottr@bitbucket.org/akottr/some-repo.git
```

#### rename remote
```bash
# 1. show remotes
git remote -v
# origin    https://akottr@bitbucket.org/akottr/some-repo.git (fetch)
# origin    https://akottr@bitbucket.org/akottr/some-repo.git (push)

# 2. rename
git remote rename origin destination
```

Basic commands
--------------

#### Clone
```bash
git clone http://github.com/akottr/edu.git
```

#### Add to staging area
```bash
# add files (but does not remove files)
git add .
# add and remove files (removes deleted files, too)
git add -A .

# show status after add
git status
```

#### Commit (commits to the local repository)
```bash
# commit
git commit -m "some commit comment here"
# commit and add in one step
git commit -am "some commit comment here"
```

#### Push (pushes to the repository on github)
```bash
git push origin master
```

#### Revert (be aware of the blank after --)
```bash
git checkout -- /my/directory/or/file 
```

#### log history
```bash
# log history
git log -10 /my/directory/or/file
# log history including rename follow
git log -10 --follow /my/directory/or/file
# show history with filenames
git log -10 --color --stat
```

Basics
------

### Areas
changed -> staged -> commit (HEAD)

### Push
```bash
git push origin local-name:remote-name
```

* You can never push when you are not on the lastest HEAD -> `(!rejected master -> master (fetch first))`
  * You have to do a 'pull + merge + push' or a 'pull + rebase + push'

### Pull
1.  changes are in the changes area or in the staging area and there are conflicts
  * pull not possible. `error: Your local changes to the following files would be overwritten by merge. 
    Please, commit your changes or stash them before you can merge`
  * do a commit or stash
2. changes are in commit area
  * no conflicts 
    * automatic merge and commit with new commit message
  * conflict `CONFLICT (content): Merge conflict in README.md`
    * show all conflicts: `git diff --name-status --diff-filter=U`
    * merge the conflicts manual and commit
3. changes are stashed
```bash
git stash
git pull
git stash pop
# then merge conflicts by manual and commit
```


Repositories
------------

### Create a new repoistory
```bash
git init
git add .
git commit -m "init"
git remote add origin ssh://git@bitbucket.org/akottr/some-repo.git
git push -u origin --all
```

### push to different repository
```bash
git remote add bitbucket http://akottr@bitbucket.org/akottr/some-repo.git
git push bitbucket master
```

Diff and Merging
----------------

#### understanding diff
Flow: `changed -> staged -> commit (HEAD)`

```bash
# CHANGED vs STAGED
git diff
# STAGED vs HEAD
git diff --cached
# CHANGED vs HEAD
git diff HEAD
# HEAD vs HEAD-1
git diff HEAD^
```

#### show diff
```bash
# show diff not staged 
git diff --color
# show diff of staging area
git diff --color --cached /my/directory/or/file
```

#### show diff to remote branch
```bash
# The git fetch command updates the local remote references.
git fetch
git diff --stat --color master origin/master
```

#### fetch + merge + push
```bash
# 1. Fetch from repo 
git fetch
# 2. See what has changed
git diff --stat --color master origin/master
git diff --name-status master origin/master
# 3. See if fast-forward is possible (no merge confilcts)
git status master origin/master
# 4. merge
git merge origin/master
# or you can do once 'git config merge.defaultToUpstream true'. then 'git merge' can be called without parameters
# 5. show conflicts (if any) 
git diff --name-only --diff-filter=U
# 6. resolve confilcts and then
git commit -am "manual merge"
# 7. push your changes to upstream
git push origin master
```
#### pull + merge + push
```bash
# 1. Pull from repo 
git pull
# 2. show conflicts (if any) 
git diff --name-only --diff-filter=U
# 3. resolve confilcts and then
git commit -am "manual merge"
# 4. push your changes to upstream
git push origin master
```

####  pull + rebase + push
```bash
git fetch
git rebase
# -> MANUAL MERGE <-
git add .
git rebase --continue
git push
```

```bash
# long version (copied from intellij console)
git push --progress origin master:master
git fetch --progress --prune origin
git rebase origin/master
# -> MANUAL MERGE <-
git add --ignore-errors -- README.md
git rebase --continue
git push --progress origin master:master
```

#### consolidate/merge commits.
* @see http://stackoverflow.com/questions/7555800/pull-rebase-push-in-one-command-or-just-a-few
```bash
git rebase -i HEAD~2
```

Branches and Tags
-----------------
#### show branches
```bash
# Show local branch(es)
git branch
# Show all branch(es)
git branch -a
```
#### checkout branch
```bash
git checkout -b origin/v0.9
# create branch and checkout branch
git checkout -b experimental origin/v0.9
# READ ONLY checkout branch
git checkout origin/v0.9
```

#### push branch
```bash
git push <remote> <local branch name>
# example
git push origin develop-branch
# if there already exist a tag with this name use the long format
git push origin refs/heads/develop-branch:refs/heads/develop-branch
```

#### push from branch to origin/master
```bash
git push <remote> <local branch name>:<remote branch to push into>
# example
git push origin develop-branch:master
```

#### delete branch
```bash
# delete
git branch -d develop-branch
# force delete
git branch -D develop-branch
# delete remote branch
git push origin --delete develop-branch
```

#### clean working directory
```
git clean -xdf
```

#### Show tags
```bash
git tag 
```
#### checkout tag
```bash
git checkout v0.9
```
#### create tag and push to upstream
```bash
git tag v0.9
git push origin --tags
```

#### push tag
```bash
git push <remote> <local branch name>
# example
git push origin develop-tag
# if there already exist a branch with this name use the long format
git push origin refs/tags/develop-tag:refs/tags/develop-tag
```

Troubleshooting
---------------
#### undo last commit
```bash
# undo last commit
git reset --soft HEAD^
# undo last (one) commit
git reset --soft HEAD~1
# undo last two commits
git reset --soft HEAD~2
```
#### git protocol is blocked by company
error message could be like this
```
Failed to execute "git ls-remote --tags --heads git://github.com/
```
see http://stackoverflow.com/questions/4891527/git-protocol-blocked-by-company-how-can-i-get-around-that/10729634#10729634
```bash
git config --global url."https://github".insteadOf git://github
```

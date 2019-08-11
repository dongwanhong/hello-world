# Hello world

Collect and collate the basic environment for some project development.

## How to download one of them?

Here we briefly introduce two schemes.

#### GUI

Select the folder path you need and download it through [DownGit](https://minhaskamal.github.io/DownGit/#/home).

#### Command Line

```bash
$ git init <repo> 
$ cd <repo>
$ git remote add origin <url to remote repo> 
$ git config core.sparsecheckout true 
$ echo "dir/*" >> .git/info/sparse-checkout 
$ git pull origin master 
```

You can refer to the following examples：

```bash
$ git init webpack-basis
$ cd webpack-basis
$ git remote add origin https://github.com/dongwanhong/hello-world.git
$ git config core.sparsecheckout true
$ echo "webpack-basis" >> .git/info/sparse-checkout
$ git pull origin master
```
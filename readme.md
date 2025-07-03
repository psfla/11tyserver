# PSFLA 11ty sourcedocs

## legal
you can do whatever you want with the code here, but you must give atribution to any original art or writing that you redistribute!\
i (or contributors) may ask you to cease redistrubuting any assets at any time, and you must comply

## setting up

### linux
1 - prerequisites:\
[nodejs](https://nodejs.org/), and [zsh](https://www.zsh.org/)

2 - installing & running
1. run ``zsh linuxinstall.zsh`` to grab nodejs dependencies 
2. run ``zsh runserver.zsh`` to start up the server

<small>(pst. if you're in the zsh shell, you don't neet to run ``zsh runserver.zsh``... you can just run ``./runserver.zsh``! this works with all zsh files)\
(you can check which shell you're in by running ``echo $SHELL``)</small>

### windows
1. create a folder in the main directory called `_site`
2. install [nodejs](https://nodejs.org/en/download/) 
3. run `Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser` if needbe
4. run `npm install @11ty/eleventy-plugin-rss` 
5. to start serving, run `npm run build`

that's it!

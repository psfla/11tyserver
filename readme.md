# PSFLA 11ty sourcedocs

[PSFLA](https://psfla.net) is an independent site made to host MSPAs! though it has roots dating back to 2022, the PSFLA site as we know it today started development in 2024. this site is dedicated to being quick-loading, and to providing an actually solid and tracker-free platform for a select few MSPAs  

though it was originally written in PHP, PSFLA is now served from [nekoweb](https://nekoweb.org/) and thus uses [11ty](https://11ty.dev) to generate site files!

PSFLA is a personal project created and maintained by [thepersonever](https://thepersonever.net/)

## repo mirrors
[github](https://github.com/psfla/11tyserver) - pushes to nekoweb  
[tangled](https://tangled.org/@thepersonever.net/psfla) - an atproto-based git network, which lets users host their repos on whatever hardware they want! (tangled also provides their own git server)

## legal
PSFLA's source code is licensed under the most recent version of the [(C+CGL)](https://github.com/rosefloase/C-CGLhttps://github.com/rosefloase/C-CGL) license, with the following clause:  
CREATIVE ITEMS may NOT be "hotlinked" or otherwise redistributed for commercial profit. additionally, if any party involved in the creation of CREATIVE ITEMS requests you to stop distributing them, you must

(in non-binding terms: nobody likes you mspfa!!! get out of here!!!!!)

## setting up

### windows
1. create a folder in the main directory called `_site`
2. install [nodejs](https://nodejs.org/en/download/) 
3. run `Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser` if needbe
4. run `npm install @11ty/eleventy-plugin-rss` 
5. to start serving, run `npm run build`

that's it!

### linux
1 - prerequisites:\
[nodejs](https://nodejs.org/), [npm](https://www.npmjs.com/), and [zsh](https://www.zsh.org/)

2 - installing & running
1. run ``zsh linuxinstall.zsh`` to grab nodejs dependencies 
2. run ``zsh runserver.zsh`` to start up the server

<small>(pst. if you're in the zsh shell, you don't neet to run ``zsh runserver.zsh``... you can just run ``./runserver.zsh``! this works with all zsh files)\
(you can check which shell you're in by running ``echo $SHELL``)</small>

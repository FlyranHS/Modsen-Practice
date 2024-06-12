'use strict'
let str = "Billy, do u wanna get some rest";
function strToAArray(text){
    let res = [];
    let regex = /,?(?:\s+)/i;
    res = text.split(regex);
    return res;
}
console.log(strToAArray(str));

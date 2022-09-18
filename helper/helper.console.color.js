import clc from "cli-color";


export const console_red = (string)=>{
    console.log(clc.red(string))
}

export const console_blue = (string)=>{
    console.log(clc.blue(string))
}

export const console_black = (string)=>{
    console.log(clc.black(string))
}

export const cls  = ()=>{console.clear()}

export const console_white = (string)=>{
    console.log(clc.white(string))
}

export const console_yellow = (string)=>{
    console.log(clc.yellow(string))
}


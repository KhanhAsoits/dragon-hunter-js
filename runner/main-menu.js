import { console_blue } from "../helper/helper.console.color.js"
import { console_read_int } from "../helper/helper.console.read.js";
export const main_menu = ()=>{
    console_blue("1.NEW GAME")
    console_blue("2.LOAD SAVE")
    console_blue("3.OPTIONS")
    console_blue("4.EXIT")
    return console_read_int(">>>");
}
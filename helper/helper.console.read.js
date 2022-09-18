import PromptSync from "prompt-sync";
const prompt = PromptSync()

export const console_read = (string)=>{
    return prompt(string)
}

export const console_read_int  = (string)=>{
    let number = parseInt(prompt(string));
    return typeof number == "number" ? number : -1
}

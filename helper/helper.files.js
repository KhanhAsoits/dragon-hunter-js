import fs from 'fs'
import saveConfig from "../saves/config.json" assert{type:'json'}
export const readDataFromJson = (filePath)=>{
    if(fs.existsSync(filePath)){
        let dataFromFile = JSON.parse(JSON.stringify(require(filePath)))
        if(dataFromFile) return dataFromFile;
        console.log("Data not accept!")
        return [];
    }
}

export const create_save_file = ()=>{
    let save_of_number = saveConfig.numberOfSave
    let file_name = `dragon_hunter_saved_file${save_of_number}.json`;
    fs.writeFileSync("saves/" + file_name,JSON.stringify([]),(err)=>{console.error(err)})
    saveConfig.numberOfSave += 1
    writeDataToJson(saveConfig,"saves/config.json")
}


export const checkIsSave = () => {
    return saveConfig.numberOfSave > 0;
}

export const writeDataToJson = (data,path,override = true)=>{
    if(override){
        if(fs.existsSync(path)){
            fs.writeFileSync(path,JSON.stringify(data),(err)=>{console.error(err)})
        }else{
            console.warn("FILE SAVE NOT EXIT!")
        }
    }else{
        if(fs.existsSync(path)){
            console.warn("FILE SAVE HAS EXIT!")

        }else{
            fs.writeFileSync(path,JSON.stringify(data),(err)=>{console.error(err)})
        }
    }
}
import { cls, console_red, console_yellow } from "./helper/helper.console.color.js";
import { checkIsSave, create_save_file } from "./helper/helper.files.js";
import { main_menu } from "./runner/main-menu.js";
import { game_title } from "./runner/runner.game.title.js";

(function(){

    const new_game = () => {
        cls()
        console.log("---------------NEW GAME ---------------")
        console.log("creating new save ....")
        create_save_file()

    }

    const load_game = () => {
        
        console_yellow ("----------LOAD GAME ----------")

        if(checkIsSave()){
            // get all save
        }else{
            console.warn("NO SAVED!")
        }
    }

    const options = () => {
        
    }
    // load first option 

    const load_main_option = (option)=>{
        switch(option){ 
            case 1:
                new_game()        
            break;
            case 2:
                load_game()
                break;
            case 3:
                option()
            break;
            case 4:
                console.log("GAME EXIT!")
                isRunning = false;
            break;
            case -1 :
                console_red("INPUT NOT VALID!")
            break;
            default:
                console_yellow("NO OPTION!")
        }
    }

    let isRunning = true;
    // init game
    game_title("DRAGON HUNTER")
    // game title
    while(isRunning){
    //    main game
        let option = main_menu()
        load_main_option(option)
    }
})();
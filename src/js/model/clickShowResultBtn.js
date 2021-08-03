import { BONUS_NUMBER, WINNING_NUMBER , WRAP_WINNING_BONUS_NUMBER} from "../utils/info.js";
import { $$WINNING_NUMBER_INPUT_BOX, $BONUS_NUMBER_INPUT_BOX, $OPEN_RESULT_MODAL } from "../utils/dom.js";
import { clickToOpenResultModal } from "../controller/clickOrEnter.js";
import { compareNumber } from "./compareNumber.js";
import { TRUE, FALSE } from "../utils/constants.js";
import { differentNumberAlert } from "../utils/common.js";
import { getNumberArray , resetArray} from "../controller/getNumberArray.js";
export let resultModalBoolean = TRUE

export const clickShowResultBtn = () => {
    $OPEN_RESULT_MODAL.addEventListener('click', (e) => {
        
        if(resultModalBoolean === TRUE){
            getNumberArray()

            let CHECK_OVERLAP = new Set([...BONUS_NUMBER, ...WINNING_NUMBER[0]])
            if(CHECK_OVERLAP.size === [...BONUS_NUMBER, ...WINNING_NUMBER[0]].length){
                clickToOpenResultModal()
                compareNumber()
                resultModalBoolean = FALSE
            }else{
                resetArray()
                differentNumberAlert()

            }
        }else{
            clickToOpenResultModal()
            
        }

        
        
        
    })
}







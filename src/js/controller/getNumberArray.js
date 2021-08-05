import { $$WINNING_NUMBER_INPUT_BOX, $BONUS_NUMBER_INPUT_BOX } from "../utils/dom.js";
import { BONUS_NUMBER, WINNING_NUMBER, WRAP_WINNING_BONUS_NUMBER} from "../utils/info.js";


export const getNumberArray = () => {
    BONUS_NUMBER.push(Number($BONUS_NUMBER_INPUT_BOX.value))
    WINNING_NUMBER.push(Array.from($$WINNING_NUMBER_INPUT_BOX).map(x => Number(x.value)))
}

export const resetArray = () => {
    BONUS_NUMBER.length = 0 
    WINNING_NUMBER.length = 0
}

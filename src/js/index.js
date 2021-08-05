
import {$$ , $, $TICKET_INFO_MODAL, $INPUT_WINNING_NUMBER_MODAL, $TICKET_NUMBER_INPUT_SECTION
        ,  $$SELF_LOTTO , $MONEY_INPUT
} from "./utils/dom.js"
import {clickToGetInputMoney, enterToGetInputMoney, restartBtn, clickToSelfNumber} from "./controller/clickOrEnter.js"
import {initialView} from "./components/initialView.js"
import {clickShowResultBtn} from "./model/clickShowResultBtn.js"
import { clickAutoLottoNumber } from "./controller/clickOrEnter.js"



export const init = () => {
    initialView($TICKET_INFO_MODAL, $INPUT_WINNING_NUMBER_MODAL, $TICKET_NUMBER_INPUT_SECTION)
    clickToGetInputMoney()
    enterToGetInputMoney()
    restartBtn()
        
        
}

init()
clickToSelfNumber()
clickAutoLottoNumber()
clickShowResultBtn()

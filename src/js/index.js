
import {$TICKET_INFO_MODAL, $INPUT_WINNING_NUMBER_MODAL} from "./utils/dom.js"
import {clickToGetInputMoney, enterToGetInputMoney, restartBtn} from "./controller/clickOrEnter.js"
import {initialView} from "./components/initialView.js"
import {clickShowResultBtn} from "./model/clickShowResultBtn.js"



export const init = () => {
initialView($TICKET_INFO_MODAL, $INPUT_WINNING_NUMBER_MODAL)
clickToGetInputMoney()
enterToGetInputMoney()
clickShowResultBtn()
restartBtn()
}

init()
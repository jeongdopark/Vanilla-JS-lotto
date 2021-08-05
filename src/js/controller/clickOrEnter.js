import { TICKET_PRICE, TRUE, FALSE, ENTER_KEYCODE } from "../utils/constants.js"
import { $MONEY_INPUT ,$INPUT_WINNING_NUMBER_MODAL ,$TICKET_INFO_MODAL, 
        $BUTTON, $CLOSE_BTN_MODAL, $WRAP_MODAL, $RESTART_BTN_MODAL, $$,
        $$WINNING_NUMBER_INPUT_BOX, $BONUS_NUMBER_INPUT_BOX, $TICKET_NUMBER_INPUT_SECTION,
        $LOTTO_COUNT, $LOTTO_NUMBER_INPUT_BUTTON, $$SELF_LOTTO, $LOTTO_NUMBER_AUTO_BUTTON
        } from "../utils/dom.js"
import { ticketInfoAlert, changeMoney, 
        classListAdd, ticketAmountInfoSection , ticketCount, classListRemove, lessMoneyAlert,
        differentNumberAlert
        } from "../utils/common.js"
import { createTicketUI } from "./createTicketUI.js"

import { init } from "../index.js"
import { BONUS_NUMBER, EVERY_ARRAY, WINNING_NUMBER } from "../utils/info.js"
import { resultModalBoolean } from "../model/clickShowResultBtn.js"
import { resetArray } from "./getNumberArray.js"
import { AutoLottoNumber } from "../model/autoLottoNumber.js"

export let switchBoolean = FALSE;



// export const clickOrEnterEvent = () =>{         // 구매 금액 입력 후 click or enter  
//   if($MONEY_INPUT.value < TICKET_PRICE || $MONEY_INPUT.value == ""){    // 최소 금액을 1000원으로 설정 & 아무 값이 없을 경우 경고창 발생
//       lessMoneyAlert()
//   }
//   else{
//       classListRemove($INPUT_WINNING_NUMBER_MODAL, 'HIDDEN')
//       switchBoolean = TRUE
//       ticketInfoAlert(ticketCount($MONEY_INPUT.value), changeMoney($MONEY_INPUT.value))
//       classListAdd($TICKET_INFO_MODAL,'SHOW') // $TICKET_INFO.classList.add('SHOW')    
//       ticketAmountInfoSection(ticketCount($MONEY_INPUT.value))     // 구매 개수를 나타낸다
//       createTicketUI()    // TicketUI를 나타낸다
//   }
// }
export let COUNT;
export let TOTAL_COUNT;
export const test = () => {
  if($MONEY_INPUT.value < TICKET_PRICE || $MONEY_INPUT.value == ""){    // 최소 금액을 1000원으로 설정 & 아무 값이 없을 경우 경고창 발생
    lessMoneyAlert()
  }
  else{
    switchBoolean = TRUE
    ticketInfoAlert(ticketCount($MONEY_INPUT.value), changeMoney($MONEY_INPUT.value))
    classListRemove($TICKET_NUMBER_INPUT_SECTION, 'HIDDEN')
    COUNT = ticketCount($MONEY_INPUT.value)
    TOTAL_COUNT = ticketCount($MONEY_INPUT.value)
    // lottoCount(ticketCount(count))
    $LOTTO_COUNT.innerText = COUNT
  }
}

export const clickToGetInputMoney = () => {
  $BUTTON.addEventListener('click', () =>{        // 버튼 click 
    if(switchBoolean === FALSE){      // 변수 inputSwitch를 통해서 티켓구매 여부를 체크 
      // clickOrEnterEvent()

      test()
        }else{
          return true
        }
      })
}
export const enterToGetInputMoney = () => {
  document.addEventListener('keydown', (e) =>{        // enter 버튼 
    const keycode = e.keyCode;
      if(keycode === ENTER_KEYCODE && switchBoolean === FALSE){
        e.preventDefault()       
        // clickOrEnterEvent()
        test()
      }
      if(keycode === ENTER_KEYCODE && switchBoolean === TRUE){      
        e.preventDefault()
      }
    })
}

export const clickToCloseModal = () => {
  $CLOSE_BTN_MODAL.addEventListener('click', () => {
    $WRAP_MODAL.style.opacity = 0    
    $WRAP_MODAL.style.visibility = 'hidden'
  })
}

export const clickToOpenResultModal = () => {
    $WRAP_MODAL.style.opacity = 100   
    $WRAP_MODAL.style.visibility = 'visible'
    clickToCloseModal()
}

export const resultModalHide = () => {
    $WRAP_MODAL.style.opacity = 0  
    $WRAP_MODAL.style.visibility = 'hidden'
}

export const restartBtn = () => {
    $RESTART_BTN_MODAL.addEventListener('click', () => {
      // location.reload(true)
      const $$test = $$('.lottoNumber')
      const $$test1 = $$('.ticketUI')
  
      $$test.forEach((e) => {
          e.innerText = ""
      })
      $$test1.forEach((e) => {
        e.innerText = ""
      })
      $$WINNING_NUMBER_INPUT_BOX.forEach((e) => {
          e.value = ""
      })
      $BONUS_NUMBER_INPUT_BOX.value = ""
      $MONEY_INPUT.value = ""
      EVERY_ARRAY.everyArray.push(Array.from($$SELF_LOTTO).map(x => Number(x.value)))
      $$SELF_LOTTO.forEach((x) => {
        x.value = ""
      })
      Array.from($$test).forEach(el => el.remove());
      Array.from($$test1).forEach(el => el.remove());
      resultModalHide()
      resetArray()
      EVERY_ARRAY.everyArray.length = 0
      EVERY_ARRAY.count = 0
      switchBoolean = FALSE;
      resultModalBoolean.boolean = TRUE
      init()
    })
}

export const clickToSelfNumber = () => {
  $LOTTO_NUMBER_INPUT_BUTTON.addEventListener('click', (e) => {
    const checkOverlap = new Set(Array.from($$SELF_LOTTO).map(x => Number(x.value)))
    if(checkOverlap.size === Array.from($$SELF_LOTTO).map(x => Number(x.value)).length 
      && Math.max(...Array.from($$SELF_LOTTO).map(x => Number(x.value))) < 46
      && Math.min(...Array.from($$SELF_LOTTO).map(x => Number(x.value))) > 0
    ){
      $LOTTO_COUNT.innerText = --COUNT

      EVERY_ARRAY.everyArray.push(Array.from($$SELF_LOTTO).map(x => Number(x.value)))
      $$SELF_LOTTO.forEach((x) => {
        x.value = ""
      })
      classListAdd($TICKET_INFO_MODAL,'SHOW')
      ticketAmountInfoSection(TOTAL_COUNT - COUNT)
      createTicketUI()
      EVERY_ARRAY.count += 1
      if(EVERY_ARRAY.count == TOTAL_COUNT){
        classListAdd($TICKET_NUMBER_INPUT_SECTION, 'HIDDEN')
        classListAdd($INPUT_WINNING_NUMBER_MODAL, 'SHOW')
        EVERY_ARRAY.count = 0
      }
      
    }else{
      differentNumberAlert()
    }
  })
}

export const clickAutoLottoNumber = () => {
  $LOTTO_NUMBER_AUTO_BUTTON.addEventListener('click', () => {
    classListAdd($TICKET_NUMBER_INPUT_SECTION, 'HIDDEN')
    classListAdd($TICKET_INFO_MODAL,'SHOW')
    ticketAmountInfoSection(TOTAL_COUNT)
    new AutoLottoNumber().addArray()
    createTicketUI()
    classListAdd($INPUT_WINNING_NUMBER_MODAL, 'SHOW')
    EVERY_ARRAY.count = 0
  })
}
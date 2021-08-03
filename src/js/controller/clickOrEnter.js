import { TICKET_PRICE, TRUE, FALSE, ENTER_KEYCODE } from "../utils/constants.js"
import { $MONEY_INPUT ,$INPUT_WINNING_NUMBER_MODAL ,$TICKET_INFO_MODAL, 
        $BUTTON, $CLOSE_BTN_MODAL, $WRAP_MODAL, $RESTART_BTN_MODAL, $TICKET_UI_WRAP, $TICKET_UI
        } from "../utils/dom.js"
import { ticketInfoAlert, changeMoney, 
        classListAdd, ticketAmountInfoSection , ticketCount, classListRemove, lessMoneyAlert
        } from "../utils/common.js"
import { createTicketUI } from "./createTicketUI.js"
import { init } from "../index.js"

export let switchBoolean = FALSE;

export const clickOrEnterEvent = () =>{         // 구매 금액 입력 후 click or enter  
  if($MONEY_INPUT.value < TICKET_PRICE || $MONEY_INPUT.value == ""){    // 최소 금액을 1000원으로 설정 & 아무 값이 없을 경우 경고창 발생
      lessMoneyAlert()
  }
  else{
      classListRemove($INPUT_WINNING_NUMBER_MODAL, 'HIDDEN')
      switchBoolean = TRUE
      ticketInfoAlert(ticketCount($MONEY_INPUT.value), changeMoney($MONEY_INPUT.value))
      classListAdd($TICKET_INFO_MODAL,'SHOW') // $TICKET_INFO.classList.add('SHOW')    
      ticketAmountInfoSection(ticketCount($MONEY_INPUT.value))     // 구매 개수를 나타낸다
      createTicketUI()    // TicketUI를 나타낸다
  }
}

export const clickToGetInputMoney = () => {
  $BUTTON.addEventListener('click', () =>{        // 버튼 click 
    if(switchBoolean === FALSE){      // 변수 inputSwitch를 통해서 티켓구매 여부를 체크 
      clickOrEnterEvent()             // inputSwitch가 "True"인 상태면 더이상 click이나 keydown을 통해 clickOrEnterEvent()함수가 실행 안된다
        }else{
          return true
        }
      })
}

export const enterToGetInputMoney = () => {
  document.addEventListener('keydown', (e) =>{        // enter 버튼 
    const keycode = e.keyCode;
      if(keycode === ENTER_KEYCODE && switchBoolean === FALSE){
        e.preventDefault()        // preventDefault() 없을 경우 새로고침됨
        clickOrEnterEvent()
      }
      if(keycode === ENTER_KEYCODE && switchBoolean === TRUE){      // elif가 왜 안되는건지
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
      location.reload(true)
      resultModalHide()
      // $TICKET_UI_WRAP.removeChild($TICKET_UI)
      switchBoolean = FALSE;
      init()
    })
}
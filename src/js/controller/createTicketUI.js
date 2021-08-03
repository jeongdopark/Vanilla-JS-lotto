import { $$ } from "../utils/dom.js";
import { showTicketUI } from "../components/showTicketUI.js";
import { $LOTTO_NUMBER_TOGGLE_BUTTON } from "../utils/dom.js";


export const createTicketUI = () =>{      // 구매 개수만큼 ticket UI를 나타내는 function
    new showTicketUI().TicketSectionHTML()   
    const $$EVERY_LOTTO_NUMBER = $$('.lottoNumber') // TicketSectionHTML() 실행 이후 시점부터 .lottoNumber존재
    $LOTTO_NUMBER_TOGGLE_BUTTON.addEventListener('click', function(){    // toggle의 value를 얻는 function
    new showTicketUI().toggleBtn($LOTTO_NUMBER_TOGGLE_BUTTON.checked, $$EVERY_LOTTO_NUMBER)
  })
}
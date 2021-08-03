import { AutoLottoNumber } from "../model/autoLottoNumber.js";
import { createElement, classListAdd, classListRemove} from "../utils/common.js";
import { $TICKET_UI_WRAP, $$ } from "../utils/dom.js";
import { EVERY_ARRAY } from "../utils/info.js";

export class showTicketUI{
    constructor(){
    }
    
    TicketSectionHTML(){            //  티켓UI를 나타내는 부분
        new AutoLottoNumber().addArray()  //모든 티켓의 로또번호가 담겨있는 배열 , 첫 실행
        EVERY_ARRAY.forEach((x) => {
            const $TICKET_UI = createElement('span', 'mx-1 text-4xl ticketUI', '🎟️');
            $TICKET_UI_WRAP.appendChild($TICKET_UI)
            $TICKET_UI.appendChild(this.createChildHTML(x))
        })
    }
    
    createChildHTML(array){                 // 숫자를 나타내는 부분
        let ticketNumber = ""
        array.forEach((element) => {
            ticketNumber += ` ${element}`
        })

        const $TICKET_SIX_NUMBER = createElement('span', 'm-6 text-2xl lottoNumber', ticketNumber)
        return $TICKET_SIX_NUMBER
    }

    toggleBtn = (checked, numberArray) => {     //toggle버튼 
        (checked) ? numberArray.forEach((e) => {
            classListRemove(e, 'HIDDEN')        // e.classList.remove('HIDDEN')
        }) 
        :
        numberArray.forEach((e) => {
            classListAdd(e,'HIDDEN')        // e.classList.add('HIDDEN')
        })
    }
}
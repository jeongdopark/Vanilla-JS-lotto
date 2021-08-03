
import { getRandomNumber , ticketCount} from "../utils/common.js";
import { $MONEY_INPUT } from "../utils/dom.js";
import { SIX_NUMBER, MIN_NUMBER, MAX_NUMBER } from "../utils/constants.js";
import { EVERY_ARRAY } from "../utils/info.js";


export class AutoLottoNumber{
    construcotr(){
    }
    getLottoNumberArray(){
        const sixNumber = new Set()  
            
        while(sixNumber.size < SIX_NUMBER){
            sixNumber.add(getRandomNumber(MIN_NUMBER, MAX_NUMBER))
        }
        return sixNumber // 중복 안되는 숫자 랜덤 6개 set을 이용하여 코딩
    }
    addArray(){
        for(let i = 0; i < ticketCount($MONEY_INPUT.value); i++){
            EVERY_ARRAY.push([...this.getLottoNumberArray()])
        }
        return EVERY_ARRAY // 전체가 담겨있는 배열 티켓 개수만큼 배열 개수
    }
}
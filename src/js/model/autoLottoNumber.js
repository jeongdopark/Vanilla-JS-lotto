
import { getRandomNumber , ticketCount} from "../utils/common.js";
import { $MONEY_INPUT } from "../utils/dom.js";
import { SIX_NUMBER, MIN_NUMBER, MAX_NUMBER } from "../utils/constants.js";
import { EVERY_ARRAY } from "../utils/info.js";
import { TOTAL_COUNT} from "../controller/clickOrEnter.js";

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
        console.log('addArray');
        for(let i = EVERY_ARRAY.count; i < TOTAL_COUNT; i++){
            EVERY_ARRAY.everyArray.push([...this.getLottoNumberArray()])
        }
        return EVERY_ARRAY.everyArray // 전체가 담겨있는 배열 티켓 개수만큼 배열 개수
    }
}
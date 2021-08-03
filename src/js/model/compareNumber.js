import { EVERY_ARRAY, WINNING_NUMBER, BONUS_NUMBER } from "../utils/info.js";
import { resultModalCount } from "../controller/resultModal.js";
export const compareNumber = () => {
    let THREE = 0, FOUR = 0, FIVE = 0, FIVE_BONUS = 0, SIX = 0

    EVERY_ARRAY.forEach((userTicketNumberArray) => {
        const compareArray = userTicketNumberArray.filter(x => WINNING_NUMBER[0].includes(x))
        let COUNT = compareArray.length
        
        switch(COUNT){
            case 3:
                THREE += 1
                break;
            case 4:
                FOUR++
                break;
            case 5:
                if(userTicketNumberArray.includes(BONUS_NUMBER[0])){
                    FIVE_BONUS++
                }else{
                    FIVE++
                }
                break;
            case 6:
                    SIX++
                break;
        }
    })

    resultModalCount(THREE,FOUR,FIVE,FIVE_BONUS,SIX)
}
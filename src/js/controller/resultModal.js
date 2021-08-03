import { $COUNT_THREE, $COUNT_FOUR, $COUNT_FIVE, $COUNT_FIVE_BONUS, $COUNT_SIX } from "../utils/dom.js";



export const resultModalCount = (three, four, five, five_bonus, six) => {
    $COUNT_THREE.innerText = `${three}개`
    $COUNT_FOUR.innerText = `${four}개`
    $COUNT_FIVE.innerText = `${five}개`
    $COUNT_FIVE_BONUS.innerText = `${five_bonus}개`
    $COUNT_SIX.innerText = `${six}개`
}
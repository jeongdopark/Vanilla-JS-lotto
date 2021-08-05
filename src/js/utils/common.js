
import { $TICKET_AMOUNT } from './dom.js'
import { TICKET_PRICE } from './constants.js'



export const ticketCount = money => {       // 티켓 개수
    return Math.floor(money / TICKET_PRICE)
}

export const changeMoney = money => {       // 거스름돈
    return money % TICKET_PRICE
}
export const lessMoneyAlert = () =>{        //1000원 미만 경고창
    return window.alert("1000원 이상을 입력해주세요")
}
export const ticketInfoAlert = (count, change) => {     //티켓 구매 정보 알림창
    return window.alert(`${count}장 구매완료 . 거스름돈 : ${change}원`)
}
export const ticketAmountInfoSection = count => {
    $TICKET_AMOUNT.textContent = `총 ${count}개를 구매하였습니다`
}
export const differentNumberAlert = () => {
    return window.alert("1 ~ 45 범위의 서로 다른 7개의 숫자를 입력해주세요")
}
export const collectRangeNumberAlert = () => {
    return window.alert("1 ~ 45 범위의 숫자를 입력해주세요")
}

export const createElement = (tagName, className, text = ' ' ) =>{
    const $element = document.createElement(tagName);
    $element.className = className;
    $element.append(text);
    return $element
}
export const classListAdd = (target, className) =>{
    return target.classList.add(className)
}
export const classListRemove = (target, className) =>{
    return target.classList.remove(className)
}   
export const getRandomNumber = (MIN_NUMBER, MAX_NUMBER) => {        // 숫자 랜덤
    return Math.floor(Math.random() * (MAX_NUMBER - MIN_NUMBER + 1) + MIN_NUMBER)
}




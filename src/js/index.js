


const $showResultButton = document.querySelector('.open-result-modal-button')
const $modalClose = document.querySelector('.modal-close')
const $modal = document.querySelector('.modal')
const $lottoNumbersToggleButton = document.querySelector(
  '.lotto-numbers-toggle-button'
)
const mt_9 = document.querySelectorAll('.mt-9') // step1 실행 전, display none 처리해야하는 부분
const ticketInfo = document.querySelector('.ticket-info') // 티켓 UI와 구매정보가 담겨있다.
const btn = document.querySelector('.btn')  // 
const ticketAmount = document.querySelector('.ticket-amount')
const ticket_UI_Wrap = document.querySelector('.ticket-UI-wrap')
const money_Input = document.getElementById("money-input")

// const onModalShow = () => {
//   $modal.classList.add('open')
// }

// const onModalClose = () => {
//   $modal.classList.remove('open')
// }

// $showResultButton.addEventListener('click', onModalShow)
// $modalClose.addEventListener('click', onModalClose)


for(let i = 0; i < mt_9.length; i++){       // modal 부분은 display none 처리
  mt_9[i].style.display = 'none'
}


// function oneTimeEventListener(dom, type){
//     dom.addEventListener(type, () =>{
//       clickOrEnterEvent()
//       dom.removeEventListener(type, () => {
//         return true
//       })
//     })
// }





btn.addEventListener('click', () =>{        // 버튼 click 
    clickOrEnterEvent()
}, {once : true})


document.addEventListener('keydown', (e) =>{        // enter 버튼 
  e.preventDefault()
  const keycode = e.keyCode
  if(keycode == 13){
    clickOrEnterEvent()
  }
}, {once : true})


function clickOrEnterEvent(num){
  const money = money_Input.value // input에 입력될 값을 받아오는 변수
  const multiple = Math.floor(money / 1000) // 입력 값을 1000으로 나누고 몫을 구한다 (티켓 개수)
  const change = money % 1000 // 입력 값을 1000으로 나누고 나머지를 구한다. (거스름 돈)
  if(money < 1000 || money == ""){            // 최소 금액을 1000원으로 설정 & 아무 값이 없을 경우 경고창 발생
    window.alert("1000원 이상을 입력해주세요")
  }else{
    window.alert(`${multiple}장 구매완료 . 거스름돈 : ${change}원`)
  }
  
  displayBlock(ticketInfo)
  ticketAmountInfo(multiple)
  createTicketUI(multiple)
  
}



function ticketAmountInfo(amount){    // 구매 개수를 알려주는 function
  ticketAmount.textContent = `총 ${amount}개를 구매하였습니다`
}



function displayBlock(c){        // display none 이었던 section을 display block으로 변경하는 function
  c.style.display = 'block'
}



function createTicketUI(multiple){      // 구매 개수만큼 ticket UI를 나타내는 function
    for(let i = 0; i < multiple; i++){
    const ticket_UI = document.createElement('span')  
    ticket_UI.className = `mx-1 text-4xl ticket-UI ticket${i}`
    ticket_UI.textContent = "🎟️"
    ticket_UI_Wrap.appendChild(ticket_UI)
  }
}



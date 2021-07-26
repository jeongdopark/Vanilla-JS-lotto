

const $showResultButton = document.querySelector('.open-result-modal-button')
const $modalClose = document.querySelector('.modal-close')
const $modal = document.querySelector('.modal')
const $lottoNumbersToggleButton = document.querySelector('.lotto-numbers-toggle-button')


const MT9 = document.querySelectorAll('.mt-9') // step1 실행 전, display none 처리해야하는 부분
const ticketInfo = document.querySelector('.ticket-info') // 티켓 UI와 구매정보가 담겨있다.
const btn = document.querySelector('.btn')  // 
const ticketAmount = document.querySelector('.ticket-amount')
const ticketUIWrap = document.querySelector('.ticket-UI-wrap')
const money_Input = document.getElementById("money-input")

let inputSwitch = "False"
let toggleCheckedValue = $lottoNumbersToggleButton.checked     // toggle의 boolean값 

init()

function init(){

    for(let i = 0; i < MT9.length; i++){       // modal 부분은 display none 처리
      MT9[i].style.display = 'none'
    }
    
    btn.addEventListener('click', () =>{        // 버튼 click 
        if(inputSwitch === "False"){      // 변수 inputSwitch를 통해서 티켓구매 여부를 체크 
          clickOrEnterEvent()             // inputSwitch가 "True"인 상태면 더이상 click이나 keydown을 통해 clickOrEnterEvent()함수가 실행 안된다
        }else{
          return true
        }
    })
    
    document.addEventListener('keydown', (e) =>{        // enter 버튼 
      const keycode = e.keyCode;
      if(keycode === 13 && inputSwitch === "False"){
        e.preventDefault()        // preventDefault() 없을 경우 새로고침됨
        clickOrEnterEvent()
      }if(keycode === 13 && inputSwitch === "True"){      // elif가 왜 안되는건지
        e.preventDefault()
      }
    })
}




function clickOrEnterEvent(num){
    const money = money_Input.value   // input에 입력된 값을 받아온다
    const count = Math.floor(money / 1000)   // 입력 값을 1000으로 나누고 몫을 구한다 (티켓 개수)
    const change = money % 1000   // 입력 값을 1000으로 나누고 나머지를 구한다. (거스름 돈)
    
    if(money < 1000 || money == ""){    // 최소 금액을 1000원으로 설정 & 아무 값이 없을 경우 경고창 발생
      window.alert("1000원 이상을 입력해주세요")

    }else{
      inputSwitch = "True"
      window.alert(`${count}장 구매완료 . 거스름돈 : ${change}원`)
      displayBlock(ticketInfo)    // display block으로 변경
      ticketAmountInfo(count)     // 구매 개수를 나타낸다
      createTicketUI(count)       // TicketUI를 나타낸다
    }
}


  function ticketAmountInfo(amount){    // 구매 개수를 알려주는 function
  ticketAmount.textContent = `총 ${amount}개를 구매하였습니다`
}


  function displayBlock(c){        // display none 이었던 section을 display block으로 변경하는 function
  c.style.display = 'block'
}



function createTicketUI(count){      // 구매 개수만큼 ticket UI를 나타내는 function

    for(let i = 0; i < count; i++){

      const ticketUI = document.createElement('span')
      const eachTicketNumber = document.createElement('span')
      
      ticketUI.className = `mx-1 text-4xl ticketUI ticket${i}`
      ticketUI.textContent = "🎟️"

      for(let j = 0; j < count; j++){     // 구매 ticket 개수에 따라서 for문 반복 UI 생성

        let sixTicketArray = []           // 서로 다른 6개의 숫자가 들어갈 빈 배열 
        let ticketNumber = ""             // 위에 배열로 부터 6자리 ticket number가 입력될 변수
              
        while(sixTicketArray.length < 6){     
            const randomNumber = Math.floor(Math.random() * 45 ) +1
            if(sixTicketArray.indexOf(randomNumber) === -1){
              sixTicketArray.push(randomNumber)
            }
        }
        sixTicketArray.forEach((num) => {
          ticketNumber += ` ${num}` 
      })
        
      eachTicketNumber.className = `m-6 text-2xl ticket`
      eachTicketNumber.innerText = ticketNumber
      }
      
      ticketUI.appendChild(eachTicketNumber)
      ticketUIWrap.appendChild(ticketUI)
  }
  

  $lottoNumbersToggleButton.addEventListener('click', function(){    // toggle의 value를 얻는 function
    const ticket = document.querySelectorAll('.ticket')
    
    let toggleCheckedValue = $lottoNumbersToggleButton.checked      // checkbox 

    if(toggleCheckedValue){
      ticketUIWrap.style.flexDirection = "column"
      ticket.forEach((e) => {
  
        e.classList.remove('displayNone')
      })
    }else{
      ticketUIWrap.style.flexDirection = "row"
      ticket.forEach((e) => {
        e.classList.add('displayNone')
        
      })
    }
})
}




// const onModalShow = () => {
//   $modal.classList.add('open')
// }

// const onModalClose = () => {
//   $modal.classList.remove('open')
// }

// $showResultButton.addEventListener('click', onModalShow)
// $modalClose.addEventListener('click', onModalClose)
// Get class of all inputs
const totalBill = document.querySelector('.bill-input')
const customTip = document.querySelector('.custom-input')
const totalPeople = document.querySelector('.people-input')

//Get ID of all buttons 
const fivePercent = document.getElementById('five-percent')
const tenPercent = document.getElementById('ten-percent')
const fifteenPercent = document.getElementById('fifteen-percent')
const twentyFivePercent = document.getElementById('twentyfive-percent')
const fiftyPercent = document.getElementById('fifty-percent')
const resetButton = document.getElementById('reset-btn')

//Get ID of the text on screen
const totalTip = document.getElementById('final-tip')
const totalPerPerson = document.getElementById('grand-total')

let finalTip = 0;
let totalBillWithTip = 0;

// function that throws error, bill input --> Number of people input --> custom input

const throwErrorMessage = () => {
  totalBill.addEventListener('input', () => {
    if (totalBill.value <= 0) {
      document.getElementById('bill-error').classList.remove('active')
      document.querySelector('.bill-input').style.border = "2px solid red"
    }else {
      document.getElementById('bill-error').classList.add('active')
      document.querySelector('.bill-input').style.border = "2px solid white"
    }
  })
  totalPeople.addEventListener('input', () => {
    if (totalPeople.value <= 0) {
      document.getElementById('people-error').classList.remove('active')
      document.querySelector('.people-input').style.border = "2px solid red"
    }else {
      document.getElementById('people-error').classList.add('active')
      document.querySelector('.people-input').style.border = "2px solid white"
    }
  })
  customTip.addEventListener('input', () => {
    if (customTip.value <= 0) {
      document.getElementById('custom-error').classList.remove('active')
      document.querySelector('.custom-input').style.border = "2px solid red"

    }else {
      document.getElementById('custom-error').classList.add('active')
      document.querySelector('.custom-input').style.border = "2px solid white"
    }
  })
}

throwErrorMessage()

// All buttons and custom input

fivePercent.addEventListener('click', () => {
  displayResultOnScreen(5)
})
tenPercent.addEventListener('click', () => {
  displayResultOnScreen(10)
})
fifteenPercent.addEventListener('click', () => {
  displayResultOnScreen(15)
})
twentyFivePercent.addEventListener('click', () => {
  displayResultOnScreen(25)
})
fiftyPercent.addEventListener('click', () => {
  displayResultOnScreen(50)
})
customTip.addEventListener('input', () => {
  displayResultOnScreen(customTip.value)
})

//reset button function

resetButton.addEventListener('click', () => {
  finalTip = 0
  totalTip.textContent = `$0.00`
  totalBillWithTip = 0
  totalPerPerson.textContent = `$0.00`

  totalBill.value = ""
  totalPeople.value = ""
  customTip.value = ""
})

//main function that is used to calculate prices.

const displayResultOnScreen = percentage => {
  if (totalBill.value && totalPeople.value) {
    finalTip = ((percentage * totalBill.value) / 100) / totalPeople.value
    totalTip.textContent = `$${finalTip.toFixed(2)}`
    totalBillWithTip = (totalBill.value / totalPeople.value) + finalTip
    totalPerPerson.textContent = `$${totalBillWithTip.toFixed(2)}`
  }else {
    totalTip.textContent = `$0.00`
    totalPerPerson.textContent = `$0.00`
  }
}

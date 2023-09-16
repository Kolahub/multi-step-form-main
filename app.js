// *** SELECT ITEMS ***
const secOne = document.querySelector('.aside__step--one')
const secTwo = document.querySelector('.aside__step--two')
const secThree = document.querySelector('.aside__step--three')
const secFour = document.querySelector('.aside__step--four')
const stepOne = document.querySelector('.sidebar__start-content__one')
const stepTwo = document.querySelector('.sidebar__start-content__two')
const stepThree = document.querySelector('.sidebar__start-content__three')
const stepFour = document.querySelector('.sidebar__start-content__four')
const required = document.querySelectorAll('.aside__step--one__required')
const nextPlanBtn = document.querySelector('.aside__step--one__nextPlan')
const nextAddonBtn = document.querySelector('.aside__step--two__nextAddon')
const nextSumBtn = document.querySelector('.aside__step--three__nextSum')
const backInfoBtn = document.querySelector('.aside__step--two__backInfo')
const backPlanBtn = document.querySelector('.aside__step--three__backPlan')
const backAddonBtn = document.querySelector('.aside__step--four__backAddon')
const confirmBtn = document.querySelector('.aside__step--four__nextCon')
const changePlan = document.querySelector('.change')
const completed = document.querySelector('.completed')
const InputName = document.querySelector('.input__log--name')
const InputEmail = document.querySelector('.input__log--email')
const InputTel = document.querySelector('.input__log--tel')

const arcade = document.querySelector('.arcade')
const advanced = document.querySelector('.advanced')
const pro = document.querySelector('.pro')

const service = document.querySelector('.service')
const serviceChoice = document.querySelector('.service--choice')
const storage = document.querySelector('.storage')
const storageChoice = document.querySelector('.storage--choice')
const profile = document.querySelector('.profile')
const profileChoice = document.querySelector('.profile--choice')

const toggleBtn = document.querySelector('.toggle__btn')
const monthlyText = document.querySelector('.toggle__text--monthly')
const yearlyText = document.querySelector('.toggle__text--yearly')
const yearlyPrice = document.querySelectorAll('.yearly--price')
const price = document.querySelectorAll('.price') 

const AddonYearlyPrice = document.querySelectorAll('.addon__yearly--price') 
const AddonMonthlyPrice = document.querySelectorAll('.addon__monthly--price') 
const choiceDate = document.querySelectorAll('.choiceDate')

// ****** selecting the values from each value in the final step (step 4) 
let num1 = document.querySelector('.num1')
let num2 = document.querySelector('.num2')
let num3 = document.querySelector('.num3')
let num4 = document.querySelector('.num4')
let sum = document.querySelector('.sum')

console.log(sum)


// ******* This function is  called when the user select values of the choice picked then add the values (amount) to the final section with the name  
const addonSec = function (x, y) {
    service.addEventListener('click', function () {
        if (this.checked) {
            serviceChoice.classList.remove('hidden')
            num2.textContent = x
            console.log (num2.textContent)
        } else {
            serviceChoice.classList.add('hidden')
            num2.textContent = "0"
            console.log (num2.textContent)
        }
    })
    
    storage.addEventListener('click', function () {
        if (this.checked) {
            storageChoice.classList.remove('hidden')
            num3.textContent = y
            console.log (num3.textContent)
        } else {
            storageChoice.classList.add('hidden')
            num3.textContent = '0'
            console.log (num3.textContent)
        }
        
    })
    
    profile.addEventListener('click', function () {
        if (this.checked) {
            profileChoice.classList.remove('hidden')
            num4.textContent = y
            console.log (num4.textContent)
        } else {
            profileChoice.classList.add('hidden')
            num4.textContent = '0'
            console.log (num4.textContent)
        }
    })
}

addonSec('1', '2')

// **** This function when called either shows monthly payment method or yearly payment method. whatever payment medthod the user pick is add to the final step (step 4) and every other payment method will be in year (per year or /yr)
const toggleFunc = function () {
    for (i = 0; i < yearlyPrice.length; i++) {
        var x = yearlyPrice[i]
        if (x.style.display === 'block') {
            x.style.display = "none";
            for (j = 0; j < price.length; j++) {
                price[j].classList.remove('hidden')
            }
            for (k = 0; k < AddonMonthlyPrice.length; k++) {
                AddonMonthlyPrice[k].classList.remove('hidden')
            }
            for (l = 0; l < AddonYearlyPrice.length; l++) {
                AddonYearlyPrice[l].classList.add('hidden')
            }

            document.querySelector('.price--arcade').textContent = '$9/mo'
            document.querySelector('.price--advanced').textContent = '$12/mo'
            document.querySelector('.price--pro').textContent = '$15/mo'

            addonSec('1', '2')

                for (m = 0; m < choiceDate.length; m++) {
                    choiceDate[m].textContent = 'mo'
                }

                document.querySelector('.totalDate').textContent = '(per month)'

            monthlyText.style.color = 'hsl(213, 96%, 18%)'
            yearlyText.style.color = 'hsl(229, 24%, 87%)' 
        } else {
            x.style.display = "block";
            for (j = 0; j < price.length; j++) {
                price[j].classList.add('hidden')
            }
            for (k = 0; k < AddonMonthlyPrice.length; k++) {
                AddonMonthlyPrice[k].classList.add('hidden')
            }
            for (l = 0; l < AddonYearlyPrice.length; l++) {
                AddonYearlyPrice[l].classList.remove('hidden')
            }

            document.querySelector('.price--arcade').textContent = '$90/yr'
            document.querySelector('.price--advanced').textContent = '$120/yr'
            document.querySelector('.price--pro').textContent = '$150/yr'

            addonSec('10', '20')

            for (m = 0; m < choiceDate.length; m++) {
                choiceDate[m].textContent = 'yr'
            }

            document.querySelector('.totalDate').textContent = '(per year)'

            monthlyText.style.color = 'hsl(229, 24%, 87%)'
            yearlyText.style.color = 'hsl(213, 96%, 18%)'
        }
    }
    
    
}

stepOne.classList.add('num')

nextPlanBtn.addEventListener('click', function() {

        if (InputName.value === "" && InputEmail.value === "" && InputTel.value === "") {
            for (let i = 0; i < required.length; i++) {
            required[i].classList.remove('hidden')
            setTimeout(function() {
                required[i].classList.add("hidden")}, 3000 
            )
            }
        }
        else if (InputName.value === "") {
            for (let i = 0; i < required.length; i++) {
                required[0].classList.remove('hidden')
                setTimeout(() => {required[0].classList.add("hidden")}, 3000)
            }
        } else if (InputEmail.value === "") {
            for (let i = 0; i < required.length; i++) {
                required[1].classList.remove('hidden')
                setTimeout(() => {required[1].classList.add("hidden")}, 3000)
            }
        } else if (InputTel.value === "") {
            for (let i = 0; i < required.length; i++) {
                required[2].classList.remove('hidden')
                setTimeout(() => {required[2].classList.add("hidden")}, 3000)
            }
        } else if (InputName.value !== "" && InputEmail.value !== "" && InputTel.value !== "") {
            stepOne.classList.remove('num')
            stepTwo.classList.add('num')
            secOne.classList.add('hidden')
            secTwo.classList.remove('hidden')
        }
})

nextAddonBtn.addEventListener('click', function() { 
    stepOne.classList.remove('num')
    stepTwo.classList.remove('num')
    stepThree.classList.add('num')
    secTwo.classList.add('hidden')
    secThree.classList.remove('hidden')
})

nextSumBtn.addEventListener('click', function() { 
    stepOne.classList.remove('num')
    stepTwo.classList.remove('num')
    stepThree.classList.remove('num')
    stepFour.classList.add('num')
    secThree.classList.add('hidden')
    secFour.classList.remove('hidden')

    sum.textContent = `${Number(num1.textContent) + Number(num2.textContent) + Number(num3.textContent) + Number(num4.textContent)}`
    console.log(sum.textContent)
})

backInfoBtn.addEventListener('click', function () {
    stepOne.classList.add('num')
    stepTwo.classList.remove('num')
    secOne.classList.remove('hidden')
    secTwo.classList.add('hidden')
})

backPlanBtn.addEventListener('click', function () {
    stepOne.classList.remove('num')
    stepTwo.classList.add('num')
    stepThree.classList.remove('num')
    secTwo.classList.remove('hidden')
    secThree.classList.add('hidden')
})



backAddonBtn.addEventListener('click', function () {
    stepOne.classList.remove('num')
    stepTwo.classList.remove('num')
    stepThree.classList.add('num')
    stepFour.classList.remove('num')
    secThree.classList.remove('hidden')
    secFour.classList.add('hidden')
})

changePlan.addEventListener('click', function () {
    stepOne.classList.remove('num')
    stepTwo.classList.add('num')
    stepThree.classList.remove('num')
    stepFour.classList.remove('num')
    secTwo.classList.remove('hidden')
    secFour.classList.add('hidden')
})

confirmBtn.addEventListener('click', function() {
    secFour.classList.add('hidden')
    completed.classList.remove('hidden')
})

toggleBtn.addEventListener('click', function () {
    toggleFunc();
})

arcade.addEventListener('click', function () {
    if (document.querySelector('.price--arcade').textContent === '$9/mo') {
        document.querySelector('.plan__choice').textContent = 'Arcade (monthly)' 
        document.querySelector('.plan__price').textContent = '$9/mo' 
        num1.textContent = 9
    } else if (document.querySelector('.price--arcade').textContent === '$90/yr') {
        document.querySelector('.plan__choice').textContent = 'Arcade (yearly)' 
        document.querySelector('.plan__price').textContent = '$90/yr' 
        num1.textContent = 90
    }
    console.log (num1.textContent)
})

advanced.addEventListener('click', function () {
    if (document.querySelector('.price--advanced').textContent === '$12/mo') {
        document.querySelector('.plan__choice').textContent = 'Advanced (monthly)' 
        document.querySelector('.plan__price').textContent = '$12/mo' 
        num1.textContent = 12
    } else if (document.querySelector('.price--advanced').textContent === '$120/yr') {
        document.querySelector('.plan__choice').textContent = 'Advanced (yearly)' 
        document.querySelector('.plan__price').textContent = '$120/yr' 
        num1.textContent = 120
    }
    console.log (num1.textContent)
})

pro.addEventListener('click', function () {
    if (document.querySelector('.price--pro').textContent === '$15/mo') {
        document.querySelector('.plan__choice').textContent = 'Pro (monthly)' 
        document.querySelector('.plan__price').textContent = '$15/mo' 
        num1.textContent = 15
    } else if (document.querySelector('.price--pro').textContent === '$150/yr') {
        document.querySelector('.plan__choice').textContent = 'Pro (yearly)' 
        document.querySelector('.plan__price').textContent = '$150/yr' 
        num1.textContent = 150
    }
    console.log (num1.textContent)
})
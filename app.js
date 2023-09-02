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
const InputName = document.querySelector('.input__log--name')
const InputEmail = document.querySelector('.input__log--email')
const InputTel = document.querySelector('.input__log--tel')

const arcade = document.querySelector('.arcade')
const advanced = document.querySelector('.advanced')
const pro = document.querySelector('.pro')

stepOne.classList.add('num')

nextPlanBtn.addEventListener('click', function() {

        if (InputName.value === "" && InputEmail.value === "" && InputTel.value === "") {
            for (let i = 0; i < required.length; i++) {
            required[i].classList.remove('hidden')
            }
        }
        else if (InputName.value === "") {
            for (let i = 0; i < required.length; i++) {
                required[0].classList.remove('hidden')
            }
        } else if (InputEmail.value === "") {
            for (let i = 0; i < required.length; i++) {
                required[1].classList.remove('hidden')
            }
        } else if (InputTel.value === "") {
            for (let i = 0; i < required.length; i++) {
                required[2].classList.remove('hidden')
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
})




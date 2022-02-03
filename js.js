const pass = document.querySelector('#password');
const passInfo = document.querySelector('.password-info');
const minValue = 8;
const letters = /[a-z]/i;
const numbers = /[0-9]/;
const special = /[!@#$%^&*()]/;

const showResult = () => {
    if(pass.value.length > minValue && pass.value.match(letters) && pass.value.match(numbers) && pass.value.match(special)){
        passInfo.textContent = 'Strong Password'
        passInfo.style.color = 'green'
    } else if(pass.value.length > minValue && pass.value.match(letters) && pass.value.match(numbers)) {
        passInfo.textContent = 'Medium Password'
        passInfo.style.color = 'gold'
    } else {
        passInfo.textContent = 'Weak Password'
        passInfo.style.color = 'red'
    }
}

const checkPassword = () => {
    if(pass.value !== '') {
        showResult()
    } else {
        passInfo.textContent = 'Enter your password...'
        passInfo.style.color = ''
    }
}

pass.addEventListener('keyup',checkPassword)
'use strict';

const button = document.querySelector('.login');
const body = document.querySelector('body')
const emails = document.querySelector('.result');
const passwords = document.querySelector('.password');
const text = document.querySelector('.text')

let password = '123';
let email = '12@email.com';

localStorage.setItem('password', password);
localStorage.setItem('email', email);
console.log(localStorage)

button.addEventListener('click', (e) => {
    e.preventDefault();
    let url = './home.html'
    if(passwords.value == '' || emails.value == ''){
        text.innerHTML = 'Input is required'
    }
    else if(passwords.value !== localStorage.password || emails.value !== localStorage.email){
        text.innerHTML = 'Email or passwords are incorrect'
    }
 
    else if(passwords.value === localStorage.password && emails.value === localStorage.email){
    window.location.assign(url)
    emails.value = '';
    }
})




const rememberMe = document.querySelector('.remember');
const forgetMe = document.querySelector('.forget');
const form = document.querySelector('form');
const getName = document.querySelector('entername');
const submitBtn = document.querySelector('#submitname');
const forgetBtn = document.querySelector('#forgetname');

const h1 = document.querySelector('h1');
const greeting = document.querySelector('.personal-greeting');

form.addEventListener("submit", function (e) {
    e.preventDefault();

});

submitBtn.addEventListener('click', function(){
    localStorage.setItem('name', getName.value);

    nameDisplayCheck();
})

forgetBtn.addEventListener('click', function(){
    localStorage.removeItem('name');

    nameDisplayCheck();    
})

function nameDisplayCheck() {
    if (localStorage.getItem('name')) {
        let name = localStorage.getItem('name');
        h1.textContent = 'Welcome ${name}';
        greeting.textContent = 'This was not easy and took alot of videos to understand';
        forgetMe.style.display = 'block';
        rememberMe.style.display = 'none';
    } else {

    h1.textContent = 'Welcome to the Website';

    forgetMe.style.display = 'none';
    rememberMe.style.display = 'block';


    }
}

localStorage.setItem('name', 'Bane')
console.log(localStorage.getItem('name'));


sessionStorage.setItem('name', 'Joker');
console.log(sessionStorage.getItem('name'));




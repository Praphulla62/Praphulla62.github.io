const hamburgerButton = document.querySelector('.ham-btn');
const navigationMenu = document.querySelector('.nav-items');
const modeBtn = document.querySelector('.screen-mode-btn')
const mainBody = document.querySelector('.main-body')
let isContentChanged = false;

hamburgerButton.addEventListener('click', toggleMenu);

function toggleMenu() {
    hamburgerButton.classList.toggle('hamburger');
    hamburgerButton.classList.toggle('ham-btn-after');
    navigationMenu.classList.toggle('nav-items');
    navigationMenu.classList.toggle('nav-items-ham');
}
const changeBackground = ()=>{
    mainBody.classList.toggle('main-dark-light');
    if(isContentChanged){
        modeBtn.innerHTML = '<i class="fa-regular fa-moon"></i>'
    }
    else{
        modeBtn.innerHTML = '<i class="fa-regular fa-sun"></i>'
    }
    isContentChanged = !isContentChanged;
}
modeBtn.addEventListener('click', changeBackground)

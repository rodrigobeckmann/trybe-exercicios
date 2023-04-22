
const userPreferences = () => {
    const preferencesBtns = document.querySelectorAll('.preferences button');
    for (btns of preferencesBtns) {
        btns.addEventListener('click', (event) => {
            localStorage.setItem(event.target.parentElement.id, event.target.innerText);
            updatePreferences();
        })
    }
    
}

const updatePreferences = () => {
    const background = document.body;
    const words = document.querySelector('main');

    background.style.backgroundColor = localStorage.getItem('background-color');
    words.style.fontFamily = localStorage.getItem('font-family');
    words.style.fontSize = localStorage.getItem('font-size');
    words.style.lineHeight = localStorage.getItem('line-height');
    words.style.color = localStorage.getItem('font-color');
}



window.onload = () => {
    userPreferences();
    updatePreferences();
}
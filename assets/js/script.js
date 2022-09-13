/*function changeBackgroundColor() {
    if (window.scrollY > window.innerHeight / 2) {
        document.body.classList.add('bg-color')
    } else {
        document.body.classList.remove('bg-color')
    }
}

window.addEventListener('scroll', changeBackgroundColor);*/

window.addEventListener('scroll', () => {
    if (window.scrollY > window.innerHeight / 2) {
        document.body.classList.add('bg-color')
    } else {
        document.body.classList.remove('bg-color')
    }
});




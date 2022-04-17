let offset = 0;

const sliderLine = document.querySelector('.slider-line');
const btnPrev = document.querySelector('.btn-prev');
const btnNxt = document.querySelector('.btn-next');


btnNxt.addEventListener('click', () => {
    offset += 174;

    if (offset > 348) {
        offset = 0;
    }

    sliderLine.style.left = -offset + 'px';


})

btnPrev.addEventListener('click',() => {
        offset -= 174;

    if (offset < 0) {
        offset = 348;
    }

    sliderLine.style.left = -offset + 'px';
})


//dropdown 


const dropper = document.querySelector('.last');
const menu = document.querySelector('.drops');


dropper.addEventListener('click',()=> {
if(menu.classList.contains('drops--active')) {
    menu.classList.remove('drops--active')
} else {
    menu.classList.add('drops--active')
}

})
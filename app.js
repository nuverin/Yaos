const dataShow = document.querySelector('.show')
const btnhambuger = document.querySelector('.btn_show')
const dropdown = document.querySelector('[data-dropdown]');
const iconShow = document.querySelector('#iconShow')

    dataShow.addEventListener('click', (data) => {
        data.preventDefault();
        if(dropdown.classList.toggle('active')) {
            iconShow.innerHTML = " ↑";
        } else {
            iconShow.innerHTML = " ↓";
        }
    });
btnhambuger.addEventListener('click', () => {
    btnhambuger.classList.toggle('hambuger-menu')
    })

let sliderBody = document.querySelector('.sect_body-2');
let slideCard = document.querySelector('.slider');

let pressed  = false;
let startX;
let x

sliderBody.addEventListener('mousedown', (e) =>{
    pressed = true;
    startX = e.offsetX - slideCard.offsetLeft
    sliderBody.style.cursor = "grabbing"
})

sliderBody.addEventListener('mouseenter', () => {
    sliderBody.style.cursor ="grab";
})

sliderBody.addEventListener("mouseup", () => {
    sliderBody.style.cursor = "grab";
    pressed = false;
})

sliderBody.addEventListener("mousemove", (e) => {
    if(!pressed) return;
    e.preventDefault();

    x = e.offsetX;

    slideCard.style.left = `${x - startX}px`
    checkBoundary()
})

const checkBoundary = () => {
    let outer = sliderBody.getBoundingClientRect();
    let inner = slideCard.getBoundingClientRect();

    if(parseInt(slideCard.style.left) > 0){
        slideCard.style.left = "0"
    }

    if(inner.right < outer.right){
        slideCard.style.left = `-${inner.width - outer.width}px`
    }
}

const row = document.querySelector('.sect_block')
const dataNum = document.querySelectorAll('[data-num]');

function bgColor({color }, ...index){
    dataNum.forEach((e) => {
        e.addEventListener('click', () => {
            for(const arg of index){
                if(e.dataset.num == arg){
                    row.style.backgroundColor = color;
                } 
            }
        })
            
    })
}
let arrColor = ['red', 'blue', 'green', 'blueviolet', 'brown']
let copy = [...arrColor];
let ObjectJson =copy;
copy.filter(() => {
    for(let i = 0, k = 1; i < 6, k < 6; i++, k++){
        bgColor({color: ObjectJson[i]}, k)
    }
})

const background = document.querySelector('.background');
const button = document.querySelector('.btn');
const text =document.getElementById('text'); /*  = const text = document.querySelector('#text'); */
const colorCode =[0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];

button.addEventListener('click', changeColor);

function changeColor(){
    let hex = '#';
    for(let i = 0; i < 6; i++){
        hex += colorCode[randomColor(colorCode)];
    }
    background.style.backgroundColor = hex;
    text.textContent = hex; /* In ra mã màu hệ Hexa */
}

function randomColor(array){
    return Math.floor(Math.random()*array.length);
}
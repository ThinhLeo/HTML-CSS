const button = document.querySelector('.btn');
/* console.log(button); */
button.addEventListener('click',changeColor);
function changeColor(){
    /* console.log('hiihihhi'); */
    const background = document.querySelector('.background');
    const arrayColor = ['red','green','blue','yellow','gray','pink','orange'];
    let random = arrayColor[randomColor(arrayColor)];
    background.style.backgroundColor = random;
    console.log(random);    
}
function randomColor(array){
    return Math.floor(Math.random()*array.length);
}
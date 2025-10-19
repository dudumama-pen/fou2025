const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn1 = document.querySelector('.btn1');
const btn2 = document.querySelector('.btn2');
const btn3 = document.querySelector('.btn3');

const colorPanel = document.querySelector('#colorPanel');
const colorText = document.querySelector('#colorCode');

function randomColor() 
{
    console.log("first button got clicked!");
    let colorIndex = Math.floor(Math.random() * colors.length);
    console.log(colorIndex);

    colorPanel.style.backgroundColor = colors[colorIndex];
    colorText.innerText = colors[colorIndex];
}

btn1.addEventListener('click', randomColor)

// use this format to change the colors  rgba(133,122,200)
//rgba(r,g,b) 0<=r <=255 0<=g<=255 0<=b<=255

function randomRGB(){
    console.log("second button got clicked!");
    let r = Math.floor(Math.random()*255);
    let g = Math.floor(Math.random()*255);
    let b = Math.floor(Math.random()*255);

    let rgbColor = `rgb(${r},${g},${b})`;
    console.log(rgbColor);

    colorPanel.style.backgroundColor = rgbColor;
    colorText.innerText = rgbColor;
}
btn2.addEventListener('click', randomRGB)

function randomHex(){
    console.log("third button got clicked!");
    let hexColor = '#';
    for(let i=0; i<6; i++){
        hexColor += (Math.floor(Math.random()*16)).toString(16);
    }
    console.log(hexColor);
    colorPanel.style.backgroundColor = hexColor;
    colorText.innerText = hexColor;
}
btn3.addEventListener('click', randomHex)

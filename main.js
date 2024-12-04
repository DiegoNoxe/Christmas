let fundo = 'green';
document.body.classList.add(fundo);
document.querySelector('.container').classList.add(fundo);


function atualizarFundo() 
{
    document.body.classList.remove(fundo);
    document.querySelector('.container').classList.remove(fundo);


    if (fundo === 'green') {
        fundo = 'red';
    } else {
        fundo = 'green';
    }

  
    document.body.classList.add(fundo);
    document.querySelector('.container').classList.add(fundo);
}

setInterval(atualizarFundo, 900);



const gifs = 
[
    "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExZXV1N2s5c3R0djEzZzRqMzA5NXk2NnRtNjN6bXF1b3Fmcnh2M2s1NiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/26u49pk6wiIkj2tEY/giphy.gif",
    "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExbWJxZHRxMG50eXg2cTI1a2ZsdGQyOXMzMnBibWZqOGppMmtuYm1hZiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/HBMCmtsPEUShG/giphy.gif"
];

let i = 0;


function changeGif() {
    i = (i + 1) % gifs.length;  
    document.getElementById("gif").src = gifs[i];  
}

setInterval(changeGif, 4000); 

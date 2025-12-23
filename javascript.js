let B=document.getElementById("btn");
let C=document.getElementById("color");
let W=document.getElementById("wrap");
const hex=[0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"]

B.addEventListener("click",changebg);

function changebg(){
    let hexcolor='#'
    for (let i=1;i<=6;i++){
       hexcolor+=randomhex()

    }
    W.style.backgroundColor=hexcolor
    C.innerHTML=hexcolor
}


// function
function randomhex(){
    let Rindex=Math.floor(Math.random()*16);
    return hex[Rindex]
}

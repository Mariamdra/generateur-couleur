const couleur= document.querySelector("h1");
const back= document.querySelector("body");

const randonColor= ()=>{
  const arg1= Math.floor(Math.random()*256);
  const arg2= Math.floor(Math.random()*256);
  const arg3= Math.floor(Math.random()*256);
  couleur.innerHTML= `rgb(${arg1}, ${arg2}, ${arg3})`;
  back.style.background= `rgb(${arg1}, ${arg2}, ${arg3})`;
}

randonColor()
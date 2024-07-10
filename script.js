const button=document.querySelector("button");
const body=document.querySelector("body");
const color=["red","blue","green","yellow","orange","purple","pink","black","white","#f8a81a"];
document.addEventListener('click',function(){
    body.style.backgroundColor=color[Math.floor(Math.random()*color.length)];
});
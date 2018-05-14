"use script"
const divs = document.querySelectorAll("#app div");

divs.forEach(function (div){
    div.addEventListener('mouseenter', function(){
        div.style.transform = `translate(${Math.random()*100}vw, ${Math.random()*100}vh)`;
        div.style.backgroundcolor = `hsl(${Math.random()*360}, ${Math.random()*100}%, 50%)`;
    });
});
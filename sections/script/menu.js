window.addEventListener("scroll",function(){
    var menu = document.querySelector(".container__nav");
    menu.classList.toggle("abajo", window.scrollY>0);
})









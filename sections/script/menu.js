


window.addEventListener("scroll",function(){
    var menu = document.querySelector(".container__nav");
    menu.classList.toggle("abajo", window.scrollY>0);
});


//mostrar y ocultar menu



    const checkbox = document.getElementById('btn-menu');
    const contenido = document.querySelector('.container__nav');
    var mostrar = true;
    
    checkbox.addEventListener('click', function() {

        if (mostrar){
            contenido.style.display = 'block';
        } else {
            contenido.style.display = 'none';
        }
        mostrar = !mostrar;
        
    });
    
//mostrar y ocultar menu

    var oculto = true;
    const menuDesplegable = document.querySelector(".desplegable")
    const submenu = document.querySelector(".submenu");

    menuDesplegable.addEventListener('click', function(){

        if(oculto){
            submenu.style.display = 'block';
        }else{
            submenu.style.display = 'none';
        }

        oculto = !oculto;


        console.log(oculto);



    })









   



    

  





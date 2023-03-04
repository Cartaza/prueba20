$(document).ready(function(){
    console.log("jQuery corriendo")

/*VARIABLES*/
    var listaMenu = $(".lista");
    var elemento = $(".elemento_lista");
    var boton = $(".boton");
    var categorias = $(".categorias");
    var perfil = $(".login");
    var contenedorPerfil = $(".mi_perfil");



/*Funciòn de menu hamburguesa*/
    boton.click(function() {
        elemento.toggle();
        categorias.toggle();

    })

    $(window).resize(function() {
        var widthBrowser =$(window).width();
       
        if(widthBrowser > 768){
            elemento.show();
            categorias.show();

        }else if(widthBrowser < 768){

    
        } ;
    });


    
/*Funciòn de abre caja mi perfil desde logo persona*/
    perfil.click(function() {
        contenedorPerfil.toggle();
    })
 

    
});






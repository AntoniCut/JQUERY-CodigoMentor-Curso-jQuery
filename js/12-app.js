//  *************************************
//  **********  /js/11-app.js  **********
//  *************************************

$(document).ready(function () {

    //  -----  Documento Cargado  -----
    console.warn('Documento Cargado!!!  ----- ', 'jQuery Versión:', $.fn.jquery);

    $("#boton1").click(function () { 
        $("p").removeAttr("id");
    });

    $("#boton2").click(function () { 
        $("p").removeAttr("class");
    });

    

});
//  *************************************
//  **********  /js/11-app.js  **********
//  *************************************

$(document).ready(function () {

    //  -----  Documento Cargado  -----
    console.warn('Documento Cargado!!!  ----- ', 'jQuery Versión:', $.fn.jquery);

    $("#boton1").click(function () { 
        $("p").removeClass("nuevaClase");
    });

    $("#add").click(function () { 
        $("#caja").addClass("miClase");
    });

    $("#remove").click(function () { 
        $("#caja").removeClass("miClase");
    });

});
//  *************************************
//  **********  /js/10-app.js  **********
//  *************************************

$(document).ready(function () {

    //  -----  Documento Cargado  -----
    console.warn('Documento Cargado!!!  ----- ', 'jQuery Versión:', $.fn.jquery);

    $("#boton1").click(function() {
        $("p").css("color", "red");
    });


    $("#boton2").click(function() {
        $("p:first").css("color", "blue");
    });

    $("#boton3").click(function() {
        $("p:last").css("color", "green");
    });

    $("#boton4").click(function() {
        
        // iteración implicita para todas los 'p'.
        $("p").addClass("nuevaClase");
    });

    $("#boton5").click(function() {

        // iteración implicita para todas los 'p'.
        $("p").addClass( function(index) {
            return "miclase" + (index + 1);
        });
    });

});
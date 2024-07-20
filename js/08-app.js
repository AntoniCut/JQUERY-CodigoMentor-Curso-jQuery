//  *************************************
//  **********  /js/08-app.js  **********
//  *************************************

$(document).ready(function () {

    //  -----  Documento Cargado  -----
    console.warn('Documento Cargado!!!  ----- ', 'jQuery version:', $.fn.jquery);

    $("#boton1").click(function () { 
        
        const type = "<br> El valor del atributo type es: " + $("input").attr("type");
        const id = "<br> El valor del atributo ID es: " + $("input").attr("id");
        const value = "<br> El valor del atributo value es: " + $("input").attr("value");
        const atributos = type + id + value;
        
        $("#info").html(atributos);

    });


    $("#boton2").click(function () { 
        
        $("input[type='text']").attr("id", "codigo");

    });

});
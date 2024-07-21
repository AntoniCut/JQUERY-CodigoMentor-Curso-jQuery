//  *************************************
//  **********  /js/14-app.js  **********
//  *************************************

$(document).ready(function () {

    //  -----  Documento Cargado  -----
    console.warn('Documento Cargado!!!  ----- ', 'jQuery Versión:', $.fn.jquery);

    $("input[type='text']").keydown(function () { 
        $(this).css("background-color", "yellow");
    });
    
    $("input[type='email']").keydown(function () { 
        $(this).css("background-color", "green");
    });

});
//  *************************************
//  **********  /js/13-app.js  **********
//  *************************************

$(document).ready(function () {

    //  -----  Documento Cargado  -----
    console.warn('Documento Cargado!!!  ----- ', 'jQuery Versión:', $.fn.jquery);

    $("#p1").dblclick(function () {
        $(this).hide();
    });
       
    
    $("#p2").dblclick(function () {
        alert('Caja Amarilla');
    });

    $("#p3").dblclick(function () {
        $(this).hide();
    });
    

});
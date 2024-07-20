//  *************************************
//  **********  /js/09-app.js  **********
//  *************************************

$(document).ready(function () {

    //  -----  Documento Cargado  -----
    console.warn('Documento Cargado!!!  ----- ', 'jQuery Versión:', $.fn.jquery);

    $("button").click(function() {

        //  itera en los 4 'p' y le añade un ID a cada uno.
        $("p").attr("id", function(index) {
            
            return "p" + (index + 1);

        });

    });

});
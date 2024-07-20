//  *************************************
//  **********  /js/07-app.js  **********
//  *************************************

$(document).ready(function () {

    //  -----  Documento Cargado  -----
    console.warn('Documento Cargado!!!  ----- ', 'jQuery version:', $.fn.jquery);

    $("button").click(function () { 
        
        let width = "";
        let height = "";
        let texto = "";
        
        width = $("#caja").width();
        height = $("#caja").height();
        
        texto += width + "px" + "<br>";
        texto += height + "px" + "<br>";
        
        $("#detalles")
            .html( texto)
            .css("backgroundColor", "red")
            .width(width)
            .height(height)
        
    });

});
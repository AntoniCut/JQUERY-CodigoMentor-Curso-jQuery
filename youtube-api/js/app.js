//  **********************************************
//  **********  /youtube-api/js/app.js  **********
//  **********************************************

$(document).ready(function () {

    //  -----  Documento Cargado  -----
    console.warn('Documento Cargado!!!  ----- ', 'jQuery Versión:', $.fn.jquery);


    //  -----  click en el botón buscar video  -----
    $("#buscarVideo").click(function () {

        alert($("#usuarioInput").val());

        const $videoBuscado = $("#usuarioInput").val();
        ejecutarAJAX($videoBuscado);
                
    });


    //  -----  función para la petición AJAX  -----
    function ejecutarAJAX($videoBuscado) {

        $.get("https://www.googleapis.com/youtube/v3/search", {
                part: 'snippet, id',
                q: $videoBuscado,
                pageToken: '',
                type: 'video',
                key: ''
            }, function (data) {
                console.log(data);
        });
    }
    


});
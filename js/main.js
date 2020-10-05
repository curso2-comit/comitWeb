//cuando se termina de cargar la página
//programo los eventos o cosas que hay que hacer
$(document).ready(function(){    

    $('#comentar').on('click', function(){
        $('#seccionContacto').toggle();//$('#seccionContacto').show();
    });    

    var usuario = prompt('bienvenido a comit! Cómo te llamás?');
    if(usuario){
        alert('Hola ' + usuario);
        //$('.usuario').html(usuario);
        $('.usuario').append('<a class="btn btn-primary">' + usuario + '</a>');        
    }

    $('.usuario .btn').on('click', function(){
        window.location.href = 'miPerfil.html';
    })
});
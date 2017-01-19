$(function(){
    //funcion ajax eliminar usuario
    $('#tbl-usuarios #btn-eliminar').click(function(e){
        e.preventDefault();
        var elemento = $(this);
        var user = elemento.parent().parent().find('#user').text();
        console.log(user);

        var confirmar = confirm('¿Desea eliminar el producto?');

        if(confirmar){

            $.ajax({
                url : 'http://localhost:3000/eliminarusuario',
                method : 'post',
                data : {user : user},
                success : function(res){
                    if(res.res){
                        elemento.parent().parent().remove();
                    }
                }
            });

        }

    })
});
function agregarUsuario(){
    let nombre = document.getElementById('firstName').value;
    let apellido = document.getElementById('lastName').value;   
    let correo = document.getElementById('email').value;   
    let perfil = document.getElementById('profile').value;

    if (nombre.trim() == "" || apellido.trim() == "" || correo.trim() == "" || perfil.trim() == "") {
        return Swal.fire({
            title: 'mmm.. Tienes campos vacios',
            text: 'Debes rellenar los campo',
            imageWidth: 400,
            imageHeight: 200,
            imageAlt: 'Custom image',
          })
    }

    const respuesta = document.getElementById('respuesta');
    const lista = document.createElement('li');
    lista.innerHTML = 
    `<div class="row bg-new-user-table g-0" id="fila">
        <div class="col-sm-12 col-md-2 g-0">
            <p class="py-2">${nombre}</p>
        </div>
        <div class="col-sm-12 col-md-2 g-0">
            <p class="py-2">${apellido}</p>
        </div>
        <div class="col-sm-12 col-md g-0">
            <p class="py-2">${correo}</p>
        </div>
        <div class="col-sm-12 col-md-2 g-0">
            <p class="py-2">${perfil}</p>
        </div>
        <div class="col-sm-12 col-md-2 g-0 text-center">
            <button type="button" class="btn btn-link boton-link-red"  onclick="borrar()">Borrar</button>
            <button type="button" class="btn btn-link boton-link-green">Editar</button>
        </div>
    </div>`;           
    respuesta.appendChild(lista);
    

}

function borrar() {
    var node = document.getElementById("fila");
    node.parentNode.removeChild(node);
}


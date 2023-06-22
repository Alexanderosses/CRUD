function agregarNombre2(){
    let nombre = document.getElementById('nombre1').value;
    let apellido = document.getElementById('apellido1').value;   
    let email = document.getElementById('mail1').value;   
    let perfil = document.getElementById('perfil1').value; 

    const tabla = document.getElementById('respuesta');
    const divs = document.createElement('li');
    divs.textContent = nombre + " " + apellido + " " + email + " " + perfil;
        
    tabla.appendChild(divs);
    
}

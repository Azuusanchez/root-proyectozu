console.log (document.forms);



const formulario = document.querySelector("#formulario");
const inputNombreApellido = document.querySelector("#nombreYApellido");
const inputCorreo = document.querySelector("#correoElectronico");
const inputTelefono = document.querySelector("#telefono");
const inputComentario = document.querySelector("#comentario");


const mensajeDeUsuario = []

class Usuario {
    constructor (nombreYApellido, correoElectronico, telefono, comentario){
         this.nombreYApellido= nombreYApellido;
         this.correoElectronico= correoElectronico;
         this.telefono= telefono;
         this.comentario= comentario;
    }

} 

formulario.onsubmit = (event) => {
    event.preventDefault () ;
    mensajeDeUsuario.push(new Usuario (inputNombreApellido.value, inputCorreo.value, inputTelefono.value, inputComentario.value))
    formulario.reset();
    const convertirAlLocalStore = JSON.stringify(mensajeDeUsuario);
    localStorage.setItem("mensajeDeUsuario", convertirAlLocalStore);

    localStorage.getItem (mensajeDeUsuario);
    JSON.parse(convertirAlLocalStore);

    console.log (mensajeDeUsuario) 

}
inputTelefono.oninput = () => {
    if (inputTelefono.value.length <= 10){
        console.log ( "Ingrese un numero de telefono correcto")
        inputTelefono.style.border = "4px solid red"
        
    }
    
    else {
        console.log ("Numero correcto")
        inputTelefono.style.border = "4px solid green"
    
    }
}



const formulario = document.querySelector("#formulario-registro");
const inputNombreApellido = document.querySelector("#input-nombreapellido");
const inputDni = document.querySelector("#input-dni");
const inputEmail = document.querySelector("#input-email");
const inputTelefono = document.querySelector("#input-telefono");
const inputDate = document.querySelector("#input-date");


const registroDeClientes = []


class Clientes {
    constructor (nombreApellido, dni, email, telefono, fechaDeNacimiento){
        this.nombreyApellido = nombreApellido;
        this.dni = dni;
        this.email = email;
        this.telefono = telefono;
        this.fechaDeNacimiento = fechaDeNacimiento;
    }
}

formulario.onsubmit = (event) => {
    event.preventDefault () ;
    registroDeClientes.push(new Clientes (inputNombreApellido.value, inputDni.value, inputEmail.value, inputTelefono.value, inputDate.value))

    console.log (registroDeClientes) 

}
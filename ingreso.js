
const inputDni = document.getElementById ("dni");
const formIngresar = document.getElementById ("form-ingresar");
const main = document.getElementById ("main");
const asideLogin = document.querySelector("aside");


const user = {
    dni: "42735214"
}

let clientes = [];

formIngresar.onsubmit = (e) => {
    e.preventDefault()
    if ( inputDni.value === user.dni ) {
        main.style.display = "flex"
        asideLogin.style.display = "none"
        localStorage.setItem("user", true)
    } else {
        formIngresar.reset()
        alert("Parece que todavía no tenés usuario. Por favor, registrate para reservar.")
    }
    console.log (formIngresar)
}


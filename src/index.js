import validator from './validator.js';

let enviar = document.getElementById("enviar"), // Contiene todos los input, id de form
    cardNumber = document.getElementById("cardNumber"); // Input de cardNumber
//arrayUnmasked = []; // Array vacío que irá guardando los números de cardNumber

enviar.addEventListener("submit", function isValid(e) { // escucha eventos en todos los input 
    e.preventDefault();

    let name = document.getElementById("user").value, // nombre usuario
        card = cardNumber.value, //arrayUnmasked.join(""), // número de tarjeta 
        overlay = document.getElementById("overlay"), // modal
        validationResult = validator.isValid(card), // trae la función isValid
        maskNumber = validator.maskify(card); // trae la función maskify

    // condicionales para mensajes de válida o inválida
    if (name === "") { // en caso de que no se ingrese un nombre
        name = false;
        document.getElementById("noneName").innerHTML = "Ingrese su nombre";
    }
    if (card === "") { // en caso de que no se ingrese un número de tarjeta
        validationResult = false;
        document.getElementById("invalidCard").innerHTML = "Ingrese un número de tarjeta"; // *No funciona este mensaje
    }
    if (validationResult && name) { // en caso de que se ingrese nombre y número de tarjeta válida
        overlay.classList.add("active"); // Activa el modal
        document.getElementById("addUser").innerHTML = "¡Felicidades " + name + "!"; // Titulo modal
        document.getElementById("maskNumber").innerHTML = "Tu suscripción ha sido realizado con éxito.<br>" +
            "Su número de tarjeta " + maskNumber + " es válida.<br>" +
            "Ahora podrás disfrutar de ver material inédito de tus artistas favoritos.<br>" + "Gracias por suscribirte <3" // texto tarjeta válida 
    }
    if (validationResult!==true) { // en caso de que el número de tarjeta es
        document.getElementById("invalidCard").innerHTML = "Su número de tarjeta " + maskNumber + " es inválida";
    }
})

cardNumber.addEventListener('keyup', (x)  => {
	let onlyNumber = x.target.value;
  cardNumber.value = onlyNumber.replace(/\s/g, '').replace(/\D/g, '');
})

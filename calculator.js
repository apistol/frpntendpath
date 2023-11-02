// definite
let email;
let password;

// definita si intializata
let button = document.querySelector("#submit")
let message = document.querySelector("#message")



button.addEventListener("click", () => {
    // Invocata
    getformiputs()
})

// Definita
let getformiputs = () => {

    email = document.querySelector("#email").value;
    password = document.querySelector("#password").value;


    // validari
    if (!email.includes("gmail.com")) {
        message.innerHTML = "Email is invalid"
        message.style.color = "red"
        return
    }

    if ( !(password.length > 7) ) {
        message.innerHTML="Invalid Passoword"
        message.style.color = "red"
        return
    }


    // success
    message.innerHTML="Login succes"
    message.style.color = "green"

    return 


}




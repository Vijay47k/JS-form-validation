const username = document.querySelector("#name")
const userEmail = document.querySelector("#email")
const password = document.querySelector("#Password")
const confirmPassword = document.querySelector("#C-Password")
const submitBtn = document.querySelector("#btn")


const usernameError = document.querySelector("#usernameError")
const emailError = document.querySelector("#emailError")
const pswdError = document.querySelector("#passwordError")
const pswdError2 = document.querySelector("#password2Error")



submitBtn.addEventListener("click", formValidation)



function formValidation() {


    let name = username.value
    let email = userEmail.value
    let pswd = password.value
    let Cpswd = confirmPassword.value
        // console.log(name.length);
        // console.log(pswd, Cpswd);

    // CONDITIONS


    if (!name) {
        usernameError.textContent = "Please enter your name...!"
        usernameError.style.color = "red"
    } else if (name.length < 6) {
        usernameError.textContent = "Username must be in 6 characters...!"
        usernameError.style.color = "red"
    } else {
        usernameError.textContent = ""
    }


    if (!email) {
        emailError.textContent = "Please enter your email...!"
        emailError.style.color = "red"
    } else {
        emailError.textContent = ""
    }

    if (!pswd) {
        pswdError.textContent = "Please enter your Password...!"
        pswdError.style.color = "red"
    } else if (pswd.length < 7) {
        pswdError.textContent = "Password must be in 8 characters...!"
        pswdError.style.color = "red"
    } else {
        pswdError.textContent = ""
    }

    if (!Cpswd) {
        pswdError2.textContent = "Please enter your Confirm Password...!"
        pswdError2.style.color = "red"
    } else if (Cpswd.length < 7) {
        pswdError2.textContent = "Password must be in 8 characters...!"
        pswdError2.style.color = "red"
    } else {
        pswdError2.textContent = ""
    }


    if (pswd === Cpswd) {
        return true;
    } else if (pswd != Cpswd) {
        pswdError2.textContent = "Password doesn't match!"
    } else {
        pswdError1.textContent = ""
        pswdError2.textContent = ""
    }

}
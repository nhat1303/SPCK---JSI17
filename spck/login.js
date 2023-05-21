import app from "./index8.2.js"
import Register from "./register.js"
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-auth.js";

class Login{
    $containerDiv
    $titleHeader
    $signinForm
    $emailInputEmail
    $nameInputTxt
    $passInputPass
    $submitBtn
    $gotoSignupLink


    constructor(){
        this.$emailInputEmail = document.createElement("input")
        this.$emailInputEmail.type = "email"
        this.$emailInputEmail.placeholder = "Enter your email"

        this.$nameInputTxt = document.createElement("input")
        this.$nameInputTxt.type = "text"
        this.$nameInputTxt.placeholder = "Enter your name"

        this.$passInputPass = document.createElement("input")
        this.$passInputPass.type = "password"
        this.$passInputPass.placeholder = "Enter your password"

        this.$submitBtn = document.createElement("button")
        this.$submitBtn.type = "submit"
        this.$submitBtn.innerHTML = "Login"
        this.$submitBtn.addEventListener("click", this.handleSubmit)

        this.$gotoSignupLink = document.createElement("a")
        this.$gotoSignupLink.innerHTML = "Don't have an account ? Sign up"
        this.$gotoSignupLink.addEventListener("click", this.gotoSignup)


        this.$containerDiv = document.createElement("div")
        this.$containerDiv.classList.add("center","app")

        this.$titleHeader = document.createElement("h2")
        this.$titleHeader.innerHTML = "Login"

        this.$signinForm = document.createElement("form")
    }

    initRender = (container) =>{
        this.$signinForm.appendChild(this.$emailInputEmail)
        this.$signinForm.appendChild(this.$nameInputTxt)
        this.$signinForm.appendChild(this.$passInputPass)
        this.$signinForm.appendChild(this.$submitBtn) 

        this.$containerDiv.appendChild(this.$titleHeader)
        this.$containerDiv.appendChild(this.$signinForm)
        this.$containerDiv.appendChild(this.$gotoSignupLink)

        container.appendChild(this.$containerDiv)
    }

    handleSubmit = (e) =>{
      e.preventDefault()
      const email = this.$emailInputEmail.value
      const password = this.$passInputPass.value
      
      if ( email ==""){
        alert("Email required");
        return;
      }
      if ( password.length < 6){
        alert("Password required");
        return;
      }
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
          });
    }
    gotoSignup = () =>{
        const signup = new Register();
        //change active section
        app.changeActiveScreen(signup);
    }
}

export default Login
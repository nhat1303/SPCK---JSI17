import app from "./index8.2.js"
import Login from "./login.js"
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-auth.js";

class Register{
    $containerDiv
    $titleHeader
    $signupForm
    $emailInputEmail
    $nameInputTxt
    $passInputPass
    $confirmPassInputPass
    $submitBtn
    $gotoSigninLink

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

        this.$confirmPassInputPass = document.createElement("input")
        this.$confirmPassInputPass.type = "password"
        this.$confirmPassInputPass.placeholder = "Enter your confirm password"

        this.$submitBtn = document.createElement("button")
        this.$submitBtn.type = "submit"
        this.$submitBtn.innerHTML = "Register"
        this.$submitBtn.addEventListener("click", this.handleSubmit)

        this.$gotoSigninLink = document.createElement("a")
        this.$gotoSigninLink.innerHTML = "You already have an account? Sign in now"
        this.$gotoSigninLink.addEventListener("click", this.gotoSignin)
    
        this.$containerDiv = document.createElement("div")
        this.$containerDiv.classList.add("center")

        this.$titleHeader = document.createElement("h2")
        this.$titleHeader.innerHTML = "Create your account"

        this.$signupForm = document.createElement("form")
        this.$signupForm.classList.add("centering","flex-column")
    

    }
    initRender =  (container) => {

        this.$signupForm.appendChild(this.$emailInputEmail)
        this.$signupForm.appendChild(this.$nameInputTxt)
        this.$signupForm.appendChild(this.$passInputPass)
        this.$signupForm.appendChild(this.$confirmPassInputPass)
        this.$signupForm.appendChild(this.$submitBtn) 

        this.$containerDiv.appendChild(this.$titleHeader)
        this.$containerDiv.appendChild(this.$signupForm)
        this.$containerDiv.appendChild(this.$gotoSigninLink)

        container.appendChild(this.$containerDiv)

    }

 


    handleSubmit = (e) =>{
      e.preventDefault()

      const email = this.$emailInputEmail.value
      const password = this.$passInputPass.value
      const confirmpass = this.$confirmPassInputPass.value
      const userName = this.$nameInputTxt.value

      if ( email ==""){
        alert("Email required");
        return;
      }
      if ( password.length < 6){
        alert("Password required");
        return;
      }
      if ( confirmpass ==""){
        alert("Confirmpassword required");
        return;
      }
      if ( userName ==""){
        alert("Username required");
        return;
      }
      if( password != confirmpass){
        alert("Wrong confirm password")
        return;
      }
      this.setError()
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            // Signed in 
            console.log(user)
            const user = userCredential.user;
            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            const alert = prompt(errorMessage)
            // ..
          });
    }
    gotoSignin = () =>{
        const login = new Login();
        //change active section
        app.changeActiveScreen(login)
    }
}   

export default Register;
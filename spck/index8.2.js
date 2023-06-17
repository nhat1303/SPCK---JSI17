import Login from "./login.js"
import Register from "./register.js"

class App{
    activeScreen
    container

    constructor(container){
        this.container = container
    }

    changeActiveScreen (screen){
        if ( this.activeScreen !== undefined){
            this.container.innerHTML= ""
        }
        
        this.activeScreen = screen;
        this.activeScreen.initRender(this.container)
    }
}

const container = document.getElementById("app")


const login = new Login();
// const signup = new Register();
const app = new App(container);
app.changeActiveScreen(login)


export const user =await login.getUser();
export default app;

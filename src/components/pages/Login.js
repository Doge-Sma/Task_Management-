import styles from "./Login.module.css"
import logo from "../../imagens/logo.png"

function Login() {
    return (

        <div className={styles.login}>
            <h1> Bem- ao <span>Costs</span></h1>
            <img src={logo} alt="Logo da Tela de Login" className={styles.imagemLogo} />
           
            <div class="text">
            <h1> Enjoy Your Time </h1>
                <p1> When You Are Confused Abount </p1>
                <p1> Managing Your Task Come To Us </p1>
            </div>
            <button> Login </button>
            <button> Sign Up</button>
        </div>


    );
}

export default Login;
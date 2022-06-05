import styles from "./Login.module.css"
import logo from "../../imagens/logo.png"

function Login() {
    return (

        <div className={styles.login}>
            <img src={logo} alt="Logo da Tela de Login" className={styles.imagemLogo} />

            <h1> Enjoy Your Time </h1>
            <div class={styles.text}>
                <p1> When You Are Confused Abount </p1>
                <p1> Managing Your Task Come To Us </p1>
            </div>

            <button className={styles.buttonLogin}> Login </button>
            <button className={styles.buttonSign}> Sign Up</button>

        </div>


    );
}

export default Login;
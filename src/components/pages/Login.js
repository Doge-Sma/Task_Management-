import styles from "./Login.module.css"
import logo from "../../imagens/logo.png"

function Login(){
    return(

        <div className={styles.login}>
            <h1> Bem- ao <span>Costs</span></h1>
            <img src={logo} alt="Logo da Tela de Login" />
        </div>
        

    );
}

export default Login;
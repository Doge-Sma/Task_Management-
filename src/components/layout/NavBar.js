import { Link } from "react-router-dom"
import Container from "./Container"
import styles from './NavBar.module.css'

export default function NavBar() {
    return (
        <nav className={styles.navbar}>
            <Container>
                <ul className={styles.list}>
                    <li className={styles.item}><Link to="/">Login</Link></li>
                    <li className={styles.item}><Link to="/home">Home</Link></li>
                    <li className={styles.item}><Link to="/calendario">Calendário</Link></li>
                    <li className={styles.item}><Link to="/novatarefa">Nova Tarefa</Link></li>
                    <li className={styles.item}><Link to="/perfil">Perfil</Link></li>
                </ul>
            </Container>
        </nav>
    )
}
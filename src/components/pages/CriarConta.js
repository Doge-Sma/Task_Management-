import { useNavigate } from 'react-router-dom';

import ContaForm from '../formularios/ContaForm'
import styles from './CriarConta.module.css'


export default function CriarConta() {
    const navigate = useNavigate()

function createPerfil(perfil){

    perfil.projetos = []

    fetch('http://localhost:5000/perfis',{
    method:'POST',
    headers:{
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(perfil),
})
    .then((resp) => resp.json())
    .then((data) => {
        navigate('/home',{message: 'Perfil criado com sucesso ^^'})
    })
}

    return (
        <div className={styles.form}>
            <h1>Crie sua Conta</h1>
            <h2>Cria sua conta para ter acesso aos serviços</h2>
            <ContaForm handleSubmit={createPerfil} btnText="Criar Conta"/>
        </div>
    )
}
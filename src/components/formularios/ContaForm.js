import { useState } from "react"
import Input from "../form/Input"
import SubmitButton from "../form/SubmitButton"
import styles from "./ContaForm.module.css"


export default function CriarConta({handleSubmit,btnText,perfilData}) {
    const [perfil,setPerfil] = useState(perfilData || {})



    const submit = (e) =>{
        e.preventDefault()
        handleSubmit(perfil)
    }

    function handleChange(e){
        setPerfil({...perfil,[e.target.name]: e.target.value})
    }

    return (
        <form onSubmit={submit} className={styles.form}>
            <Input
                type="text"
                text="Nome Completo"
                name="name"
                placeholder="Digite seu nome"
                handleOnChange={handleChange}
                value={perfil.name}
            />
            <Input
                type="text"
                text="Email"
                name="email"
                placeholder="Digite seu email"
                handleOnChange={handleChange}
                value={perfil.email}
            />
            <Input
                type="text"
                text="Profissão"
                name="Profissao"
                placeholder="Digite sua Profissão"
                handleOnChange={handleChange}
                value={perfil.profissao}
            />
            <Input
                type="text"
                text="Telefone"
                name="Telefone"
                placeholder="Digite seu Telefone"
                handleOnChange={handleChange}
                value={perfil.telefone}
            />
            <SubmitButton text={btnText} />
        </form>
    )
}
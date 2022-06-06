import Input from "../form/Input"
import Select from "../form/Select"
import SubmitButton from "../form/SubmitButton"
import styles from "./TarefaForm.module.css"

export default function TarefaForm({btnText}) {
    return (
        <form className={styles.form}>
           <Input 
           type="text" 
           text="Nome da Tarefa"
           name="name"
           placeholder="Insira o nome da tarefa"
           />
           <Select
           name="category_id"
           text="selecione a data"
           />
            <div>
           <Select
           name="category_id"
           text="Selecione a hora inicial"
           />
           <Select
           name="category_id"
           text="Selecione a hora final"
           />
           </div>
           <Input
           type="text"
           text="Descrição da Tarefa"
           name="name"
           placeholder="Descreva a tarefa programada"
           />
            <SubmitButton text={btnText}/>
        </form>
    )
}
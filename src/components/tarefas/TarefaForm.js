import Input from "../form/Input"
import SelectHora from "../form/SelectHora"
import SelectData from "../form/SelectData"
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
           <SelectData text="Selecione a data"/>
            
           <SelectHora text="Selecione a hora inicial"/>
           <SelectHora
           text="Selecione a hora final"/>
           
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
import TarefaForm from '../tarefas/TarefaForm'
import styles from './NovaTarefa.module.css'

export default function NovaTarefa(){
    return(
      
            <div className={styles.novaTarefa_container}>
                <h1>Criar tarefa</h1>
                <p>Crie sua tarefa</p>
                <TarefaForm btnText = "Adicionar Tarefa"/>
            </div>
        
    ) 
    
}
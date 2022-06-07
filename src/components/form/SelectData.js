import * as React from 'react';
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import ptBR from "date-fns/locale/pt-BR";
import styles from "./SelectData.module.css"

export default function SelectData({text}){
    const [dataSelecionada,trocarDataSelecionada] = React.useState(new Date());
    
    return(

        <div className={styles.form_control}>
        <LocalizationProvider dateAdapter={AdapterDateFns} locale={ptBR}>
        <DateTimePicker
        renderInput={(props) => <TextField{...props}/>}
        label={text}
        value={dataSelecionada}
        onChange={(novaData)=>{
            trocarDataSelecionada(novaData);
        }}
        />
        </LocalizationProvider>
        </div>
    )
}
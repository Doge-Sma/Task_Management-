import * as React from 'react';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import TextField from '@mui/material/TextField';
import ptBR from "date-fns/locale/pt-BR";
import styles from "./SelectHora.module.css"

export default function SelectHora({ text }) {
    const [horaSelecionado, trocarHoraSelecionada] = React.useState(null);
    return (
        <div className={styles.form_control}>
            <LocalizationProvider dateAdapter={AdapterDateFns} locale={ptBR}>
                <TimePicker
                    label={text}
                    value={horaSelecionado}
                    onChange={(novoValor) => {
                        trocarHoraSelecionada(novoValor);
                    }}
                    renderInput={(params) => <TextField{...params} />}
                />
            </LocalizationProvider>
        </div>
    )

}
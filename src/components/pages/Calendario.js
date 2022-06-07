import * as React from 'react';
import isWeekend from 'date-fns/isWeekend';
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import PTLocale from 'date-fns/locale/pt-BR'


export default function Calendario() {
    const [value, setValue] = React.useState(new Date());

    return (

        <LocalizationProvider dateAdapter={AdapterDateFns} locale={PTLocale}>
            <StaticDatePicker

                openTo="day"
                value={value}
                shouldDisableDate={isWeekend}
                onChange={(newValue) => {
                    setValue(newValue);
                }}
                renderInput={(params) => <TextField {...params} />}
            />
        </LocalizationProvider>

    );
}
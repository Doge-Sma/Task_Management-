
import * as React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/global.css';
import { StyledEngineProvider } from '@mui/material/styles';



ReactDOM.createRoot(document.querySelector("#root")).render(

    <StyledEngineProvider injectFirst>
        <App />
    </StyledEngineProvider>


);
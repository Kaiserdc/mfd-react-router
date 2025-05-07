import {createRoot} from 'react-dom/client'
import App from './App.tsx'
import {AuthProvider} from "./context/AuthContext.tsx";
import {MantineProvider} from "@mantine/core";

import '@mantine/core/styles.css';

createRoot(document.getElementById('root')!).render(
    <MantineProvider>
        <AuthProvider>
            <App/>
        </AuthProvider>
    </MantineProvider>
)

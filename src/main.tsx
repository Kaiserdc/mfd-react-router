import {createRoot} from 'react-dom/client'
import App from './App.tsx'
import {AuthProvider} from "./context/AuthContext.tsx";
import {MantineProvider} from "@mantine/core";

import '@mantine/core/styles.css';

// import { registerSW } from 'virtual:pwa-register';
//
// const updateSW = registerSW({
//     onRegisteredSW(){
//         console.log('SW зарегестрирован');
//     },
//     onNeedRefresh() {
//         console.log('Доступно обновление');
//         updateSW(true);
//     },
//     onOfflineReady(){
//         console.log('Приложение готово к работе офлайн');
//     }
//
// })
createRoot(document.getElementById('root')!).render(
    <MantineProvider>
        <AuthProvider>
            <App/>
        </AuthProvider>
    </MantineProvider>
)

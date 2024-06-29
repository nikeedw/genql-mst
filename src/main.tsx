import ReactDOM from 'react-dom/client'
import { App } from './App.tsx'
import { SneakersContext, sneakersStore } from './mst/RootProvider.ts'
import React from 'react'
import './styles/root.scss'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <SneakersContext.Provider value={sneakersStore}>
            <App />
        </SneakersContext.Provider>
    </React.StrictMode>,
)

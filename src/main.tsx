import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { Provider } from 'react-redux'
import { store } from './app/store.ts'

// Punto de entrada de la aplicación
// - `Provider` inyecta el store de Redux al árbol de componentes
// - `StrictMode` ayuda a detectar prácticas inseguras en desarrollo
createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <StrictMode>
      <div className='w-screen h-screen flex felx-row items-center justify-center'>
        <App />
      </div>
    </StrictMode>
  </Provider>
)

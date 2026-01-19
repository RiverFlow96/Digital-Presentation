import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { Provider } from 'react-redux'
import { store } from './app/store.ts'

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <StrictMode>
      <div className='w-screen h-screen flex felx-row items-center justify-center'>
        <App />
      </div>
    </StrictMode>
  </Provider>
)

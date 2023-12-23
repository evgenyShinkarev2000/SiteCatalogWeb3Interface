import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Provider } from 'react-redux'
import { store } from 'src/redux/store.ts'
import { Web3Provider } from 'src/providers/Web3Provider.tsx'
import { SiteCatalogContractProvider } from 'src/providers/SiteCatalogContractProvider.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Web3Provider>
      <SiteCatalogContractProvider>
        <Provider store={store}>
          <App />
        </Provider>
      </SiteCatalogContractProvider>
    </Web3Provider>
  </React.StrictMode>,
)

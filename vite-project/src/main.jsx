import React from 'react'
import ReactDOM from 'react-dom/client'
import {Provider} from 'react-redux'
import {PersistGate} from 'redux-persist/integration/react'
import App from './App.jsx'
import Navbar from './components/Navbar.jsx'
import './index.css'

import { store, persistor } from './store'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Navbar />
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
)

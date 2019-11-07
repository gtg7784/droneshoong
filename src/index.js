import React from 'react'
import ReactDOM from 'react-dom'
import 'react-app-polyfill/ie9';
import './index.scss'
import App from './containers/App'
import * as serviceWorker from './serviceWorker'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
)

serviceWorker.unregister()
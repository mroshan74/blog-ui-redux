import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import App from './App'
import configureStore from './redux/store/configuresStore'

const store = configureStore()

const ele = (
    <Provider store={store}>
        <App />
    </Provider>
)

ReactDOM.render(ele,document.getElementById('root'))
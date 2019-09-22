import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import Main from './components/Main.jsx'
import store from './redux/index.js'

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Route path='/' component={Main} />
        </BrowserRouter>
    </Provider>,
    document.getElementById('app')
)
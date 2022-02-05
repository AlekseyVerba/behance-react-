import React from "react"
import ReactDom from "react-dom"
import App from "./components/App/App"
import store from "./store"
import { Provider } from "react-redux"
import ErrorBoundry from "./components/Error/ErrorBoundry/ErrorBoundry"
import { BrowserRouter as Router} from "react-router-dom"
import { YMaps } from 'react-yandex-maps';



ReactDom.render(
    <Provider store={store}>
        <ErrorBoundry>
                <Router>
                    <YMaps>
                        <App />
                    </YMaps>
                </Router>
        </ErrorBoundry>
    </Provider>,
    document.querySelector("#root")
)
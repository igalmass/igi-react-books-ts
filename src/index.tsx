import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {applyMiddleware, combineReducers, compose, createStore} from 'redux';
import {Provider} from 'react-redux';
import voicemailReducer from './store/VoicemailReducer';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
        vms: voicemailReducer
    }
);

const logger = (store: { getState: () => any; }) => {
    return (next: (arg0: any) => any) => {
        return (action: any) => {
            console.log('[Middleware]: dispatching ', action);
            const result = next(action);
            console.log('[Middleware] next state', store.getState());
            return result;
        }
    }
}

//const composeEnhancers = window["__REDUX_DEVTOOLS_EXTENSION_COMPOSE__"] || compose;
const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(logger, thunk)));




//const store = createStore(rootReducer);


ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App/>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

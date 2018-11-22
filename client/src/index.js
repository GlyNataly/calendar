import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux';
import calendarApp from './reducers';
import thunk from 'redux-thunk';
import { getData } from './actions';

const store = createStore(calendarApp, applyMiddleware(thunk));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root'));

store.dispatch(getData());

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { compose,applyMiddleware,createStore } from 'redux';
import Reducers from './reducers';

const store=createStore(Reducers,compose(applyMiddleware(thunk)))
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

      <Provider store={store}>
        <BrowserRouter>  
          <App />
        </BrowserRouter>
      </Provider>

);


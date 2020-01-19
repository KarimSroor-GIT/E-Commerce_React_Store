import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {MyStore} from './redux/store';
import {Persistor} from './redux/store';
import { BrowserRouter } from 'react-router-dom';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';



ReactDOM.render(
<Provider store= {MyStore} >
<PersistGate persistor= {Persistor}>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </PersistGate>
</Provider>
, document.getElementById('root'));


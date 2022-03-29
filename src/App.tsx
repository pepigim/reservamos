import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import PronosticoClima from './components/PronosticoClima';
import { store } from './store/store';


function App() {
    return (
        <Provider store={store}>
            <PronosticoClima />
        </Provider>
    );
}

export default App;

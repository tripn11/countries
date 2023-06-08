import "core-js/stable"; //to replace babel/polyfill
import React from 'react';
import { createRoot } from 'react-dom/client';
import 'normalize.css/normalize.css';
import './styles/style.scss';

import AppRouter from './routers/AppRouter';


const App = () => ( 
    <AppRouter />  
)

const root = createRoot(document.getElementById('app')); 
root.render(<App />)
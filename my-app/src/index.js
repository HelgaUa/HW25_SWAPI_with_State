import "./style.css"
import React from 'react';
import ReactDOM from 'react-dom/client';
import InputField from './components/InputField';
import TextField from "./components/TextField";


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <div>
        <InputField />
        <TextField />
    </div>
);
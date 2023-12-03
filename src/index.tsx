import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import ReactDOM from "react-dom/client";
import {SamuraiJsApp} from "./App";
import {DevSupport} from "@react-buddy/ide-toolbox";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
     <SamuraiJsApp/>
);

reportWebVitals();
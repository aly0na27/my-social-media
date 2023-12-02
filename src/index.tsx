import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import ReactDOM from "react-dom/client";
import {SamuraiJsApp} from "./App";
import {DevSupport} from "@react-buddy/ide-toolbox";
import {ComponentPreviews, useInitial} from "./dev";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <DevSupport ComponentPreviews={ComponentPreviews}
                useInitialHook={useInitial}>
        <SamuraiJsApp/>
    </DevSupport>
);

reportWebVitals();
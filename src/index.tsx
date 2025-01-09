import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import PriceLine from './PriceLine';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <PriceLine />
    </React.StrictMode>
);


import React from 'react';
import ReactDom from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import  Path from 'path';
import Routes from './routes/Route';

const root = ReactDom.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Routes />
    </BrowserRouter>
);




 
import React from 'react';
import ReactDOM from 'react-dom/client';
import "./styles.css";
import { RouterProvider } from 'react-router-dom';
import MainRoute from './routes/MainRoute';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={MainRoute} />
  </React.StrictMode>
);

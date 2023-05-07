import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import StarWarsApp from './components/StarWarsApp';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <StarWarsApp/>
  </React.StrictMode>
);


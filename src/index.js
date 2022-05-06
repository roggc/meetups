import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';

import AppProvider from './slices'

ReactDOM.render(<AppProvider><App /></AppProvider>, document.getElementById('root'));
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/App';

import Decimal from 'decimal.js';
Decimal.set({
  rounding: Decimal.ROUND_DOWN,
  toExpPos: 9e15,
  toExpNeg: -9e15,
  precision: 50,
});


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

import React from 'react';
// import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createRoot } from 'react-dom/client';
// import 'antd/dist/antd.css';

// ReactDOM.render(
//   <App />,
// document.getElementById('root')
// );
const container = document.getElementById('App');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App tab="home" />);


reportWebVitals();

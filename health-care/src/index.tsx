import React from 'react';
import ReactDOM from 'react-dom';
import './core-ui/index.css';
// import App from './components/App/App';
import reportWebVitals from './core-ux/reportWebVitals';
import NavBar from './components/Navbar/Navbar';
import Welcome from './components/Welcome/Welcome';

ReactDOM.render(
  <React.StrictMode>
    {/* <NavBar /> */}
    {/* <App /> */}
    <Welcome />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import Car from './Car/Car'

const divStyle = {
  textAlign: 'center',
  background: 'lightgrey',
  padding: '15px',
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

<div style ={divStyle}>
  <h1>
    I`m React
  </h1>

  <Car name={'Ford'} year={2018} />
  
  <Car name={'Audi'} year={2016} />
  
  <Car name={'Mazda'} year={2010}/>
</div>

  
  
  // React.createElement(
  //   'div',
  //   {
  //     className: 'App'
  //   },
  //   React.createElement(
  //     'h1',
  //     null,
  //     'Hello world!'
  //   )
    
  // )  
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

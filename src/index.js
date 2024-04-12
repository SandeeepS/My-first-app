import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

function ListItem(){
    return (
      <div className='list-item'>
      <hr />
      <div className='list-title'>
          <h4>My Tittle One</h4>
      </div>
      <div className='list-dis'>
          This is a very big description
      </div>
      <div className='list-label'>
              <span>label1</span>
              <span>label2</span>
              <span>label3</span>
      </div>
      </div>
    )
}
const root = ReactDOM.createRoot(document.getElementById('root'));

function myFunction(){
  console.log("clicked");
}
root.render(
  <div className='app'>
     <div className='app-header'>
          <span className='header-tittle'>Web development</span>
          <span>Home</span>
          <span>Usage</span>
          <span>Settings</span>
          <span>Logout</span>
     </div>
     <div className='app-body'>
          <div className='app-list'>
              <ListItem />
              <ListItem />
              <ListItem />
          
          </div>
     </div>
     <div className='app-root'>
            Copyright.in 
     </div>
  </div>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

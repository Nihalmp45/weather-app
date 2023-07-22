import React from 'react';
import './App.css';
import Header from './Components/Header';
import Main from './Components/Main';

export const fetchContext = React.createContext()

function App() {
  return (
    <>
        {(typeof Main != 'undefined') ? (
          <Header />
      ): (
        <div></div>
      )}
      <Main />
    </>
  );
}

export default App;

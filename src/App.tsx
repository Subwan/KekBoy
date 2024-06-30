import React from 'react';
import { ConfigProvider, ruRU } from '@ui';

import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <ConfigProvider locale={ruRU}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    </ConfigProvider>
  );
}

// eslint-disable-next-line no-restricted-syntax
export default App;

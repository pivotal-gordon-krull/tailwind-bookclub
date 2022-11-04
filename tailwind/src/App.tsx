import React from 'react';
import logo from './logo.svg';

function App() {
  return (
    <div className="text-center">
      <header className="bg-app-background text-white text-app-header flex flex-col justify-center items-center min-h-screen">
        <img src={logo} className="animate-spin-slow pointer-events-none h-40vmin" alt="logo" />
        <p className='my-6'>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="text-app-link underline"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

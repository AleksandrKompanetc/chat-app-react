import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUp from './components/auth/SignUp';

function App() {
  return (
    <div className='App'>
      <SignUp />
    </div>
  );
}

export default App;

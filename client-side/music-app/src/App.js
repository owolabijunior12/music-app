import React from 'react';
import LeftMenu from './component/LeftMenu';
import MainContent from './component/MainContent';
import RightMenu from './component/RightMenu';
import './App.css';

function App() {
  return (
    <div className='App'>
      <p>hello  
      </p>
        <LeftMenu />
        <MainContent />
        <RightMenu />
        <div className='background'></div>
    </div>
  );
}

export default App;

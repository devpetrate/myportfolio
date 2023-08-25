import './App.css';
import React, { useEffect } from 'react';
import GeneralMain from './Components/GeneralMain';
import Nav from './Components/Nav';


function App() {
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        document.title = 'Don\'t Forget To Hire Me!';
      } else {
        document.title = 'Need A Web Developer? Hire Me!';
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  return (
    <div className="App">
      <Nav />
      <GeneralMain />
    </div>
  );
}

export default App;

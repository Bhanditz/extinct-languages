import React from 'react';
import Graph from './components/Graph';
import Control from './components/Control';
import './App.css';

const App = (props) => {
  return (
    <div>
      <Graph {...props} />
      <Control {...props} />
    </div>
  );
};

export default App;

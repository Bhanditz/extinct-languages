import React from 'react';
import GraphContainer from './containers/GraphContainer';
import ControlContainer from './containers/ControlContainer';
import './App.css';

const App = (props) => {
  return (
    <div>
      <GraphContainer {...props} />
      <ControlContainer {...props} />
    </div>
  );
};

export default App;

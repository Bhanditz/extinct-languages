import React from 'react';
import GraphContainer from './containers/GraphContainer';
import ControlContainer from './containers/ControlContainer';
import LightBoxContainer from './containers/LightBoxContainer';
import './App.css';

const App = (props) => {
  return (
    <div className={'container'}>
      <GraphContainer {...props} />
      <ControlContainer {...props} />
      <LightBoxContainer {...props} />
    </div>
  );
};

export default App;

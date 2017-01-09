import React from 'react';
import GraphContainer from './containers/GraphContainer';
import ControlContainer from './containers/ControlContainer';
import LightBoxContainer from './containers/LightBoxContainer';
import './App.css';

const App = (props) => {
  return (
    <div className={'container'}>
      <h1>Endangered Languages</h1>
      <div className={'row'}>
        <GraphContainer {...props} />
        <ControlContainer {...props} />
      </div>
      <div className={'row'}>
        <LightBoxContainer {...props} />
      </div>
    </div>
  );
};

export default App;

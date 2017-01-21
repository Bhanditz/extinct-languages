import React from 'react';
// import GraphContainer from './containers/GraphContainer';
// import ControlContainer from './containers/ControlContainer';
// import LightBoxContainer from './containers/LightBoxContainer';
import * as Plot from './Plot';
import * as LightBox from './LightBox';
import './App.css';

const App = (props) => {
  return (
    <div className={'container'}>
      <h1>Endangered Languages</h1>
      <div className={'row'}>
        <Plot.Container {...props} />
      </div>
      <div className={'row'}>
        <LightBox.Container {...props} />
      </div>
    </div>
  );
};

export default App;

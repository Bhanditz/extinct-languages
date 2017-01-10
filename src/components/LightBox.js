import React from 'react';
import MapCoordinates from './MapCoordinates';

const CSS = {
  backgroundColor: '#d5d5d5',
};

const LightBox = (props) => {
  const d = props.selectedLang;
  return (
    <div className={'row'} >
      <div className={'six columns'} >
        <h4>Additonal Information</h4>
        <p>Name: {d.name}</p>
        <p>Speakers: {d.pop}</p>
        <p>Status: {d.status}</p>
      </div>
      <svg
        width={300} height={200}
        className={'six columns'}
        style={CSS}
      >
        <MapCoordinates {...props} />
      </svg>
    </div>
  );
};

export default LightBox;

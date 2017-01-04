import React from 'react';
import MapCoordinates from './MapCoordinates';

const renderLightBox = (props) => {
  // seletedLang comes from the store. No calculations done here.
  // render Info and Map
  const d = props.selectedLang;
  return (
    <div>
      <h4>Additonal Information</h4>
      <p>Name: {d.name}</p>
      <p>Speakers: {d.pop}</p>
      <p>Status: {d.status}</p>
      <svg width={300} height={200}>
        <MapCoordinates {...props} />
      </svg>
    </div>
  );
};

const LightBox = (props) => {
  return (
    <div>
      {renderLightBox(props)}
    </div>
  );
};

export default LightBox;

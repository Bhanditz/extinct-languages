import React from 'react';

const LightBox = (props) => {
  const d = props.data;
  return (
    <div>
      <h4>Additonal Information</h4>
      <p>Name: {d.name}</p>
      <p>Speakers: {d.pop}</p>
      <p>Status: {d.status}</p>
    </div>
  );
};

export default LightBox;

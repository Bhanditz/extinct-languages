import React from 'react';

const renderButton = (props) => {
  // returns a function that renders a button for
  // data of the type [{key, values}].
  return (d, i) => {
    const buttonProps = {
      onClick: () => props.actions.updateData(props.data, d.key),
      key: i,
    };
    // render button with label d.key = status and
    // onClick => updateData(masterDataSet, d.key)
    return <button {...buttonProps}>{d.key}</button>;
  };
};

const renderLightBox = (props) => {
  // seletedLang comes from the store. No calculations done here.
  const d = props.selectedLang;
  return (
    <div>
      <p>Name: {d.name}</p>
      <p>Speakers: {d.pop}</p>
      <p>Status: {d.status}</p>
    </div>
  );
};

const Control = (props) => {
  // render each button
  // render the lightbox
  return (
    <div>
      <h2>A Control Panel Goes here</h2>
      {props.data.map(renderButton(props))}
      {renderLightBox(props)}
    </div>
  );
};

export default Control;

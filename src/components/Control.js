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

const Control = (props) => {
  return (
    // TODO put class in the store
    <div className={'controlComponent'}>
      <h4>Filter by Status</h4>
      {props.data.map(renderButton(props))}
    </div>
  );
};

export default Control;

import React from 'react';

// TODO organize color/status in store
// { status, color } data
const colors = [
  '#fee5d9',
  '#fcae91',
  '#fb6a4a',
  '#de2d26',
  '#a50f15',
  'black',
];

const renderButton = (props) => {
  // returns a function that renders a button for
  // data of the type [{key, values}].
  return (d, i) => {
    const CSS = {
      width: '100%',
      borderColor: colors[i],
      borderWidth: 2,
    };
    const buttonProps = {
      onClick: () => props.actions.updateData(props.data, d.key),
      style: CSS,
      key: i,
    };
    // render button with label d.key = status and
    // onClick => updateData(masterDataSet, d.key)
    return <button {...buttonProps}>{d.key}</button>;
  };
};

const Control = (props) => {
  return (
    <div className={'three columns'}>
      <h4>Filter by Status</h4>
      <div>
        {props.data.map(renderButton(props))}
      </div>
    </div>
  );
};

export default Control;

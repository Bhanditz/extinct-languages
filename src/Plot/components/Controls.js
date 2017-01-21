import React from 'react';
import { buttonSelected } from '../utils';

const renderButton = (props) => {
  return (d, i) => {
    const selected = buttonSelected(props)(d.status);
    const buttonProps = {
      onClick: () => props.action(d.status, props.showStatus),
      key: i,
      style: {
        borderColor: d.color,
        backgroundColor: selected ? d.color : 'white',
        textDecoration: 'none',
      },
    };

    return <button {...buttonProps}>{d.status}</button>;
  };
};

const Controls = (props) => {
  return (
    <div>
      {props.entries.map(renderButton(props))}
    </div>
  );
};

export default Controls;

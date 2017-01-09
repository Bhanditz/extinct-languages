import React from 'react';
import { line } from 'd3-shape';

const renderLines = (props) => {
  return (d, i) => {
    const lineStyles = {
      x1: d,
      x2: d,
      y1: props.styles.height,
      y2: 0,
      stroke: 'grey',
      strokeWidth: 1,
      key: i,
    };

    return <line {...lineStyles} />;
  };
};

const Axis = (props) => {
  return (
    <g>
      {props.ticks.map(renderLines(props))}
    </g>
  );
};

export default Axis;

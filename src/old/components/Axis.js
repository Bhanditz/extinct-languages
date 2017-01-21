import React from 'react';
import { line } from 'd3-shape';

// TODO make all of this less hacky

const renderLines = (props) => {
  return (d, i) => {
    const sc = props.scales.pop;
    const lineStyles = {
      x1: sc(d),
      x2: sc(d),
      y1: props.styles.height,
      y2: 0,
      stroke: 'grey',
      strokeWidth: 0.5,
    //  key: i,
    };
    const textStyles = {
      x: sc(d),
      y: props.styles.height,
      dx: 5,
      dy: -5,
    };
    return (
      <g key={i}>
        <line {...lineStyles} />
        <text {...textStyles}>~{Math.floor(d)}</text>
      </g>
    );
  };
};

const graphLabel = (props) => {
  const textStyle = {
    x: props.styles.width,
    y: props.styles.height,
    textAnchor: 'center',
    dx: -240,
    dy: -25,
  };
  return <text {...textStyle}>Number of Speakers (Log Scale)</text>
};

const Axis = (props) => {
  return (
    <g>
      {props.ticks.map(renderLines(props))}
      {graphLabel(props)}
    </g>
  );
};

export default Axis;

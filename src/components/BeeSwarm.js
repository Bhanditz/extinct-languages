import React from 'react';

const renderCircles = (props) => {
  return (d, i) => {
    const circleProps = {
      cx: props.scales.x(d.pop),
      cy: props.styles.height / 2,
      r: 4,
      fill: props.scales.color(d.status),
      key: i,
    };

    return <circle {...circleProps} />;
  };
};

const BeeSwarm = (props) => {
  return (
    <g>
    {props.data.map(renderCircles(props))}
    </g>
  );
};

export default BeeSwarm;

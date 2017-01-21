import React from 'react';

const renderCircles = (props) => {
  const sc = props.scales;
  return (d, i) => {
    const circleProps = {
      cx: sc.x(d.x),
      cy: sc.y(d.y),
      r: props.styles.radius,
      fill: sc.color(d.status),
      onClick: () => props.action(d.name),
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

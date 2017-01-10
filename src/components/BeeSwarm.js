import React from 'react';

const renderCircles = (props) => {
  const sc = props.scales;
  return (d, i) => {
    const circleProps = {
      cx: sc.x(d.x),
      cy: sc.y(d.y),
      r: props.styles.radius,
      fill: props.scales.color(d.status),
      stroke: props.scales.color(d.status),
      opacity: 0.9,
      strokeWidth: 0.5,
      key: i,
      onClick: () => props.actions.updateSelectedLang(d),
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

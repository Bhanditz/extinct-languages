import React from 'react';
import { forceSimulation,
         forceX, forceY,
         forceCollide } from 'd3-force';

const getSwarmData = (props) => {
  const nodes = props.data;
  const simulation = forceSimulation(nodes)
      .force('x', forceX(d => props.scales.x(d.pop)).strength(1))
      .force('y', forceY(props.styles.height / 2))
      .force('collide', forceCollide(props.styles.radius + 1.5))
      .stop();
  for (let i = 0; i < 400; i += 1) simulation.tick();
  return nodes;
};

const renderCircles = (props) => {
  return (d, i) => {
    const circleProps = {
      cx: d.x,
      cy: d.y,
      r: props.styles.radius,
      fill: props.scales.color(d.status),
      stroke: props.scales.color(d.status),
      opacity: 0.7,
      strokeWidth: 0.5,
      key: i,
    };

    return <circle {...circleProps} />;
  };
};

const BeeSwarm = (props) => {
  const swarmData = getSwarmData(props);
  return (
    <g>
      {swarmData.map(renderCircles(props))}
    </g>
  );
};

export default BeeSwarm;

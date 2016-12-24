import React from 'react';
import BeeSwarm from './BeeSwarm';
import { scaleLinear, scaleQuantize } from 'd3-scale';
import { extent } from 'd3-array';

const status = [
                "Vulnerable",
                "Definitely endangered",
                "Severely endangered",
                "Extinct",
              ];
const colors = ['#d64d4a', 'blue', 'green', 'black'];

const getScales = (props) => {
  return {
    x: scaleLinear()
        .domain(extent(props.data, d => d.pop))
        .range([0, props.styles.width]),
    color: scaleQuantize()
            .domain(status)
            .range(colors),
  };
};

const Graph = (props) => {
  console.log(props.data);
  return (
    <svg width={props.styles.width} height={props.styles.height}>
      <BeeSwarm
        {...props}
        scales={getScales(props)}
      />
    </svg>
  );
};

export default Graph;

import React from 'react';
import { scaleOrdinal, scaleLog } from 'd3-scale';
import { extent } from 'd3-array';
import BeeSwarm from './BeeSwarm';

const statusColors = [
  { status: 'Vulnerable', color: '#db766b' },
  { status: 'Definitely endangered', color: '#dd5c4d' },
  { status: 'Criticallly endangered', color: '#e04433' },
  { status: 'Severely endangered', color: '#e22f1b' },
  { status: 'Extinct', color: 'black' },
];

// TODO figure out y-scale
const getScales = (props) => {
  const PAD = props.styles.pad;
  return {
    x: scaleLog()
        .domain(extent(props.data, d => d.pop))
        .range([PAD, props.styles.width - PAD]),
    y: scaleOrdinal()
        .domain(statusColors.map(d => d.status))
        .range([0.6, 0.55, 0.5, 0.45, 0.4].map(d => d * (props.styles.height - PAD))),
    color: scaleOrdinal()
            .domain(statusColors.map(d => d.status))
            .range(statusColors.map(d => d.color)),
  };
};

const Graph = (props) => {
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

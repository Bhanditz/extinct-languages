import React from 'react';
import { scaleOrdinal, scaleLinear } from 'd3-scale';
import { extent } from 'd3-array';
import BeeSwarm from './BeeSwarm';

const statusColors = [
  { status: 'Vulnerable', color: '#db766b' },
  { status: 'Definitely endangered', color: '#dd5c4d' },
  { status: 'Criticallly endangered', color: '#e04433' },
  { status: 'Severely endangered', color: '#e22f1b' },
  { status: 'Extinct', color: 'black' },
];

// TODO make y-scale dependent on number of elements
//  i.e. an inverse relationship between y-extent and
//  padding

const getScales = (props) => {
  const PAD = props.styles.pad;
  return {
    x: scaleLinear()
        .domain(extent(props.data, d => d.x))
        .range([PAD, props.styles.width - PAD]),
    y: scaleLinear()
        .domain(extent(props.data, d => d.y))
        .range([props.styles.height - PAD, PAD]),
    color: scaleOrdinal()
            .domain(statusColors.map(d => d.status))
            .range(statusColors.map(d => d.color)),
  };
};

const Graph = (props) => {
  return (
    <svg width={props.styles.width} height={props.styles.height} className={props.styles.className}>
      <BeeSwarm
        {...props}
        scales={getScales(props)}
      />
    </svg>
  );
};

export default Graph;

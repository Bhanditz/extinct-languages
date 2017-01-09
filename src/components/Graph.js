import React from 'react';
import { scaleOrdinal, scaleLinear, scaleLog } from 'd3-scale';
import { extent, quantile } from 'd3-array';
import BeeSwarm from './BeeSwarm';
import Axis from './Axis';

// { status, color } data
const statusColors = [
  { status: 'Vulnerable', color: '#fee5d9' },
  { status: 'Definitely endangered', color: '#fcae91' },
  { status: 'Criticallly endangered', color: '#fb6a4a' },
  { status: 'Severely endangered', color: '#de2d26' },
  { status: 'Extinct', color: '#a50f15' },
];

// TODO make y-scale dependent on number of elements
//  i.e. an inverse relationship between y-extent and
//  padding

// data --> { xScale, yScale, colorScale }
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

// props --> { props for axes }
const getSettings = (props) => {
  const sc = scaleLog()
              .domain(extent(props.data, d => d.pop))
              .range([0, props.styles.width]);
  const popArr = props.data.map(d => d.pop).sort((a, b) => a - b);
  const percArr = [0.05, 0.15, 0.25, 0.35, 0.50, 0.75];
  const percentiles = percArr.map(d => quantile(popArr, d)).map(d => sc(d));

  return {
    styles: props.styles,
    ticks: percentiles,
    scale: getScales(props).x,
  };
};

// centering css
const css = {
  display: 'block',
  margin: 'auto',
};

// Renderer
const Graph = (props) => {
  return (
    <div className={'nine columns'}>
      <svg
        width={props.styles.width}
        height={props.styles.height}
        style={css}
      >
        <BeeSwarm
          {...props}
          scales={getScales(props)}
        />
        <Axis {...getSettings(props)} />
      </svg>
    </div>
  );
};

export default Graph;

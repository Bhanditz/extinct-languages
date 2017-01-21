import React from 'react';
import { scaleOrdinal, scaleLinear, scaleLog } from 'd3-scale';
import { extent, quantile } from 'd3-array';
import BeeSwarm from './BeeSwarm';
import Axis from './Axis';

// { status, color } data
const statusColors = [
  { status: 'Vulnerable', color: '#fee5d9' },
  { status: 'Definite', color: '#fcae91' },
  { status: 'Critical', color: '#fb6a4a' },
  { status: 'Severe', color: '#de2d26' },
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
    pop: scaleLog()
          .domain(extent(props.data, d => d.pop))
          .range([0, props.styles.width]),
  };
};

// TODO this is hacky af

// props --> { props for axes }
const getSettings = (props) => {
  // const sc = scaleLog()
  //             .domain(extent(props.data, d => d.pop))
  //             .range([0, props.styles.width]);
  // const popArr = props.data.map(d => d.pop).sort((a, b) => a - b);
  // const percArr = [0.05, 0.15, 0.25, 0.35, 0.50, 0.75];
  // const percentiles = percArr.map(d => quantile(popArr, d))
  //                     .map(d => {
  //                       return {
  //                         coord: sc(d),
  //                         percentile: d,
  //                       };
  //                     });
  const percScale = scaleLinear()
                    //  .domain([0, 1])
                      .range(extent(props.data, d => d.pop));

  // const ticks = [0.1, 0.25, 0.35, 0.5, 0.65, 0.8];
  const ticks = [0.00001, 0.0001, 0.001, 0.01, 0.1];
  const percentiles = ticks.map(percScale);
  return {
    styles: props.styles,
    ticks: percentiles,
    scales: getScales(props),
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
        <Axis {...getSettings(props)} />
        <BeeSwarm
          {...props}
          scales={getScales(props)}
        />
      </svg>
    </div>
  );
};

export default Graph;

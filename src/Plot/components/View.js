import React from 'react';
import BeeSwarm from './BeeSwarm';
import Controls from './Controls';
import { filterData, shiftData, getScales } from '../utils';

const svgProps = (props) => {
  return {
    width: props.styles.width,
    height: props.styles.height,
  };
};

const beeSwarmProps = (props) => {
  const dat = filterData(props);
  const filtered = shiftData(dat);

  return {
    data: filtered,
    scales: getScales(props)(filtered),
    styles: props.styles.Plot,
    action: props.actions.updateSelectedLang,
  };
};

const controlProps = (props) => {
  return {
    entries: props.statusColors,
    showStatus: props.showStatus,
    action: props.actions.updateStatusFilter,
  };
};

const View = (props) => {
  return (
    <div>
      <svg {...svgProps(props)}>
        <BeeSwarm {...beeSwarmProps(props)} />
      </svg>
      <Controls {...controlProps(props)} />
    </div>
  );
};

export default View;

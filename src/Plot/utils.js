import { min, extent } from 'd3-array';
import { scaleLinear, scaleLog, scaleOrdinal } from 'd3-scale';

export const filterData = (props) => {
  const statusSet = new Set(props.showStatus);
  return props.data.filter(d => statusSet.has(d.status))
          .map(d => ({
            x: d.x,
            y: d.y,
            status: d.status,
            name: d.name,
          }));
};

export const shiftData = (data) => {
  const xShift = min(data, d => d.x) - 1;
  return data.map(d => ({ ...d, x: d.x - xShift }));
};

export const getScales = (props) => {

  const st = props.styles;
  const width = st.width;
  const height = st.height;
  const plotPad = st.pad;
  const radPad = st.Plot.radius + st.Plot.radiusBuffer;
  const pad = plotPad + radPad;
  const colors = props.statusColors;

  return (data) => {
    return {
      x: scaleLog()
          .domain(extent(data, d => d.x))
          .range([pad, width - pad]),
      y: scaleLinear()
          .domain(extent(data, d => d.y))
          .range([height - pad, pad]),
      color: scaleOrdinal()
        .domain(colors.map(d => d.status))
        .range(colors.map(d => d.color)),
    };
  };
};

export const buttonSelected = (props) => {
  const checkSet = new Set(props.showStatus);
  return (status) => {
    const containsStatus = checkSet.has(status);
    return containsStatus;
  };
};

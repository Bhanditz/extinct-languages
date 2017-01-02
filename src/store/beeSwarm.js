import { csvParse } from 'd3-dsv';
import { nest } from 'd3-collection'
import { forceSimulation, forceX, forceY, forceCollide } from 'd3-force';
import { scaleLog, scaleOrdinal } from 'd3-scale';
import { extent } from 'd3-array';
import { langs } from '../data/data.csv';
import { plotStyle } from './styles';

const getScales = (data, style) => {
  return {
    x: scaleLog()
        .domain(extent(data, d => d.pop))
        .range([0, style.width]),
  };
};

const beeSwarmer = (style) => {
  const rad = style.radius;
  const hgt = style.height;
  return (obj) => {
    const nodes = obj.values;
    const sc = getScales(nodes, style);
    const simulation = forceSimulation(nodes)
      .force('x', forceX(d => sc.x(d.pop)).strength(1))
      .force('y', forceY(hgt / 2))
      .force('collide', forceCollide(rad + 1))
      .stop();
    for (let i = 0; i < 400; i += 1) simulation.tick();
    return { key: obj.key, values: nodes };
  };
};

const DATA = csvParse(langs).map(d => {
  return {
    name: d['Name in English'],
    status: d['Degree of endangerment'],
    lat: +d.Latitude,
    lon: +d.Longitude,
    pop: +d['Number of speakers'],
    codes: d['Country codes alpha 3'].split(', '),
  };
}).filter(d => d.pop !== 0)
  .sort((a, b) => a.status - b.status);

const statusDATA = nest()
  .key(d => d.status)
  .entries(DATA);

const allData = [...statusDATA, { key: 'All', values: DATA }];

export default allData.map(beeSwarmer(plotStyle));

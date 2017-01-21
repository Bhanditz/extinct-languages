import { forceSimulation, forceX, forceY, forceCollide } from 'd3-force';
import { csvParse } from 'd3-dsv';
import { nest } from 'd3-collection';

// TODO better separation of nodes
const beeSwarm = (styles) => {
  const rad = styles.radius;
  const buff = styles.radiusBuffer;
  return (data) => {
    const nodes = data;
    const iterations = nodes.length / 3;
    const simulation = forceSimulation(nodes)
      .force('x', forceX(d => d.pop).strength(0.2))
      .force('y', forceY().strength(0.1))
      .force('collide', forceCollide(rad + buff))
      .stop();
    for (let i = 0; i < iterations; i += 1) simulation.tick();
    return nodes;
  };
};

const importToSwarm = (data) => {
  return csvParse(data).map(d => {
    return {
      name: d['Name in English'],
      status: d['Degree of endangerment'],
      lat: +d.Latitude,
      lon: +d.Longitude,
      pop: +d['Number of speakers'],
      codes: d['Country codes alpha 3'].split(', '),
    };
  }).filter(d => d.pop !== 0);
};

const convertData = (data, style) => beeSwarm(style)(importToSwarm(data));

const getStatus = (data) => {
  return nest()
        .key(d => d['Degree of endangerment'])
        .entries(csvParse(data))
        .map(d => d.key);
};
export { convertData, getStatus };

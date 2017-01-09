import { csvParse } from 'd3-dsv';
import { nest } from 'd3-collection';
import { forceSimulation, forceX, forceY, forceCollide } from 'd3-force';
import { scaleLog, scaleOrdinal } from 'd3-scale';
import { extent } from 'd3-array';
import { langs } from '../data/data.csv';
import { plotStyle } from './styles';

const getScales = (data, style) => {
  // use data = d.values to determine scale
  return {
    x: scaleLog()
        .domain(extent(data, d => d.pop))
        .range([0, style.width]),
    y: scaleOrdinal()
        .domain(['Vulnerable',
          'Definite',
          'Critical',
          'Severe',
          'Extinct',
        ])
        .range([1.2, 1.1, 1, 0.9, 0.8].map(d => d * (style.height / 2))),
  };
};

const beeSwarmer = (style) => {
  // returns a function that runs beeSwarm simulation
  const rad = style.radius;
  const hgt = style.height;
  return (obj) => {
    // {key, values} -> {key, beeSwarm(values)}
    const nodes = obj.values;
    const iterations = nodes.length / 5;
    const sc = getScales(nodes, style);
    const simulation = forceSimulation(nodes)
      .force('x', forceX(d => sc.x(d.pop)).strength(1))
      .force('y', forceY(d => sc.y(d.status)))
      .force('collide', forceCollide(rad + 1))
      .stop();
    for (let i = 0; i < iterations; i += 1) simulation.tick();
    return { key: obj.key, values: nodes };
  };
};

// Import data, filter out languages with pop = 0
const DATA = csvParse(langs).map(d => {
  const nameScale = scaleOrdinal()
          .domain(['Vulnerable',
            'Definitely endangered',
            'Critically endangered',
            'Severely endangered',
            'Extinct',
          ])
          .range(['Vulnerable',
            'Definite',
            'Critical',
            'Severe',
            'Extinct',
          ]);
  return {
    name: d['Name in English'],
    status: nameScale(d['Degree of endangerment']),
    lat: +d.Latitude,
    lon: +d.Longitude,
    pop: +d['Number of speakers'],
    codes: d['Country codes alpha 3'].split(', '),
  };
}).filter(d => d.pop !== 0);

const statusDATA = nest()
  .key(d => d.status)
  .entries(DATA);

const allData = [...statusDATA, { key: 'All', values: DATA }];

export default allData.map(beeSwarmer(plotStyle));

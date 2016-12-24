import { langs } from '../data/data.csv';
import { csvParse } from 'd3-dsv';

const DATA = csvParse(langs).map(d => {
  return {
    name: d['Name in English'],
    status: d['Degree of endangerment'],
    lat: +d.Latitude,
    lon: +d.Longitude,
    pop: +d['Number of speakers'],
    codes: d['Country codes alpha 3'].split(', '),
  };
});

const PAD = 60;
const STYLES = { width: 700 - PAD, height: 300 - PAD };

const STORE = {
  data: DATA,
  styles: STYLES,
};

export default STORE;

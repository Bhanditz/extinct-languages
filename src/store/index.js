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
}).sort((a, b) => a.pop - b.pop);

const PAD = 60;
const STYLES = { width: 940 - PAD, height: 400 - PAD, radius: 3, pad: PAD };

const STORE = {
  data: DATA,
  styles: STYLES,
};

export default STORE;

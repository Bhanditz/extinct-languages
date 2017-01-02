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
}).sort((a, b) => a.status - b.status);

const PAD = 60;
const STYLES = { width: 940 - PAD, height: 440 - PAD, radius: 3, pad: PAD };

const DUMMY = { name: 'LANG', pop: 1234, status: 'OKAY' };

// TODO pre-render beeswarm

const STORE = {
  dataFixed: DATA,
  dataRender: DATA,
  graphStyles: STYLES,
  filterStatus: 'All',
  selectedLang: DUMMY,
  mapStyles: { width: 300, height: 100 },
//  controlStyles: CONTROL_STYLES,
};

export default STORE;

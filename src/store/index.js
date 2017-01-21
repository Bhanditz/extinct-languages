import { langs as CSV } from '../data/data.csv';
import * as Plot from '../Plot';
import * as LightBox from '../LightBox';
import { convertData, getStatus } from '../utils';

// const DUMMY = { name: 'LANG', pop: 1234, status: 'OKAY' };
// [{key, values}, ...] -> [{All, values}] -> values
// const ALL = DATA.filter(d => d.key === 'All')[0].values;

const DATA = convertData(CSV, Plot.constants.SVG.Plot);

const STORE = {
  data: DATA,
  showStatus: getStatus(CSV),
  selectedLang: 'Bung',
  [Plot.constants.NAME]: Plot.constants,
  [LightBox.constants.NAME]: LightBox.constants,
};

// const STORE = {
//   dataFixed: DATA,
//   dataRender: ALL,
//   graphStyles: plotStyle,
//   filterStatus: 'All',
//   selectedLang: DUMMY,
//   mapStyles: { width: 300, height: 100 },
// //  controlStyles: CONTROL_STYLES,
// };

export default STORE;

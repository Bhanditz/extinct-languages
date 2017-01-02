import DATA from './beeSwarm';
import { plotStyle } from './styles';

const DUMMY = { name: 'LANG', pop: 1234, status: 'OKAY' };
// [{key, values}, ...] -> [{All, values}] -> values
const ALL = DATA.filter(d => d.key === 'All')[0].values;

const STORE = {
  dataFixed: DATA,
  dataRender: ALL,
  graphStyles: plotStyle,
  filterStatus: 'All',
  selectedLang: DUMMY,
  mapStyles: { width: 300, height: 100 },
//  controlStyles: CONTROL_STYLES,
};

export default STORE;

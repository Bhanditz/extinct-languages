import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from './actions';
import { NAME } from './constants';
import View from './components/View';

const mapStatetoProps = (state) => {
  // data: [{status, values}, ...]
  // filterTerm: 'status',
  // selectedLang: {name, pop, status, ...}
  return {
    // data: state.dataFixed,
    // styles: state.mapStyles,
    // filterTerm: state.filterTerm,
    // selectedLang: state.selectedLang,
    data: state.data,
    selectedLang: state.selectedLang,
    styles: state[NAME].styles,
  };
};

const mapDispatchtoProps = (dispatch) => {
  return { actions: bindActionCreators(Actions, dispatch) };
};

export default connect(mapStatetoProps, mapDispatchtoProps)(View);

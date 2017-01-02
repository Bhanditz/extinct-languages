import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from '../actions';
import Control from '../components/Control';

const mapStatetoProps = (state) => {
  // data: [{status, values}, ...]
  // filterTerm: 'status',
  // selectedLang: {name, pop, status, ...}
  return {
    data: state.dataFixed,
    styles: state.mapStyles,
    filterTerm: state.filterTerm,
    selectedLang: state.selectedLang,
  };
};

const mapDispatchtoProps = (dispatch) => {
  return { actions: bindActionCreators(Actions, dispatch) };
};

export default connect(mapStatetoProps, mapDispatchtoProps)(Control);

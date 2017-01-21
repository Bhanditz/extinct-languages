import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from './actions';
import { NAME } from './constants';
import View from './components/View';

const mapStatetoProps = (state) => {
  return {
//    data: state.dataRender.filter(d => d.pop !== 0),
    data: state.data,
    showStatus: state.showStatus,
    styles: state[NAME].SVG,
    statusColors: state[NAME].statusColors,
  };
};

const mapDispatchtoProps = (dispatch) => {
  return { actions: bindActionCreators(Actions, dispatch) };
};

export default connect(mapStatetoProps, mapDispatchtoProps)(View);

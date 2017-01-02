import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from '../actions';
import Graph from '../components/Graph';

const mapStatetoProps = (state) => {
  return {
    data: state.dataRender.filter(d => d.pop !== 0),
    styles: state.graphStyles,
  };
};

const mapDispatchtoProps = (dispatch) => {
  return { actions: bindActionCreators(Actions, dispatch) };
};

export default connect(mapStatetoProps, mapDispatchtoProps)(Graph);

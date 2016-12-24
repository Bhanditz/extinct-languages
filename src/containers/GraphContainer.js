import { connect } from 'react-redux';
import Graph from '../components/Graph';

const mapStatetoProps = (state) => {
  return {
    data: state.data,
    styles: state.styles,
  };
};

export default connect(mapStatetoProps)(Graph);

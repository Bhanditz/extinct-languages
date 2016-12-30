import { connect } from 'react-redux';
import Graph from '../components/Graph';

const mapStatetoProps = (state) => {
  return {
    data: state.dataRender.filter(d => d.pop !== 0),
    styles: state.styles,
  };
};

export default connect(mapStatetoProps)(Graph);

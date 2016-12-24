import { connect } from 'react-redux';
import Control from '../components/Control';

const mapStatetoProps = (state) => {
  return {
    data: state.data,
    styles: state.styles,
  };
};

export default connect(mapStatetoProps)(Control);

import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import NavBar from "../components/NavBar";


function mapStateToProps(state) {
  return {
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
  }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBar);

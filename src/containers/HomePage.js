import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import HomePage from "../components/HomePage";


function mapStateToProps(state) {
  return {
    items: state.cards.items,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
  }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);

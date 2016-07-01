import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import CardForm from "../components/CardForm";
import { cardCreate } from "../actions/cards";


function mapStateToProps(state) {
  return {
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    cardCreate
  }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CardForm);

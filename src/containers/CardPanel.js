import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { push as updatePath } from "react-router-redux";

import CardPanel from "../components/CardPanel";
import { cardDelete } from "../actions/cards";


function mapStateToProps(state) {
  return {
  };
}

function mapDispatchToProps(dispatch) {
  const openEdit = (id) => updatePath(`/edit/${id}`);
  return bindActionCreators({
    openEdit,
    cardDelete,
  }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CardPanel);

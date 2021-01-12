import { connect } from "react-redux";
import AdminView from "../components/AdminView";
import { bindActionCreators } from "redux";
import * as ServerActions from "../actions/server";


function mapDispatchToProps(dispatch) {
  return bindActionCreators(ServerActions, dispatch);
}

function mapStateToProps(state) {
  //console.log(state.records);
  return {
    records: state.records,
    schema: state.form.schema,
    uiSchema: state.form.uiSchema,
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AdminView);

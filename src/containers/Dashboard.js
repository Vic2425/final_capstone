import { connect } from "react-redux";
import Dashboard from "../components/Dashboard";

import { removeReminder, markComplete } from "../redux/actions";

const mapStateToProps = (state) => {
  return {
    reminders: state.reminders,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeReminder: (index) => dispatch(removeReminder(index)),
    markComplete: (index) => dispatch(markComplete(index)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);

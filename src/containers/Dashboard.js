import { connect } from "react-redux";
import Dashboard from "../components/Dashboard";
// import EditForm from "../components/EditForm";

import { removeReminder, markComplete, updateEdit } from "../redux/actions";

const mapStateToProps = (state) => {
  return {
    reminders: state.reminders,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeReminder: (index) => dispatch(removeReminder(index)),
    markComplete: (index) => dispatch(markComplete(index)),
    updateEdit: (index, updatedReminder) => dispatch(updateEdit(index, updatedReminder))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);

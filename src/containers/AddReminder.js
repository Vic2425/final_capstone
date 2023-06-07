import { connect } from "react-redux";
import AddReminder from "../components/AddReminder";
import { addReminder } from "../redux/actions";

const mapDispatchToProps = (dispatch) => {
  return {
    addReminder: (reminder) => dispatch(addReminder(reminder)),
  };
};

export default connect(null, mapDispatchToProps)(AddReminder);

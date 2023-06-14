import { connect } from "react-redux";
import EditForm from "../components/EditForm";
import { updateEdit } from "../redux/actions";

const mapDispatchToProps = (dispatch) => {
  return {
    updateEdit: (index, updatedReminder) =>
      dispatch(updateEdit(index, updatedReminder)),
  };
};

export default connect(null, mapDispatchToProps)(EditForm);

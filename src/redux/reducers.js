import { combineReducers } from "redux";

const reminders = (state = reminders, action) => {
  switch (action.type) {
    case "ADD_REMINDER":
      return [...state, action.value];
    case "MARK_COMPLETE":
      const newState = [...state];
      newState[action.value].isDone = true;
      return newState;
    case "REMOVE_REMINDER":
      const newList = [...state];
      newList.splice(action.value, 1);
      return newList;
    case "UPDATE_EDIT":
      console.log("UPDATE_EDIT action received");
      return state.map((reminder) =>
        reminder.id === action.value
          ? { ...reminder, ...action.updatedReminder }
          : reminder
      );
    default:
      return state;
  }
};

export default combineReducers({ reminders });

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

    default:
      return state;
  }
};

const eventReducer = (state = null, action) => {
  switch (action.type) {
    case "CHECK_EVENT":
      return action.value;
    default:
      return state;
  }
};

export default combineReducers({ reminders, eventReducer });

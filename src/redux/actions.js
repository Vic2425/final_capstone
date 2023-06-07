export const addReminder = (reminder) => {
  return {
    type: "ADD_REMINDER",
    value: reminder,
  };
};

export const markComplete = (index) => {
  return {
    type: "MARK_COMPLETE",
    value: index,
  };
};

export const removeReminder = (index) => {
  return {
    type: "REMOVE_REMINDER",
    value: index,
  };
};

export const checkEvent = (reminder) => {
  return {
    type: "CHECK_EVENT",
    value: reminder,
  };
};

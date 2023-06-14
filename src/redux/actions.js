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

export const updateEdit = (index, updatedReminder) => {
  console.log("updateEdit action creator called");
  console.log("Index:", index);
  console.log("Updated Reminder:", updatedReminder);
  return {
    type: "UPDATE_EDIT",
    value: index,
    updatedReminder,
  };
};

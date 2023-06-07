import React, { useState } from "react";
import moment from "moment";

const EditForm = ({ reminder, onSave, onCancel }) => {
  const [updatedReminder, setUpdatedReminder] = useState({
    title: reminder.title,
    description: reminder.description,
    date: reminder.date,
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUpdatedReminder((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSave = () => {
    onSave(updatedReminder);
  };

  return (
    <>
      <input
        type="text"
        name="title"
        value={updatedReminder.title}
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="description"
        value={updatedReminder.description}
        onChange={handleInputChange}
      />
      <input
        type="datetime-local"
        name="date"
        value={moment(updatedReminder.date).format("YYYY-MM-DDTHH:mm")}
        onChange={handleInputChange}
      />
      <button onClick={handleSave}>Save</button>
      <button onClick={onCancel}>Cancel</button>
    </>
  );
};

export default EditForm;

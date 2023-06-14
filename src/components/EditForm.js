import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../App.css";

const EditForm = ({ reminder, index, handleCancelEdit, handleSaveEdit }) => {
  const [updatedTitle, setUpdatedTitle] = useState(reminder.title);
  const [updatedDescription, setUpdatedDescription] = useState(
    reminder.description
  );
  const [updatedDate, setUpdatedDate] = useState(new Date(reminder.date));

  const handleTitleChange = (event) => {
    setUpdatedTitle(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setUpdatedDescription(event.target.value);
  };

  const handleSave = () => {
    const updatedReminder = {
      ...reminder,
      title: updatedTitle,
      description: updatedDescription,
      date: updatedDate,
    };
    handleSaveEdit(index, updatedReminder);
  };

  return (
    <div className="dialog-overlay">
      <div className="dialog-container">
        <div className="dialog-title">Edit Reminder</div>
        <div className="dialog-content">
          <form
            className="form"
            style={{
              display: "flex",
              flexDirection: "column",
              width: "500px",
            }}
          >
            <input
              type="text"
              value={updatedTitle}
              onChange={handleTitleChange}
              className="txtinput"
              required
            />
            <textarea
              value={updatedDescription}
              onChange={handleDescriptionChange}
              className="txtarea"
              required
              style={{ cols: 5 }}
            />
            <DatePicker
              selected={updatedDate}
              onChange={(date) => setUpdatedDate(date)}
              dateFormat="Pp"
              showTimeSelect
              timeFormat="p"
              shouldCloseOnSelect={false}
            />
            <br />

            <button className="save-btn" onClick={handleSave}>
              Save
            </button>
            <button className="cancel-btn" onClick={handleCancelEdit}>
              Cancel
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditForm;

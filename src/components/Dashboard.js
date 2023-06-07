import React, { useState } from "react";
import AddReminder from "../containers/AddReminder";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import moment from "moment";
import EditForm from "./EditForm";

import "../App.css";

const Dashboard = (props) => {
  const [editIndex, setEditIndex] = useState(-1);

  const handleEdit = (index) => {
    setEditIndex(index);
  };

  const handleCancelEdit = () => {
    setEditIndex(-1);
  };

  const handleSaveEdit = (index, updatedReminder) => {
    props.editReminder(index, updatedReminder);
    setEditIndex(-1);
  };

  return (
    <>
      <AddReminder />
      <div className="grid-right">
        {props.reminders.map((reminder, index) => (
          <div key={index} className="list">
            <div className="checkBx">
              <input
                className="check"
                type="checkbox"
                checked={reminder.isDone}
                onChange={() => props.markComplete(index)}
              />
            </div>
            <div className="note-box">
              {editIndex === index ? (
                <EditForm
                  reminder={reminder}
                  onSave={(updatedReminder) =>
                    handleSaveEdit(index, updatedReminder)
                  }
                  onCancel={handleCancelEdit}
                />
              ) : (
                <span
                  style={{
                    textDecoration: reminder.isDone ? "line-through" : "",
                  }}
                >
                  <div className="content-middle">{reminder.title}</div>
                  <div className="details">{reminder.description}</div>
                  <div className="date">
                    {moment(new Date(reminder.date))
                      .format("MMMM Do YYYY, h:mm a")
                      .toString()}
                  </div>
                </span>
              )}
            </div>
            <div className="editIcon">
              <EditRoundedIcon
                onClick={() => handleEdit(index)}
                style={{ color: "#61398F", fontSize: 28 }}
              />
            </div>
            <div className="delIcon">
              <DeleteRoundedIcon
                onClick={() => props.removeReminder(index)}
                style={{ color: "#61398F", fontSize: 30 }}
              />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Dashboard;

import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import LogoutIcon from "@mui/icons-material/Logout";
import { Link } from "react-router-dom";
import "../App.css";

const AddReminder = ({ reminderTotal, addReminder }) => {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState(new Date());
  const toggleDialog = () => setOpen(!open);

  const handleTxtChange = (e) => {
    const { id, value } = e.target;
    if (id === "title") setTitle(value);
    else setDescription(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const reminder = { title, description, date, id: reminderTotal + 1 };
    addReminder(reminder);
    setOpen(false);

    const currentTime = new Date().getTime();
    const reminderTime = date.getTime();
    const timeDifference = reminderTime - currentTime;

    if (timeDifference > 0) {
      setTimeout(() => {
        toast.success(`Upcoming: ${title} , ${date}`, {
          position: "top-center",
          autoClose: false,
          hideProgressBar: true,
          theme: "dark",
        });
      }, timeDifference);
    }
  };

  useEffect(() => {
    if (!open) {
      setTitle("");
      setDescription("");
      setDate(new Date());
    }
  }, [open]);

  return (
    <>
      <div className="mainBox">
        <div className="header">
          <div className="imgBx">
            <img
              src="https://cdn-icons-png.flaticon.com/512/666/666201.png"
              alt="icon"
            ></img>
          </div>
          <p>user name</p>
          <h1>Reminders:</h1>
          <div className="logOut">
            <Link to="/">
              <LogoutIcon sx={{ color: "#878787", fontSize: 30 }} />
            </Link>
          </div>
          <div className="hide">Log Out</div>
          <div className="add-btn">
            <button onClick={toggleDialog}>+</button>
          </div>
        </div>
      </div>
      {open && (
        <div className="dialog-overlay">
          <div className="dialog-container">
            <div className="dialog-title">Add New Reminder</div>
            <div className="dialog-content">
              <form
                onSubmit={handleSubmit}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  width: "500px",
                }}
                className="form"
              >
                <input
                  id="title"
                  placeholder="Title"
                  value={title}
                  onChange={handleTxtChange}
                  required
                  className="txtinput"
                />
                <textarea
                  id="description"
                  placeholder="Description"
                  value={description}
                  onChange={handleTxtChange}
                  required
                  className="txtarea"
                  style={{ cols: 5 }}
                />
                <DatePicker
                  type="date"
                  minDate={new Date()}
                  selected={date}
                  onChange={(date) => {
                    setDate(date);
                  }}
                  dateFormat="Pp"
                  showTimeSelect
                  timeFormat="p"
                  shouldCloseOnSelect={false}
                />
                <br />

                <button type="submit" className="submit-btn">
                  Submit
                </button>
                <button className="cancel-btn" onClick={toggleDialog}>
                  Cancel
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AddReminder;

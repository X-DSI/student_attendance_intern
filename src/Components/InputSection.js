import { useState } from "react";
import Button from "./Button";

const InputSection = () => {
  // UseState
  const [time, setTime] = useState("");
  const [rollNumber, setRollNumber] = useState("");
  const [studentName, setStudentName] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    setRollNumber("");
    setStudentName("");
  };

  // Check-In Function
  const onCheckIn = async (rollNumber, studentName) => {
    const res = await fetch(`http://localhost:5000/students/${rollNumber}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ checkintime: "changfe", name }),
    });
    const data = await res.json();
    console.log("🚀 ~ file: InputSection.js:16 ~ onCheckIn ~ data", data);
  };

  // Check-Out Function
  const onCheckOut = () => {};
  return (
    <div className="inputsection-wrapper">
      <form className="input-form" onSubmit={onSubmit}>
        <div className="form-field">
          <label>Roll Number</label>
          <input
            type="text"
            placeholder="Roll Number"
            value={rollNumber}
            onChange={(e) => setRollNumber(e.target.value)}
          />
        </div>
        <div className="form-field">
          <label>Student Name</label>
          <input
            type="text"
            placeholder="Student Name"
            value={studentName}
            onChange={(e) => setStudentName(e.target.value)}
          />
        </div>
      </form>
      <Button
        color={"green"}
        onClick={onCheckIn(rollNumber, studentName)}
        text={"Check In"}
      />
      <Button color={"red"} onClick={onCheckOut} text={"Check Out"} />
    </div>
  );
};

export default InputSection;

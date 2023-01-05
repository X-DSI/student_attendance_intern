import { useState } from "react";
import Button from "./Button";

const InputSection = () => {
  // UseState
  const [time, setTime] = useState("");
  const [rollNumber, setRollNumber] = useState("");
  const [studentName, setStudentName] = useState("");

  // Check-In Function
  const onCheckIn = async (rollNumber, studentName) => {
    const res = await fetch(`http://localhost:5000/students/${rollNumber}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        checkintime: "cfsjdhfgjhge",
        name: { studentName },
      }),
    });
    const data = await res.json();
    console.log("🚀 ~ file: InputSection.js:16 ~ onCheckIn ~ data", data);
  };

  // Check-Out Function
  const onCheckOut = () => {};
  return (
    <div className="inputsection-wrapper container">
      <form className="input-form">
        <div className="form-field">
          <label>Roll Number</label>
          <input
            type="text"
            placeholder="Roll Number"
            defaultValue={rollNumber}
          />
        </div>
        <div className="form-field">
          <label>Student Name</label>
          <input
            type="text"
            placeholder="Student Name"
            defaultValue={studentName}
          />
        </div>
      </form>
      <div className="btn-wrapper">
        <Button
          color={"green"}
          onClick={onCheckIn(rollNumber, studentName)}
          text={"Check In"}
        />
        <Button color={"red"} onClick={onCheckOut} text={"Check Out"} />
      </div>
    </div>
  );
};

export default InputSection;

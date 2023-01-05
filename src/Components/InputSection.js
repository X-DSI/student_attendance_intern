import { useState } from "react";
import Button from "./Button";

const InputSection = ({ data, setData }) => {
  // UseState
  const [studentData, setStudentData] = useState({
    id: "",
    name: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudentData({ ...studentData, [name]: value });
  };

  // Check-In Function
  const onCheckIn = () => {
    const isStudentPresent = data.find(
      (student) => student.id === parseInt(studentData.id)
    );

    if (isStudentPresent) {
      setData((prev) => {
        const data = prev.map((student) => {
          if (student.id === parseInt(studentData.id)) {
            return {
              ...student,
              checkInTime: new Date().toLocaleTimeString(),
            };
          }
          return student;
        });
        return data;
      });
    } else {
      alert("Student Not in Records");
    }
  };

  // Check-Out Function
  const onCheckOut = () => {
    const isStudentPresent = data.find(
      (student) => student.id === parseInt(studentData.id)
    );

    let isStudentCheckedIn = false;

    data.forEach((element) => {
      if (element.id === parseInt(studentData.id)) {
        isStudentCheckedIn = Boolean(element.checkInTime);
      }
    });

    if (!isStudentCheckedIn) {
      alert("Student Not Checked In");
      return;
    }

    if (isStudentPresent) {
      setData((prev) => {
        const data = prev.map((student) => {
          if (student.id === parseInt(studentData.id)) {
            return {
              ...student,
              checkOutTime: new Date().toLocaleTimeString(),
            };
          }
          return student;
        });
        return data;
      });
    } else {
      alert("Student Not in Records");
    }
  };
  return (
    <div className="inputsection-wrapper container">
      <form className="input-form">
        <div className="form-field">
          <label>Roll Number</label>
          <input
            type="number"
            placeholder="Roll Number"
            value={studentData.id}
            name="id"
            onChange={handleChange}
          />
        </div>
        <div className="form-field">
          <label>Student Name</label>
          <input
            type="text"
            placeholder="Student Name"
            value={studentData.name}
            name="name"
            onChange={handleChange}
          />
        </div>
      </form>
      <div className="btn-wrapper">
        <Button color={"green"} onClick={onCheckIn} text={"Check In"} />
        <Button color={"red"} onClick={onCheckOut} text={"Check Out"} />
      </div>
    </div>
  );
};

export default InputSection;

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
  const onCheckIn = (e) => {
    // const res = await fetch(`http://localhost:5000/students/${id}`, {
    //   method: "PUT",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify({
    //     checkInTime: "cfsjdhfgjhge",
    //     name: { name },
    //   }),
    // });
    // const data = await res.json();

    const isStudentPresent = data.find(
      (student) => student.id === parseInt(studentData.id)
    );

    // if student is present edit student data
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
      // if student is not present add student data
      setData((prev) => {
        const data = {
          ...studentData,
          checkInTime: new Date().toLocaleTimeString(),
        };
        return [...prev, data];
      });
    }

    console.log(
      "🚀 ~ file: InputSection.js:30 ~ setData ~ isStudentPresent",
      isStudentPresent
    );
    // setData((prev) => {
    //   const data = {
    //     ...studentData,
    //     checkInTime: new Date().toLocaleTimeString(),
    //   };
    //   return [...prev, data];
    // });
  };

  // Check-Out Function
  const onCheckOut = () => {
    // add checkout time
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

import Button from "./Components/Button";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import InputSection from "./Components/InputSection";
import Table from "./Components/Table";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([
    {
      name: "Daniel",
      id: 1,
    },
    {
      name: "Syles",
      id: 2,
    },
    {
      name: "Immanuel",
      id: 3,
    },
    {
      name: "Mark",
      id: 4,
    },
    {
      name: "Kumar",
      id: 5,
    },
  ]);

  const [studentsCheckedIn, setStudentsCheckedIn] = useState(0);

  let totalStudents = data.length;

  useEffect(() => {
    const studentsCheckedIn = data.filter((student) => student.checkInTime);
    setStudentsCheckedIn(studentsCheckedIn.length);
  }, [data]);

  return (
    <div className="App total-wrapper">
      <Header />
      <div className="main-wrapper">
        <div className="left-wrapper">
          <InputSection data={data} setData={setData} />
        </div>
        <div className="dividing-line"></div>
        <div className="right-wrapper">
          <Table data={data} />
          <p className="content-wrapper">
            Total Number of students in the school right now:{" "}
            {studentsCheckedIn}
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;

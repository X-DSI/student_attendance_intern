import Button from "./Components/Button";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import InputSection from "./Components/InputSection";
import Table from "./Components/Table";
import { useState } from "react";

function App() {
  const totalStudents = 10;
  const [data, setData] = useState([
    {
      name: "Daniel",
      id: 1,
    },
    {
      name: "Syles",
      id: 2,
    },
  ]);

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
            Total Number of students in the school right now: {totalStudents}
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;

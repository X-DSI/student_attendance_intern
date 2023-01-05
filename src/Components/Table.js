const Table = () => {
  const getData = async () => {
    const res = await fetch("http://localhost:5000/students");
    const data = await res.json();
    console.log("🚀 ~ file: Table.js:5 ~ getData ~ data", data);
    return data;
  };

  return (
    <div>
      <table>
        <tr>
          <th>Roll Number</th>
          <th>Name</th>
          <th>Check-In Time</th>
          <th>Check-Out Time</th>
        </tr>
        <tr>
          <td>55</td>
          <td>Daniel</td>
          <td>10 am</td>
          <td>12 pm</td>
        </tr>
        <tr>
          <td>1</td>
          <td>Daniel</td>
          <td>10 am</td>
          <td>12 pm</td>
        </tr>
        <tr>
          <td>1</td>
          <td>Daniel</td>
          <td>10 am</td>
          <td>12 pm</td>
        </tr>
        <tr>
          <td>1</td>
          <td>Daniel</td>
          <td>10 am</td>
          <td>12 pm</td>
        </tr>
        <tr>
          <td>1</td>
          <td>Daniel</td>
          <td>10 am</td>
          <td>12 pm</td>
        </tr>
        <tr>
          <td>1</td>
          <td>Daniel</td>
          <td>10 am</td>
          <td>12 pm</td>
        </tr>
      </table>
      <button onClick={getData}>Click me</button>
      <p></p>
    </div>
  );
};

export default Table;

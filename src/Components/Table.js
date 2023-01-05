import Button from "./Button";
import { onCheckIn } from "./InputSection";

const Table = ({ data }) => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Roll Number</th>
            <th>Name</th>
            <th>Check-In Time</th>
            <th>Check-Out Time</th>
          </tr>
        </thead>
        <tbody>
          {data.map((student) => (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>{student.name}</td>
              <td>{student.checkInTime ? student.checkInTime : "-"}</td>
              <td>{student.checkOutTime ? student.checkOutTime : "-"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;

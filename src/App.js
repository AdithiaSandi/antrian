import "./App.css";
import { Button } from "react-bootstrap";
import { Card } from "./components/Card.js";
import { DetailForm } from "./components/DetailForm.js";

function App() {
  let data = JSON.parse(localStorage.getItem("antrian"));
  // console.log(data);
  let temp = [];
  for (let i = 1; i <= 40; i++) {
    temp.push({ antrian: i });
  }
  localStorage.setItem("antrian", JSON.stringify(temp));
  return (
    <div className="App">
      <h2>Silahkan Pilih No Antrian Anda</h2>

      <div className="sesi-bx">
        <div className="sesi">
          <span>Sesi 1</span>
        </div>

        <div className="card-bx">
          {data.map((item) => {
            return <Card int={item.antrian} />;
          })}
        </div>
      </div>

      <div className="action-bx">
        <div className="detail-bx">
          <h1>DATA</h1>
          <DetailForm Antrian={40} />
        </div>
        <div className="legend-bx">
          <span className="status">Legenda Status Antrian</span>
          <div className="status-bx">
            <div className="status-legend available"></div>
            <div className="status-legend chosen"></div>
            <div className="status-legend canceled"></div>
            <div className="status-legend unavailable"></div>
          </div>
        </div>
        <Button className="cancel-btn">Batal</Button>
        <Button className="confirm-btn">Daftar</Button>
      </div>
    </div>
  );
}

export default App;

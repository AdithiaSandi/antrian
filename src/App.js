import "./App.css";
import { Button, Col, Container, Row } from "react-bootstrap";
import { Card } from "./components/Card.js";

function App() {
  let data = JSON.parse(localStorage.getItem("antrian"));
  console.log(data);
  let temp = [];
  for (let i = 1; i <= 40; i++) {
    temp.push({ antrian: i });
  }
  localStorage.setItem("antrian", JSON.stringify(temp));
  // let que = JSON.parse(localStorage.getItem("antrian") || "[]");
  // let temp = [];
  // temp = que;
  // console.log(typeof temp);
  // const profile = {
  //   Nama: "Mohammad Syaifudin Abdullah",
  //   Poli: "Poli Umum",
  //   Dokter: "Kamar 2 | dr.Shinta",
  //   Handphone: "08214444444",
  //   Antrian: 40,
  // };
  // temp.push(profile);
  // localStorage.setItem("antrian", JSON.stringify(temp));
  return (
    <div className="App">
      <h2>Silahkan Pilih No Antrian Anda</h2>

      <div className="sesi-bx">
        <span className="sesi">Sesi 1</span>

        <div className="card-bx">
          {data.map((item) => {
            return <Card int={item.antrian} />;
          })}
        </div>
      </div>
      <div className="action-bx">
        <div className="detail-bx"></div>
        <div className="status-bx"></div>
        <Button className="cancel-btn">Batal</Button>
        <Button className="confirm-btn">Daftar</Button>
      </div>
    </div>
  );
}

export default App;

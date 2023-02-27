import "./App.css";
import { Button, Container, Row, Col } from "react-bootstrap";
import { Card } from "./components/Card.js";
import { DetailForm } from "./components/DetailForm.js";
import { StatusRow } from "./components/StatusRow";

function App() {
  let data = JSON.parse(localStorage.getItem("antrian"));
  console.log(data);

  let obj = {
    nama: "test",
    poli: "asd",
    dokter: "lmao",
    handphone: "0123456789",
  };

  // ADD DUMMY INTO LOCALSTORAGE
  // let arr = [];
  // for (let i = 1; i <= 80; i++) {
  //   let lot = Math.floor(Math.random() * 2);
  //   if (lot == 0) {
  //     lot = Math.floor(Math.random() * 4);
  //     if (lot == 0) {
  //       arr.push({ ...obj, terpilih: true, batal: false, antrian: i });
  //     } else if (lot == 1) {
  //       arr.push({ ...obj, terpilih: false, batal: true, antrian: i });
  //     } else if (lot == 2) {
  //       arr.push({ ...obj, terpilih: true, batal: true, antrian: i });
  //     } else {
  //       arr.push({ ...obj, antrian: i });
  //     }
  //   } else {
  //     arr.push({ antrian: i });
  //   }
  // }

  // localStorage.setItem("antrian", JSON.stringify(arr));

  const Status = ["available", "chosen", "canceled", "unavailable"];
  return (
    <div className="App">
      <h1>Silahkan Pilih No Antrian Anda</h1>

      <div className="content-bx">
        <div className="sesi-bx">
          <div className="top">
            <div className="sesi">
              <span>Sesi 1</span>
            </div>

            <div className="card-bx">
              {data.map((item, index) => {
                return <Card key={index} {...item} />;
              })}
            </div>
          </div>

          <div className="btm">
            <div className="sesi">
              <span>Sesi 2</span>
            </div>

            <div className="card-bx">
              {data.map((item, index) => {
                return <Card key={index} {...item} />;
              })}
            </div>
          </div>
        </div>

        <div className="action-bx">
          <div className="detail-bx">
            <DetailForm antrian={40} />
          </div>
          <div className="legend-bx">
            <span className="status">Legenda Status Antrian</span>
            <div className="status-bx">
              {Status.map((item, index) => {
                return <StatusRow key={index} Status={item} />;
              })}
            </div>
          </div>
          <Container className="action-btn m-0 p-0">
            <Row>
              <Col>
                <Button className="cancel-btn">Batal</Button>
              </Col>
              <Col>
                <Button className="confirm-btn">Daftar</Button>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </div>
  );
}

export default App;

import "./App.css";
import { Button, Container, Row, Col } from "react-bootstrap";
import { Card } from "./components/Card.js";
import { DetailForm } from "./components/DetailForm.js";
import { StatusRow } from "./components/StatusRow";
import { useState, useEffect } from "react";

function App() {
  let data = JSON.parse(localStorage.getItem("antrian"));

  const sesi1 = data?.slice(0, data.length / 2);
  const sesi2 = data?.slice(data.length / 2, data.length);

  const [clicked, setClicked] = useState({});
  const [formData, setFormData] = useState({});

  const klikSesi = (int) => {
    setClicked(data[int - 1]);
    setFormData((prev) => ({
      ...prev,
      antrian: int,
    }));
    document.getElementById("target").scrollIntoView();
  };

  const [available, setAvailable] = useState();
  const [canceled, setCanceled] = useState();
  const [chosen, setChosen] = useState();

  useEffect(() => {
    if (clicked.batal) {
      setAvailable(true);
      setChosen(false);
      setCanceled(true);
    } else if (clicked.terpilih) {
      setAvailable(true);
      setCanceled(false);
      setChosen(true);
    } else {
      setCanceled(false);
      setChosen(false);
      setAvailable(clicked.nama);
    }
  }, [clicked]);

  const inputData = () => {
    setFormData((prev) => ({
      ...prev,
      terpilih: false,
      batal: false,
    }));
    let temp = data;
    temp[formData.antrian - 1] = formData;
    localStorage.setItem("antrian", JSON.stringify(temp));
    window.location.reload();
  };

  const pilihSchedule = () => {
    let temp = data;
    temp[clicked.antrian - 1] = { ...clicked, terpilih: true };
    localStorage.setItem("antrian", JSON.stringify(temp));
    window.location.reload();
  };

  const batalSchedule = () => {
    let temp = data;
    temp[clicked.antrian - 1] = { ...clicked, batal: true };
    localStorage.setItem("antrian", JSON.stringify(temp));
    window.location.reload();
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
              {sesi1.map((item, index) => {
                return <Card key={index} handleClick={klikSesi} {...item} />;
              })}
            </div>
          </div>

          <div className="btm">
            <div className="sesi">
              <span>Sesi 2</span>
            </div>

            <div className="card-bx">
              {sesi2.map((item, index) => {
                return <Card key={index} handleClick={klikSesi} {...item} />;
              })}
            </div>
          </div>
        </div>

        <div className="action-bx" id="target">
          <div className="detail-bx">
            <DetailForm
              {...clicked}
              updateForm={setFormData}
              formData={formData}
            />
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
                <Button
                  className={"cancel-btn"}
                  hidden={!available}
                  disabled={canceled}
                  onClick={!canceled ? () => batalSchedule() : null}
                >
                  {canceled ? <>Dibatalkan</> : <>Batal</>}
                </Button>
              </Col>
              {canceled !== true && chosen !== true ? (
                <Col>
                  <Button
                    className="confirm-btn"
                    hidden={chosen}
                    onClick={
                      available ? () => pilihSchedule() : () => inputData()
                    }
                    disabled={
                      available
                        ? false
                        : !(
                            formData.nama &&
                            formData.poli &&
                            formData.dokter &&
                            formData.handphone &&
                            formData.antrian
                          )
                        ? true
                        : false
                    }
                  >
                    {available ? <>Pilih</> : <>Daftar</>}
                  </Button>
                </Col>
              ) : null}
            </Row>
          </Container>
        </div>
      </div>
    </div>
  );
}

export default App;

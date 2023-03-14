import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

const obj = {
  nama: "test",
  poli: "asd",
  dokter: "lmao",
  handphone: "0123456789",
};

// ADD DUMMY INTO LOCALSTORAGE
const checkData = JSON.parse(localStorage.getItem("antrian"));
let arr = [];
if (checkData == undefined) {
  for (let i = 1; i <= 80; i++) {
    let lot = Math.floor(Math.random() * 2);
    if (lot == 0) {
      lot = Math.floor(Math.random() * 4);
      if (lot == 0) {
        arr.push({ ...obj, terpilih: true, batal: false, antrian: i });
      } else if (lot == 1) {
        arr.push({ ...obj, terpilih: false, batal: true, antrian: i });
      } else if (lot == 2) {
        arr.push({ ...obj, terpilih: true, batal: true, antrian: i });
      } else {
        arr.push({ ...obj, antrian: i });
      }
    } else {
      arr.push({ antrian: i });
    }
  }

  localStorage.setItem("antrian", JSON.stringify(arr));
}

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

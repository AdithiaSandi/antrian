import { Form } from "react-bootstrap";

export const DetailForm = ({ Nama, Poli, Dokter, Handphone, Antrian }) => {
  if (!(Nama && Poli && Dokter && Handphone && Antrian)) {
    return (
      <Form>
        <Form.Group>
          <Form.Label>Nama</Form.Label>
          <Form.Control type="text" placeholder="Masukkan Nama" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Poli</Form.Label>
          <Form.Select aria-label="Pilih Poli">
            <option selected disabled>Pilih Poli</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </Form.Select>
        </Form.Group>
        <Form.Group>
          <Form.Label>Dokter</Form.Label>
          <Form.Select aria-label="Pilih Dokter">
            <option selected disabled>Pilih Dokter</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </Form.Select>
        </Form.Group>
        <Form.Group>
          <Form.Label>No Handphone</Form.Label>
          <Form.Control type="number" placeholder="Masukkan Nomor Telepon" />
        </Form.Group>
        <Form.Group>
          <Form.Label>No Antrian</Form.Label>
          <Form.Control type="number" placeholder={Antrian} disabled />
        </Form.Group>
      </Form>
    );
  } else {
    return (
      <table>
        <tr>
          <td>Name</td>
          <td>:</td>
          <td>{Nama}</td>
        </tr>
        <tr>
          <td>Poli</td>
          <td>:</td>
          <td>{Poli}</td>
        </tr>
        <tr>
          <td>Dokter</td>
          <td>:</td>
          <td>{Dokter}</td>
        </tr>
        <tr>
          <td>No Handphone</td>
          <td>:</td>
          <td>{Handphone}</td>
        </tr>
        <tr>
          <td>No Antrian</td>
          <td>:</td>
          <td>{Antrian}</td>
        </tr>
      </table>
    );
  }
};

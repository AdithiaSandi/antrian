import { Form } from "react-bootstrap";

export const DetailForm = ({ nama, poli, dokter, handphone, antrian }) => {
  if (!(nama && poli && dokter && handphone && antrian)) {
    return (
      <Form>
        <Form.Group>
          <Form.Label>Nama</Form.Label>
          <Form.Control type="text" placeholder="Masukkan Nama" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Poli</Form.Label>
          <Form.Select defaultValue="0" aria-label="Pilih Poli">
            <option value="0" disabled>
              Pilih Poli
            </option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </Form.Select>
        </Form.Group>
        <Form.Group>
          <Form.Label>Dokter</Form.Label>
          <Form.Select defaultValue="0" aria-label="Pilih Dokter">
            <option value="0" disabled>
              Pilih Dokter
            </option>
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
          <Form.Control type="number" placeholder={antrian} disabled />
        </Form.Group>
      </Form>
    );
  } else {
    return (
      <table>
        <tr>
          <td>Name</td>
          <td>:</td>
          <td>{nama}</td>
        </tr>
        <tr>
          <td>Poli</td>
          <td>:</td>
          <td>{poli}</td>
        </tr>
        <tr>
          <td>Dokter</td>
          <td>:</td>
          <td>{dokter}</td>
        </tr>
        <tr>
          <td>No Handphone</td>
          <td>:</td>
          <td>{handphone}</td>
        </tr>
        <tr>
          <td>No Antrian</td>
          <td>:</td>
          <td>{antrian}</td>
        </tr>
      </table>
    );
  }
};

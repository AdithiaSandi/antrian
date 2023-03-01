import { Form } from "react-bootstrap";

export const DetailForm = ({
  nama,
  poli,
  dokter,
  handphone,
  terpilih,
  batal,
  antrian,
  formData,
  updateForm,
}) => {
  if (!(nama && poli && dokter && handphone && antrian)) {
    return (
      <Form>
        <Form.Group>
          <Form.Label>Nama</Form.Label>
          <Form.Control
            type="text"
            placeholder="Masukkan Nama"
            value={formData.nama ? formData.nama : ""}
            onChange={(e) =>
              updateForm((prev) => ({ ...prev, nama: e.target.value }))
            }
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Poli</Form.Label>
          <Form.Select
            defaultValue={formData.poli ? formData.poli : 0}
            aria-label="Pilih Poli"
            onChange={(e) =>
              updateForm((prev) => ({ ...prev, poli: e.target.value }))
            }
          >
            <option value="0" disabled>
              Pilih Poli
            </option>
            <option value="Poli Umum">Poli Umum</option>
            <option value="Poli Gigi">Poli Gigi</option>
          </Form.Select>
        </Form.Group>
        <Form.Group>
          <Form.Label>Dokter</Form.Label>
          <Form.Select
            defaultValue={formData.poli ? formData.poli : 0}
            aria-label="Pilih Dokter"
            onChange={(e) =>
              updateForm((prev) => ({ ...prev, dokter: e.target.value }))
            }
          >
            <option value="0" disabled>
              Pilih Dokter
            </option>
            <option value="Dr. Ibble">Dr. Ibble</option>
            <option value="Dr. Ag Race">Dr. Ag Race</option>
            <option value="Dr. Agon">Dr. Agon</option>
          </Form.Select>
        </Form.Group>
        <Form.Group>
          <Form.Label>No Handphone</Form.Label>
          <Form.Control
            type="number"
            placeholder="Masukkan Nomor Telepon"
            value={formData.handphone ? formData.handphone : 0}
            onChange={(e) =>
              updateForm((prev) => ({ ...prev, handphone: e.target.value }))
            }
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>No Antrian</Form.Label>
          <Form.Control type="number" placeholder={antrian} disabled />
        </Form.Group>
      </Form>
    );
  } else {
    return (
      <table className="detail-table">
        <tr>
          <td className="type">Name</td>
          <td className="colon">:</td>
          <td>{nama}</td>
        </tr>
        <tr>
          <td className="type">Poli</td>
          <td className="colon">:</td>
          <td>{poli}</td>
        </tr>
        <tr>
          <td className="type">Dokter</td>
          <td className="colon">:</td>
          <td>{dokter}</td>
        </tr>
        <tr>
          <td className="type">No Handphone</td>
          <td className="colon">:</td>
          <td>{handphone}</td>
        </tr>
        <tr>
          <td className="type">No Antrian</td>
          <td className="colon">:</td>
          <td style={{ color: "#64999f" }}>{antrian}</td>
        </tr>
      </table>
    );
  }
};

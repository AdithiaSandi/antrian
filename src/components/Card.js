export const Card = ({
  nama,
  poli,
  dokter,
  handphone,
  terpilih,
  batal,
  antrian,
  handleClick,
}) => {
  let status = "";

  if (batal) {
    status = "canceled";
  } else if (terpilih) {
    status = "chosen";
  } else if (nama && poli && dokter && handphone && antrian) {
    status = "unavailable";
  }

  return (
    <button
      className={"card-item " + status}
      onClick={() => handleClick(antrian)}
    >
      <h4>{antrian}</h4>
    </button>
  );
};

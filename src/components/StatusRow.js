export const StatusRow = ({ Status }) => {
  let text = "";
  switch (Status) {
    case "available":
      text = "Tersedia";
      break;
    case "chosen":
      text = "Terpilih";
      break;
    case "canceled":
      text = "Batal";
      break;
    case "unavailable":
      text = "Tidak Tersedia";
      break;

    default:
      break;
  }
  return (
    <div className="status-row">
      <div className={"status-legend " + Status}></div>
      <div className="status-text">
        <span>{text}</span>
      </div>
    </div>
  );
};

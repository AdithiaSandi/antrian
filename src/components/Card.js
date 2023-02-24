import { Button, Col } from "react-bootstrap";

export const Card = ({ int }) => {
  return (
    <div className="card-item">
      <h4>{int}</h4>
    </div>
  );
};

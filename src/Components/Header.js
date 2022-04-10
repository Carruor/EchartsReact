import "./Header.css";
import shuttle from "../Assets/shuttle.png";

export default function Header() {
  return (
    <div className="Header">
      <img src={shuttle} alt="Logo" />
      <h1>RocketInvestments</h1>
    </div>
  );
}

import logo from "../assets/logo.png";
import "../styles/Banner.css";
import Recommandation from "./Recommandation";

function Banner() {
  const title = "La maison jungle";
  return (
    <div className="lmj-banner">
      <img src={logo} alt="La maison jungle" className="lmj-logo" />
      <div>
        <h1 className="lmj-title">{title}</h1>
        <Recommandation />
      </div>
    </div>
  );
}
export default Banner;

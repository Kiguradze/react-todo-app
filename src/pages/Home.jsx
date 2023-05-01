import "../sass/main.scss";
import Group3 from "../assets/Group3.png";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section className="home">
      <img src={Group3} alt="" />
      <h1>Keep Track Of Daily Tasks In Life</h1>
      <button>
        <Link to="/signin">Get Started</Link>
      </button>
    </section>
  );
};

export default Home;

import styles from "./home.module.css";
import Landing from "./Landing/Landing";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <main>
      <Landing />
      <button onClick={() => navigate("/panel")}>panel</button>
      home
    </main>
  );
};

export default Home;

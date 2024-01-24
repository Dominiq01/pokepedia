import { Link } from "react-router-dom";
import classes from "./Homepage.module.less";
import logo from "../assets/pokepedia-logo.png";
import Button from "../components/Button/Button";
import IconArrows from "../components/Icons/IconArrows";
const Homepage = () => {
  return (
    <div className={classes.homepage}>
      <img src={logo} />
      <div className={classes.homepage__title}>
        <h1>Welcome to Poképedia</h1>
        <p>The best pokemon pedia ever!</p>
      </div>
      <Link to={"app"} style={{ textDecoration: "none" }}>
        <Button className={classes.homepage__btn}>
          Go to app <IconArrows />
        </Button>
      </Link>
    </div>
  );
};

export default Homepage;

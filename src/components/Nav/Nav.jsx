import { NavLink } from "react-router-dom";
import styles from "./Nav.module.scss";

//nav link allows us to style active links where link does not.

const Nav = () => {
  return <nav>
    <NavLink to="/" className={styles.Nav_Link}>Home</NavLink>
    <NavLink to="/Users" className={styles.Nav_Link}>Users</NavLink>
  </nav>;
  
}

export default Nav
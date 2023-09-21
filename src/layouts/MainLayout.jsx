import { Outlet, NavLink } from "react-router-dom";
import styles from "./MainLayout.module.css";
function MainLayout() {
  return (
    <>
      <nav className={styles.navBar}>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? styles.active : styles.link)}
        >
          Home
        </NavLink>
        <NavLink
          to="/movies"
          className={({ isActive }) => (isActive ? styles.active : styles.link)}
        >
          Movies
        </NavLink>
        <NavLink
          to="*"
          className={({ isActive }) => (isActive ? styles.active : styles.link)}
        >
          Error
        </NavLink>
      </nav>
      <main>
        <Outlet />
      </main>
    </>
  );
}
export default MainLayout;

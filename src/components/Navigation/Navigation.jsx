import clsx from "clsx";
import s from "./Navigation.module.css";
import Container from "../Container/Container";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  const activeLink = ({ isActive }) => {
    return clsx(isActive && s.active);
  };
  return (
    <>
      <Container className={s.container}>
        <nav className={s.wrap}>
          <ul className={s.list}>
            <li>
              <NavLink className={activeLink} to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink className={activeLink} to="/movies">
                Movies
              </NavLink>
            </li>
          </ul>
        </nav>
      </Container>
    </>
  );
};
export default Navigation;

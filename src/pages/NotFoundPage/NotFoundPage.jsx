import { RiErrorWarningFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import s from "./NotFoundPage.module.css";

const NotFoundPage = () => {
  return (
    <div className={s.wrapper}>
      <RiErrorWarningFill className={s.icon} size="100" />
      <h1 className={s.title}> Sorry, page not found</h1>
      <Link className={s.link} to="/">
        Home
      </Link>
    </div>
  );
};

export default NotFoundPage;

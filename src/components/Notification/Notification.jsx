
import s from "./Notification.module.css";

const Notification = ({ message }) => {
  return <p className={s.message}>{message}</p>;
};

export default Notification;

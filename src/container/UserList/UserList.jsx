import User from "../../components/Nav/CharCard/User";
import styles from "./UserList.module.scss";

const UserList = () => {
  return (
    <div>
      <h1>User Page</h1>
      <section className={styles.UserList}>
      <User />
      <User />
      </section>
    </div>
  )
}

export default UserList
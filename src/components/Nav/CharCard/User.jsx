import styles from "./User.module.scss";

const User = () => {
  return (
    <div className={styles.UserCard}>
      <img className={styles.UserCard_Img}src="" alt="user img"></img>
      <h3>Name</h3>
      <p>Gender</p>
      <p>Location</p>
    </div>
  )
}

export default User
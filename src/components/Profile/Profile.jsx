import styles from './Profile.module.css'

export const Profile = ({username, tag, location, avatar, statistics}) => {
   return <div className={styles.profile}>
       <div className={styles.description}>
    <img
      src={avatar}
      alt={username}
      className={styles.avatar}
    />
    <p className={styles.name}>{username}</p>
    <p className={styles.tag}>{tag}</p>
           <p className={styles.location}>{location}</p>
       </div>
        <ul className={styles.stats}>
    <li className={styles.statsItem}>
      <span className={styles.label}>Followers</span>
               <span className={styles.quantity}>{statistics.followers}</span>
    </li>
    <li className={styles.statsItem}>
      <span className={styles.label}>Views</span>
      <span className={styles.quantity}>{statistics.views}</span>
    </li>
    <li className={styles.statsItem}>
      <span className={styles.label}>Likes</span>
      <span className={styles.quantity}>{statistics.likes}</span>
    </li>
  </ul>
        </div>
       
  
}
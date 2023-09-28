import styles from './Profile.module.css'

export const Profile = ({User}) => {
   return <div className={styles.profile}>
       <div className={styles.description}>
    <img
      src={User.avatar}
      alt={User.username}
      className={styles.avatar}
    />
    <p className={styles.name}>{User.username}</p>
    <p className={styles.tag}>{User.tag}</p>
           <p className={styles.location}>{User.location}</p>
       </div>
        <ul className={styles.stats}>
    <li className={styles.statsItem}>
      <span className={styles.label}>Followers</span>
               <span className={styles.quantity}>{User.stats.followers}</span>
    </li>
    <li className={styles.statsItem}>
      <span className={styles.label}>Views</span>
      <span className={styles.quantity}>{User.stats.views}</span>
    </li>
    <li className={styles.statsItem}>
      <span className={styles.label}>Likes</span>
      <span className={styles.quantity}>{User.stats.likes}</span>
    </li>
  </ul>
        </div>
       
  
}
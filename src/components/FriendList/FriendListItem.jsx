import styles from './FriendListItem.module.css'
import clsx from 'clsx'

export const FriendListItem = ({ friend }) => {
    return <li className={styles.item}>
      <span className={clsx
        (styles.isOnline,
          friend.isOnline ===true && styles.green,
          friend.isOnline ===false && styles.red)}></span>
        <img className={styles.avatar} src={friend.avatar} alt="User avatar" width="48" />
  <p className={styles.name}>{friend.name}</p>
</li>
}
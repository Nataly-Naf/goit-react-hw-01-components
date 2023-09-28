import styles from './StatisticsItems.module.css'
export const StatisticsItem = ({ user }) => {
            return  <li className={styles.item}>
                <span className={styles.label}>{user.label}</span>
                    <span className={styles.percentage}>{user.percentage}</span>
    </li>}
              
    
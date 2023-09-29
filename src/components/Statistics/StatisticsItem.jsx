import styles from './StatisticsItems.module.css'
export const StatisticsItem = ({ user }) => {
            return  <li className={styles.item} style={{backgroundColor:`${getRandomHexColor()}`}}>
                <span className={styles.label}>{user.label}</span>
                    <span className={styles.percentage}>{user.percentage}</span>
    </li>}
              
       function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
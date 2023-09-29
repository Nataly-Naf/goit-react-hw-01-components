import styles from './Statistics.module.css'
import { StatisticsItem } from './StatisticsItem'
export const Statistics = ({title, stats}) => {
    return (<section className={styles.statistics}>
        {title && <h2 className={styles.title}>{title}</h2>}
        <ul className={styles.statList}>
            {stats.map((user) => {return <StatisticsItem key={user.id} user={user} /> })}
            </ul>
       </section>            
        )          
       
}


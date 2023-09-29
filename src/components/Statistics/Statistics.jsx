import styles from './Statistics.module.css'
import { StatisticsItem } from './StatisticsItem'
export const Statistics = ({Title, Stats}) => {
    return (<section className={styles.statistics}>
        <h2 className={styles.title}>{Title}</h2>
        <ul className={styles.statList}>
            {Stats.map((user) => {return <StatisticsItem key={user.id} user={user} /> })}
            </ul>
       </section>            
        )          
       
}


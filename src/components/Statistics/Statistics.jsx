import styles from './Statistics.module.css'
import { StatisticsItem } from './StatisticsItem'
export const Statistics = ({title, stats}) => {
    return (<section className={styles.statistics}>
        <h2 className={styles.title}>{title}</h2>
        <ul className={styles.statList}>
            {stats.map((user) => {return <StatisticsItem key={user.id} user={user} /> })}
            </ul>
       </section>            
        )            
       
}
// Функція для додавання випадкового кольору до фону
//  const backgroundStat =document.getElementsByTagName("li")  
    
// const liArray = Array.from(backgroundStat)
//    console.log(liArray)
//    function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }
//  liArray.map((item) =>{return item.style.backgroundColor=`${getRandomHexColor()}`} )

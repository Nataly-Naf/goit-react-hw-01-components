import styles from './TransactionHistory.module.css'
import { OneTransactionItem } from './OneTransactionItem'


export const TransactionHistory = ({items}) => {
    return (<table className={styles.transactionHistory}>
  <thead>
    <tr>
      <th className={styles.headCell}>Type</th>
      <th className={styles.headCell}>Amount</th>
      <th className={styles.headCell}>Currency</th>
    </tr>
        </thead>
         <tbody className={styles.tableBody}>
   {items.map((transaction)=>{return <OneTransactionItem key={transaction.id} transaction={transaction}/>})}
  </tbody>

  
</table>         
        )          
       
}


// export const TransactionHistory = ({items}) => {
//     return (<section className={styles.statistics}>
//         <h2 className={styles.title}>{title}</h2>
//         <ul className={styles.statList}>
//             {stats.map((user) => {return <StatisticsItem key={user.id} user={user} /> })}
//             </ul>
//        </section>            
//         )          
       
// }
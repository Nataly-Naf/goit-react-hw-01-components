import styles from './OneTransactionItem.module.css'

export const OneTransactionItem = ({ transaction }) =>
{return (<tr className={styles.tableLine}>
    <td className={styles.cellType}>{transaction.type}</td>
      <td className={styles.cell}>{transaction.amount}</td>
      <td className={styles.cell}>{transaction.currency}</td>
    </tr>)}
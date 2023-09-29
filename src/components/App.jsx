import { Profile } from "./Profile/Profile";
import * as item from '../user.json'
import * as data from '../data.json'
import { Statistics } from "./Statistics/Statistics";
import { FriendList } from './FriendList/FriendList';
import  * as friends from '../friends.json'
import * as items from '../transactions.json'
import { TransactionHistory } from '..//components/TransactionHistory/TransactionHistory'

const dataArr = Array.from(data)
const friendsArr = Array.from(friends)
const itemsArr = Array.from(items)
export const App = () => {
  return (
    <>
      <div><Profile User={item} /> </div>
      <div><Statistics Title="Upload stats" Stats={dataArr} /></div>
      <div><FriendList friends={friendsArr} /></div>
      <div><TransactionHistory items={itemsArr} /></div>
    </>
   
  );
};

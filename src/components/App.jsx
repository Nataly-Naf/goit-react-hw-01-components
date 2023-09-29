import { Profile } from "./Profile/Profile";
// import * as   from '../user.json'
import * as data from '../data.json'
import { Statistics } from "./Statistics/Statistics";
import { FriendList } from './FriendList/FriendList';
import  * as friends from '../friends.json'
import * as items from '../transactions.json'
import { TransactionHistory } from '..//components/TransactionHistory/TransactionHistory'

const dataArr = Array.from(data)
const friendsArr = Array.from(friends)
const itemsArr = Array.from(items)
let item = require('../user.json')
console.log(item.tag)
export const App = () => {
  return (
    <>
      <div><Profile username={item.username} tag={item.tag} location={item.location} avatar={item.avatar} statistics={item.stats} /> </div>
      <div><Statistics title="Upload stats" stats={dataArr} /></div>
      <div><FriendList friends={friendsArr} /></div>
      <div><TransactionHistory items={itemsArr} /></div>
    </>
   
  );
};

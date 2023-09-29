import { Profile } from "./Profile/Profile";
import * as item from '../user.json'
import * as data from '../data.json'
import { Statistics } from "./Statistics/Statistics";
import { FriendList } from './FriendList/FriendList';
import  * as friends from '../friends.json'
import * as items from '../transactions.json'
import {TransactionHistory} from '..//components/TransactionHistory/TransactionHistory'
export const App = () => {
  return (
    <>
      <div><Profile User={item} /> </div>
      <div><Statistics title="Upload stats" stats={data} /></div>
      <div><FriendList friends={friends} /></div>
      <div><TransactionHistory items={items} /></div>
    </>
   
  );
};

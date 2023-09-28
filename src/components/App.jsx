import { Profile } from "./Profile/Profile";
import * as item from '../user.json'
import data from '../data.json'
import { Statistics } from "./Statistics/Statistics";
import { FriendList } from './FriendList/FriendList';
import  friends  from '../friends.json'

export const App = () => {
  return (
    <>
      <div><Profile User={item} /> </div>
      <div><Statistics title="Upload stats" stats={data} /></div>
      <div><FriendList friends={friends} /></div>
    </>
   
  );
};

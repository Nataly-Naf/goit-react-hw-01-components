import { Profile } from "./Profile/Profile";
import * as item from '../user.json'
console.log(item)
export const App = () => {
  return (
    <div><Profile User={item}/> </div>
  );
};

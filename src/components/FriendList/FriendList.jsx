import { FriendListItem } from '../FriendList/FriendListItem'

export const FriendList = ({friends} ) => {
    return ( friends.map((friend) => {
           return <FriendListItem key={friend.id} friend={friend} />
        }))
       
    
}


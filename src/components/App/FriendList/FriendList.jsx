import FriendListItem from "./FriendListItem"
import friends from "/GOIT/Project/hw-react-1/src/friends.json"


export default function FriendList() {
  return (
    <ul className="friend-list">
      {friends.map((friend) => {
        return <li className="friend-item" key={friend.id}>
          <FriendListItem friend={friend} />
        </li>
      })}

    </ul>
  )
}
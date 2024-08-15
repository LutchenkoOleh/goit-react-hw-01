import FriendListItem from "./FriendListItem"
import friends from "./friends.json"
import "./FriendList.css"

export default function FriendList() {
  return (
    <div className="friends-wrap">
      <ul className="friend-list">
        {friends.map((friend) => {
          return <li className="friend-item" key={friend.id}>
            <FriendListItem friend={friend} />
          </li>
        })}

      </ul>
    </div>
  )
}
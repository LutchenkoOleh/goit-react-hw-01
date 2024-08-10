
export default function FriendListItem({ friend: { name, avatar, isOnline } }) {
  return (<div>
    <img className="friend-item-img" src={avatar} alt={name} width="48" />
    <p className="friend-item-text">{name}</p>
    <p style={{ color: isOnline ? "green" : "red" }}>
      {isOnline === true ? "Online" : "Offline"}</p>
  </div>)
}


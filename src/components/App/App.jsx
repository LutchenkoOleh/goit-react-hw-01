import FriendList from "./FriendList/FriendList"
import Profile from "./Profile/Profile"
import userData from "/GOIT/Project/hw-react-1/src/userData.json"





export default function App() {
  return (
    <div>
      <Profile users={userData} />
      <FriendList />
    </div>);
}


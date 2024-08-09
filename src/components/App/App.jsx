import FriendList from "./FriendList/FriendList"
import Profile from "./Profile/Profile"
import userData from "/GOIT/Project/hw-react-1/src/userData.json"
const userDataSet = userData;
console.log(userDataSet)


export default function App() {
  return (
    <div>
      <Profile users={userDataSet} />
    </div>);
}


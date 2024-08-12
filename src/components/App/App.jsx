import FriendList from "../FriendList/FriendList"
import Profile from "../Profile/Profile"
import TransactionHistory from "../TransactionHistory/TransactionHistory"
import userData from "/GOIT/Project/hw-react-1/src/userData.json"
import transactions from "/GOIT/Project/hw-react-1/src/transactions.json"




export default function App() {
  return (
    <div>
      <Profile users={userData} />
      <FriendList />
      <TransactionHistory items={transactions} />
    </div>);
}


import FriendList from "../FriendList/FriendList"
import Profile from "../Profile/Profile"
import TransactionHistory from "../TransactionHistory/TransactionHistory"
import userData from "../Profile/userData.json"
import transactions from "../TransactionHistory/transactions.json"




export default function App() {
  return (
    <div>
      <Profile users={userData} />
      <FriendList />
      <TransactionHistory items={transactions} />
    </div>);
}


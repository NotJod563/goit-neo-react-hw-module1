import userData from "./userData.json";
import { Profile } from "./components/Profile/Profile";
import friends from "./components/Friends/friends.json";
import { FriendList } from "./components/Friends/FriendList"
import transactions from "./components/Transactions/transactions.json";
import { TransactionHistory } from "./components/Transactions/TransactionHistory";


export default function App() {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />

      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
}
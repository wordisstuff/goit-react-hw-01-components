import { Profile } from "./Profile/profile";
import { Statistics } from "./Statistics/Statistics";
import { FriendList } from "./Friend/FriendList";
import { TransactionHistory } from "./TransactionHistory/TransactionHistory";


import userData from '../data/user.json';
import statisticsData from '../data/statistics.json';
import friendsData from '../data/friends.json';
import transactionsData from '../data/transactions.json'

export const App = () =>
  <div className="container"
  >
    <Profile
      username={userData.username}
      tag={userData.tag}
      location={userData.location}
      avatar={userData.avatar}
      stats={userData.stats} />
    <Statistics title="Upload stats" stats={statisticsData} />
    <FriendList friends={friendsData} />
    <TransactionHistory items={transactionsData} />
  </div>;
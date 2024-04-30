import GeneralStat from "./GeneralStat";
import Example from "./PieChart";
import Posts from "./Posts";
import Users from "./Users";
function Dashboard() {
  return (
    <>
      <GeneralStat />
      <Posts />
      <Example/>
      <Users />
    </>
  );
}
export default Dashboard;

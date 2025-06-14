import DashboardProject from './DashboardProject';
import './master.css';
import { useUser } from "./UserContext";

interface Props {
  setMenuChoice: Function;
}

const Dashboard = ({ setMenuChoice }: Props) => {
  const { user } = useUser();

  return (
    <div className='dashboard-container'>
      <div className='dashboard-header-container'>
        <div className='dashboard-title-container'>
          <h3 className='dashboard-title-name'>{`Welcome ${user.name}`}</h3>
          <h2 className='dashboard-title-title'>Your dashboard</h2>
        </div>
        <div className='dashboard-header-button-container'>
          {/* <button className='dashboard-need-help'>
            Need help?
          </button> */}
          <button className='dashboard-new-project'>
            Start new project
          </button>
        </div>
      </div>
      <div className='dashboard-projects-container'>
        {user.projects.map((e, i) => {
          return  <DashboardProject project={e} setMenuChoice={setMenuChoice} key={i} />})}
      </div>
    </div>
  );
}

export default Dashboard;
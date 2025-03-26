import { FaWindows, FaApple, FaAmazon } from "react-icons/fa";

import DashboardProject from './DashboardProject';

import './master.css';

interface Props {
  name: string;
}

const Dashboard = ({ name }: Props) => {

  const projects = [
    {
      icon: <FaWindows />,
      name: 'Project #1',
      id: '012345',
      pending: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin luctus elit eros, convallis faucibus urna faucibus eget.',
      time: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin luctus elit eros, convallis faucibus urna faucibus eget.',
      status: 'In progress',
    },
    {
      icon: <FaApple />,
      name: 'Project #2',
      id: '000000',
      pending: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin luctus elit eros, convallis faucibus urna faucibus eget.',
      time: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin luctus elit eros, convallis faucibus urna faucibus eget.',
      status: 'Completed',
    },
    {
      icon: <FaAmazon />,
      name: 'Project #3',
      id: '111111',
      pending: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin luctus elit eros, convallis faucibus urna faucibus eget.',
      time: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin luctus elit eros, convallis faucibus urna faucibus eget.',
      status: 'Not started',
    }
  ]

  return (
    <div className='dashboard-container'>
      <div className='dashboard-header-container'>
        <div className='dashboard-title-container'>
          <h3 className='dashboard-title-name'>{`Welcome ${name}`}</h3>
          <h2 className='dashboard-title-title'>Your dashboard</h2>
        </div>
        <div className='dashboard-header-button-container'>
          <button className='dashboard-need-help'>
            Need help?
          </button>
          <button className='dashboard-new-project'>
            Start new project
          </button>
        </div>
      </div>
      <div className='dashboard-projects-container'>
        {projects.map((e, i) => {
          return  <DashboardProject
                    icon={e.icon}
                    name={e.name}
                    id={e.id}
                    pending={e.pending}
                    time={e.time}
                    status={e.status}
                    key={i}
                  />})}
      </div>
    </div>
  );
}

export default Dashboard;
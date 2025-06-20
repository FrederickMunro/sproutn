import { useState } from 'react';
import DashboardProject from './DashboardProject';
import './master.css';
import ModalContainer from './ModalContainer';
import { useUser } from "./UserContext";
import ModalInput from './ModalInput';

interface Props {
  setMenuChoice: Function;
}

const Dashboard = ({ setMenuChoice }: Props) => {
  const { user } = useUser();
  
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <ModalContainer isOpen={isOpen} setIsOpen={setIsOpen} title='Start a new project' showSubmit={true}>
        <ModalInput label='Project name' placeholder="Enter your project's name..." />
      </ModalContainer>
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
            <button className='dashboard-new-project' onClick={() => setIsOpen(true)}>
              Start new project
            </button>
          </div>
        </div>
        <div className='dashboard-projects-container'>
          {user.projects.map((e, i) => {
            return  <DashboardProject project={e} setMenuChoice={setMenuChoice} key={i} />})}
        </div>
      </div>
    </>
  );
}

export default Dashboard;
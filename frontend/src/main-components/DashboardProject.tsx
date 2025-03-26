import DashboardProjectItem from "./DashboardProjectItem";

import { IoMdArrowForward } from "react-icons/io";

interface Props {
  icon: React.ReactNode;
  name: string;
  id: string;
  pending: string;
  time: string;
  status: string;
}

const DashboardProject = ({ icon, name, id, pending, time, status }: Props) => {
  return (
    <div className='dashboard-project-container'>
      <div className='dashboard-project-header-container'>
        <div className='dashboard-project-header-title-container'>
          {icon}
          <h4 className='dashboard-project-header-title'>{name}</h4>
        </div>
        <div className={`dashboard-project-header-status-container ${status.toLowerCase().replace(' ', '-')}`}>
          <div className={`dashboard-project-header-status-circle ${status.toLowerCase().replace(' ', '-')}-dot`} />
          <p className='dashboard-project-header-status-text'>{status}</p>
        </div>
      </div>
      <div className='dashboard-project-content-container'>
        <DashboardProjectItem name='Project ID' content={`#${id}`} />
        <hr className='dashboard-project-item-vert' />
        <DashboardProjectItem name='Pending action' content={pending} />
        <hr className='dashboard-project-item-vert' />
        <DashboardProjectItem name='Elapsed time' content={time} />
      </div>
      <button className='dashboard-project-item-button'>
        <IoMdArrowForward className='dashboard-project-item-rotate-arrow' />
        Open project
      </button>
    </div>
  );
}

export default DashboardProject;
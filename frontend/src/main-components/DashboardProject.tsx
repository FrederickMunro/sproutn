import { useState, useEffect } from "react";
import DashboardProjectItem from "./DashboardProjectItem";

import { IoMdArrowForward } from "react-icons/io";

interface Props {
  icon: React.ReactNode;
  name: string;
  id: string;
  pending: string;
  time: string;
  status: string;
  percent: number;
}

const DashboardProject = ({ icon, name, id, pending, time, status, percent }: Props) => {

  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const duration = 1500; 
    const startTime = performance.now();
    
    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1) * percent; // Cap at 30%
      setProgress(progress);
      
      if (progress < percent) {
        requestAnimationFrame(animate);
      }
    };
    
    requestAnimationFrame(animate);
  }, []);

  const CompletionProgress = () => (
    <div className="dashboard-project-item-completion-container">
      <div className='dashboard-project-item-completion-left'>
        <div className="circle-progress-container">
          <svg viewBox="0 0 36 36" className="circular-chart">
            <path
              className="circle-bg"
              d="M18 2.0845
                a 15.9155 15.9155 0 1 1 0 31.831
                a 15.9155 15.9155 0 1 1 0 -31.831"
              strokeWidth={3}
            />
            <path
              className="circle-fill"
              strokeDasharray={`${progress}, 100`}
              d="M18 2.0845
                a 15.9155 15.9155 0 1 1 0 31.831
                a 15.9155 15.9155 0 1 1 0 -31.831"
              strokeWidth={3}
            />
            <circle cx="18" cy="18" r="4" className="circle-center-dot" />
          </svg>
        </div>
      </div>
      <div className='dashboard-project-item-completion-right'>
        <p className="dashboard-project-item-completion-text">
          <span className='dashboard-project-item-completion-percentage'>{Math.round(progress)}%</span>completed
        </p>
        <div className="dashboard-project-item-completion-progress-bar">
          <div 
            className="dashboard-project-item-completion-progress-fill" 
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
    </div>
  );

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
      {CompletionProgress()}
      <button className='dashboard-project-item-button'>
        <IoMdArrowForward className='dashboard-project-item-rotate-arrow' />
        Open project
      </button>
    </div>
  );
}

export default DashboardProject;
import { useState, useEffect } from "react";
import DashboardProjectItem from "./DashboardProjectItem";

import { IoMdArrowForward } from "react-icons/io";
import { Project } from "./interfaces";
import { useProjects } from "./ProjectsContext";

interface Props {
  project: Project;
  setMenuChoice: Function;
}

const DashboardProject = ({ project, setMenuChoice }: Props) => {
  const { setActiveProject } = useProjects();

  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const duration = 1500; 
    const startTime = performance.now();
    
    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1) * project.percent; // Cap at 30%
      setProgress(progress);
      
      if (progress < project.percent) {
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

  const choseProject = () => {
    setMenuChoice('projects');
    setActiveProject(project);
  }

  return (
    <div className='dashboard-project-container'>
      <div className='dashboard-project-header-container'>
        <div className='dashboard-project-header-title-container'>
          <IoMdArrowForward />
          <h4 className='dashboard-project-header-title'>{project.name}</h4>
        </div>
        <div className={`dashboard-project-header-status-container ${project.status.toLowerCase().replace(' ', '-')}`}>
          <div className={`dashboard-project-header-status-circle ${project.status.toLowerCase().replace(' ', '-')}-dot`} />
          <p className='dashboard-project-header-status-text'>{project.status}</p>
        </div>
      </div>
      <div className='dashboard-project-content-container'>
        <DashboardProjectItem name='Project ID' content={`#${project.id}`} />
        <hr className='dashboard-project-item-vert' />
        <DashboardProjectItem name='Pending action' content={project.pending} />
        <hr className='dashboard-project-item-vert' />
        <DashboardProjectItem name='Elapsed time' content={project.time} />
      </div>
      {CompletionProgress()}
      <button className='dashboard-project-item-button' onClick={() => choseProject()}>
        <IoMdArrowForward className='dashboard-project-item-rotate-arrow' />
        Open project
      </button>
    </div>
  );
}

export default DashboardProject;
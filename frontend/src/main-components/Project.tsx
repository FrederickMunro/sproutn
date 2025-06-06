import ProjectItem from "./ProjectItem";
import { useUser } from "./UserContext";
import { Project as ProjectI } from './interfaces';
import DashboardProjectItem from "./DashboardProjectItem";

interface Props {
  project: ProjectI;
}

const Project = ({ project }: Props) => {
  const { activeProject } = useUser();

  const projectItems = [
    <div className='projects-brief-container'>
      <div className='projects-brief-subcontainer'>
        <div className='dashboard-project-header-container'>
          <div className='dashboard-project-header-title-container'>
            {project.icon}
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
      </div>
    </div>,
    <></>,
    <></>,
    <></>,
    <></>,
    <></>,
  ]
  
  return (
    <div className={`project-item ${project.id === activeProject.id ? 'visible' : 'hidden'}`}>
      {project.options.map((e, i) =>{
        return <ProjectItem
                  options={e}
                  key={i}
                >{projectItems[i]}</ProjectItem>
      })}
    </div>
  )
}

export default Project;
import Topbar from "./Topbar";
import Project from "./Project";
import { useUser } from "./UserContext";


const Projects = () => {
  const { user, activeProject } = useUser();

  return (
    <>
      <Topbar project={activeProject} />
      <div className='projects-container'>
        <div className='projects-header-container'>
          <div className='dashboard-title-container'>
            <h3 className='dashboard-title-name'>{`${activeProject.name}`}</h3>
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
        {user.projects.map((e, i) => {
          return  <Project
                    project={e}
                    key={i}
                  />})}
      </div>
    </>
  );
}

export default Projects;
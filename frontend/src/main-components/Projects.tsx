import Topbar from "./Topbar";
import Project from "./Project";
import { useUser } from "./UserContext";


const Projects = () => {
  const { user, activeProject, changeActiveProject } = useUser();

  return (
    <>
      <Topbar project={activeProject} />
      <div className='projects-container'>
        <div className='projects-header-container'>
          <div className='projects-title-container'>
            <select
              className='projects-title-select'
              value={activeProject.id}
              onChange={(e) => {
                changeActiveProject(e.target.value);
              }}
            >
              {user.projects.map((project) => (
                <option className='projects-title-option' key={project.id} value={project.id}>
                  {project.name}
                </option>
              ))}
            </select>
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
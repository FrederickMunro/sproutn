import Topbar from "./Topbar";
import Project from "./Project";
import { useProjects } from "./ProjectsContext";


const Projects = () => {
  const { projects, activeProject, setActiveProject } = useProjects();

  return (
    <>
      <Topbar />
      <div className='projects-container'>
        <div className='projects-header-container'>
          <div className='projects-title-container'>
            <select
              className='projects-title-select'
              value={activeProject.id}
              onChange={(e) => {
                const selectedId = e.target.value;
                const selectedProject = projects.find(proj => proj.id === selectedId);
                setActiveProject(selectedProject!);
              }}
            >
              {projects.map((project) => (
                <option className='projects-title-option' key={project.id} value={project.id}>
                  {project.name}
                </option>
              ))}
            </select>
          </div>
          {/* <div className='dashboard-header-button-container'>
            <button className='dashboard-need-help'>
              Need help?
            </button>
            <button className='dashboard-new-project'>
              Start new project
            </button>
          </div> */}
        </div>
        {projects.map((e, i) => {
          return  <Project
                    project={e}
                    key={i}
                  />})}
      </div>
    </>
  );
}

export default Projects;
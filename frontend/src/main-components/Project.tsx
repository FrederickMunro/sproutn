import ProjectItem from "./ProjectItem";
import { useUser } from "./UserContext";
import { Project as ProjectI } from './interfaces';

interface Props {
  project: ProjectI;
}

const Project = ({ project }: Props) => {
  const { activeProject } = useUser();
  
  return (
    <div className={`project-item ${project.id === activeProject.id ? 'visible' : 'hidden'}`}>
      {project.options.map((e, i) =>{
        return <ProjectItem
                  icon={e.icon}
                  number={i+1}
                  name={e.name}
                  description={e.description}
                  key={i}
                >tt</ProjectItem>
      })}
    </div>
  )
}

export default Project;
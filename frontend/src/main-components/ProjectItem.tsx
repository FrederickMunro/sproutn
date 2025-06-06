


interface Props {
  icon: React.ReactNode;
  number: number;
  name: string;
  description: string;
  children: React.ReactNode;
}

const ProjectItem = ({ icon, number, name, description, children }: Props) => {
  return (
    <div>
      <div className='projects-project-item-container'>
        {icon}
        <h4 className='projects-project-item-title'>{name}</h4>
        <p className='projects-project-item-desc'>{description}</p>
      </div>
      {children}
    </div>
  )
}

export default ProjectItem;
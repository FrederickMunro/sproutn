import Topbar from "./Topbar";

interface Props {
  options: option[];
}

interface option {
  name: string;
  number: number;
  available: boolean;
  status: boolean;
}

const Projects = ({ options }: Props) => {
  return (
    <>
      <Topbar options={options} />
      <div className='projects-container'>
        
      </div>
    </>
  );
}

export default Projects;
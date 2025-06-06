import { Project } from "./interfaces";
import TopbarItem from "./TopbarItem";

interface Props {
  project: Project;
}

const Topbar = ({ project }: Props) => {
  return (
    <div className='topbar-container'>
      {project.options.map((e, i) => {
        return  <>
                  {i > 0 && <hr className={`topbar-item-divider ${e.available ? '' : 'available'}`} />}
                  <TopbarItem
                    name={e.name}
                    number={e.number}
                    available={e.available}
                    status={e.status}
                    key={i}                
                  />
                </>})}
    </div>
  );
}

export default Topbar;
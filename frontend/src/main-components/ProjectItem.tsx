import { MdKeyboardArrowDown, MdKeyboardArrowRight, MdOutlineLock } from "react-icons/md";
import { Option } from "./interfaces";
import { useState } from "react";
import { RiRecordCircleLine } from "react-icons/ri";



interface Props {
  options: Option;
  children: React.ReactNode;
}

const ProjectItem = ({ options, children }: Props) => {

  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div>
      {options.available ? (
        <div className={`projects-project-item-container avail ${isOpen ? 'open' : 'closed'} ${options.status ? 'opti-completed' : ''}`}
             onClick={() => setIsOpen(!isOpen)}
        >
          <div className={`projects-project-title-container ${isOpen ? 'open' : 'closed'}`}>
            { isOpen ? <RiRecordCircleLine /> : options.icon }
            <h4 className='projects-project-item-title'>{options.name}</h4>
          </div>
          <p className={`projects-project-item-desc  ${isOpen ? 'open' : 'closed'}`}>{options.description}</p>
          {isOpen ? <MdKeyboardArrowDown /> : <MdKeyboardArrowRight />}
        </div>
      ) : (
        <div className='projects-project-item-container noavail'>
          <div className='projects-project-title-container'>
            {options.icon}
            <h4 className='projects-project-item-title'>{options.name}</h4>
          </div>
          <p className='projects-project-item-desc'>{options.description}</p>
          <MdOutlineLock />
        </div>
      )}
      <div className={`projects-project-item-children ${isOpen ? 'visible' : 'hidden'}`}>
        {children}
      </div>
    </div>
  )
}

export default ProjectItem;
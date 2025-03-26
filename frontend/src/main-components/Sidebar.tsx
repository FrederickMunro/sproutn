import { FiHome, FiFileText } from "react-icons/fi";
import { BsChatDots } from "react-icons/bs";
import SideBarItem from "./SideBarItem";

import SproutnLogo from '../assets/sproutn_blue_nobackground-small.png';
import ProfileLogo from '../assets/IMG_6791.JPG.jpg';

import './master.css';

interface Props {
  menuChoice: string;
  setMenuChoice: Function;
  name: string;
}

const SideBar = ({ menuChoice, setMenuChoice, name }: Props) => {

  const options = [
    {
      name: 'Dashboard',
      id: 'dashboard',
      icon: <FiHome />,
    },
    {
      name: 'Projects',
      id: 'projects',
      icon: <FiFileText />,
    },
    {
      name: 'Send feedback',
      id: 'feedback',
      icon: <BsChatDots />,
    },
  ]

  return (
    <div className='sidebar-container'>
      <div className='sidebar-menu-container'>
        <img src={SproutnLogo} alt='sproutn logo blue' className='sidebar-logo' />
        <div className='sidebar-items-container'>
          {options.map((e, i) => {
              return  <SideBarItem
                        name={e.name}
                        id={e.id}
                        icon={e.icon}
                        menuChoice={menuChoice}
                        setMenuChoice={setMenuChoice}
                        key={i}
                      />
            })}
        </div>
      </div>
      <div className='sidebar-profile-container'>
        <img src={ProfileLogo} className='sidebar-profile-image' />
        <div className='sidebar-profile-text-container'>
          <p className='sidebar-profile-name'>{name}</p>
          <p className='sidebar-profile-link'>Edit profile</p>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
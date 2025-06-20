import { useState } from "react";
import SideBar from "./Sidebar";
import Dashboard from "./Dashboard";
import Projects from "./Projects";
import Feedback from "./Feedback";

// import { FiFileText } from "react-icons/fi";
// import { LuBox } from "react-icons/lu";
// import { HiMagnifyingGlass } from "react-icons/hi2";
// import { MdOutlineLocalShipping, MdOutlinePhotoCamera } from "react-icons/md";
// import { GrPlan } from "react-icons/gr";
import { useUser } from "./UserContext";

const MasterContainer = () => {

  const [menuChoice, setMenuChoice] = useState<string>('dashboard');

  // Acts as a fallback if a user has no projects, also holds the icons to save db space
  // const options = [
  //   {
  //     name: 'Brief',
  //     number: 1,
  //     icon: <FiFileText />,
  //     available: false,
  //     status: false,
  //     description: '',
  //   },
  //   {
  //     name: 'Prototype',
  //     number: 2,
  //     icon: <LuBox />,
  //     available: false,
  //     status: false,
  //     description: '',
  //   },
  //   {
  //     name: 'Sourcing',
  //     number: 3,
  //     icon: <HiMagnifyingGlass />,
  //     available: false,
  //     status: false,
  //     description: '',
  //   },
  //   {
  //     name: 'Order and delivery',
  //     number: 4,
  //     icon: <MdOutlineLocalShipping />,
  //     available: false,
  //     status: false,
  //     description: '',
  //   },
  //   {
  //     name: 'Photos',
  //     number: 5,
  //     icon: <MdOutlinePhotoCamera />,
  //     available: false,
  //     status: false,
  //     description: '',
  //   },
  //   {
  //     name: 'Marketing plan',
  //     number: 6,
  //     icon: <GrPlan />,
  //     available: false,
  //     status: false,
  //     description: '',
  //   },
  // ];

  // Injects the option icons into each project's options

  return (
    <div className='master-container'>
      <SideBar menuChoice={menuChoice} setMenuChoice={setMenuChoice} />
      <div className='master-content-container'>
        {menuChoice === 'dashboard' && <Dashboard setMenuChoice={setMenuChoice} />}
        {menuChoice === 'projects' && <Projects />}
        {menuChoice === 'feedback' && <Feedback />}
      </div>
    </div>
  );
}

export default MasterContainer;
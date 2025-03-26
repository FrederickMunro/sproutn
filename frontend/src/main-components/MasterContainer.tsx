import { useState } from "react";
import SideBar from "./Sidebar";
import Dashboard from "./Dashboard";
import Projects from "./Projects";
import Feedback from "./Feedback";


const MasterContainer = () => {

  const [menuChoice, setMenuChoice] = useState<string>('dashboard');

  const name= 'Christos';

  const options = [
    {
      name: 'Brief',
      number: 1,
      available: true,
      status: true,
    },
    {
      name: 'Prototype',
      number: 2,
      available: true,
      status: true,
    },
    {
      name: 'Sourcing',
      number: 3,
      available: true,
      status: false,
    },
    {
      name: 'Order and delivery',
      number: 4,
      available: true,
      status: false,
    },
    {
      name: 'Photos',
      number: 5,
      available: false,
      status: false,
    },
    {
      name: 'Marketing plan',
      number: 6,
      available: false,
      status: false,
    },
  ]

  return (
    <div className='master-container'>
      <SideBar menuChoice={menuChoice} setMenuChoice={setMenuChoice} name={name} />
      <div className='master-content-container'>
        {menuChoice === 'dashboard' && <Dashboard name={name} />}
        {menuChoice === 'projects' && <Projects options={options} />}
        {menuChoice === 'feedback' && <Feedback options={options} />}
      </div>
    </div>
  );
}

export default MasterContainer;
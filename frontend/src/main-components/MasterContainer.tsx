import { useState } from "react";
import SideBar from "./Sidebar";
import Dashboard from "./Dashboard";
import Projects from "./Projects";
import Feedback from "./Feedback";


const MasterContainer = () => {

  const [menuChoice, setMenuChoice] = useState<string>('dashboard');

  const name= 'name';

  return (
    <div className='master-container'>
      <SideBar menuChoice={menuChoice} setMenuChoice={setMenuChoice} name={name} />
      <div className='master-content-container'>
        {menuChoice === 'dashboard' && <Dashboard name={name} />}
        {menuChoice === 'projects' && <Projects />}
        {menuChoice === 'feedback' && <Feedback />}
      </div>
    </div>
  );
}

export default MasterContainer;
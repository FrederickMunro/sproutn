import { useState } from "react";
import SideBar from "./Sidebar";
import Dashboard from "./Dashboard";
import Projects from "./Projects";
import Feedback from "./Feedback";


const Master = () => {

  const [menuChoice, setMenuChoice] = useState<string>('dashboard');

  return (
    <div className='master-container'>
      <SideBar menuChoice={menuChoice} setMenuChoice={setMenuChoice} />
      <div className='master-content-container'>
        {menuChoice === 'dashboard' && <Dashboard />}
        {menuChoice === 'projects' && <Projects />}
        {menuChoice === 'feedback' && <Feedback />}
      </div>
    </div>
  );
}

export default Master;
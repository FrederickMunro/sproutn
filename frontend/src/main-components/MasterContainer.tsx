import { useEffect, useState } from "react";
import SideBar from "./Sidebar";
import Dashboard from "./Dashboard";
import Projects from "./Projects";
import Feedback from "./Feedback";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../auth/AuthContext";

const MasterContainer = () => {
  const { userId } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!userId) {
      navigate("/login");
    }
  }, [userId, navigate]);

  if (!userId) return null;
  
  const [menuChoice, setMenuChoice] = useState<string>('dashboard');

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
import { useState } from 'react';
import DashboardProject from './DashboardProject';
import './master.css';
import ModalContainer from './ModalContainer';
import { useUser } from "./UserContext";
import ModalInput from './ModalInput';
import { useProjects } from './ProjectsContext';
import axios from 'axios';

interface Props {
  setMenuChoice: Function;
}

const Dashboard = ({ setMenuChoice }: Props) => {
  const { user } = useUser();
  const { projects, fetchProjects } = useProjects();

  const [projectName, setProjectName] = useState<string>('')
  
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const addProject = async () => {
    try {
      await axios.post(`${import.meta.env.VITE_API_URL}/addproject`, {
        name: projectName,
        userId: user.id,
        pending: "",
        time: "",
        status: "",
        percent: 0.0,
        shippingAddress: "",
      });

      const response = await axios.get(`${import.meta.env.VITE_API_URL}/getprojects`, {
        params: { userId: user.id },
      });

      const projects = response.data;
      const createdProject = projects[projects.length - 1];

      const defaultOptions = {
        brief: {
          name: "Brief",
          number: 1,
          description: "Provides the project details, outstanding actions, and elapsed time since initiation.",
          available: false,
          status: false,
          pendingAction: 'No pending action.',
        },
        prototype: {
          name: "Prototype",
          number: 2,
          description: "Contains prototype shipping details along with supporting images and documents for review and reference.",
          available: false,
          status: false,
          pendingAction: '',
        },
        sourcing: {
          name: "Sourcing",
          number: 3,
          description: "Select and confirm the manufacturer responsible for producing your product.",
          available: false,
          status: false,
          pendingAction: '',
        },
        orderanddelivery: {
          name: "Order and delivery",
          number: 4,
          description: "View order history and track the current status of all placed orders.",
          available: false,
          status: false,
          pendingAction: '',
        },
        photos: {
          name: "Photos",
          number: 5,
          description: "",
          available: false,
          status: false,
          pendingAction: '',
        },
        marketingplan: {
          name: "Marketing plan",
          number: 6,
          description: "",
          available: false,
          status: false,
          pendingAction: '',
        },
      };

      await axios.post(`${import.meta.env.VITE_API_URL}/addoptions`, {
        projectId: createdProject.id.toLowerCase(),
        options: defaultOptions,
      });
      
      fetchProjects();
    } catch (error) {
      console.error("Failed to add project:", error);
      throw error;
    }
  };

  return (
    <>
      <ModalContainer
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        title='Start a new project'
        showSubmit={true}
        submit={addProject}
      >
        <ModalInput label='Project name' placeholder="Enter your project's name..." value={projectName} setValue={setProjectName} />
      </ModalContainer>
      <div className='dashboard-container'>
        <div className='dashboard-header-container'>
          <div className='dashboard-title-container'>
            <h3 className='dashboard-title-name'>{`Welcome ${user.firstName}`}</h3>
            <h2 className='dashboard-title-title'>Your dashboard</h2>
          </div>
          <div className='dashboard-header-button-container'>
            {/* <button className='dashboard-need-help'>
              Need help?
            </button> */}
            <button className='dashboard-new-project' onClick={() => setIsOpen(true)}>
              Start new project
            </button>
          </div>
        </div>
        <div className='dashboard-projects-container'>
          {projects.map((e, i) => {
            return  <DashboardProject project={e} setMenuChoice={setMenuChoice} key={i} />})}
        </div>
      </div>
    </>
  );
}

export default Dashboard;
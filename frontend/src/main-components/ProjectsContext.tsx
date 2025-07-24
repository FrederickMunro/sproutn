import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import axios from "axios";
import { useUser } from "./UserContext";
import { Project } from "./interfaces";
import { useOptions } from "./OptionsContext";
import { useOrders } from "./OrderContext";

interface ProjectsContextType {
  projects: Project[];
  addProject: (project: Project) => Promise<void>;
  activeProject: Project;
  setActiveProject: (project: Project) => void;
  loading: boolean;
  fetchProjects: () => void;
}

const ProjectsContext = createContext<ProjectsContextType | undefined>(undefined);

interface Props {
  children: ReactNode;
}

export const ProjectsProvider = ({ children }: Props) => {
  const { user } = useUser();
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [activeProject, setActiveProject] = useState<Project>({
    name: "",
    id: "",
    userId: "",
    pending: "",
    time: Date.now(),
    status: "",
    percent: 0,
    shippingAddress: "",
  });

  const { fetchOptions } = useOptions();
  const { fetchOrders, fetchPrototype } = useOrders();

  const addProject = async (project: Project) => {
    try {
      await axios.post(`${import.meta.env.VITE_API_URL}/addproject`, {
        ...project,
        userId: user.id,
      }); // <-- send project as JSON body, not in params

      // Then get projects and do your rest of logic
      const response = await axios.get(`${import.meta.env.VITE_API_URL}/getprojects`, {
        params: { userId: user.id },
      });

      const projects = response.data;
      const createdProject = projects[projects.length - 1];

      const defaultOptions = {
        brief: {
          name: "Brief",
          number: 1,
          description: "",
          available: false,
          status: false,
        },
        prototype: {
          name: "Prototype",
          number: 2,
          description: "",
          available: false,
          status: false,
        },
        sourcing: {
          name: "Sourcing",
          number: 3,
          description: "",
          available: false,
          status: false,
        },
        orderanddelivery: {
          name: "Order and delivery",
          number: 4,
          description: "",
          available: false,
          status: false,
        },
        photos: {
          name: "Photos",
          number: 5,
          description: "",
          available: false,
          status: false,
        },
        marketingplan: {
          name: "Marketing plan",
          number: 6,
          description: "",
          available: false,
          status: false,
        },
      };

      await axios.post(`${import.meta.env.VITE_API_URL}/addoptions`, {
        projectId: createdProject.id,
        options: defaultOptions,
      });
      fetchProjects();
    } catch (error) {
      console.error("Failed to add project:", error);
      throw error;
    }
  };

  
  const fetchProjects = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${import.meta.env.VITE_API_URL}/getprojects`, {
        params: { userId: user.id },
      });
      const projects = response.data;
      console.log("User projects:", projects);
      setProjects(projects);
      if (projects.length > 0) {
        setActiveProject(projects[0]);
      }
    } catch (error) {
      console.error("Error fetching projects:", error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, [user.id]);

  useEffect(() => {
    fetchOptions(activeProject.id.toLowerCase());
    fetchOrders(activeProject.id.toLowerCase());
    fetchPrototype(activeProject.id.toLowerCase());
  }, [activeProject])

  return (
    <ProjectsContext.Provider value={{ projects, addProject, activeProject, setActiveProject, loading, fetchProjects }}>
      {children}
    </ProjectsContext.Provider>
  );
}

export const useProjects = () => {
  const context = useContext(ProjectsContext);
  if (!context) throw new Error("useProjects must be used within a ProjectsProvider");
  return context;
};
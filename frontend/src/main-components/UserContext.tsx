import { createContext, useContext, useState, ReactNode, useEffect } from "react";
import { RawUser, User, Project } from "./interfaces"; // import your interfaces
import { FiFileText } from "react-icons/fi";
import { LuBox } from "react-icons/lu";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { MdOutlineLocalShipping, MdOutlinePhotoCamera } from "react-icons/md";
import { GrPlan } from "react-icons/gr";

// Icon map by option name
const iconMap: Record<string, ReactNode> = {
  "Brief": <FiFileText />,
  "Prototype": <LuBox />,
  "Sourcing": <HiMagnifyingGlass />,
  "Order and delivery": <MdOutlineLocalShipping />,
  "Photos": <MdOutlinePhotoCamera />,
  "Marketing plan": <GrPlan />,
};

interface UserContextType {
  user: User;
  activeProject: Project;
  changeActiveProject: (id: string) => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

interface Props {
  children: ReactNode;
  rawUser: RawUser;
}

export const UserProvider = ({ children, rawUser }: Props) => {
  const [user, setUser] = useState<User | null>(null);
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  useEffect(() => {
    const enrichedUser: User = {
      ...rawUser,
      projects: rawUser.projects.map((project) => ({
        ...project,
        options: project.options.map((opt) => ({
          ...opt,
          icon: iconMap[opt.name] || null,
        })),
      })),
    };
    setUser(enrichedUser);
    if (enrichedUser.projects.length > 0) {
      setActiveProject(enrichedUser.projects[0]);
    }
  }, [rawUser]);

  if (!user || !activeProject) return null; // or loading spinner

  const changeActiveProject = (id: string) => {
    if (!user || !user.projects) {
      console.warn("User or user projects are not defined.");
      return;
    }
  
    const project = user.projects.find((p) => p.id === id);
    if (!project) {
      console.warn(`Project with id ${id} not found.`);
      return;
    }
  
    setActiveProject(project);
  };

  return <UserContext.Provider value={{user, activeProject, changeActiveProject}}>{children}</UserContext.Provider>;
};

export const useUser = (): UserContextType => {
  const context = useContext(UserContext);
  if (!context) throw new Error("useUser must be used within a UserProvider");
  return context;
};
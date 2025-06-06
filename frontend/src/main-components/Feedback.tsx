import Topbar from "./Topbar";
import { useUser } from "./UserContext";

const Feedback = () => {

  const { activeProject } = useUser();

  return (
    <>
      <Topbar project={activeProject} />
      <div className='feedback-container'>
        
      </div>
    </>
  );
}

export default Feedback;
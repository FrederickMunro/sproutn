import { IoMdArrowForward } from "react-icons/io";

interface Props {
  name: string;
  content: string;
}

const DashboardProjectItem = ({ name, content }: Props) => {
  return (
    <div>
      <h5 className='dashboard-project-item-title'>
        <IoMdArrowForward />
        {name}
      </h5>
      <p className='dashboard-project-item-content'>{content}</p>
    </div>
  );
}

export default DashboardProjectItem;
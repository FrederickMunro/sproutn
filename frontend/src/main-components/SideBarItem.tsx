import './master.css';

interface Props {
  name: string;
  id: string;
  icon: React.ReactNode;
  menuChoice: string;
  setMenuChoice: Function;
}

const SideBarItem = ({ name, id, icon, menuChoice, setMenuChoice }: Props) => {
  return(
    <button
      className={`sidebar-item ${menuChoice === id ? 'chosen' : ''}`}
      onClick={() => setMenuChoice(id)}
    >
      {icon}
      <p className='sidebar-item-name'>{name}</p>
    </button>
  );
}

export default SideBarItem;
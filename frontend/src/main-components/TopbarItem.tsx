import { FaCheck } from "react-icons/fa";

interface Props {
  name: string;
  number: number;
  available: boolean;
  status: boolean;
}

const TopbarItem = ({ name, number, available, status }: Props) => {
  return (
    <div className='topbar-item-container'>
      {status ? (
          <div className='topbar-item-checkmark'>
            <FaCheck />
          </div>
        ) : (
          <div className={`topbar-item-number ${available ? '' : 'available'}`}>{number}</div>
        )}
      <p className={`topbar-item-name ${available ? '' : 'available'}`}>{name}</p>
    </div>
  );
}

export default TopbarItem;
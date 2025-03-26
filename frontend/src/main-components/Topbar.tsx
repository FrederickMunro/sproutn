import TopbarItem from "./TopbarItem";

interface Props {
  options: option[];
}

interface option {
  name: string;
  number: number;
  available: boolean;
  status: boolean;
}

const Topbar = ({ options }: Props) => {

  return (
    <div className='topbar-container'>
      {options.map((e, i) => {
        return  <>
                  {i > 0 && <hr className={`topbar-item-divider ${e.available ? '' : 'available'}`} />}
                  <TopbarItem
                    name={e.name}
                    number={e.number}
                    available={e.available}
                    status={e.status}
                    key={i}                
                  />
                </>})}
    </div>
  );
}

export default Topbar;
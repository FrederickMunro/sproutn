import TopbarItem from "./TopbarItem";


const Topbar = () => {

  const options = [
    {
      name: 'Brief',
      number: 1,
      available: true,
      status: true,
    },
    {
      name: 'Prototype',
      number: 2,
      available: true,
      status: true,
    },
    {
      name: 'Sourcing',
      number: 3,
      available: true,
      status: false,
    },
    {
      name: 'Order and delivery',
      number: 4,
      available: true,
      status: false,
    },
    {
      name: 'Photos',
      number: 5,
      available: false,
      status: false,
    },
    {
      name: 'Marketing plan',
      number: 6,
      available: false,
      status: false,
    },
  ]

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
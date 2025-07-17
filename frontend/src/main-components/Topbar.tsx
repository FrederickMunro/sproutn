import React from "react";
import { useOptions } from "./OptionsContext";
import TopbarItem from "./TopbarItem";

const Topbar = () => {
  const { options } = useOptions();

  return (
    <div className='topbar-container'>
      {Object.values(options || {}).map((e, i) => (
        <React.Fragment key={e.number}>
          {i > 0 && <hr className={`topbar-item-divider ${e.available ? '' : 'available'}`} />}
          <TopbarItem
            name={e.name}
            number={e.number}
            available={e.available}
            status={e.status}
          />
        </React.Fragment>
      ))}
    </div>
  );
}

export default Topbar;
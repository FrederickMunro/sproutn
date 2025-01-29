import { useState } from "react";

interface Props {
  title: string;
  contents: string[];
  isSmall: boolean;
}

const TableSection = ({ title, contents, isSmall }: Props) => {

  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className='table-section-container'>
      <div className='table-section-header-div' onClick={() =>  setIsOpen(!isOpen)}>
        <div className='table-section-header-checkmark-div'>
          <p className='table-section-header-checkmark'>&#10003;</p>
        </div>
        <div className='table-section-header-title-div'>
          <h4 className='table-section-header-title-h'>{title}</h4>
        </div>
        <div className='table-section-header-plusminus-div'>
          <svg className={`table-section-header-plusminus-icon ${isOpen ? 'open' : 'close'}`} viewBox="0 0 100 100" width="20" height="20">
            <rect className="table-section-header-plusminus-line table-section-header-plusminus-horizontal" x="20" y="45" width="60" height="10" rx="5"></rect>
            <rect className="table-section-header-plusminus-line table-section-header-plusminus-vertical" x="45" y="20" width="10" height="60" rx="5"></rect>
          </svg>
        </div>
      </div>
      <div className={`table-section-content-div ${isOpen ? 'open' : 'close'} ${isSmall ? 'small' : 'big'}`}>
        <ul className='table-section-content-ul'>
          {contents.map((line, index) => {
            return <li className='table-section-content-li' key={index}>{line}</li>
          })}
        </ul>
      </div>
    </div>
  );
}

export default TableSection;
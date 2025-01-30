import { useState } from "react";
import ItemContainer from "../ItemContainer";

interface Props {
  title: string;
  contents: string[];
  number: string;
}

const TableSection = ({ title, contents, number }: Props) => {

  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className='table-section-container'>
      <div className='table-section-header-div' onClick={() =>  setIsOpen(!isOpen)}>
        <div className='table-section-header-checkmark-div'>
          <ItemContainer anim={'appear'} time={'50'} threshold={0.7}>
            <p className='table-section-header-checkmark'>&#10003;</p>
            </ItemContainer>
        </div>
        <div className='table-section-header-title-div'>
          <ItemContainer anim={'appear'} anim2={'right'} time={'10'} threshold={0.3}>
            <h4 className='table-section-header-title-h'>{title}</h4>
          </ItemContainer>
        </div>
        <div className='table-section-header-plusminus-div'>
          <ItemContainer anim={'appear'} time={'50'} threshold={0.9}>
            <svg className={`table-section-header-plusminus-icon ${isOpen ? 'open' : 'close'}`} viewBox="0 0 100 100" width="25" height="25">
              <rect className="table-section-header-plusminus-line table-section-header-plusminus-horizontal" x="0" y="45" width="100" height="10" rx="5"></rect>
              <rect className="table-section-header-plusminus-line table-section-header-plusminus-vertical" x="45" y="0" width="10" height="100" rx="5"></rect>
            </svg>
          </ItemContainer>
        </div>
      </div>
      <div className='table-section-content-div'>
        <ul className={`table-section-content-ul ${isOpen ? 'open' : 'close'} ${number}`}>
          {contents.map((line, index) => {
            return <li className='table-section-content-li' key={index}>{line}</li>
          })}
        </ul>
      </div>
    </div>
  );
}

export default TableSection;
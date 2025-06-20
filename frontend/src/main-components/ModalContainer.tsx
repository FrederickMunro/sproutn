import { ReactNode } from "react";

interface Props {
  title: string;
  isOpen: boolean;
  setIsOpen: Function;
  showSubmit: boolean;
  children: ReactNode;
}

const ModalContainer = ({ isOpen, setIsOpen, title, showSubmit, children }: Props) => {

  return (
    <div className={`modal-dimmed-background ${isOpen ? 'modal-open' : 'modal-closed'}`} onClick={() => setIsOpen(false)}>
      <div className='modal-container' onClick={(e) => e.stopPropagation()}>
        <h2 className='modal-title'>{title}</h2>
        { children }
        { showSubmit && <button className='modal-submit' onClick={() => setIsOpen(false)}>Submit</button>}    
      </div>
    </div>
  )
}

export default ModalContainer;
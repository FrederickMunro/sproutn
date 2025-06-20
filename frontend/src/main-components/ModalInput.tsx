import { useState } from "react";


interface Props {
  label: string;
  placeholder: string
}

const ModalInput = ({ label, placeholder }: Props) => {

  const [value, setValue] = useState<string>()

  return (
    <div className='modal-input-container'>
      <label className='modal-input-label' htmlFor="name">{label}</label>
      <input
        className='modal-input'
        type="text"
        id="label"
        name="label"
        placeholder={placeholder}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
}

export default ModalInput;
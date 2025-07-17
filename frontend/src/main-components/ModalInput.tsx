import { useState } from "react";


interface Props {
  label: string;
  value: string;
  setValue: Function;
  placeholder: string
}

const ModalInput = ({ label, value, setValue, placeholder }: Props) => {

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
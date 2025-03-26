import Topbar from "./Topbar";

interface Props {
  options: option[];
}

interface option {
  name: string;
  number: number;
  available: boolean;
  status: boolean;
}

const Feedback = ({ options }: Props) => {
  return (
    <>
      <Topbar options={options} />
      <div className='feedback-container'>
        
      </div>
    </>
  );
}

export default Feedback;
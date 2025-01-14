import ItemContainer from "./ItemContainer";

interface Props {
  icon: any;
  title: string;
  desc: string;
}

const Step = ({ icon, title, desc }: Props) => {
  return (
    <ItemContainer>
        <div className='step'>
            {icon}
            <div>
              <h3 className='step-h3'>{title}</h3>
              <p className='step-p'>{desc}</p>
            </div>
        </div>
    </ItemContainer>
  );
}

export default Step;
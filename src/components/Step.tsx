import ItemContainer from "./ItemContainer";

interface Props {
  icon?: any;
  title: string;
  desc: string;
  num: number;
}

const Step = ({ title, desc, num }: Props) => {
  return (
    <ItemContainer anim={'appear'} anim2={'up'} time={'10'}>
      <div className='step-container'>
        <div className='step-triangle' />
        <div className='step'>
            <p className='step-num'>{num}.</p>
            <div>
              <h3 className='step-h3'>{title}</h3>
              <p className='step-p'>{desc}</p>
            </div>
        </div>
      </div>
    </ItemContainer>
  );
}

export default Step;
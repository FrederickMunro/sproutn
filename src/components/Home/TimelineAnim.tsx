import ItemContainer from "../ItemContainer";


const TimelineAnim = () => {
  return (
    <>
      <div className='timeline-container'>
        <div className='dot-container-anim'>
          <div className={'dot-anim'} />
        </div>
      </div>
      <div className='timeline-container-anim'>
        <div className='dot-container-anim'>
          <ItemContainer anim={'dot'} time={'6'}>
            <div className={'dot-anim'} />
          </ItemContainer>
        </div>
        <ItemContainer anim={'line'} time={'7'}>
          <div className='line-container-anim'>
              <div className={'line-anim'} />
          </div>
        </ItemContainer>
      </div>
      <div className='timeline-container-anim'>
        <div className='dot-container-anim'>
          <ItemContainer anim={'dot'} time={'6'}>
            <div className={'dot-anim'} />
          </ItemContainer>
        </div>
        <ItemContainer anim={'line'} time={'7'}>
          <div className='line-container-anim'>
              <div className={'line-anim'} />
          </div>
        </ItemContainer>
      </div>
      <div className='timeline-container-anim'>
        <div className='dot-container-anim'>
          <ItemContainer anim={'dot'} time={'6'}>
            <div className={'dot-anim'} />
          </ItemContainer>
        </div>
        <ItemContainer anim={'line'} time={'7'}>
          <div className='line-container-anim'>
              <div className={'line-anim'} />
          </div>
        </ItemContainer>
      </div>
      <div className='timeline-container-anim'>
        <div className='dot-container-anim'>
          <ItemContainer anim={'dot'} time={'6'}>
            <div className={'dot-anim'} />
          </ItemContainer>
        </div>
        <ItemContainer anim={'line'} time={'7'}>
          <div className='line-container-anim'>
              <div className={'line-anim'} />
          </div>
        </ItemContainer>
      </div>
    </>
  );
}

export default TimelineAnim;
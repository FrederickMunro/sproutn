import { PopupButton } from "react-calendly";
import ItemContainer from "../ItemContainer"
// import logo from '../../assets/blacksproutn.PNG (1).png';
import logo from '../../assets/sproutn_grey_sub.png';
import ipad from '../../assets/Proto.png';


const TitleBox = () => {
  return(
    <div className='hero-gradient-container'>
      <div className='header-container'>
        <ItemContainer anim={'appear'} time={'5'}>
          <img className='header-logo' src={logo} />
        </ItemContainer>
      </div>
      <div className='hero-box'>
        <div className='width-95'>
          <ItemContainer anim={'up'} anim2={'up'} time={'5'}>
              <h2 className='hero-box-text h2'>Starting a business, made that much easier</h2>
          </ItemContainer>
        </div>
        <div className='width-90'>
          <ItemContainer anim={'up'} anim2={'up'} time={'6'}>
              <h3 className='hero-box-text h3'>Trying your product idea with less risk and quicker timelines</h3>
          </ItemContainer>
        </div>
        <div style={{ width: 'max(15rem, min(10vw, 20rem))'}}>
          <ItemContainer anim={'up'} anim2={'appear'} time={'7'}>
            <PopupButton
              url='https://calendly.com/munro-development/30min'
              rootElement={document.getElementById("root")!}
              text="START NOW"
              styles={{
                color: 'var(--creme-white)',
                backgroundColor: 'var(--dark-graphite)',
                fontSize: 'max(1.3rem, min(1.2vw, 2rem))',
                width: 'max(15rem, min(10vw, 20rem))',
                marginTop: '2rem',
                fontWeight: 'bold',
                cursor: 'pointer'
              }}
            />
          </ItemContainer>
        </div>
      </div>
      <div className='home-ipad-container'>
        <ItemContainer anim={''} time={''}>
            <img className='home-ipad' src={ipad} />
        </ItemContainer>
      </div>
    </div>
  )
}

export default TitleBox;
import ItemContainer from "../ItemContainer"
// import logo from '../../assets/blacksproutn.PNG (1).png';
import logo from '../../assets/sproutn_grey_sub.png';
import ipad from '../../assets/Proto.png';
import { Link } from "react-router-dom";


const TitleBox = () => {
  return(
    <div className='hero-gradient-container'>
      <div className='header-container'>
        <ItemContainer anim={'appear'} time={'5'}>
          <Link to='/'>
            <img className='header-logo' src={logo} />
          </Link>
        </ItemContainer>
      </div>
      <div className='hero-box'>
        <div className='width-95'>
          <ItemContainer anim={'up'} anim2={'appear'} time={'6'}>
              <h2 className='hero-box-text h2'>Starting a business, made that much easier</h2>
          </ItemContainer>
        </div>
        <div className='width-90'>
          <ItemContainer anim={'up'} anim2={'appear'} time={'7'}>
              <h3 className='hero-box-text h3'>Trying your product idea with less risk and quicker timelines</h3>
          </ItemContainer>
        </div>
        <div style={{ width: 'max(15rem, min(10vw, 20rem))', zIndex: '10'}}>
          <ItemContainer anim={'up'} anim2={'appear'} time={'8'}>
            <div className='calendar-button-container'>
              <Link to='/download'>Learn more</Link>
            </div>
          </ItemContainer>
        </div>
      </div>
      <div className='home-ipad-container'>
        <ItemContainer anim={''} time={''}>
          <div className='ipad-load-container'>
            <img className='home-ipad' src={ipad} />
          </div>
        </ItemContainer>
      </div>
    </div>
  )
}

export default TitleBox;
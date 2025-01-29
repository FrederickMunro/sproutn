import { PopupButton } from "react-calendly";
import ItemContainer from "../ItemContainer"
import logo from '../../assets/blacksproutn.PNG (1).png';
import ipad from '../../assets/Proto.png';


const TitleBox = () => {
  return(
    <div className='hero-gradient-container'>
      <div className='header-container'>
          <ItemContainer only={true}>
              <p className='header-top'>Rooted in your success</p>
              <img className='header-logo' src={logo} />
          </ItemContainer>
      </div>
      <div className='hero-box'>
          <ItemContainer>
              <h2 className='hero-box-text h2'>Starting a business, made that much easier</h2>
          </ItemContainer>
          <ItemContainer>
              <h3 className='hero-box-text h3'>Trying your product idea with less risk and quicker timelines</h3>
          </ItemContainer>
          <ItemContainer>
            <PopupButton
              url='https://calendly.com/munro-development/30min'
              rootElement={document.getElementById("root")!}
              text="START NOW"
              styles={{
                color: '#242424',
                backgroundColor: 'white',
                fontSize: '1.3rem',
                width: '15rem',
                marginTop: '2rem',
                fontWeight: 'bold',
                cursor: 'pointer'
              }}
            />
          </ItemContainer>
          <ItemContainer>
              <img className='home-ipad' src={ipad} />
          </ItemContainer>
      </div>
    </div>
  )
}

export default TitleBox;
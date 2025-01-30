import { FaAndroid, FaAmazon, FaAngular, FaCcVisa, FaBtc } from "react-icons/fa";
import ItemContainer from "../ItemContainer";


const LogoCarouselBox = () => {

  const items = [
    <FaAndroid />,
    <FaAmazon />,
    <FaAngular />,
    <FaCcVisa />,
    <FaBtc />,
  ]

  return(
    <div className='logo-box'>
      <ItemContainer anim={'appear'} time={'6'}>
        <h3 className='logo-box-h'>Where ideas take root and brands blossom</h3>
      </ItemContainer>
      <ItemContainer anim={'right'} time={'10'}>
        <div className="carousel-container">
          <div className="carousel-track">
            {/* First set of items */}
            {items.map((item, index) => (
              <div key={index} className="carousel-item">
                {item}
              </div>
            ))}
            {/* Duplicate the items for seamless looping */}
            {items.map((item, index) => (
              <div key={`dup-${index}`} className="carousel-item">
                {item}
              </div>
            ))}
          </div>
        </div>
      </ItemContainer>
    </div>
  )
}

export default LogoCarouselBox;
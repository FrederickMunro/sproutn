import { FaAndroid, FaAmazon, FaAngular, FaCcVisa, FaBtc, FaApple, FaChrome } from "react-icons/fa";
import ItemContainer from "../ItemContainer";

const LogoCarouselBox = () => {
  const items = [
    <FaAndroid className="carousel-icon" aria-label="Android" />,
    <FaAmazon className="carousel-icon" aria-label="Amazon" />,
    <FaAngular className="carousel-icon" aria-label="Angular" />,
    <FaCcVisa className="carousel-icon" aria-label="Visa" />,
    <FaBtc className="carousel-icon" aria-label="Bitcoin" />,
    <FaApple className="carousel-icon" aria-label="Apple" />,
    <FaChrome className="carousel-icon" aria-label="Chrome" />
  ];

  return (
    <div className="logo-box">
      <ItemContainer anim={"appear"} time={"6"}>
        <h3 className="logo-box-h">Where ideas are <span className='green'>rooted</span> and businesses <span className='green'>sprout</span></h3>
      </ItemContainer>
      <div className="carousel-container">
        <ItemContainer anim={"left"} time={"10"}>
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
        </ItemContainer>
      </div>
    </div>
  );
};

export default LogoCarouselBox;
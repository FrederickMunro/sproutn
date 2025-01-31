import Shark from '../../assets/carousel/shark.svg';
import Leaf from '../../assets/carousel/leaf.svg';
import Mix from '../../assets/carousel/mix.svg';
import Paddle from '../../assets/carousel/paddle.svg';
import Baby from '../../assets/carousel/baby.png';

import ItemContainer from "../ItemContainer";

const LogoCarouselBox = () => {
  const items = [
    <img src={Shark} className="carousel-icon" aria-label="Android" />,
    <img src={Leaf} className="carousel-icon" aria-label="Amazon" />,
    <img src={Mix} className="carousel-icon" aria-label="Angular" />,
    <img src={Paddle} className="carousel-icon" aria-label="Visa" />,
    <img src={Baby} className="carousel-icon" aria-label="Bitcoin" />,
    // <img src={} className="carousel-icon" aria-label="Apple" />,
    // <img src={} className="carousel-icon" aria-label="Chrome" />
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
              <div key={`${index}`} className="carousel-item">
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
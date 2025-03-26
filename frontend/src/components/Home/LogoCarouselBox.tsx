import Shark from '../../assets/carousel/shark.svg';
import Leaf from '../../assets/carousel/leaf.svg';
import Mix from '../../assets/carousel/mix.svg';
import Paddle from '../../assets/carousel/paddle.svg';
import Baby from '../../assets/carousel/baby.png';
import Dumbell from '../../assets/carousel/dumbell.svg';

import ItemContainer from "../ItemContainer";

const LogoCarouselBox = () => {
  const items = [
    <img src={Shark} className="carousel-icon" aria-label="Shark" />,
    <img src={Leaf} className="carousel-icon" aria-label="Leaf" />,
    <img src={Mix} className="carousel-icon" aria-label="Mix" />,
    <img src={Paddle} className="carousel-icon" aria-label="Paddle" />,
    <img src={Baby} className="carousel-icon" aria-label="Baby" />,
    <img src={Dumbell} className="carousel-icon" aria-label="Dumbell" />,
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
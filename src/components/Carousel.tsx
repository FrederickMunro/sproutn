import { Carousel } from 'react-responsive-carousel';

const IconCarousel = () => {

  const icons = [
      '🔥', '🌟', '🎯', '🚀', '🎵', '💻', '🎨', '📚', '🏆', '📷',
  ]; // Replace these with your actual icons or images.

  return (
      
    <Carousel>
        {icons.map((icon, index) => {
            return <div key='index'><img src={icon}/></div>
        })}
    </Carousel>
  );
};

export default IconCarousel;
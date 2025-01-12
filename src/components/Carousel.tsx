import { Slider } from 'react-carousel';

const IconCarousel = () => {
  const settings = {
      dots: true, // Enable dots for navigation
      infinite: true, // Infinite scrolling
      speed: 500, // Transition speed
      slidesToShow: 5, // Number of icons shown at a time
      slidesToScroll: 1, // Number of icons scrolled at a time
      responsive: [
          {
              breakpoint: 1024,
              settings: {
                  slidesToShow: 3,
              },
          },
          {
              breakpoint: 600,
              settings: {
                  slidesToShow: 2,
              },
          },
          {
              breakpoint: 480,
              settings: {
                  slidesToShow: 1,
              },
          },
      ],
  };

  const icons = [
      '🔥', '🌟', '🎯', '🚀', '🎵', '💻', '🎨', '📚', '🏆', '📷',
  ]; // Replace these with your actual icons or images.

  return (
      <div className="carousel-container">
          <Slider {...settings}>
              {icons.map((icon, index) => (
                  <div key={index} className="icon-wrapper">
                      <span className="icon">{icon}</span>
                  </div>
              ))}
          </Slider>
      </div>
  );
};

export default IconCarousel;
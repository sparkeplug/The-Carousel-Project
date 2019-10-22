import Carousel from './carousel';
import './styles/carousel.scss';

/**
 * Initialize and start a carousel
 * @param {object} config
 */
export function CarouselInit(config = {}) {
  const { initSlide } = config;
  const carousels = document.querySelectorAll('.gt-carousel');
  const carouselsInits = [];
  carousels.forEach(carousel => {
    carouselsInits.push(new Carousel(carousel, initSlide || 1));
  });
}

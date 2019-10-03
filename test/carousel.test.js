import { JSDOM } from 'jsdom';
import CarouselInit from '../src/index';

const htmlTemplate = `<!DOCTYPE html><head></head><body><div id="carousel" class="gt-carousel home-carousel"> <ul class="gt-carousel__cards"> <li class="gt-carousel__card"> <img class="gt-carousel__card-img" data-header="Russia" data-sub-header="Moscow" src="https://i2.wp.com/wallur.com/wp-content/uploads/2016/12/russia-background-8.jpg?fit=1920%2C1080" alt="" /> </li> <li class="gt-carousel__card"> <img class="gt-carousel__card-img" data-header="India" data-sub-header="New Delhi" src="https://data.1freewallpapers.com/download/india-monuments.jpg" alt="" /> </li> <li class="gt-carousel__card"> <img class="gt-carousel__card-img" data-header="France" data-sub-header="Paris" src="https://worldoftravel.co/wp-content/uploads/My_World_Paris_59079f6834a4f50d46219cca.jpeg" alt="" /> </li> </ul> </div></body></p>`;
test('Carousel', () => {
  const dom = new JSDOM(htmlTemplate);
  const { window } = dom;
  const { document } = window;
  console.log('Carousel -> ', CarouselInit());
  console.log('DOCUMENT -> ', document);

  expect(true).toBe(true);
});

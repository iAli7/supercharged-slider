import { Middleware } from '~/types';

const slidesPerView = (count: number): Middleware => ({
  name: 'slidesPerView',
  callback: (slider) => {
    const elementWidth = slider.element.clientWidth;
    const slideWidth = elementWidth / count;

    slider.slidesPerView = count;
    slider.slideWidth = slideWidth;
  },
});

export default slidesPerView;

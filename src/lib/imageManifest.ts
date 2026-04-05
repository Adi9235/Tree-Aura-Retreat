/**
 * PAGE IMAGE MANIFEST
 * Each route maps to all the images it needs.
 * These get preloaded in parallel as soon as the user navigates to or hovers over a route link.
 */
export const PAGE_IMAGES: Record<string, string[]> = {
  '/': [
    '/hero-bg.webp',
    '/hero-1.webp',
    '/hero-2.webp',
    '/logo.jpg',
    '/images/spa-hero.webp',
    '/images/Deluxe-new-1.jpeg',
    '/images/Cafe-img-1.jpg',
  ],
  '/stay': [
    '/images/Deluxe-new-1.jpeg',
    '/images/Deluxe-new-2.jpeg',
    '/images/Deluxe-new-3.jpeg',
    '/images/Deluxe-new-4.jpeg',
    '/images/Deluxe-new-5.jpeg',
    '/images/Deluxe-new-6.jpeg',
    '/images/Deluxe-new-7.jpeg',
    '/images/Cottage-room-1.jpg',
    '/images/Cottage-room-2.jpg',
    '/images/Cottage-room-3.jpg',
    '/images/Cottage-Outside.jpg',
    '/images/cottage-new-1.jpeg',
    '/images/cottage-new-2.jpeg',
  ],
  '/wellness': [
    '/images/spa-hero.webp',
  ],
  '/cafe': [
    '/images/Cafe-img-1.jpg',
    '/images/Cafe-img-2.jpg',
    '/images/Cafe-img-3.jpg',
    '/cafe-logo.jpg',
    '/images/dosa.webp',
    '/images/paneer.webp',
    '/images/pizza.webp',
    '/menu-preview.jpg',
  ],
  '/experiences': [
    '/images/Lakshman_Jhula.jpg',
    '/images/beatles-ashram.jpg',
    '/images/bemonk-cafe.jpg',
    '/images/beatles-cafe.webp',
    '/images/Neergarh-waterfall.jpg',
    '/images/aarti.webp',
    '/images/rafting.jpg',
    '/images/bungee.jpg',
    '/images/Paragliding.jpg',
  ],
};

// Add imports above this line
import SimpleLightbox from 'simplelightbox.js';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';
// Change code below this line
const galleryContainer = document.querySelector('.gallery');

const galleryCardMarkup = galleryItems
  .map(
    item =>
      `<a class="gallery__item" href="${item.original}">
  <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
</a>`,
  )
  .join('');
galleryContainer.insertAdjacentHTML('beforeend', galleryCardMarkup);

let gallery = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

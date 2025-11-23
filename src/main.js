import getImagesByQuery from './js/pixabay-api.js';
import {createGallety, clearGallery, showLoader, hideLoader} from './js/render-functions.js';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import "simplelightbox/dist/simple-lightbox.min.css";

const form = document.querySelector('.form');
const input = document.querySelector('.form-input');

form.addEventListener('submit', event => {
  event.preventDefault();
  clearGallery();
  showLoader();
  const returnPromise = getImagesByQuery(input.value)
    .then(response => {
      if (response.data.hits.length === 0) {
        iziToast.error({
          title: `Sorry, there are no images matching your search query. Please try again!`,
          position: 'topRight',
        });
      } else {
        createGallety(response.data.hits);
      }
    })
    .catch(error => {
      console.error('Error fetching images:', error);
    })
    .finally(() => {
      hideLoader();
    });
  form.reset();
});

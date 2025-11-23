import SimpleLightbox from 'simplelightbox';

function createGallety(images) {
    const galleryContainer = document.querySelector('.gallery');
    const galleryImages = images.map(image => `
        <li class="gallery-item">
            <a class="gallery-link" href="${image.largeImageURL}">
                <img class="gallery-image" src="${image.webformatURL}" alt="${image.tags}" loading="lazy" />
            </a>
            <div class="info">
                <p class="gallery-info-item">Likes <span>${image.likes}</span></p>
                <p class="gallery-info-item">Views <span>${image.views}</span></p>
                <p class="gallery-info-item">Comments <span>${image.comments}</span></p>
                <p class="gallery-info-item">Downloads <span>${image.downloads}</span></p>
            </div>
        </li>`)
        .join('');
    
    galleryContainer.insertAdjacentHTML('beforeend', galleryImages);

    let gallery = new SimpleLightbox('.gallery a', {
        captionsData: 'alt',
        captionDelay: 250,
    });
    gallery.refresh();
}

function clearGallery() {
    const galleryContainer = document.querySelector('.gallery');
    galleryContainer.innerHTML = '';
}

function showLoader() {
    const loader = document.querySelector('.loader');
    loader.classList.remove('visually-hidden');
}

function hideLoader() {
    const loader = document.querySelector('.loader');
    loader.classList.add('visually-hidden');
}

export { createGallety, clearGallery, showLoader, hideLoader };
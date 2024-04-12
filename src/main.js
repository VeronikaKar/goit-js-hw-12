
// Описаний у документації
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";
// Описаний у документації
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";
import { showMessage } from './js/render-functions.js';
import { hiddenLoader,showLoader } from './js/render-functions.js';
import { searchForm } from './js/pixabay-api.js';
import { createGalleryMarkup } from './js/render-functions.js';
import { clearGallery } from './js/render-functions.js';
import errorIcon from './img/bi_x-octagon.svg'

const form = document.querySelector('.form');
const input = document.querySelector('.text-input');
const gallery = document.querySelector('.gallery');
    const lightbox = new SimpleLightbox('.gallery a', 
{ 
    captions: true,
    captionDelay: 250,
    captionsData: 'alt',
    captionPosition: 'bottom', 
   
}); 

form.addEventListener("submit", onSubmit);

function onSubmit(event) {
    event.preventDefault();
    const searchQuery = event.currentTarget.search.value.trim();
    showLoader();
    clearGallery(gallery);
    searchForm(searchQuery)
        .then(res => {console.log(res);
            if (res.hits.length === 0) {
                return showMessage(errorIcon, 'Sorry, there are no images matching your search query. Please try again!', '#ef4040');
            }
                const galleryMarkup = createGalleryMarkup(res.hits);
            gallery.innerHTML = galleryMarkup;
            lightbox.refresh();
            
        })
        .catch(err => {
            console.error('Error:', err); 
        })
        .finally(() => {
            hiddenLoader();
        });
}

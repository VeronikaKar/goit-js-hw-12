
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
import successIcon from './img/gold-svgrepo-com.svg'
import endIcon from './img/hot-air-balloon-svgrepo-com.svg'
const form = document.querySelector('.form');

const gallery = document.querySelector('.gallery');
const loadMoreBtn = document.querySelector(".btn-load-more");
    const lightbox = new SimpleLightbox('.gallery a', 
{ 
    captions: true,
    captionDelay: 250,
    captionsData: 'alt',
    captionPosition: 'bottom', 
   
}); 


form.addEventListener("submit", onSubmit);
loadMoreBtn.addEventListener("click", onClick);

let page = 1;
let searchQuery = null;

function onSubmit(event) {
    event.preventDefault();
    searchQuery = event.currentTarget.search.value.trim();
    showLoader();
    loadMoreBtn.classList.add("visually-hidden");
    clearGallery(gallery);
    page = 1;
   

    searchForm(searchQuery, page)
        .then((res) =>  {
            if (res.totalHits > 0) {
                showMessage
                   (successIcon, `We found ${res.totalHits} images `, '#32cd32');
                
            } 
            if (res.hits.length === 0) {
                return showMessage(errorIcon, 'Sorry,   there are no images matching your search query. Please try again!', '#8b0000');
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
function onClick() {
    page += 1;
    searchForm(searchQuery, page).then((res) => {
        gallery.insertAdjacentHTML("beforeend", createGalleryMarkup(res.hits))
       
    const { height: cardHeight } = document
      .querySelector('.gallery')
      .firstElementChild.getBoundingClientRect();

    window.scrollBy({
      top: cardHeight * 2,
      behavior: 'smooth',
    });
        const lastPage = Math.ceil(res.totalHits / 15);
        
        if (lastPage === page) {
            loadMoreBtn.classList.add("visually-hidden")
            showMessage(endIcon, 'Sorry, there are no images.Thats all.', '#96c8a2');
        }
        
    })
  
}
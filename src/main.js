
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
import errorIcon2 from './img/broadcast-svgrepo-com.svg'
import errorIcon3 from './img/9960966_error_warning_delete_problem_sign_icon.svg'
import errorIcon4 from './img/loss-svgrepo-com.svg'
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

async function onSubmit(event) {
    event.preventDefault();
    searchQuery = event.currentTarget.search.value.trim();
    showLoader();
    loadMoreBtn.classList.add("visually-hidden");
    clearGallery(gallery);
    page = 1;
   
    try {
        const { data: { hits, totalHits } } = await searchForm(searchQuery, page);
        if (totalHits > 0) {
            showMessage
                (successIcon, `We found ${totalHits} images `, '#32cd32');
                
        }
        if (hits.length === 0) {
            return showMessage(errorIcon, 'Sorry,   there are no images matching your search query. Please try again!', '#8b0000');
        }
        const galleryMarkup = createGalleryMarkup(hits);
        gallery.innerHTML = galleryMarkup;
        if (totalHits > 15) {
            console.log(1);
            loadMoreBtn.classList.remove("visually-hidden");
        }
        lightbox.refresh();
            
    }
    catch (error) {
        console.log(error.response.status);
        if (error.response.status === 401) {
            return showMessage(errorIcon2, 'You are not authorized. Please try again!', '#004242');
        }
        if (error.response.status === 404) {
      
            return showMessage(errorIcon3, 'You are not authorized. Please try again!', '#b8b8b8');
        };

        if (error.response.status === 500) {
            return showMessage(errorIcon4, 'Internal server error. Please try again!', '#5f9ea0');
        };
        
    } finally {
        hiddenLoader();
    }
}
    //  searchForm(searchQuery, page)
    //     .then((res) =>  {
    //         if (res.data.totalHits > 0) {
    //             showMessage
    //                (successIcon, `We found ${res.data.totalHits} images `, '#32cd32');
                
    //         } 
    //         if (res.data.hits.length === 0) {
    //             return showMessage(errorIcon, 'Sorry,   there are no images matching your search query. Please try again!', '#8b0000');
    //         }
    //             const galleryMarkup = createGalleryMarkup(res.hits);
    //         gallery.innerHTML = galleryMarkup;
    //         lightbox.refresh();
            
    //     })
    //     .catch(err => {
    //         console.error('Error:', err); 
    //     })
    //     .finally(() => {
    //         hiddenLoader();
    //     });
async function onClick() {
    page += 1;
    try {
        const { data: { hits, totalHits } } = await searchForm(searchQuery, page);
        gallery.insertAdjacentHTML("beforeend", createGalleryMarkup(hits))
        loadMoreBtn.classList.remove("visually-hidden");
        const { height: cardHeight } = document
            .querySelector(".gallery")
            .firstElementChild.getBoundingClientRect();

        window.scrollBy({
            top: cardHeight * 2,
            behavior: "smooth",
        });
        const lastPage = Math.ceil(totalHits / 15);
        
        if (lastPage === page) {
            loadMoreBtn.classList.add("visually-hidden")
            showMessage(endIcon, 'Sorry, there are no images.Thats all.', '#96c8a2');
        }
    
    } catch (error) {
        console.log(error.response.status);
    } finally {
        hiddenLoader();
    }
}
        
    // }
    // searchForm(searchQuery, page).then((res) => {
    //     gallery.insertAdjacentHTML("beforeend", createGalleryMarkup(res.hits))
    //     loadMoreBtn.classList.remove("visually-hidden");
    // const { height: cardHeight } = document
    //   .querySelector('.gallery')
    //   .firstElementChild.getBoundingClientRect();

    // window.scrollBy({
    //   top: cardHeight * 2,
    //   behavior: 'smooth',
    // });
    //     const lastPage = Math.ceil(res.totalHits / 15);
        
    //     if (lastPage === page) {
    //         loadMoreBtn.classList.add("visually-hidden")
    //         showMessage(endIcon, 'Sorry, there are no images.Thats all.', '#96c8a2');
    //     
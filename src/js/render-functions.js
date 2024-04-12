
// Описаний у документації
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";

const loader = document.querySelector('.loader');
  
export function showMessage(icon, message, bgr) {
  iziToast.show({
    iconUrl:icon,
    titleColor: 'White',
    titleSize: '24px',
    message,
    messageColor: 'White',
    messageSize: '16px',
    backgroundColor: bgr,
    position: 'topRight',
    timeout: 3000,
});
}

export function showLoader() {

  loader.classList.remove("visually-hidden");
}

export function hiddenLoader() { 

  loader.classList.add("visually-hidden");
}
export function clearGallery(ref) {
  
  ref.innerHTML = '';
}
export function createGalleryMarkup(array) {
  return array
    .map(
      (image) => `<li class="gallery-item">
    <a href="${image.largeImageURL}" data-lightbox="gallery-link">
      <img class="gallery-image" src="${image.webformatURL}" alt="${image.tags}">
    </a>
    <div class="gallery-info">
      <p><b>Likes:</b> ${image.likes}</p>
      <p><b>Views:</b> ${image.views}</p>
      <p><b>Comments:</b> ${image.comments}</p>
      <p><b>Downloads:</b> ${image.downloads}</p>
    </div></li>
  `
    )
    .join('');
} 

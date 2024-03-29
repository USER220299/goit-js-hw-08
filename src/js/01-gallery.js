// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

console.log(galleryItems);
const gallery = document.querySelector('.gallery');
const galleryImage = createElementOfGallery(galleryItems);
gallery.style.listStyle = "none" ;
gallery.insertAdjacentHTML('afterbegin', galleryImage);
console.log(galleryItems);

let lightbox = new SimpleLightbox('.gallery a',  {
    captionsData: 'alt',
      captionDelay: 250,
      close:false,
    });
   


function createElementOfGallery(items) {
  return items.map(({ original, preview, description }) => {
    return `<li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
   </a>
</li>`
  }).join('');

};

function onImageClick(event) {
  event.preventDefault();

  if (!event.target.classList.contains('gallery__image')) {
    return;
  }
  else {
    return lightbox;

  };
   
 
};
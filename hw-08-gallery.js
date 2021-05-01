import galleryItems from './gallery-items.js';

const galleryContainer = document.querySelector('.js-gallery');
const modalContainer = document.querySelector('.js-lightbox');
const cardsGallery = createGalleryCards(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', cardsGallery);

galleryContainer.addEventListener('click', onGalleryContainerClick);
modalContainer.addEventListener('click', onModalContainerClick);



function createGalleryCards(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
      <li class="gallery__item">
      <a
      class="gallery__link"
      href="#"
    >
        <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
        />
      </a>
    </li>    
    `;
    })
    .join('');
}


function onGalleryContainerClick(evt) {
    const isGalleryLinkEl = evt.target.classList.contains('gallery__image');
  
    if (!isGalleryLinkEl) {
      return;
    }
    
    const galleryLink = evt.target.dataset.source;

    console.log(galleryLink);

    const isOpenModal = document.querySelector('div.lightbox');
    addActiveCardClass(isOpenModal);
    setGalleryLink(galleryLink);
}

function setGalleryLink(link) {
    document.querySelector('.lightbox__image').src = link;
  }


function addActiveCardClass(card) {
    card.classList.add('is-open');
}

function onModalContainerClick (evt) {
    const isButtonEl = evt.target.classList.contains('lightbox__button');
  
    if (!isButtonEl) {
      return;
    }

    const isRemoveModal = document.querySelector('div.lightbox.is-open');
    removeActiveCardClass(isRemoveModal);
}

function removeActiveCardClass(cardRemove) {
    cardRemove.classList.remove('is-open');
    document.querySelector('.lightbox__image').src = "";
}



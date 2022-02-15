const editButton = document.querySelector('.profile__edit-button');
const popupEditProfile = document.querySelector('.popup_edit-profile');
const closeButtonEditProfile = popupEditProfile.querySelector('.popup__close-button');
const popupAddPlace = document.querySelector('.popup_add-place');
const popupView = document.querySelector('.popup_view')
const closeButtonView = popupView.querySelector('.popup__close-button')
const closeButtonAddPlace = popupAddPlace.querySelector('.popup__close-button');
const formElement = popupEditProfile.querySelector('.form')
const formAddPlace = popupAddPlace.querySelector('.form');
const nameInput = document.querySelector('.form__item_el_name');
const professionInput = document.querySelector('.form__item_el_profession');
const nameAddPlace = document.querySelector('.form__item_place_name');
const placeLink = document.querySelector('.form__item_place_link');
const profileName = document.querySelector('.profile__name');
const profileProfession = document.querySelector('.profile__profession');
const places = document.querySelector('.places');
const addButton = document.querySelector('.profile__add-button');
const popupImage = popupView.querySelector('.popup__image');
const popupImageName = popupView.querySelector('.popup__image-name');
function openPopup(popupElement) {
    popupElement.classList.add('popup_opened');
}

function closePopup(popupElement) {
    popupElement.classList.remove('popup_opened')
}

function openPopupView(evt) {
    popupImage.src = evt.target.src;
    popupImageName.textContent = evt.target.alt;
    popupImage.alt = evt.target.alt;
    openPopup(popupView);
}

/*function ESCclose(evt) {
    if (evt.keyCode == 27) {
        closePopup();
          }
  }*/
//document.addEventListener('keydown',  closePopup)
function SubmitHandlerForm(evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileProfession.textContent = professionInput.value;
    closePopup(popupEditProfile);
}
function AddPlaceSubmitHandlerForm(evt) {
    evt.preventDefault();
    addPlace(
        nameAddPlace.value,
        placeLink.value,
    )
    formAddPlace.reset();
    closePopup(popupAddPlace);

}
editButton.addEventListener('click', function () { openPopup(popupEditProfile); });
closeButtonEditProfile.addEventListener('click', function () { closePopup(popupEditProfile); });
addButton.addEventListener('click', function () { openPopup(popupAddPlace); });
closeButtonAddPlace.addEventListener('click', function () { closePopup(popupAddPlace); });
closeButtonView.addEventListener('click', function () { closePopup(popupView); });
formElement.addEventListener('submit', SubmitHandlerForm);
formAddPlace.addEventListener('submit', AddPlaceSubmitHandlerForm)

function clickLike(evt) {
    evt.target.classList.toggle('place__like-button_active');
}
function removeCard(evt) {
    evt.target.closest('.place').remove();
}

function createPlace(name, link) {
    const placeTemplate = document.querySelector('#place-template').content;
    const placeElement = placeTemplate.querySelector('.place').cloneNode(true);
    const image = placeElement.querySelector('.place__image');
    image.src = link;
    image.alt = name;
    image.addEventListener('click', openPopupView);
    placeElement.querySelector('.place__name').textContent = name;
    const placeLikeButton = placeElement.querySelector('.place__like-button');
    placeLikeButton.addEventListener('click', clickLike);
    const placeRemoveButton = placeElement.querySelector('.place__remove-button');
    placeRemoveButton.addEventListener('click', removeCard);
    return placeElement;
}

function addPlace(name, link) {
    places.prepend(createPlace(name, link))
}
const initialCards = [
    {
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
        name: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
        name: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
        name: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
];
initialCards.forEach(function (item) { addPlace(item.name, item.link) });
//document.addEventListener('keydown', function () { closePopup(); })
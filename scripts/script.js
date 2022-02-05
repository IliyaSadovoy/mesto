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
    formElement.reset();
    formAddPlace.reset();
    popupElement.classList.add('popup_opened');
}

function closePopup(popupElement) {
    popupElement.classList.remove('popup_opened')
}

function openPopupView(evt) {
    popupImage.src = evt.target.src;
    popupImageName.textContent = evt.target.nextSibling.querySelector('.place__name').textContent;
    popupImage.alt = 'фото места';
    openPopup(popupView);
}

function SubmitHandlerForm(evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileProfession.textContent = professionInput.value;
    closePopup(popupEditProfile);
}
function AddPlaceSubmitHandlerForm(evt) {
    evt.preventDefault();
    addPlace({
        name: nameAddPlace.value,
        link: placeLink.value,
    })
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
/*function addPlace(args) {
    const place = document.createElement('div');
    place.classList.add('place');
    const placeRemoveButton = document.createElement('button');
    placeRemoveButton.classList.add('place__remove-button')
    placeRemoveButton.type = 'button';
    placeRemoveButton.addEventListener('click', removeCard);
    const placeImage = document.createElement('img');
    placeImage.classList.add('place__image');
    placeImage.src = args.link;
    placeImage.alt = 'фото места';
    placeImage.addEventListener('click', openPopupView);
    const placeDescription = document.createElement('div');
    placeDescription.classList.add('place__description');
    const placeName = document.createElement('h2');
    placeName.classList.add('place__name');
    const placeLikeButton = document.createElement('button');
    placeLikeButton.classList.add('place__like-button');
    placeLikeButton.type = 'button';
    placeLikeButton.addEventListener('click', clickLike);
    const placeNameText = document.createTextNode(args.name);
    place.append(placeRemoveButton, placeImage, placeDescription);
    placeDescription.append(placeName, placeLikeButton);
    placeName.append(placeNameText);
    places.prepend(place);
}*/
function addPlace() {
    const placeTemplate = document.querySelector('#place-template').content;
    const placeElement = placeTemplate.querySelector('.place').cloneNode(true);
  
    placeElement.querySelector('.place__image').src = 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg';
    placeElement.querySelector('.place__name').textContent = 'Архыз';
    places.append(placeElement);
  }
  addPlace()
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
//initialCards.forEach(addPlace);
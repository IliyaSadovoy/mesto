let editButton = document.querySelector('.profile__edit-button');
let popupEditProfile = document.querySelector('.popup_edit-profile');
let closeButtonEditProfile = popupEditProfile.querySelector('.popup__close-button');
let popupAddPlace = document.querySelector('.popup_add-place');
let popupView = document.querySelector('.popup_view')
let closeButtonView = popupView.querySelector('.popup__close-button')
let closeButtonAddPlace = popupAddPlace.querySelector('.popup__close-button');
let formElement = popupEditProfile.querySelector('.form')
let formAddPlace = popupAddPlace.querySelector('.form');
let nameInput = document.querySelector('.form__item_el_name');
let professionInput = document.querySelector('.form__item_el_profession');
let nameAddPlace = document.querySelector('.form__item_place_name');
let placeLink = document.querySelector('.form__item_place_link');
let profileName = document.querySelector('.profile__name');
let profileProfession = document.querySelector('.profile__profession');
let places = document.querySelector('.places');
let addButton = document.querySelector('.profile__add-button');
let popupImage = popupView.querySelector('.popup__image');
let popupImageName = popupView.querySelector('.popup__image-name');
function openPopup() {
    nameInput.value = profileName.textContent;
    professionInput.value = profileProfession.textContent;
    popupEditProfile.classList.add('popup_opened');
}

function closePopupEditProfile() {
    popupEditProfile.classList.remove('popup_opened')
}

function openPopupAddPlace() {
    popupAddPlace.classList.add('popup_opened');
}

function closePopupAddPlace() {
    popupAddPlace.classList.remove('popup_opened');
}

function openPopupView(evt) {
    popupView.classList.add('popup_opened');
    popupImage.src = evt.target.src;
    popupImageName.textContent = evt.target.nextSibling.querySelector('.place__name').textContent;

}

function closePopupView() {
    popupView.classList.remove('popup_opened');
}
function formSubmitHandler(evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileProfession.textContent = professionInput.value;
    popupEditProfile.classList.remove('popup_opened')
}
function formAddPlaceSubmitHandler(evt) {
    evt.preventDefault();
    addPlace({
        name: nameAddPlace.value,
        link: placeLink.value,
    })
    popupAddPlace.classList.remove('popup_opened')
}
editButton.addEventListener('click', openPopup);
closeButtonEditProfile.addEventListener('click', closePopupEditProfile);
addButton.addEventListener('click', openPopupAddPlace);
closeButtonAddPlace.addEventListener('click', closePopupAddPlace);
closeButtonView.addEventListener('click', closePopupView);
formElement.addEventListener('submit', formSubmitHandler);
formAddPlace.addEventListener('submit', formAddPlaceSubmitHandler)

function clickLike(evt) {
    evt.target.classList.toggle('place__like-button_active');
}
function removeCard(evt) {
    evt.target.closest('.place').remove();
}
function addPlace(args) {
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
initialCards.forEach(addPlace);
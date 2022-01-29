let editButton = document.querySelector('.profile__edit-button');
let closeButton = document.querySelector('.popup__close-button');
let popup = document.querySelector('.popup');
let formElement = document.querySelector('.form')
let nameInput = document.querySelector('.form__item_el_name')
let professionInput = document.querySelector('.form__item_el_profession')
let profileName = document.querySelector('.profile__name');
let profileProfession = document.querySelector('.profile__profession')

function openPopup() {
    nameInput.value=profileName.textContent;
    professionInput.value=profileProfession.textContent;
    popup.classList.add('popup_opened');
}

function closePopup() {
    popup.classList.remove('popup_opened')
}

function formSubmitHandler(evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileProfession.textContent = professionInput.value;
    popup.classList.remove('popup_opened')
}
editButton.addEventListener('click', openPopup);
closeButton.addEventListener('click', closePopup);
formElement.addEventListener('submit', formSubmitHandler);
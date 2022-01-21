let editButton = document.querySelector('.profile__edit-button');
let closeButton = document.querySelector('.popup__close-button');
let popup = document.querySelector('.popup');
function openPopup() {
    popup.classList.add('popup_opened');
}
editButton.addEventListener('click', openPopup);
function closePopup() {
    popup.classList.remove('popup_opened')
}
closeButton.addEventListener('click', closePopup);
let formElement = document.querySelector('.form')
let nameInput = document.querySelector('.form__item_el_name')
let professionInput = document.querySelector('.form__item_el_profession')
function formSubmitHandler(evt) {
    evt.preventDefault();
    nameInput = nameInput.value;
    professionInput = professionInput.value;
    let profileName = document.querySelector('.profile__name');
    let profileProfession = document.querySelector('.profile__profession')
    profileName.textContent = nameInput;
    profileProfession.textContent = professionInput;
    popup.classList.remove('popup_opened')
}
formElement.addEventListener('submit', formSubmitHandler);
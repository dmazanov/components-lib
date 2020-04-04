'use strict';

var ESC_KEYCODE = 27;
var ENTER_KEYCODE = 13;

var modal = document.querySelector('.modal');
var modalOpenButton = document.querySelector('.modal-open');
var modalCloseButton = modal.querySelector('.modal-close');

var onmodalEscPress = function(evt) {
    if (evt.keyCode === ESC_KEYCODE) {
        closemodal();
    }
};

var openmodal = function() {
    modal.classList.remove('hidden');
    document.addEventListener('keydown', onmodalEscPress);
};

var closemodal = function() {
    modal.classList.add('hidden');
    document.removeEventListener('keydown', onmodalEscPress);
};

modalOpenButton.addEventListener('click', function(){
    openmodal();
});

modalOpenButton.addEventListener('keydown', function(evt) {
    // Open modal on Enter
    if (evt.keyCode === ENTER_KEYCODE) {
        openmodal();
    }
});

modalCloseButton.addEventListener('click', function(){
    closemodal();
});

modalCloseButton.addEventListener('keydown', function(evt) {
    //close modal when click on Enter
    if (evt.keyCode === ENTER_KEYCODE) {
        closemodal();
    }
});
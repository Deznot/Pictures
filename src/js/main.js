import modals from "./modules/modals";
import sliders from './modules/sliders';
import forms from "./modules/forms";
import checkTextInputs from './modules/checkTextInputs';

window.addEventListener('DOMContentLoaded', ()=>{
    'use strict';

    modals();
    sliders('.main-slider-item','vertical');
    sliders('.feedback-slider-item','.horizontal','.main-prev-btn','.main-next-btn');
    forms();
    
    checkTextInputs('[name="name"]');
    checkTextInputs('[name="message"]');

});
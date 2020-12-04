import modals from "./modules/modals";
import sliders from './modules/sliders';
import forms from "./modules/forms";
import checkTextInputs from './modules/checkTextInputs';
import mask from './modules/mask';
import showMoreStyles from './modules/showMoreStyles';
import calc from './modules/calc';
import filter from './modules/filter';
import pictureSize from './modules/pictureSize';

window.addEventListener('DOMContentLoaded', ()=>{
    'use strict';

    let resSum = {};

    modals();
    sliders('.main-slider-item','vertical');
    sliders('.feedback-slider-item','.horizontal','.main-prev-btn','.main-next-btn');
    forms(resSum);
    mask('[name = "phone"]');
    checkTextInputs('[name="name"]');
    checkTextInputs('[name="message"]');
    showMoreStyles('.button-styles','#styles .row');
    calc('#size','#material','#options','.promocode','.calc-price',resSum);
    filter('.portfolio-menu','.portfolio-wrapper','.portfolio-no');
    pictureSize('.sizes-block');
});
import modals from "./modules/modals";
import sliders from './modules/sliders';
import forms from "./modules/forms";
import checkTextInputs from './modules/checkTextInputs';
import mask from './modules/mask';
import showMoreStyles from './modules/showMoreStyles';
import calc from './modules/calc';
import filter from './modules/filter';
import pictureSize from './modules/pictureSize';
import accordion from './modules/accordion';
import burger from './modules/burger';
import scrolling from './modules/scrolling';
import drag from "./modules/drag";

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
    accordion('.accordion-heading');
    burger('.burger','.burger-menu');
    scrolling('.pageup');
    drag();

    
});
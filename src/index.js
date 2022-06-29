import './style.css';
import { method } from "lodash";
import { display } from "./modules/display.js";

display();
const popUpbtn = document.querySelectorAll('#comment-btn');
const popUpWindow = document.querySelector('.popup-meals-content');
const cardsContainer = document.querySelector('.grid');


// popUpbtn.forEach.addEventListener('click', () => {
//     // popUpWindow.style.display ='flex';
//     console.log('hii');

cardsContainer.addEventListener('click', (e) => {
    if(e.target.classList.contains('comments-image-btn')) {
        popUpWindow.classList.add('show');
        popUpWindow.classList.remove('hide');
    }
})

const closeBtn = document.querySelector('.recipe-close-btn');
closeBtn.addEventListener('click', (e) => {
    popUpWindow.classList.remove('show');
    popUpWindow.classList.add('hide');
})



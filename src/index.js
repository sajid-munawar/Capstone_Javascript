import './style.css';
import { method } from "lodash";
import { display } from "./modules/display.js";
// import {involvement} from './modules/involvement.js';
import {createLike} from './modules/createLikes.js'
import {displayPopup} from "./modules/popup.js";

display();

//     .then(data => {
//     console.log(data)
// })

// const hearts = document.querySelectorAll('.heart')
// console.log(hearts);

// let i = 0;

// setTimeout(function () {
//     console.log("Sup!");
// }, 2000);//wait 2 seconds



// createLike();
// involvement();



// const popUpbtn = document.querySelectorAll('#comment-btn');
const popUpWindow = document.querySelector('.popup-meals-content');
const cardsContainer = document.querySelectorAll('.grid');


// popUpbtn.forEach.addEventListener('click', () => {
//     // popUpWindow.style.display ='flex';
//     console.log('hii');
// document.querySelectorAll('.comments-image-btn').forEach((button, index) => {
//     button.addEventListener('click', (e) => {
//         popUpWindow.classList.add('show');
//         popUpWindow.classList.remove('hide');
//         displayPopup(index);
//     });
// });

// cardsContainer.addEventListener('click', (e) => {
//     if(e.target.classList.contains('comments-image-btn')) {
//         popUpWindow.classList.add('show');
//         popUpWindow.classList.remove('hide');
//         displayPopup(e.target);
//     }
// })


const closeBtn = document.querySelector('.recipe-close-btn');
console.log(closeBtn);
closeBtn.addEventListener('click', (e) => {
    console.log('ddfd');
    popUpWindow.classList.remove('show');
    popUpWindow.classList.add('hide');
})

// const closeBtn = document.querySelector('.recipe-close-btn');
//   closeBtn.addEventListener('click', () => {
//     modal.classList.toggle('hide');
//   });


// console.log(popupDetail);
// popupDetail.addEventListener('click', (e) => {
//     if (e.target.classList.contains('fa-times')){
//         const modal = e.target.parentElement.parentElement.parentElement;
//         console.log(modal);
//     }
// })
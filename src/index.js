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


// const closeBtn = document.querySelector('.recipe-close-btn');
// console.log(closeBtn);
// closeBtn.addEventListener('click', (e) => {
//     console.log('ddfd');
//     popUpWindow.classList.remove('show');
//     popUpWindow.classList.add('hide');
// })

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

// Comments - involvement API 
const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/SiBl3uovCC4H9TFx5ybt/comments';



const postComment = async (id, user, comment)  => {
    const response = await fetch(url, {
        method: 'POST', 
        body: JSON.stringify({
            item_id: id,
            username: user,
            comment: comment,
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    const data = await response.text();
    console.log(data)
}

postComment(52772, "Basir", "Amazing");


const getComment = async(id) => {
    const response = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/SiBl3uovCC4H9TFx5ybt/comments?item_id=${id}`)
    const data = response.json();
    console.log(data);
}

const araay = getComment(52772);
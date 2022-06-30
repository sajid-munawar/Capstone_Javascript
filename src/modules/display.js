import { createLike, getLikes } from "./createLikes.js";
import {displayPopup} from "./popup.js";
const url = "https://themealdb.com/api/json/v1/1/categories.php";


const popUpWindow = document.querySelector('.popup-meals-content');
const cardsContainer = document.querySelectorAll('.grid');

const display = async () => {
    const display = document.querySelector('.display')
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    data.categories.forEach((element) => {
        display.innerHTML += `
        <div class='wrapper'>
        <img class="food-image" src="${element.strCategoryThumb}" alt="">
        <div class="image-comment">
            <h2>${element.strCategory}</h2>
            <i style="font-size:24px" class="fa heart" id=${element.idCategory}>&#xf004;</i>
            </div>
            <div class="likes-count"><span></span> likes </div>
            <button type="button" class="comments-image-btn" id="comment-btn"> Comments</button>
        </div> `

        document.querySelectorAll('.comments-image-btn').forEach((button, index) => {
            button.addEventListener('click', (e) => {
                let item = data.categories[index];
                popUpWindow.classList.add('show');
                popUpWindow.classList.remove('hide');
                console.log(item.idCategory)
                // displayPopup(item.idCategory);
                const display = document.querySelector('.popup-meals-content');
                 display.innerHTML = `
                <div class='meal-window'>
                        <button type="button" class="recipe-close-btn" id="close-btn">
                        <i class="fa fa-times"></i>
                    </button>
                    <div class="meal-image">
                    <img src="${item.strCategoryThumb}" alt="images">
                </div>
                    <h2 class="meals-name">${item.strCategory}</h2>
                    <p>"${item.strCategoryDescription}</p>
                    <h3 class="comments-count">Comments (<span>0</span>)</h3>
                    <div class="get-comment"></div>

                
                    <form class="comment-form">
                    <h3 class="add-comment">Add a Comment</h3>
                    <input class="input-name" type="text" name="name" placeholder="enter your name..">
                    <input class="input-text" type="text" name="text" placeholder="enter your message">
                    <button class="btn-comment">Comment</button>
                </form>
            </div> `;
             });
        });
        
    });

    const hearts = document.querySelectorAll('.heart');
    // console.log(hearts);
    hearts.forEach(heart => {
        heart.addEventListener('click', () => {
            let span = heart.parentElement.nextElementSibling.firstElementChild
            let i = span.textContent
            span.textContent = +i + 1
            setTimeout(createLike(heart.id), 10000);
        })
        //     console.log(heart.id);

    });

    hearts.forEach(heart => {
        let span = heart.parentElement.nextElementSibling.firstElementChild
        getLikes().then(data => {
            data.forEach(item => {
                if (item.item_id === heart.id) {
                    span.textContent = item.likes
                }
            })
            // console.log(data[0].likes);
            // console.log(data[0].item_id)
        })

    })


    return data;
}

export { display }
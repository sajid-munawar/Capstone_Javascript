import { createLike, getLikes } from './createLikes.js';
import { postComment, getComment } from './comments.js';
import { commentCounter, itemCounter } from './ItemCounter.js';

const url = 'https://themealdb.com/api/json/v1/1/categories.php';

// display the content on the UI

const popUpWindow = document.querySelector('.popup-meals-content');
const display = async () => {
  const display = document.querySelector('.display');
  const itemContainer = document.getElementById('items');
  const response = await fetch(url);
  const data = await response.json();
  const items = itemCounter(data.categories);
  itemContainer.textContent = items;
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
        </div> `;

    // Display the popup for comments and description
    document.querySelectorAll('.comments-image-btn').forEach((button, index) => {
      button.addEventListener('click', () => {
        const item = data.categories[index];
        popUpWindow.classList.add('show');
        popUpWindow.classList.remove('hide');
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
                    <h3 class="comments-count">Comments (<span id="totalComment">0</span>)</h3>

                    <div class="get-comment">

                    </div>

                
                    <form class="comment-form" id="${item.idCategory}">
                    <h3 class="add-comment">Add a Comment</h3>
                    <input class="input-name" type="text" name="name" placeholder="enter your name..">
                    <input class="input-text" type="text" name="text" placeholder="enter your message">
                    <button type='submit' class="btn-comment">Comment</button>
                </form>
            </div> `;
      });
    });
  });

  // Add comment about the meal
  const commentButton = document.querySelectorAll('#comment-btn');
  commentButton.forEach((btn, index) => {
    btn.addEventListener('click', () => {
      // To close popup
      const closeBtn = document.querySelector('.recipe-close-btn');
      closeBtn.addEventListener('click', () => {
        popUpWindow.classList.remove('show');
        popUpWindow.classList.add('hide');
      });
      // To add comment to API and UI
      const form = document.querySelector('.comment-form');
      const commentContainer = document.querySelector('.get-comment');
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        postComment(form.id, form.name.value, form.text.value);
        commentContainer.innerHTML += `<div class="signle-comment"> <div class="date">Now</div>
            <div class='username'>${form.name.value}</div>
            <div class='comment'>${form.text.value}</div></div>`;
        form.reset();
      });
      // Generate the templete for Comment

      const generateComment = (i) => `<div class="signle-comment"> <div class="date">${i.creation_date}</div>
          <div class='username'>${i.username}</div>
          <div class='comment'>${i.comment}</div></div>`;

      // Get comments from the API
      getComment(index + 1).then((data) => {
        const numComments = commentCounter(data);
        const commentNumContainer = document.getElementById('totalComment');
        if (data.length > 0) {
          commentNumContainer.textContent = numComments;
          commentContainer.innerHTML += data.map((i) => generateComment(i)).join('');
        }
      });
    });
  });

  // Add like on click of heart icon

  const hearts = document.querySelectorAll('.heart');
  hearts.forEach((heart) => {
    heart.addEventListener('click', () => {
      const span = heart.parentElement.nextElementSibling.firstElementChild;
      const i = span.textContent;
      span.textContent = +i + 1;
      setTimeout(createLike(heart.id), 10000);
    });
  });

  hearts.forEach((heart) => {
    const span = heart.parentElement.nextElementSibling.firstElementChild;
    getLikes().then((data) => {
      data.forEach((item) => {
        if (item.item_id === heart.id) {
          span.textContent = item.likes;
        }
      });
    });
  });

  return data;
};

export default display;
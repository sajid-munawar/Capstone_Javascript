export const displayPopup = async (category_id) => {
  const display = document.querySelector('.popup-meals-content');
  const response = await fetch(`https://themealdb.com/api/json/v1/1/lookup.php?i=${category_id}`);
  const data = await response.json();
  display.innerHTML = `
         <div class='meal-window'>
                <button type="button" class="recipe-close-btn">
                <i class="fa fa-times"></i>
            </button>
            <div class="meal-image">
            <img src="${data.strCategoryThumb}" alt="images">
         </div>
            <h2 class="meals-name">${data.strCategory}</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                Harum earum magnam illo maxime quia</p>
            <h3 class="comments-count">Comments (<span>0</span>)</h3>
            <div class="get-comment"></div>

        
            <form class="comment-form">
            <h3 class="add-comment">Add a Comment</h3>
            <input class="input-name" type="text" name="name" placeholder="enter your name..">
            <input class="input-text" type="text" name="text" placeholder="enter your message">
            <button class="btn-comment">Comment</button>
        </form>
     </div> `;
};

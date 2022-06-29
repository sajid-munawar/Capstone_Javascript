const url = "https://themealdb.com/api/json/v1/1/categories.php";

const display = async () => {
    const display=document.querySelector('.display')
    const response = await fetch(url);
    const data = await response.json();
    // console.log(data);
    data.categories.forEach(element => {
        display.innerHTML += `
        <div class='wrapper'>
        <img class="food-image" src="${element.strCategoryThumb}" alt="">
        <div class="image-comment">
            <h2>${element.strCategory}</h2>
            <i style="font-size:24px" class="fa">&#xf004;</i>
            </div>
            <div class="likes-count"><span>0</span> likes </div>
            <button type="button" class="comments-image-btn" id="comment-btn"> Comments</button>
        </div>
       
        `
    }); 
    
}

export {display}
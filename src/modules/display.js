import { createLike, getLikes } from "./createLikes.js";
const url = "https://themealdb.com/api/json/v1/1/categories.php";



const display = async () => {
    const display = document.querySelector('.display')
    const response = await fetch(url);
    const data = await response.json();
    // console.log(data);
    data.categories.forEach(element => {
        display.innerHTML += `
        <div class='wrapper'>
        <img class="food-image" src="${element.strCategoryThumb}" alt="">
        <div class="image-comment">
            <h2>${element.strCategory}</h2>
            <i style="font-size:24px" class="fa heart" id=${element.idCategory}>&#xf004;</i>
            </div>
            <div class="likes-count"><span></span> likes </div>
            <button type="button" class="comments-image-btn" id="comment-btn"> Comments</button>
        </div>
       
        `
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
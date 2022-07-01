
// Comments - involvement API 
const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/SiBl3uovCC4H9TFx5ybt/comments';



export const postComment = async (id, user, comment) => {
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
    // console.log(data)
}

// postComment(72, "Basir", "1");


export const getComment = async (id) => {
    const response = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/SiBl3uovCC4H9TFx5ybt/comments?item_id=${id}`)
    const data = await response.json();
    if(data.error) {
        console.log('hii am an error');
        return null        
    } else {        
        return data
    }
}

// getComment(8).then(data=>console.log(data))
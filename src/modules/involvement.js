const url ='https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';

const uniqueIdentifierID='Htcy3yUuFN8fGMfo5Ezz'

const involvement = async () => {
    console.log('AAA')
    const response = await fetch(`${url}/${uniqueIdentifierID}/`);
    const data = await response.json();
    console.log(data);
    console.log('AAA')
}

export { involvement }


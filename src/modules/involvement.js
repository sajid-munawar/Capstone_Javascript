const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';

// const uniqueIdentifierID='Htcy3yUuFN8fGMfo5Ezz'
// Vdz1CdX8XAXw5ZZiht1J

const involvement = async () => {
  console.log('AAA');
  const response = await fetch(url, {
    method: 'POST',
    body: JSON.stringify({}),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
      Accept: 'application/json',
    },
  });
  const data = await response.text();
  console.log(data);
};

export { involvement };

const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';

const involvement = async () => {
  const response = await fetch(url, {
    method: 'POST',
    body: JSON.stringify({}),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
      Accept: 'application/json',
    },
  });
  const data = await response.text();
};

export { involvement };

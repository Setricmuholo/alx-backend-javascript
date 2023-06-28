getResponseFromAPI()
  .then(data => {
    console.log('API response:', data);
  })
  .catch(error => {
    console.error('Error:', error);
  });


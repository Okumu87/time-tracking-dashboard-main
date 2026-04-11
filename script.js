// Fetch data from data.json
fetch('data.json')
  .then(response => response.json())
  .then(data => {
    // Data is now available as an array of activity objects
    console.log('Data loaded:', data);
    // You can now use this data to populate the cards
    // For example: populateCards(data);
  })
  .catch(error => console.error('Error loading data:', error));
// Fetch data from data.json
fetch('data.json')
  .then(response => response.json())
  .then(data => {
    // Data is now available as an array of activity objects
    console.log('Data loaded:', data);
    // Store the data globally so we can use it later
    let activityData = data;

    // Get all the navigation buttons
    const navButtons = document.querySelectorAll('.nav-btn');

    // Add click event to each button
    navButtons.forEach(button => {
      button.addEventListener('click', (event) => {
        // Get which button was clicked (daily, weekly, or monthly)
        const timeframe = event.target.textContent.toLowerCase();
        console.log('Button clicked:', timeframe);
      });
    });
  })
  .catch(error => console.error('Error loading data:', error));
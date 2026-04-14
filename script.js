// Global variable to store the fetched data
let activityData = [];

// Fetch data from data.json
fetch('data.json')
  .then(response => response.json())
  .then(data => {
    activityData = data;
    console.log('Data loaded:', data);
    // Initialize with weekly data (default)
    updateCards('weekly');
  })
  .catch(error => console.error('Error loading data:', error));

// Select all navigation buttons
const navButtons = document.querySelectorAll('.nav-btn');

// Add event listeners to each button
navButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Remove active class from all buttons
    navButtons.forEach(btn => btn.classList.remove('active'));
    // Add active class to clicked button
    button.classList.add('active');
    
    // Get the timeframe from button text (Daily, Weekly, Monthly)
    const timeframe = button.textContent.toLowerCase();
    
    // Update cards with selected timeframe
    updateCards(timeframe);
  });
});

// Function to update all activity cards with data for the given timeframe
function updateCards(timeframe) {
  // Loop through each activity in the data
  activityData.forEach(activity => {
    // Find the corresponding card in the HTML by title
    const cards = document.querySelectorAll('.activity');
    cards.forEach(card => {
      const titleElement = card.querySelector('.activity__title');
      if (titleElement.textContent === activity.title) {
        // Update current hours
        const currentElement = card.querySelector('.activity__current');
        currentElement.textContent = `${activity.timeframes[timeframe].current}hrs`;
        
        // Update previous hours with appropriate label
        const previousElement = card.querySelector('.activity__previous');
        const previousHours = activity.timeframes[timeframe].previous;
        let label = 'Previous';
        if (timeframe === 'daily') label = 'Yesterday';
        else if (timeframe === 'weekly') label = 'Last Week';
        else if (timeframe === 'monthly') label = 'Last Month';
        previousElement.textContent = `${label} - ${previousHours}hrs`;
      }
    });
  });
}
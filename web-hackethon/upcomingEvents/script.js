// Sample data for demonstration
const events = [
    { id: 1, name: 'Seminar on Entrepreneurship', date: '2024-04-10', location: 'Auditorium A' },
    { id: 2, name: 'Cultural Night', date: '2024-04-15', location: 'Open Air Theatre' },
    { id: 3, name: 'Basketball Tournament', date: '2024-04-20', location: 'Sports Complex' }
  ];
  
  // Function to populate the event list
  function populateEventList() {
    const eventListElement = document.getElementById('eventList');
    eventListElement.innerHTML = '<h2>Upcoming Events</h2>';
    events.forEach(event => {
      const eventItem = document.createElement('div');
      eventItem.classList.add('event-item');
      eventItem.innerHTML = `
        <h3>${event.name}</h3>
        <p><strong>Date:</strong> ${event.date}</p>
        <p><strong>Location:</strong> ${event.location}</p>
        <button onclick="registerForEvent(${event.id})">Register</button>
      `;
      eventListElement.appendChild(eventItem);
    });
  }
  
  // Function to simulate event registration
  function registerForEvent(eventId) {
    alert(`You have successfully registered for event with ID ${eventId}`);
  }
  
  // Populate event list on page load
  window.onload = populateEventList;
  
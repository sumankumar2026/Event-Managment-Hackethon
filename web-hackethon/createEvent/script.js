document.getElementById('createForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const eventName = document.getElementById('eventName').value;
    const eventDate = document.getElementById('eventDate').value;
    const eventLocation = document.getElementById('eventLocation').value;
    
    // Create a new event element
    const eventElement = document.createElement('div');
    eventElement.classList.add('event');
    eventElement.innerHTML = `
        <h3>${eventName}</h3>
        <p><strong>Date:</strong> ${eventDate}</p>
        <p><strong>Location:</strong> ${eventLocation}</p>
    `;
    
    // Append the event element to the container
    const container = document.querySelector('.container');
    container.appendChild(eventElement);

    // Clear the form fields
    document.getElementById('eventName').value = '';
    document.getElementById('eventDate').value = '';
    document.getElementById('eventLocation').value = '';

    alert('Event created successfully!');
});

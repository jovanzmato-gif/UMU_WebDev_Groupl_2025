// Wait for page to load
document.addEventListener('DOMContentLoaded', function() {
  
  // 1. Handle Route Form
  const routeForm = document.getElementById('routeForm');
  const routeResult = document.getElementById('routeResult');
  
  routeForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Stop form from refreshing page
    
    const start = document.getElementById('startPoint').value;
    const end = document.getElementById('endPoint').value;
    
    if (!start) {
      showMessage('Please enter a starting location.', 'danger');
      return;
    }
    
    // Show loading message
    routeResult.innerHTML = '<p>Calculating best route...</p>';
    
    // Simulate delay (like a real API call)
    setTimeout(function() {
      // Create route result
      const result = `
        <div class="alert alert-success">
          <h5>Route from "${start}" to "${end}"</h5>
          <p><strong>Bus:</strong> Take bus #42 - 25 minutes ($2.50)</p>
          <p><strong>Taxi:</strong> 12 minutes ($18-22)</p>
          <p><strong>Walking:</strong> 35 minutes (2.8 km)</p>
        </div>
      `;
      
      routeResult.innerHTML = result;
    }, 1000);
  });
  
  // 2. Handle "More Info" buttons
  const infoButtons = document.querySelectorAll('.info-btn');
  
  infoButtons.forEach(button => {
    button.addEventListener('click', function() {
      const mode = this.getAttribute('data-mode');
      showTransportInfo(mode);
    });
  });
  
  // 3. Handle Feedback Form
  const feedbackForm = document.getElementById('feedbackForm');
  const feedbackList = document.getElementById('feedbackList');
  
  feedbackForm.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('visitorName').value;
    const feedback = document.getElementById('visitorFeedback').value;
    
    if (!name || !feedback) {
      showMessage('Please fill in both fields.', 'warning');
      return;
    }
    
    // Create new feedback item
    const newFeedback = document.createElement('div');
    newFeedback.className = 'feedback-item alert alert-light mt-2';
    newFeedback.innerHTML = `<strong>${name}:</strong> ${feedback}`;
    
    // Add to top of list
    feedbackList.appendChild(newFeedback);
    
    // Clear form
    document.getElementById('visitorName').value = '';
    document.getElementById('visitorFeedback').value = '';
    
    // Show success message
    showMessage('Thank you for your feedback!', 'success');
  });
  
  // 4. Show transport info function
  function showTransportInfo(mode) {
    let info = '';
    
    if (mode === 'bus') {
      info = 'Bus #42 stops every 15 minutes. Fare: $2.50. Operating hours: 6AM-11PM.';
    } else if (mode === 'taxi') {
      info = 'Taxis are available 24/7. Average fare: $18-22 from downtown.';
    } else if (mode === 'walking') {
      info = 'Walk through Riverside Park for a scenic route. 35 minutes from downtown.';
    }
    
    alert(info); // Simple alert box
  }
  
  // 5. Helper function to show messages
  function showMessage(text, type) {
    // Create alert element
    const alertDiv = document.createElement('div');
    alertDiv.className = `alert alert-${type} alert-dismissible fade show mt-3`;
    alertDiv.innerHTML = `
      ${text}
      <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
    `;
    
    // Add to top of body
    document.body.insertBefore(alertDiv, document.body.firstChild);
    
    // Remove after 5 seconds
    setTimeout(function() {
      if (alertDiv.parentElement) {
        alertDiv.remove();
      }
    }, 5000);
  }
  
  // 6. Add hover effect to transport cards
  const transportCards = document.querySelectorAll('.transport-card');
  
  transportCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-5px)';
      this.style.transition = 'transform 0.3s';
    });
    
    card.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0)';
    });
  });
  
});
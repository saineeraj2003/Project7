// Function to handle navigation clicks
function handleNavigation(event) {
    event.preventDefault();
    const id = event.target.id;
    // You can add logic here to handle different navigation options
    console.log(`Navigating to: ${id}`);
  }
  
  // Function to handle quick action clicks
  function handleQuickAction(event) {
    event.preventDefault();
    const id = event.target.id;
    // You can add logic here to handle different quick actions
    console.log(`Performing quick action: ${id}`);
  }
  
  // Event listeners
  document.getElementById('flights').addEventListener('click', handleNavigation);
  document.getElementById('bookings').addEventListener('click', handleNavigation);
  document.getElementById('payments').addEventListener('click', handleNavigation);
  document.getElementById('customers').addEventListener('click', handleNavigation);
  document.getElementById('addFlight').addEventListener('click', handleQuickAction);
  document.getElementById('searchBookings').addEventListener('click', handleQuickAction);
  
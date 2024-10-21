// Function to handle form submission
function handleFormSubmission(event) {
    event.preventDefault();
  
    // Get form data
    const formData = new FormData(event.target);
    const customerData = {};
    formData.forEach((value, key) => {
      customerData[key] = value;
    });
  
    // You can perform validation here if needed
  
    // Send data to backend (this is a mockup, you'll need to implement backend handling)
    console.log("Adding customer:", customerData);
    // Here you can make an AJAX request to send data to the backend for processing
  }
  
  // Event listener for form submission
  document.getElementById('customerForm').addEventListener('submit', handleFormSubmission);
  
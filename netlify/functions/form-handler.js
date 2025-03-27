// Netlify function to handle form submissions
exports.handler = async function(event, context) {
  const { name, email, phone, company, subject, message, budget } = JSON.parse(event.body).payload.data;
  
  console.log('Form submission received:', { name, email, subject });
  
  // This function just logs the form submission
  // The actual email forwarding is handled by Netlify's built-in form handling
  
  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Form submission received" })
  };
}; 
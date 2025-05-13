console.log('Hello!');
<script>
const contactFormButton = document.getElementById("contactSubmit");
if (contactFormButton) {
  contactFormButton.addEventListener("click", function(event) {
    event.preventDefault(); // Prevent form submission

    const name = document.getElementById("name").value;
    const message = document.getElementById("message").value;

    const feedback = {
      name: name,
      message: message,
      date: new Date().toISOString()
    };

    let feedbackList = JSON.parse(localStorage.getItem("feedbackList")) || [];
    feedbackList.push(feedback);
    localStorage.setItem("feedbackList", JSON.stringify(feedbackList));

    alert("Thank you for your feedback!");
    document.getElementById("contactForm").reset(); // Optional: reset form fields
  });
}
</script>
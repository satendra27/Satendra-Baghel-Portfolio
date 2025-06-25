import React from 'react';
import './Contact.css';

const Contact = () => {

const [result, setResult] = React.useState("");
const [isSubmitted, setIsSubmitted] = React.useState(false);
const [isLoading, setIsLoading] = React.useState(false);


 const onSubmit = async (event) => {
  event.preventDefault();
  setResult("Sending...");
  setIsLoading(true);
  setIsSubmitted(false);

  const formData = new FormData(event.target);
  formData.append("access_key", "29f15dba-dd9f-4adc-bd34-4a52b4bb34ae");

  const response = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    body: formData,
  });

  const data = await response.json();

  if (data.success) {
    setResult("✔ Form Submitted");
    setIsSubmitted(true);
    setIsLoading(false);
    event.target.reset();
  } else {
    setResult("Error: " + data.message);
    setIsSubmitted(false);
    setIsLoading(false);
  }
};

  return (

    <section className="contact" id="contact">
      <h2 className="section-title">Contact Me</h2>

      <div className="contact-wrapper">
        {/* Left Side - Contact Info */}
        <div className="contact-col">
          <h3>Send us a message</h3>
          <p>
            Feel free to reach out through the contact form or find our contact information below.
            Your feedback, questions, and suggestions are important to us.
          </p>
          <ul>
            <li><i className="fas fa-envelope"></i> baghelsatendra27@gmail.com</li>
            <li><i class="fa-solid fa-phone-volume"></i> 7240206069</li>
            <li><i className="fas fa-map-marker-alt"></i> Jaipur</li>
          </ul>

        </div>

        {/* Right Side - Contact Form */}
        <div className="contact-form">
          <form onSubmit={onSubmit}>
            <input type="text" name='name' placeholder="Your Name" required />
            <input type="email" name='email' placeholder="Your Email" required />
            <textarea placeholder="Your Message" name='message' rows="5" required></textarea>
            <button
  type="submit"
  className={`${isSubmitted ? "submitted" : ""} ${isLoading ? "loading" : ""}`}
  disabled={isLoading}
>
  {isLoading ? "Sending..." : isSubmitted ? "✔ Form Submitted" : "Send Message"}
</button>

          </form>
        </div>
      </div>
    </section>

  );
};

export default Contact;

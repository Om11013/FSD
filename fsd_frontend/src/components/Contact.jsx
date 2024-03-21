import React from "react";
import "../styles/contact.css";

const Contact = () => {
  return (
    <section className="register-section flex-center" id="contact">
      <div className="contact-container flex-center contact">
        <h2 className="form-heading">Contact Us</h2>
        <p className="contact-message">
          For inquiries, please contact us at{" "}
          <a href="mailto:info@bookmydoctor.com">info@bookmydoctor.com</a>.
        </p>
      </div>
    </section>
  );
};

export default Contact;

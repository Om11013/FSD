import React from "react";
import image from "../images/aboutimg.jpg";

const AboutUs = () => {
  return (
    <>
      <section className="container">
        <h2 className="page-heading about-heading">About Us</h2>
        <div className="about">
          <div className="hero-img">
            <img
              src={image}
              alt="hero"
            />
          </div>
          <div className="hero-content">
          <div className="mission-section">
        <h2>Our Mission</h2>
        <p>
          Welcome to BookMyDoctor, your trusted platform for convenient and reliable online doctor consultations.
          We understand that accessing healthcare should be easy, especially when you need it the most. That's why we've created a seamless experience that connects you with qualified healthcare professionals from the comfort of your own home.
        </p>
        <p>
          At BookMyDoctor, our mission is to make quality healthcare accessible to everyone, regardless of their location or circumstances. We strive to bridge the gap between patients and doctors, providing a platform where individuals can receive personalized medical advice and treatment plans tailored to their unique needs.
        </p>
      </div>
      <div className="team-section">
        <h2>Our Team</h2>
        <p>
          Behind every successful consultation is a team of dedicated professionals committed to your well-being. Our team consists of experienced doctors, nurses, and technology experts who work tirelessly to ensure that you receive the highest standard of care. With their expertise and compassion, you can trust that you're in good hands every step of the way.
        </p>
      </div>
      
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;

import React, { useState, useEffect } from 'react';
    import image1 from '../assets/image1.jpg';
    import image2 from '../assets/image2.jpg';

    function AboutDoctorSection() {
      const [currentSlide, setCurrentSlide] = useState(0);
      const slides = [image1, image2];

      const nextSlide = () => {
        setCurrentSlide((currentSlide + 1) % slides.length);
      };

      const prevSlide = () => {
        setCurrentSlide((currentSlide - 1 + slides.length) % slides.length);
      };

      return (
        <section className="about-doctor-section">
          <div className="container">
            <h3>About Dr. Soubhik Dey</h3>
            <p>Dental problems such as infections and inflammation are associated with more than 6 chronic diseases like pregnancy complications, clogged arteries, and heart diseases. This is why it is pivotal to take care of your dental health and live a complication-free lifestyle. Dr. Soubhik Dey is a well-known dentist in Birpara who can solve all your dental issues and give you a good-looking smile.</p>
            <p>With advanced dentistry facilities and technology, your doctor aims to offer the best dental treatments at reasonable prices. Dr. Dey also has experience in performing maxillofacial and other complex cosmetic and trauma surgeries for all-inclusive dental care.</p>
            <div className="slideshow-container">
              {slides.map((slide, index) => (
                <img
                  key={index}
                  src={slide}
                  alt={`Slide ${index + 1}`}
                  className={`slide ${index === currentSlide ? 'active' : ''}`}
                />
              ))}
              <span className="prev" onClick={prevSlide}>&#10094;</span>
              <span className="next" onClick={nextSlide}>&#10095;</span>
            </div>
          </div>
        </section>
      );
    }

    export default AboutDoctorSection;

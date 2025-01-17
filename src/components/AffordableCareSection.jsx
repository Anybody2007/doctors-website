import React, { useState, useEffect, useRef } from 'react';
import smile1 from '../assets/smile/smile1.jpg';
import smile2 from '../assets/smile/smile2.jpg';
import smile3 from '../assets/smile/smile3.jpg';
import smile4 from '../assets/smile/smile4.jpg';

function AffordableCareSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [smile1, smile2, smile3, smile4];
  const slideRefs = useRef([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  useEffect(() => {
    slideRefs.current.forEach((ref, index) => {
      if (ref) {
        ref.style.display = index === currentSlide ? 'block' : 'none';
      }
    });
  }, [currentSlide]);

  return (
    <section
      className="affordable-care-section"
      style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '20px',
      }}
    >
      {/* Image Slider on the Left */}
      <div
        className="image-slider"
        style={{
          flex: '0 0 40%',
          height: '400px',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {slides.map((slide, index) => (
          <img
            key={index}
            src={slide}
            alt={`Slide ${index + 1}`}
            ref={(el) => (slideRefs.current[index] = el)}
            style={{
              display: index === currentSlide ? 'block' : 'none',
              width: '100%',
              height: '100%',
              objectFit: 'contain', // Show the full image
              position: 'absolute',
              top: 0,
              left: 0,
              animation: index === currentSlide ? 'fadeIn 0.5s ease' : undefined,
            }}
          />
        ))}
      </div>

      {/* Text Content on the Right */}
      <div
        className="text-content"
        style={{
          flex: '0 0 55%',
          paddingLeft: '20px',
        }}
      >
        <h2>Affordable Dental Care Solution For The Entire Family</h2>
        <p>
          A smile is the cornerstone of one's facial beauty and self-confidence. Dr. Soubhik Dey, recognized as the best dentist in Siliguri and Birpara, offers exclusive and patient-centric dental treatments for every member of your family, ensuring that your loved ones carry a beautiful, confident smile always.
        </p>
        <p>
          With a team of experienced dental professionals, Dr. Soubhik Dey is committed to delivering top-notch dental care with a perfect combination of compassion and quality services. From routine dental check-ups and cosmetic dentistry to advanced treatments, his clinic provides a customized dental experience tailored to your specific needs.
        </p>
        <p>
          Take the first step towards a pain-free life by addressing all your dental concerns under the expert guidance of a specialized dentist. Whether you're in Siliguri or Birpara, you can count on Dr. Soubhik Dey for exceptional care. Book a dental counseling session today and experience the difference.
        </p>
      </div>
    </section>
  );
}

export default AffordableCareSection;

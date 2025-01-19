import React, { useState, useEffect, useRef } from 'react';
import doctorImage from '../assets/hero/doctor.jpg';
import image1 from '../assets/hero/image1.jpg';
import image2 from '../assets/hero/image2.jpg';
import image3 from '../assets/hero/image3.jpg';
import image4 from '../assets/hero/image4.jpg';
import image5 from '../assets/hero/image5.jpg';
import image6 from '../assets/hero/image6.jpg';
import image7 from '../assets/hero/image7.jpg';
import AppointmentForm from './AppointmentForm';

function Hero() {
  const [isPhotoExpanded, setIsPhotoExpanded] = useState(false);
  const [isAppointmentOpen, setIsAppointmentOpen] = useState(false);
  const photoRef = useRef(null);
  const startYear = 2018;
  const [shake, setShake] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [image1, image2, image3, image4, image5, image6, image7];
  const [nextSlide, setNextSlide] = useState(null);

  const calculateExperience = () => {
    const currentYear = new Date().getFullYear();
    return currentYear - startYear;
  };

  const togglePhoto = () => {
    setIsPhotoExpanded(!isPhotoExpanded);
  };

  const handleAppointmentClick = () => {
    setIsAppointmentOpen(true);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setNextSlide(currentSlide);
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 10000);

    return () => clearInterval(interval);
  }, [slides.length]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setShake(true);
      setTimeout(() => setShake(false), 500);
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <section className="hero">
      <div className="hero-slide-container">
        {slides.map((slide, index) => (
          <img
            key={index}
            src={slide}
            alt={`Slide ${index + 1}`}
            className={`hero-slide 
              ${index === currentSlide ? 'active' : ''} 
              ${index === nextSlide ? 'next' : ''}`}
          />
        ))}
      </div>
      <div className="container">
        <button 
          style={{ right: '20px', left: 'auto', bottom: '20px', top: 'auto' }} 
          className={shake ? 'shake' : ''}
          onClick={handleAppointmentClick}
        >
          Book an Appointment
        </button>
        <div className="doctor-info">
          <div
            ref={photoRef}
            className={`doctor-photo-container ${isPhotoExpanded ? 'expanded' : ''}`}
            onClick={togglePhoto}
          >
            <img src={doctorImage} alt="Doctor" />
          </div>
          <div className="doctor-details">
            <h3>Dr. Soubhik Dey</h3>
            <div className="experience-flag">
              <span>{calculateExperience()}+ Years of Experience</span>
            </div>
            <p>BDS (Awadh Dental College), Dip . In Implantology (Bangalore),</p>
            <p>Certified Leaser Specialist, Ex Junior Dental Resident (NBMC&H)</p>
          </div>
        </div>
      </div>
      <AppointmentForm 
        open={isAppointmentOpen} 
        onClose={() => setIsAppointmentOpen(false)} 
      />
    </section>
  );
}

export default Hero;

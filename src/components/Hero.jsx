import React, { useState, useEffect, useRef } from 'react';
    import doctorImage from '../assets/doctor.jpg';

    function Hero() {
      const [isPhotoExpanded, setIsPhotoExpanded] = useState(false);
      const photoRef = useRef(null);
      const startYear = 2018;
      const [shake, setShake] = useState(false);

      const calculateExperience = () => {
        const currentYear = new Date().getFullYear();
        return currentYear - startYear;
      };

      const togglePhoto = () => {
        setIsPhotoExpanded(!isPhotoExpanded);
      };

      useEffect(() => {
        const handleClickOutside = (event) => {
          if (isPhotoExpanded && photoRef.current && !photoRef.current.contains(event.target)) {
            setIsPhotoExpanded(false);
          }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
          document.removeEventListener('mousedown', handleClickOutside);
        };
      }, [isPhotoExpanded]);

      useEffect(() => {
        const intervalId = setInterval(() => {
          setShake(true);
          setTimeout(() => setShake(false), 500);
        }, 20000);

        return () => clearInterval(intervalId);
      }, []);

      return (
        <section className="hero">
          <div className="container">
            <button style={{ right: '20px', left: 'auto', bottom: '20px', top: 'auto' }} className={shake ? 'shake' : ''}>Book an Appointment</button>
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
        </section>
      );
    }

    export default Hero;

import React, { useRef, useEffect } from 'react';

    function Header() {
      const aboutRef = useRef(null);
      const treatmentsRef = useRef(null);

      useEffect(() => {
        aboutRef.current = document.querySelector('.about-doctor-section');
        treatmentsRef.current = document.querySelector('.treatments');
      }, []);

      const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      };

      const scrollToAbout = () => {
        if (aboutRef.current) {
          aboutRef.current.scrollIntoView({ behavior: 'smooth' });
        }
      };

      const scrollToTreatments = () => {
        if (treatmentsRef.current) {
          treatmentsRef.current.scrollIntoView({ behavior: 'smooth' });
        }
      };

      return (
        <header className="header">
          <div className="container">
            <h1>Dr. Soubhik Dey</h1>
            <nav>
              <a href="#" onClick={scrollToTop}>Home</a>
              <a href="#" onClick={scrollToAbout}>About</a>
              <a href="#" onClick={scrollToTreatments}>Treatments</a>
              <a href="#">Contact</a>
            </nav>
          </div>
        </header>
      );
    }

    export default Header;

import React, { useRef } from 'react';
    import './Testimonials.css';

    function Testimonials() {
      const testimonials = [
        {
          videoUrl: "https://www.youtube.com/embed/Z11R3Z3ZOEw",
          title: "Patient Testimonial | Gum, Swelling and Bleeding  | Best Dentist in Birpara & Siliguri - Dr. Dey",
          name: "Patient 1"
        },
        {
          videoUrl: "https://www.youtube.com/embed/EFXCOwOhclU",
          title: "Patient Testimonial | Gum, Swelling and Bleeding  | Best Dentist in Birpara & Siliguri - Dr. Dey",
          name: "Patient 2"
        },
        {
          videoUrl: "https://www.youtube.com/embed/Z11R3Z3ZOEw",
          title: "Patient Testimonial | Gum, Swelling and Bleeding  | Best Dentist in Birpara & Siliguri - Dr. Dey",
          name: "Patient 3"
        }
      ];

      const containerRef = useRef(null);

      const scrollLeft = () => {
        if (containerRef.current) {
          containerRef.current.scrollLeft -= containerRef.current.offsetWidth;
        }
      };

      const scrollRight = () => {
        if (containerRef.current) {
          containerRef.current.scrollLeft += containerRef.current.offsetWidth;
        }
      };

      return (
        <section className="testimonials">
          <div className="container">
            <h2>Patient Testimonials</h2>
            <button className="slide-button prev" onClick={scrollLeft}>&lt;</button>
            <div className="testimonials-container" ref={containerRef}>
              {testimonials.map((testimonial, index) => (
                <div key={index} className="testimonial-card">
                  <iframe
                    width="100%"
                    height="315"
                    src={testimonial.videoUrl}
                    title={testimonial.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    style={{marginBottom: '10px'}}
                    referrerPolicy="strict-origin-when-cross-origin"
                  ></iframe>
                  <p style={{textAlign: 'right', fontWeight: 'bold'}}>- {testimonial.name}</p>
                </div>
              ))}
            </div>
            <button className="slide-button next" onClick={scrollRight}>&gt;</button>
          </div>
        </section>
      );
    }

    export default Testimonials;

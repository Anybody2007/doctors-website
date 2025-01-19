import React from 'react';
    import './Testimonials.css';

    function Testimonials() {
      const testimonials = [
        {
          videoUrl: "https://www.youtube.com/embed/Z11R3Z3ZOEw",
          title: "Patient Testimonial | Gum, Swelling and Bleeding  | Best Dentist in Birpara & Siliguri - Dr. Dey",
          name: "Patient 1"
        },
        {
          videoUrl: "https://www.youtube.com/embed/Z11R3Z3ZOEw",
          title: "Patient Testimonial | Gum, Swelling and Bleeding  | Best Dentist in Birpara & Siliguri - Dr. Dey",
          name: "Patient 2"
        },
        {
          videoUrl: "https://www.youtube.com/embed/Z11R3Z3ZOEw",
          title: "Patient Testimonial | Gum, Swelling and Bleeding  | Best Dentist in Birpara & Siliguri - Dr. Dey",
          name: "Patient 3"
        }
      ];

      return (
        <section className="testimonials">
          <div className="container">
            <h2>Patient Testimonials</h2>
            <div className="testimonials-container">
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
          </div>
        </section>
      );
    }

    export default Testimonials;

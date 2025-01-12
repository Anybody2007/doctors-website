import React, { useState, useEffect } from 'react';

    function AboutDoctor() {
      const [currentSlide, setCurrentSlide] = useState(0);
      const slides = [
        "https://instagram.fblr2-2.fna.fbcdn.net/v/t51.29350-15/332546845_555285983056186_1694513502010980658_n.jpg?stp=dst-jpg_e35_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDkyNy5zZHIuZjI5MzUwLmRlZmF1bHRfaW1hZ2UifQ&_nc_ht=instagram.fblr2-2.fna.fbcdn.net&_nc_cat=110&_nc_ohc=JfZ9a5kKec0Q7kNvgGNGVHF&_nc_gid=97d733a0280e43b383b6bff915b0e220&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MzA0NTA2MzEzMTE2MzU2ODM5Nw%3D%3D.3-ccb7-5&oh=00_AYDqUHL3Y4li0ATfp7lpCdIbccn37Haxta2JieCqM_TK1A&oe=6789F782&_nc_sid=10d13b",
        "https://instagram.fblr2-2.fna.fbcdn.net/v/t51.29350-15/436161805_959794005633744_6833363536572894372_n.jpg?stp=dst-jpg_e35_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDgxMS5zZHIuZjI5MzUwLmRlZmF1bHRfaW1hZ2UifQ&_nc_ht=instagram.fblr2-2.fna.fbcdn.net&_nc_cat=100&_nc_ohc=a6hsm_yI4U8Q7kNvgHVpFBF&_nc_gid=bb14cb8337f64451bc95a5014f301a56&edm=AOmX9WgBAAAA&ccb=7-5&ig_cache_key=MzM2NjIxMzU4NTg0MjY3MzQ0Ng%3D%3D.3-ccb7-5&oh=00_AYBO2tbQLFTuFEQZtVGtJnYbBx5BmEehE1texAR9kwjpCg&oe=6789E3DA&_nc_sid=bfaa47",
        "https://placekitten.com/600/400"
      ];

      const nextSlide = () => {
        setCurrentSlide((currentSlide + 1) % slides.length);
      };

      const prevSlide = () => {
        setCurrentSlide((currentSlide - 1 + slides.length) % slides.length);
      };

      return (
        <section className="about-doctor">
          <div className="container">
            <h3>Best Dentist In Birpara</h3>
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

    export default AboutDoctor;

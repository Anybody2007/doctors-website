import React, { useState } from 'react';
import './Quality.css';
import ContinuousCare from '../assets/quality/continuous-care.svg';
import DentalCare from '../assets/quality/dental-care.svg';
import SafeEnv from '../assets/quality/safe-dental-care-environment.svg';
import WorldTech from '../assets/quality/world-class-technology.svg';

const QualityStandards = () => {
    const standards = [
      {
        title: "Infection Control and Sterilization",
        description: "Dr. Soubhik Dey, the best dentist in Birpara and Siliguri, ensures strict infection control and sterilization processes to maintain a hygienic environment for patients with minimal risk of infections. His commitment to quality care makes him a top choice for dental services.",
        icon: DentalCare
      },
      {
        title: "Safe Dental Care Environment",
        description: "As one of the top dentists in Siliguri and Birpara, Dr. Soubhik Dey prioritizes patient safety by maintaining a safe dental care environment. He follows strict hygiene protocols, ensuring comfort and care during check-ups and surgical procedures.",
        icon: SafeEnv
      },
      {
        title: "World-Class Technology",
        description: "Dr. Dey’s dental clinic is equipped with state-of-the-art technology, providing world-class care for patients in Siliguri and Birpara. With advanced diagnostic tools and modern operation theatres, you can expect exceptional dental treatment.",
        icon: WorldTech
      },
      {
        title: "Continuous Care",
        description: "Dr. Soubhik Dey provides round-the-clock dental care to ensure his patients receive ongoing treatment and preventive care. Whether it's a routine check-up or emergency care, Dr. Dey is here to keep your dental health in top shape.",
        icon: ContinuousCare
        // icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M2 7h20M4 12h16M6 17h12'/%3E%3Cpath d='M12 2v20'/%3E%3C/svg%3E",
      },
    ];
  
    return (
      <section className="quality-standards">
        <h2>Quality Dental Care by Dr. Soubhik Dey in Siliguri & Birpara</h2>
        <div className="standards-container">
          {standards.map((standard, index) => (
            <div className="standard-card" key={index}>
              <div className="icon"><img src={standard.icon} alt={standard.title} style={{width: '120px', height: '120px'}}/></div>
              <h3>{standard.title}</h3>
              <p>{standard.description}</p>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default QualityStandards;

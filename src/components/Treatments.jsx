import React, { useState } from 'react';

    function Treatments() {
      const [expandedTreatment, setExpandedTreatment] = useState(null);

      const treatments = [
        {
          name: "Cosmetic Procedures",
          details: {
            when: "When you want to improve the appearance of your teeth and gums.",
            benefits: "Enhances smile aesthetics, boosts confidence.",
            avoid: "Individuals with active oral infections."
          }
        },
        {
          name: "Crowns and Bridges Fixing",
          details: {
            when: "When you have damaged or missing teeth.",
            benefits: "Restores tooth function and appearance.",
            avoid: "Those with severe gum disease."
          }
        },
        {
          name: "Complete/Partial Dentures Fixing",
          details: {
            when: "When you have multiple missing teeth.",
            benefits: "Restores chewing ability and speech.",
            avoid: "Those with severe bone loss."
          }
        },
        {
          name: "Tooth Extraction",
          details: {
            when: "When a tooth is severely damaged or infected.",
            benefits: "Relieves pain and prevents further infection.",
            avoid: "Those with bleeding disorders."
          }
        },
        {
          name: "Dental Fillings",
          details: {
            when: "When you have cavities or minor tooth damage.",
            benefits: "Restores tooth structure and prevents decay.",
            avoid: "Those with severe allergies to filling materials."
          }
        },
         {
          name: "Dental Implant Fixing",
          details: {
            when: "When you have missing teeth and sufficient bone density.",
            benefits: "Provides a permanent solution for missing teeth.",
            avoid: "Those with uncontrolled diabetes or heavy smokers."
          }
        },
        {
          name: "Laser Surgery",
          details: {
            when: "For various gum and soft tissue procedures.",
            benefits: "Minimally invasive with faster healing.",
            avoid: "Those with certain medical conditions."
          }
        },
        {
          name: "Smile Design",
          details: {
            when: "When you want a complete smile makeover.",
            benefits: "Customized treatment plan for a perfect smile.",
            avoid: "Those with unrealistic expectations."
          }
        },
        {
          name: "Single Sitting Root Canal",
          details: {
            when: "When a tooth's pulp is infected.",
            benefits: "Saves the tooth and relieves pain in a single visit.",
            avoid: "Those with severe tooth decay."
          }
        }
      ];

      const toggleTreatment = (index) => {
        setExpandedTreatment(expandedTreatment === index ? null : index);
      };

      return (
        <section className="treatments">
          <div className="container">
            <h2>Our Treatments</h2>
            <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}}>
              {treatments.map((treatment, index) => (
                <div key={index} className="treatment-card" onMouseEnter={() => setExpandedTreatment(index)} onMouseLeave={() => setExpandedTreatment(null)}>
                  <h3>
                    {treatment.name}
                    <span
                      onClick={() => toggleTreatment(index)}
                      className={expandedTreatment === index ? 'rotate' : ''}
                    >
                      &#8595;
                    </span>
                  </h3>
                  <div className={`treatment-details ${expandedTreatment === index ? 'show' : ''}`}>
                    <h4>When is it needed?</h4>
                    <p>{treatment.details.when}</p>
                    <h4>What are the benefits?</h4>
                    <p>{treatment.details.benefits}</p>
                    <h4>Who should generally avoid?</h4>
                    <p>{treatment.details.avoid}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      );
    }

    export default Treatments;

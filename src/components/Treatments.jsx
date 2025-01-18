import React, { useState } from 'react';
    import cosmetic from '../assets/treatments/cosmetic.svg';
    import crown from '../assets/treatments/crown.svg';
    import dentures from '../assets/treatments/dentures.svg';
    import extraction from '../assets/treatments/extraction.svg';
    import fillings from '../assets/treatments/fillings.svg';
    import implant from '../assets/treatments/implant.svg';
    import laser from '../assets/treatments/laser.svg';
    import smile from '../assets/treatments/smile.svg';
    import rootcanal from '../assets/treatments/rootcanal.svg';

    function Treatments() {
      const [expandedTreatment, setExpandedTreatment] = useState(null);

      const treatments = [
        {
          name: "Cosmetic Procedures",
          logo: cosmetic,
          details: {
            when: "When you want to improve the appearance of your teeth and gums.",
            benefits: "Enhances smile aesthetics, boosts confidence.",
            avoid: "Individuals with active oral infections."
          }
        },
        {
          name: "Crowns and Bridges Fixing",
          logo: crown,
          details: {
            when: "When you have damaged or missing teeth.",
            benefits: "Restores tooth function and appearance.",
            avoid: "Those with severe gum disease."
          }
        },
        {
          name: "Complete/Partial Dentures Fixing",
          logo: dentures,
          details: {
            when: "When you have multiple missing teeth.",
            benefits: "Restores chewing ability and speech.",
            avoid: "Those with severe bone loss."
          }
        },
        {
          name: "Tooth Extraction",
          logo: extraction,
          details: {
            when: "When a tooth is severely damaged or infected.",
            benefits: "Relieves pain and prevents further infection.",
            avoid: "Those with bleeding disorders."
          }
        },
        {
          name: "Dental Fillings",
          logo: fillings,
          details: {
            when: "When you have cavities or minor tooth damage.",
            benefits: "Restores tooth structure and prevents decay.",
            avoid: "Those with severe allergies to filling materials."
          }
        },
         {
          name: "Dental Implant Fixing",
          logo: implant,
          details: {
            when: "When you have missing teeth and sufficient bone density.",
            benefits: "Provides a permanent solution for missing teeth.",
            avoid: "Those with uncontrolled diabetes or heavy smokers."
          }
        },
        {
          name: "Laser Surgery",
          logo: laser,
          details: {
            when: "For various gum and soft tissue procedures.",
            benefits: "Minimally invasive with faster healing.",
            avoid: "Those with certain medical conditions."
          }
        },
        {
          name: "Smile Design",
          logo: smile,
          details: {
            when: "When you want a complete smile makeover.",
            benefits: "Customized treatment plan for a perfect smile.",
            avoid: "Those with unrealistic expectations."
          }
        },
        {
          name: "Single Sitting Root Canal",
          logo: rootcanal,
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
                  <h3 onClick={() => toggleTreatment(index)}>
                    <img src={treatment.logo} alt={treatment.name} style={{width: '120px', height: '120px', marginRight: '5px'}}/> {treatment.name}
                    <span
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

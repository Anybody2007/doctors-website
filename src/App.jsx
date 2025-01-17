import React from 'react';
    import Header from './components/Header';
    import Hero from './components/Hero';
    import AboutDoctorSection from './components/AboutDoctorSection';
    import Treatments from './components/Treatments';
    import Testimonials from './components/Testimonials';
    import Footer from './components/Footer';
    import AffordableCareSection from './components/AffordableCareSection';
    import QualityStandards from './components/Quality';

    function App() {
      return (
        <div>
          <Header />
          <Hero />
          <AboutDoctorSection />
          <Treatments />
          <AffordableCareSection />
          < QualityStandards />
          <Testimonials />
          <Footer />
        </div>
      );
    }

    export default App;

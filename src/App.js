
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Fafc from './components/Fafc';
import ApeFunProgress from './components/ApeFunProgress';
import Marquee from './components/Marquee';
import Faq from './components/Faq';
import Footer from './components/Footer';
import { install } from "resize-observer";
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    install();
    // AOS
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((el) => {
        if (el.isIntersecting) {
          el.target.classList.add('aos-animate');
          observer.unobserve(el.target);
        }
      });
    });
    document.querySelectorAll('[data-aos]').forEach(function (el) {
      el.classList.add('aos-init');
      observer.observe(el);
    });
    
  }, []);
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Fafc />
      <ApeFunProgress />
      <Marquee />
      <Faq />
      <Footer />
    </>
  );
}

export default App;

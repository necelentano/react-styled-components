import { useState } from 'react';

import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';

import { homeObjOne } from '../components/InfoSection/data';

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Sidebar isOpen={isOpen} toggleMobileMenu={toggleMobileMenu} />
      <Navbar toggleMobileMenu={toggleMobileMenu} />
      <HeroSection />
      <InfoSection {...homeObjOne} />
    </>
  );
};

export default Home;

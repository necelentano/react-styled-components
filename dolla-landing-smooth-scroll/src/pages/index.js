import { useState } from 'react';

import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Sidebar isOpen={isOpen} toggleMobileMenu={toggleMobileMenu} />
      <Navbar toggleMobileMenu={toggleMobileMenu} />
    </>
  );
};

export default Home;

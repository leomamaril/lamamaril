import AboutMe from "./Home/AboutMe";
import Contacts from "./Home/Contacts";
import HeroPanel from "./Home/HeroPanel";
import Projects from "./Home/Projects";

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function Home() {

   const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [hash]);
  return (
    <>
      <HeroPanel />
      <AboutMe />
      <Projects/>
      <Contacts/>
    </>
  );
}

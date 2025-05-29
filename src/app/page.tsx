// app/page.tsx (ou pages/index.tsx)
'use client'; // Se ainda não estiver

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import AboutUsSection from '@/components/sections/AboutUsSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import Banner from '@/components/banner';
import ContactSection from '@/components/sections/Contact';
import React from 'react';
import CallToActionSection from '@/components/sections/CallToActionSection';
import ServicesSection from '@/components/sections/ServicesSection';

export default function HomePage() {
  const bannerVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 1, ease: 'easeOut' } },
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 80 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut', delay: 0.2 } },
  };

  const sections = [
    {
      key: 'banner',
      component: <Banner />,
      variants: bannerVariants,
    },
    {
      key: 'services',
      component: <ServicesSection />,
      variants: sectionVariants,
    },
    {
      key: 'cta',
      component: <CallToActionSection />,
      variants: bannerVariants,
    },
    {
      key: 'about',
      component: <AboutUsSection />,
      variants: sectionVariants,
    },
    {
      key: 'projects',
      component: <ProjectsSection />,
      variants: sectionVariants,
    },
    {
      key: 'contact',
      component: <ContactSection />,
      variants: sectionVariants,
    },
  ];

  return (
    <>
      <Header />
      <main className='layout-container flex h-full grow flex-col'>
        <div className='mx-auto w-full'>
          {sections.map(({ key, component, variants }, idx, arr) => (
            <React.Fragment key={key}>
              <AnimateOnScroll variants={variants} threshold={0.2} once={true}>
                {component}
              </AnimateOnScroll>
              {idx < arr.length - 1 && (
                <div className='border-t border-gray-200 my-2 md:my-3 max-w-4xl mx-auto'></div>
              )}
            </React.Fragment>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}

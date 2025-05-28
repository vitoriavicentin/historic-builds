// app/page.tsx (ou pages/index.tsx)
'use client'; // Se ainda não estiver

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import AboutUsSection from '@/components/sections/AboutUsSection';
import ProjectsSection from '@/components/sections/ProjectsSection';

import AnimateOnScroll from '@/components/AnimateOnScroll';
import Banner from '@/components/banner';
import ContactSection from '@/components/sections/Contact';
import GetQuoteButton from '@/components/GetQuoteButton';
import ServiceCard from '@/components/ServiceCard';
import BrushIcon from '@/components/icons/BrushIcon';
import HammerIcon from '@/components/icons/HammerIcon';
import MechanicalWheelIcon from '@/components/icons/MechanicalWheelIcon';

export default function HomePage() {
  const services = [
    {
      icon: <HammerIcon />,
      title: 'Restoration',
      description:
        'Meticulous restoration of original features, preserving historical integrity and enhancing property value for generations.',
    },
    {
      icon: <BrushIcon />,
      title: 'Renovation',
      description:
        "Modernizing interiors and systems while respecting the building's heritage, creating refreshed and highly functional spaces.",
    },
    {
      icon: <MechanicalWheelIcon />,
      title: 'Adaptive Reuse',
      description:
        'Transforming historic structures for new purposes, blending old and new for innovative, sustainable, and impactful solutions.',
    },
  ];

  const bannerVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 1, ease: 'easeOut' } },
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 80 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut', delay: 0.2 } },
  };

  function CallToActionSection() {
    return (
      <section className='flex flex-col items-center justify-center gap-6 py-12 text-center md:py-20 bg-gray-800 text-white'>
        <h2 className='tracking-light text-[32px] font-bold leading-tight md:text-4xl md:font-black md:leading-tight md:tracking-[-0.033em] max-w-[720px] mx-auto'>
          Ready to Revitalize Your Property?
        </h2>
        <p className='text-lg md:text-xl font-normal leading-normal max-w-[720px] mx-auto px-4 text-gray-200'>
          Contact us today for a consultation and let’s discuss how we can turn your vision into
          reality.
        </p>
        <div className='flex justify-center mt-10 md:mt-12'>
          <GetQuoteButton />
        </div>
      </section>
    );
  }

  function ServicesSection() {
    return (
      <section
        id='services-section'
        className='py-10 md:py-16 bg-gray-50 w-screen relative left-1/2 right-1/2 -mx-[50vw] px-0'
      >
        <h2 className='text-primary-brand text-3xl md:text-4xl lg:text-5xl font-bold leading-tight tracking-[-0.015em] text-center px-4 mb-10 md:mb-14'>
          Our Services
        </h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4 max-w-6xl mx-auto'>
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </section>
    );
  }

  return (
    <>
      <Header />
      <main className='layout-container flex h-full grow flex-col'>
        <div className='mx-auto w-full'>
          <AnimateOnScroll variants={bannerVariants} threshold={0.1} once={true}>
            <Banner />
          </AnimateOnScroll>

          <div className='border-t border-gray-200 my-2 md:my-3 max-w-4xl mx-auto'></div>

          <AnimateOnScroll variants={sectionVariants} threshold={0.2} once={true}>
            <ServicesSection />
          </AnimateOnScroll>

          <div className='border-t border-gray-200 my-2 md:my-3 max-w-4xl mx-auto'></div>

          <AnimateOnScroll variants={bannerVariants} threshold={0.2} once={true}>
            <CallToActionSection />
          </AnimateOnScroll>

          <div className='border-t border-gray-200 my-2 md:my-3 max-w-4xl mx-auto'></div>

          <AnimateOnScroll variants={sectionVariants} threshold={0.2} once={true}>
            <AboutUsSection />
          </AnimateOnScroll>

          <div className='border-t border-gray-200 my-2 md:my-3 max-w-4xl mx-auto'></div>

          <AnimateOnScroll variants={sectionVariants} threshold={0.2} once={true}>
            <ProjectsSection />
          </AnimateOnScroll>

          <div className='border-t border-gray-200 my-2 md:my-3 max-w-4xl mx-auto'></div>

          <AnimateOnScroll variants={sectionVariants} threshold={0.2} once={true}>
            <ContactSection />
          </AnimateOnScroll>
        </div>
      </main>
      <Footer />
    </>
  );
}

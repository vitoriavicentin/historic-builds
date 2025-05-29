'use client';

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import React, { Suspense } from 'react';

import Banner from '@/components/banner';
import CallToActionSection from '@/components/sections/CallToActionSection';
import ServicesSection from '@/components/sections/ServicesSection';
import AboutUsSection from '@/components/sections/AboutUsSection';
import ContactSection from '@/components/sections/Contact';

const LazyProjectsSection = React.lazy(() => import('@/components/sections/ProjectsSection'));

export default function HomePage() {
  const sections = [
    {
      key: 'banner',
      component: <Banner />,
      isLazy: false,
    },
    {
      key: 'services',
      component: <ServicesSection />,
      isLazy: false,
    },
    {
      key: 'cta',
      component: <CallToActionSection />,
      isLazy: false,
    },
    {
      key: 'about',
      component: <AboutUsSection />,
      isLazy: false,
    },
    {
      key: 'projects',
      component: <LazyProjectsSection />,
      isLazy: true,
    },
    {
      key: 'contact',
      component: <ContactSection />,
      isLazy: false,
    },
  ];

  return (
    <>
      <Header />
      <main className='layout-container flex h-full grow flex-col'>
        <div className='mx-auto w-full'>
          {sections.map(({ key, component, isLazy }, idx, arr) => (
            <React.Fragment key={key}>
              {isLazy ? (
                <Suspense fallback={<div>Carregando projetos...</div>}>{component}</Suspense>
              ) : (
                component
              )}
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

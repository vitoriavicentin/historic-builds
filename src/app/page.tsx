// app/page.tsx (ou pages/index.tsx)
'use client'; // Se ainda não estiver

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import AboutUsSection from '@/components/sections/AboutUsSection';
import ProjectsSection from '@/components/sections/ProjectsSection';

import AnimateOnScroll from '@/components/AnimateOnScroll';
import Banner from '@/components/banner';
import ContactSection from '@/components/sections/Contact';

export default function HomePage() {
  const bannerVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 1, ease: 'easeOut' } },
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 80 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut', delay: 0.2 } },
  };

  return (
    <>
      <Header />
      <main className='layout-container flex h-full grow flex-col'>
        <div className='mx-auto w-full'>
          {/* Banner - pode ter uma animação de entrada diferente */}
          <AnimateOnScroll variants={bannerVariants} threshold={0.1} once={true}>
            <Banner />
          </AnimateOnScroll>

          <AnimateOnScroll variants={sectionVariants} threshold={0.2} once={true}>
            <AboutUsSection />
          </AnimateOnScroll>

          <AnimateOnScroll variants={sectionVariants} threshold={0.2} once={true}>
            <ProjectsSection />
          </AnimateOnScroll>

          <AnimateOnScroll variants={sectionVariants} threshold={0.2} once={true}>
            <ContactSection />
          </AnimateOnScroll>
        </div>
      </main>
      <Footer />
    </>
  );
}

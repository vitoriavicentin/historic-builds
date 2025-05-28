'use client';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ServiceCard from '@/components/ServiceCard';
import HammerIcon from '@/components/icons/HammerIcon';
import Carousel from '@/components/carousel/carousel';
import BrushIcon from '@/components/icons/BrushIcon';
import MechanicalWheelIcon from '@/components/icons/MechanicalWheelIcon';

const projectsData = [
  {
    id: 'proj1',
    image: '/img/school.png',
    title: 'Former William Byrd High School - Vinton, VA',
  },
  {
    id: 'proj2',
    image: '/img/church.png',
    title: 'First Church of Christ Scientist - Paris, TX',
  },
  {
    id: 'proj3',
    image: '/img/officeBuilding.png',
    title: 'The Blake & Hinkle Office Building',
  },
];

const services = [
  {
    icon: <HammerIcon />,
    title: 'Restoration',
    description: 'Meticulous restoration of original features, preserving historical integrity.',
  },
  {
    icon: <BrushIcon />,
    title: 'Renovation',
    description: "Modernizing interiors and systems while respecting the building's heritage.",
  },
  {
    icon: <MechanicalWheelIcon />,
    title: 'Adaptive Reuse',
    description: 'Transforming historic structures for new purposes, blending old and new.',
  },
];

function ProjectsSection() {
  return (
    <section className='w-full'>
      <h2 className='text-primary-brand text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5'>
        Featured Project
      </h2>
      <div className='flex overflow-y-auto [-ms-scrollbar-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden'>
        <div className='flex items-stretch p-4 gap-3 w-full'>
          {projectsData.map((project) => (
            <div key={project.id} className='flex h-full flex-1 flex-col gap-4 rounded-lg min-w-60'>
              <div
                className='w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl flex flex-col'
                style={{ backgroundImage: `url("${project.image}")` }}
              />
              <p className='text-primary-brand text-base font-medium leading-normal'>
                {project.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServicesSection() {
  return (
    <section>
      <h2 className='text-primary-brand text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5'>
        Our Services
      </h2>
      <div className='grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4'>
        {services.map((service) => (
          <ServiceCard key={service.title} {...service} />
        ))}
      </div>
    </section>
  );
}

function CallToActionSection() {
  return (
    <section className='flex flex-col justify-end gap-6 py-10 text-center @[480px]:gap-8 @[480px]:py-20'>
      <h1 className='text-primary-brand tracking-light text-[32px] font-bold leading-tight @[480px]:text-4xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em] max-w-[720px] mx-auto'>
        Ready to Revitalize Your Property?
      </h1>
      <p className='text-primary-brand text-base font-normal leading-normal max-w-[720px] mx-auto'>
        Contact us today for a consultation and let's discuss how we can bring your vision to life.
      </p>
      <div className='flex justify-center'>
        <button className='flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#53d22c] text-[#131712] text-sm font-bold leading-normal tracking-[0.015em]'>
          <span className='truncate'>Get a Quote</span>
        </button>
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <>
      <Header />
      <Carousel />
      <main className='layout-container flex h-full grow flex-col'>
        <div className='mx-auto w-full '>
          <ProjectsSection />
          <ServicesSection />
          <CallToActionSection />
        </div>
      </main>
      <Footer />
    </>
  );
}

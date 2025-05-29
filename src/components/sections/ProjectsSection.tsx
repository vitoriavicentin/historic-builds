'use client';
import React from 'react';
import ImageCompareSlider from '@/components/ImageCompareSlider';
import { motion } from 'framer-motion';

interface Project {
  title: string;
  description: string;
  beforeImage: string;
  afterImage: string;
}

export default function ProjectsSection() {
  const projects: Project[] = [
    {
      title: 'Paris Project',
      description:
        'The Paris Project was a highly customized restoration, carefully designed to highlight the building’s many noteworthy elements of beauty, uniqueness, history, and distinctive character. Aligned with the City and County’s vision for a mixed-use adaptive rehabilitation, the project became a landmark in sustainable technology, a lasting source of Paris pride, and a vibrant anchor for the City.Our design and marketing strategies were tailored to attract a specific community of tenants, enabling the property to reach its highest and best use.',
      beforeImage: '/img/projects/bankBefore.jpg',
      afterImage: '/img/projects/bankAfter.jpg',
    },
    {
      title: 'Blake & Hinkle Lumber Company Office ',
      description:
        'This was the scene we faced: an old office, weathered by time, standing as a symbol of an era of industrial progress. Our goal was not just to restore the building, but to revive its story and purpose.Every wall, window frame, and detail was carefully preserved to maintain the space’s original character. We honored its architectural identity while adding sustainable, modern solutions — without losing the spirit of the past.Today, the former Blake & Hinkle office is a perfect example of how restoration can bridge the past and the future. A functional, beautiful space full of history, ready to inspire generations to come.',
      beforeImage: '/img/projects/officeBuildingBefore.jpg',
      afterImage: '/img/projects/officeBuildingAfter.png',
    },
    {
      title: 'First Church of Christ Scientist – Paris, TX',
      description:
        'This is what this historic church looked like before our restoration work: worn down, forgotten — yet full of value. We embraced the challenge with responsibility and passion, committed to preserving every original detail.All stained-glass windows were carefully restored — true glass artworks. A demanding and time-consuming process, but the results were absolutely stunning.Project completed. It was costly and took longer than initially planned, especially because we remained faithful to the building’s original details. But every bit of effort was worth it — a source of pride for the city and the nation.',
      beforeImage: '/img/projects/churchBefore.jpg',
      afterImage: '/img/projects/churchAfter.png',
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <section id='projects-section' className='py-10 md:py-16 bg-[#f5f5f5]'>
      <div className='layout-content-container flex flex-col w-full max-w-[1200px] mx-auto gap-12 px-4'>
        <div className='flex flex-wrap justify-between gap-3'>
          <div className='flex min-w-72 flex-col gap-3'>
            <p className='tracking-tight text-5xl font-extrabold leading-tight text-primary-brand'>
              Our Projects
            </p>
            <p className='text-lg font-normal leading-normal pb-3 pt-1 max-w-2xl text-gray-700'>
              Explore our portfolio of successful revitalization projects, showcasing our commitment
              to preserving history and enhancing communities with innovative design and sustainable
              practices.
            </p>
          </div>
        </div>
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className='w-full'
            variants={cardVariants}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.div
              className={`flex items-center justify-between gap-8 rounded-2xl shadow-xl bg-white p-8 md:p-10 border border-gray-100
            ${
              index % 2 === 0
                ? 'flex-col-reverse md:flex-row'
                : 'flex-col-reverse md:flex-row-reverse'
            }`}
              whileHover={{
                scale: 1.02,
                boxShadow:
                  '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
              }}
              transition={{ duration: 0.3 }}
            >
              <div className='flex flex-col gap-4 flex-grow md:w-1/2'>
                <h2 className='text-4xl font-extrabold'>{project.title}</h2>
                <p>{project.description}</p>
              </div>

              <div className='w-full md:w-1/2 flex-shrink-0'>
                <ImageCompareSlider
                  beforeSrc={project.beforeImage}
                  afterSrc={project.afterImage}
                  alt={project.title}
                />
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

'use client';

import React from 'react';
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';

interface Project {
  title: string;
  description: string;
  beforeImage: string;
  afterImage: string;
}

const projects: Project[] = [
  {
    title: 'Paris Project',
    description:
      'The Paris Project was a highly customized restoration, carefully designed to highlight the building’s many noteworthy elements of beauty, uniqueness, history, and distinctive character. Aligned with the City and County’s vision for a mixed-use adaptive rehabilitation, the project became a landmark in sustainable technology, a lasting source of Paris pride, and a vibrant anchor for the City. Our design and marketing strategies were tailored to attract a specific community of tenants, enabling the property to reach its highest and best use.',
    beforeImage: '/img/projects/bankBefore.jpg',
    afterImage: '/img/projects/bankAfter.jpg',
  },
  {
    title: 'Blake & Hinkle Lumber Company Office',
    description:
      'This was the scene we faced: an old office, weathered by time, standing as a symbol of an era of industrial progress. Our goal was not just to restore the building, but to revive its story and purpose. Every wall, window frame, and detail was carefully preserved to maintain the space’s original character. We honored its architectural identity while adding sustainable, modern solutions — without losing the spirit of the past. Today, the former Blake & Hinkle office is a perfect example of how restoration can bridge the past and the future. A functional, beautiful space full of history, ready to inspire generations to come.',
    beforeImage: '/img/projects/officeBuildingBefore.jpg',
    afterImage: '/img/projects/officeBuildingAfter.png',
  },
  {
    title: 'First Church of Christ Scientist – Paris, TX',
    description:
      'This is what this historic church looked like before our restoration work: worn down, forgotten — yet full of value. We embraced the challenge with responsibility and passion, committed to preserving every original detail. All stained-glass windows were carefully restored — true glass artworks. A demanding and time-consuming process, but the results were absolutely stunning. Project completed. It was costly and took longer than initially planned, especially because we remained faithful to the building’s original details. But every bit of effort was worth it — a source of pride for the city and the nation.',
    beforeImage: '/img/projects/churchBefore.jpg',
    afterImage: '/img/projects/churchAfter.png',
  },
];

export default function ProjectsSection() {
  return (
    <section id='projects-section' className='py-10 md:py-16 bg-[#f5f5f5]'>
      <div className='layout-content-container flex flex-col w-full max-w-[1200px] mx-auto gap-12 px-4'>
        <header className='flex flex-wrap justify-between gap-3'>
          <div className='flex min-w-72 flex-col gap-3'>
            <h1 className='tracking-tight text-5xl font-extrabold leading-tight text-primary-brand'>
              Our Projects
            </h1>
            <p className='text-lg font-normal leading-normal pb-3 pt-1 max-w-2xl text-gray-700'>
              Explore our portfolio of successful revitalization projects, showcasing our commitment
              to preserving history and enhancing communities with innovative design and sustainable
              practices.
            </p>
          </div>
        </header>

        {projects.map((project, index) => (
          <article
            key={project.title}
            className={`w-full rounded-2xl shadow-xl bg-white p-8 md:p-10 border border-gray-100
              ${index % 2 === 0 ? 'flex flex-col-reverse md:flex-row' : 'flex flex-col-reverse md:flex-row-reverse'}
              items-center justify-between gap-8
              transition-transform duration-300 hover:scale-[1.02] hover:shadow-lg
            `}
          >
            <div className='flex flex-col gap-4 flex-grow md:w-1/2'>
              <h2 className='text-4xl font-extrabold'>{project.title}</h2>
              <p>{project.description}</p>
            </div>
            <div className='w-full md:w-1/2 flex-shrink-0 max-w-[600px] max-h-[400px]'>
              <ReactCompareSlider
                itemOne={<ReactCompareSliderImage src={project.beforeImage} alt='Before' />}
                itemTwo={<ReactCompareSliderImage src={project.afterImage} alt='After' />}
              />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

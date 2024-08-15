import type { EducationSection } from '@/types/sections/education-section.types';
import type { ReadonlyDeep } from 'type-fest';
import { website } from '../helpers/links';

const educationSectionData = {
  config: {
    title: 'Education',
    slug: 'education',
    icon: 'fa6-solid:graduation-cap',
    visible: true,
  },
  diplomas: [
    {
      title: 'Systems Engineer',
      institution: 'University of Cartagena, Colombia',
      image: import('@/assets/logos/university-cartagena.png'),
      dates: [new Date('2008.01'), new Date('2013.10')],
      description: 'Skilled in systems design, development, and management.',
      links: [website({ url: 'https://www.unicartagena.edu.co/' })],
    },
    {
      title: 'Certification: Scrum Developer',
      institution: 'Scrum Alliance',
      image: import('@/assets/logos/scrum.png'),
      dates: [new Date('2017-08-30'), new Date('2017-09-30')],
      description: 'Certified in Agile development and Scrum practices.',
      links: [website({ url: 'https://www.scrumalliance.org/' })],
    },
  ],
} as const satisfies ReadonlyDeep<EducationSection>;

export default educationSectionData;

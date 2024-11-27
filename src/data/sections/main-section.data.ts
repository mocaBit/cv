import type { MainSection } from '@/types/sections/main-section.types';
import type { ReadonlyDeep } from 'type-fest';
import { github, linkedin } from '../helpers/links';

const mainSectionData = {
  config: {
    icon: 'fa6-solid:user',
    title: 'Profile',
    slug: 'profile',
    visible: true,
  },
  image: import('@/assets/my-image.jpg'),
  fullName: 'Moises Correa',
  role: 'Senior Javascript Developer',
  details: [
    { label: 'Phone', value: '300 890 3315', url: 'tel:300 890 3315' },
    {
      label: 'Email',
      value: 'correa.moises3@gmail.com',
      url: 'mailto:correa.moises3@gmail.com',
    },
    { label: 'From', value: 'Medellin, Colombia' },
  ],
  pdfDetails: [
    { label: 'Phone', value: '300 890 3315' },
    { label: 'Email', value: 'correa.moises3@gmail.com' },
    {
      label: 'LinkedIn',
      value: '/in/mocabit',
      url: 'https://linkedin.com',
    },
    { label: 'GitHub', value: '/mocaBit', url: 'https://github.com' },
    {
      label: 'Website',
      value: 'moises-correa.com',
      url: '/',
      fullRow: true,
    },
  ],
  description:
    "With a tenure since 2013, I'm a Fullstack Javascript Developer. Specializing in Agile methodologies, I navigate collaborative environments with precision. My focus is translating design into responsive, user-centric interfaces. I bring efficiency and adaptability to every project, ensuring optimal experiences across platforms. With a strategic mindset and keen attention to detail, I contribute a sophisticated perspective to frontend development, aligning seamlessly with evolving industry standards.",
  tags: [
    // { name: 'Open for freelance' }, { name: 'Working on side project' }
  ],
  action: {
    label: 'Download CV',
    url: '/cv.pdf',
    downloadedFileName: 'CV-Moises-Correa.pdf',
  },
  links: [
    github({ url: 'https://github.com/mocaBit' }),
    linkedin({ url: 'https://www.linkedin.com/in/mocabit' }),
  ],
} as const satisfies ReadonlyDeep<MainSection>;

export default mainSectionData;

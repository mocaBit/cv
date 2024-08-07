import type { ExperienceSection } from '@/types/sections/experience-section.types';
import type { ReadonlyDeep } from 'type-fest';
import {
  facebook,
  github,
  instagram,
  linkedin,
  twitter,
  website,
} from '../helpers/links';
import {
  axios,
  chakraUi,
  eslint,
  formik,
  jest,
  nextJs,
  pnpm,
  react,
  reactQuery,
  reactSpring,
  reactTable,
  sentry,
  tailwindCss,
  typescript,
  vite,
  vue,
  git,
  reactDnd,
} from '../helpers/skills';

const experienceSectionData = {
  config: {
    title: 'Work experience',
    slug: 'experience',
    icon: 'fa6-solid:suitcase',
    visible: true,
  },
  jobs: [
    {
      role: 'Senior front-end developer',
      company: 'RCG Logistics LLC',
      image: import('@/assets/logos/rcg.jpeg'),
      dates: [new Date('2021-09-30'), null],
      description: `
        RCG Logistics works with automotive manufacturers, relocation companies, auctions, captive finance companies, dealers, automotive parts distributors and consumers to deliver reliable vehicle shipping options with an emphasis on faster lead times, safe and insured car shipping.


        **Responsabilities**
        ➔ Build reusable and efficient components.
        ➔ Translate design mockups (\`Figma\`) into functional code.
        ➔ Manage application state using \`react-query\`.
        ➔ Managing logistics Orders that consume rest API \`Node.js\` services.
        ➔ Connect the UI to web services and API build in \`Nestjs\`.
        ➔ Identify and address performance bottlenecks.
        ➔ Write unit tests and integration tests to ensure code quality.
        ➔ Participate in code reviews, define coding standards, and contribute to ongoing codebase improvement.
        ➔ Implement designs that adapt to different screen sizes and devices (mobile, tablet, desktop).
        ➔ Build reusable components library with \`Formik\` to deal with forms.
        ➔ Collaborate on deployment strategies and CI/CD configuration.
      `,
      tagsList: {
        title: 'Technologies',
        tags: [
          typescript(),
          react(),
          reactTable(),
          reactQuery(),
          reactSpring(),
          reactDnd(),
          formik(),
          axios(),
          jest(),
          git(),
          sentry(),
          vite(),
        ],
      },
      links: [],
    },
  ],
} as const satisfies ReadonlyDeep<ExperienceSection>;

export default experienceSectionData;

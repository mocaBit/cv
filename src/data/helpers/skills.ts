import createSkillFactory from '@/data/_internals/create-skill-factory';

/*

Place where you can define all your skills.
This way, you can ensure one skill has the same name, icon, and URL among all resume sections.

Where skills are used:
- experience-section.data.ts
- portfolio-section.data.ts
- skills-section.data.ts

Usage examples:
skill() — returns skill object without any customizations.
skill({ level: 3 }) — returns a levelled-skill. It can be used only in skills-section.data.ts.
skill({ name: '...' }) — returns skill object with a custom name.
skill({ description: '...' }) — returns skill with a description displayed when user hovers over it.

*/

export const chakraUi = createSkillFactory({
  name: 'Chakra UI',
  icon: 'simple-icons:chakraui',
  iconColor: '#319795',
  url: 'https://chakra-ui.com/',
});

export const firebase = createSkillFactory({
  name: 'Firebase',
  icon: 'simple-icons:firebase',
  iconColor: '#FFCA28',
  url: 'https://firebase.google.com/',
});

export const nestJs = createSkillFactory({
  name: 'NestJS',
  icon: 'simple-icons:nestjs',
  iconColor: '#E0234E',
  url: 'https://nestjs.com/',
});

export const nx = createSkillFactory({
  name: 'Nx',
  icon: 'simple-icons:nx',
  iconColor: '#143055',
  url: 'https://nx.dev/',
});

export const pnpm = createSkillFactory({
  name: 'pnpm',
  icon: 'simple-icons:pnpm',
  iconColor: '#F69220',
  url: 'https://pnpm.io/',
});

export const supabase = createSkillFactory({
  name: 'Supabase',
  icon: 'simple-icons:supabase',
  iconColor: '#3ECF8E',
  url: 'https://supabase.io/',
});

export const vue = createSkillFactory({
  name: 'Vue.js',
  icon: 'simple-icons:vuedotjs',
  iconColor: '#4FC08D',
  url: 'https://vuejs.org/',
});

// -------------------------------------

export const html5 = createSkillFactory({
  name: 'HTML5',
  icon: 'simple-icons:html5',
  iconColor: '#E34F26',
  url: 'https://developer.mozilla.org/en-US/docs/Glossary/HTML5',
});

export const css3 = createSkillFactory({
  name: 'CSS3',
  icon: 'simple-icons:css3',
  iconColor: '#1572B6',
  url: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
});

export const javascript = createSkillFactory({
  name: 'Javascript',
  icon: 'simple-icons:javascript',
  iconColor: '#F7DF1E',
  url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
});

export const typescript = createSkillFactory({
  name: 'TypeScript',
  icon: 'simple-icons:typescript',
  iconColor: '#3178C6',
  url: 'https://www.typescriptlang.org/',
});

export const react = createSkillFactory({
  name: 'React.js',
  icon: 'simple-icons:react',
  iconColor: '#61DAFB',
  url: 'https://reactjs.org/',
});

export const reactQuery = createSkillFactory({
  name: 'React Query',
  icon: 'simple-icons:reactquery',
  iconColor: '#FF4154',
  url: 'https://tanstack.com/query',
});

export const nodejs = createSkillFactory({
  name: 'Node.js',
  icon: 'simple-icons:nodedotjs',
  iconColor: '#5FA04E',
  url: 'https://nodejs.org/',
});

export const nextJs = createSkillFactory({
  name: 'Next.js',
  icon: 'simple-icons:nextdotjs',
  iconColor: '#000000',
  url: 'https://nextjs.org/',
});

export const storybook = createSkillFactory({
  name: 'Storybook',
  icon: 'simple-icons:storybook',
  iconColor: '#FF4785',
  url: 'https://nextjs.org/',
});

export const jest = createSkillFactory({
  name: 'Jest',
  icon: 'simple-icons:jest',
  iconColor: '#C21325',
  url: 'https://jestjs.io/',
});

export const testinglibrary = createSkillFactory({
  name: 'Jest',
  icon: 'simple-icons:testinglibrary',
  iconColor: '#E33332',
  url: 'https://testing-library.com/',
});

export const postgreSql = createSkillFactory({
  name: 'PostgreSQL',
  icon: 'simple-icons:postgresql',
  iconColor: '#4169E1',
  url: 'https://www.postgresql.org/',
});

export const git = createSkillFactory({
  name: 'Git',
  icon: 'simple-icons:git',
  iconColor: '#F05032',
  url: 'https://git-scm.com/',
});

export const angular = createSkillFactory({
  name: 'Angular',
  icon: 'simple-icons:angular',
  iconColor: '#f60849',
  url: 'https://angular.dev',
});

export const cypress = createSkillFactory({
  name: 'Cypress',
  icon: 'simple-icons:cypress',
  iconColor: '#17202C',
  url: 'https://www.cypress.io/',
});

export const eslint = createSkillFactory({
  name: 'ESLint',
  icon: 'simple-icons:eslint',
  iconColor: '#4B32C3',
  url: 'https://eslint.org/',
});

export const prettier = createSkillFactory({
  name: 'Prettier',
  icon: 'simple-icons:prettier',
  iconColor: '#F7B93E',
  url: 'https://prettier.io/',
});

export const sass = createSkillFactory({
  name: 'SASS',
  icon: 'simple-icons:sass',
  iconColor: '#CC6699',
  url: 'https://sass-lang.com/',
});

export const tailwindCss = createSkillFactory({
  name: 'Tailwind CSS',
  icon: 'simple-icons:tailwindcss',
  iconColor: '#06B6D4',
  url: 'https://tailwindcss.com/',
});

export const vite = createSkillFactory({
  name: 'Vite',
  icon: 'simple-icons:vite',
  iconColor: '#646CFF',
  url: 'https://vitejs.dev/',
});

export const turborepo = createSkillFactory({
  name: 'Turborepo',
  icon: 'simple-icons:turborepo',
  iconColor: '#EF4444',
  url: 'https://turbo.build/',
});

export const webpack = createSkillFactory({
  name: 'Webpack',
  icon: 'simple-icons:webpack',
  iconColor: '#8DD6F9',
  url: 'https://webpack.js.org/',
});

export const redis = createSkillFactory({
  name: 'Redis',
  icon: 'simple-icons:redis',
  iconColor: '#FF4438',
  url: 'https://redis.io/',
});

export const docker = createSkillFactory({
  name: 'Docker',
  icon: 'simple-icons:docker',
  iconColor: '#2496ED',
  url: 'https://www.docker.com/',
});

export const nginx = createSkillFactory({
  name: 'Nginx',
  icon: 'simple-icons:nginx',
  iconColor: '#009639',
  url: 'https://nginx.org/',
});

export const redux = createSkillFactory({
  name: 'Redux',
  icon: 'simple-icons:redux',
  iconColor: '#764ABC',
  url: 'https://redux.js.org/',
});

export const apolloGraphql = createSkillFactory({
  name: 'Apollo GraphQL',
  icon: 'simple-icons:apollographql',
  iconColor: '#311C87',
  url: 'https://www.apollographql.com/',
});

export const d3js = createSkillFactory({
  name: 'D3.js',
  icon: 'simple-icons:d3dotjs',
  iconColor: '#F9A03C',
  url: 'https://d3js.org/',
});

export const mui = createSkillFactory({
  name: 'Material UI',
  icon: 'simple-icons:mui',
  iconColor: '#007FFF',
  url: 'https://mui.com/',
});

export const mobx = createSkillFactory({
  name: 'MobX',
  icon: 'simple-icons:mobx',
  iconColor: '#FF9955',
  url: 'https://mobx.js.org/',
});

export const yup = createSkillFactory({
  name: 'yup',
  url: 'https://www.npmjs.com/package/yup',
});

export const dotnet = createSkillFactory({
  name: 'C#',
  icon: 'simple-icons:dotnet',
  iconColor: '#512BD4',
  url: 'https://dotnet.microsoft.com/en-us/languages/csharp',
});

export const prisma = createSkillFactory({
  name: 'Prisma',
  icon: 'simple-icons:prisma',
  iconColor: '#2D3748',
  url: 'https://www.prisma.io/',
});

export const styledComponents = createSkillFactory({
  name: 'Styled Components',
  icon: 'simple-icons:styledcomponents',
  iconColor: '#DB7093',
  url: 'https://styled-components.com/',
});

export const reactWindow = createSkillFactory({
  name: 'React Window',
  url: 'https://react-window.vercel.app/',
});

export const sentry = createSkillFactory({
  name: 'Sentry',
  icon: 'simple-icons:sentry',
  iconColor: '#362D59',
  url: 'https://sentry.io/',
});

export const jwt = createSkillFactory({
  name: 'JSON Web Tokens',
  icon: 'simple-icons:jsonwebtokens',
  iconColor: '#000000',
  url: 'https://jwt.io/',
});

//jwt.io/

//------LEARNING

export const astro = createSkillFactory({
  name: 'Astro',
  icon: 'simple-icons:astro',
  iconColor: '#FF5D01',
  url: 'https://astro.build/',
});

export const python = createSkillFactory({
  name: 'Python',
  icon: 'simple-icons:python',
  iconColor: '#3776AB',
  url: 'https://www.python.org/',
});

export const mongoDb = createSkillFactory({
  name: 'MongoDB',
  icon: 'simple-icons:mongodb',
  iconColor: '#47A248',
  url: 'https://www.mongodb.com/',
});

export const auth0 = createSkillFactory({
  name: 'Auth0',
  icon: 'simple-icons:auth0',
  iconColor: '#47A248',
  url: 'https://auth0.com/',
});

// ------------------ EXPERIENCE

export const reactTable = createSkillFactory({
  name: 'React Table',
  icon: 'simple-icons:reacttable',
  iconColor: '#47A248',
  url: 'https://tanstack.com/table',
});

export const formik = createSkillFactory({
  name: 'Formik',
  url: 'https://formik.org/',
});

export const fluentUI = createSkillFactory({
  name: 'Fluent UI',
  url: 'https://react.fluentui.dev/',
});

export const axios = createSkillFactory({
  name: 'Axios',
  icon: 'simple-icons:axios',
  iconColor: '#5A29E4',
  url: 'https://axios-http.com/',
});

export const reactRouter = createSkillFactory({
  name: 'React Router',
  icon: 'simple-icons:reactrouter',
  iconColor: '#CA4245',
  url: 'https://reactrouter.com/',
});

export const reactSpring = createSkillFactory({
  name: 'React Spring',
  url: 'https://www.react-spring.dev/',
});

export const reactDnd = createSkillFactory({
  name: 'React DnD',
  url: 'https://github.com/atlassian/react-beautiful-dnd',
});

import type { ExperienceSection } from '@/types/sections/experience-section.types';
import type { ReadonlyDeep } from 'type-fest';
import {
  axios,
  eslint,
  formik,
  jest,
  react,
  reactQuery,
  reactSpring,
  reactTable,
  sentry,
  typescript,
  vite,
  git,
  reactDnd,
  mui,
  auth0,
  mobx,
  reactRouter,
  yup,
  webpack,
  apolloGraphql,
  styledComponents,
  reactWindow,
  jwt,
  ruby,
  dotnet,
  fluentUI,
  d3js,
  redux,
  storybook,
  html5,
  css3,
  cypress,
  jquery,
  angular,
  nodejs,
  docker,
  nginx,
  varnish,
  jenkins,
  newrelic,
  express,
  jsp,
  java,
  javascript,
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
          reactRouter(),
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
    {
      role: 'Senior developer',
      company: 'Indigo AG',
      image: import('@/assets/logos/indigo.png'),
      dates: [new Date('2020-11-30'), new Date('2021-09-30')],
      description: `
        Indigo is leveraging science and technology to help improve the sustainability and profitability of the agriculture industry.
        **Responsabilities**
        ➔ Develop reusable and efficient React components for interactive user interfaces.
        ➔ Manage application state using local and global state mechanisms like \`Redux\` and \`Mobx\`.
        ➔ Collaborate closely with designers and backend developers for effective teamwork.
        ➔ Identify and fix bugs and issues, performing regular maintenance and updates.
        ➔ Document code for clarity and collaboration, and create user documentation when needed.
        ➔ Consume \`graph-ql\` services built over ruby on rails.
      `,
      tagsList: {
        title: 'Technologies',
        tags: [
          typescript(),
          react(),
          ruby(),
          jwt(),
          mui(),
          auth0(),
          mobx(),
          styledComponents(),
          reactRouter(),
          reactWindow(),
          yup(),
          webpack(),
          apolloGraphql(),
          git(),
        ],
      },
      links: [],
    },
    {
      role: 'Fullstack JS/C# developer',
      company: 'Catchpoint',
      image: import('@/assets/logos/catchpoint.png'),
      dates: [new Date('2019-06-30'), new Date('2020-11-30')],
      description: `
        Catchpoint is a mission-driven observability platform focused on enhancing digital experiences from the end-user perspective. With a commitment to improving the digital landscape, Catchpoint empowers teams to take ownership of digital performance. Here I worked on a project named Maestro. This application provides access to comprehensive data and enables users to effortlessly generate dynamic graphs and visualizations. Users can explore and analyze data in real-time, creating customizable dashboards for a quick and visual overview of the information, facilitating informed decision-making.
        **Responsabilities**
        ➔ Create React components for rendering SVG-based graphs.
        ➔ Develop Canvas components for graph rendering, supporting interactive features (including Scatter Plots, Bar Charts, Line
        Charts, Pie Charts, using D3.js and React.js.
        ➔ Implement GraphQL endpoint in C# to handle data queries and mutations.
        ➔ Define GraphQL schema and types for the required data entities.
        ➔ Optimize rendering performance for handling large datasets.
        ➔ Incorporate user interactions, such as zooming and panning in components.
        ➔ Apply styling and theming to ensure a cohesive visual experience across components.
      `,
      tagsList: {
        title: 'Technologies',
        tags: [
          typescript(),
          react(),
          dotnet(),
          fluentUI(),
          d3js(),
          axios(),
          redux(),
          storybook(),
          apolloGraphql(),
          formik(),
          html5(),
          css3(),
          jest(),
          cypress(),
          webpack(),
          sentry(),
          git(),
          jquery(),
        ],
      },
      links: [],
    },
    {
      role: 'Fullstack JS developer',
      company: 'Almundo',
      image: import('@/assets/logos/almundo.png'),
      dates: [new Date('2018-06-30'), new Date('2019-11-30')],
      description: `
        Almundo travel technology company and omnichannel agency in Latin America with a platform that allows users to effortlessly plan and purchase travel packages, flights, hotels, and more.
        **Responsabilities**
        ➔ Design and implement reusable forms for a user-friendly data entry experience.
        ➔ Ensure the forms are responsive and adhere to UI/UX best practices.
        ➔ Implement client-side form validation for data integrity and user feedback.
        ➔ Assess the existing AngularJS application and plan the migration to React rewriting components and forms while
        maintaining functionality.
        ➔ Design and implement RESTful APIs using Node.js
        ➔ Optimize API endpoints for performance and scalability.
        ➔ Configure Varnish to improve the performance of web applications by caching static assets.
        ➔ Containerize the application using Docker for consistent deployment across different environments.
        ➔ Set up Nginx as a reverse proxy to manage incoming requests and distribute them to the appropriate containers.
        ➔ Agile Methodologies: Scrum.
      `,
      tagsList: {
        title: 'Technologies',
        tags: [
          angular(),
          react(),
          git(),
          jquery(),
          nodejs(),
          docker(),
          nginx(),
          varnish(),
          jenkins(),
          webpack(),
          newrelic(),
          html5(),
          css3(),
          jwt(),
          jest(),
          express(),
          cypress(),
          eslint(),
        ],
      },
      links: [],
    },
    {
      role: 'Fullstack Engineer',
      company: 'Ceiba Software',
      image: import('@/assets/logos/ceiba.png'),
      dates: [new Date('2017-07-30'), new Date('2018-06-30')],
      description: `
        Ceiba Software is dedicated to solving business problems through technology. They provide software engineering services tailored to the needs of our customers, so they can become competitive organizations.
        I contributed to Renting Colombia app is a user-friendly platform designed to facilitate the seamless rental of vehicles. Users can easily browse, select, and reserve cars based on their preferences and needs, creating a convenient and efficient rental experience.
        **Responsabilities**
        ➔ Design and implement microservices architecture using C# & NodeJS language.
        ➔ Build responsive and interactive user interfaces using React.js for the frontend application.
        ➔ Develop RESTful APIs for seamless communication between microservices.
        ➔ Ensure cross-browser compatibility and responsiveness in the React.js application.
        ➔ Containerize microservices using Docker for consistent deployment.
        ➔ Participate in agile development processes, attending stand-ups, sprint planning, and retrospective meetings.
        ➔ Agile Methodologies: Scrum.
      `,
      tagsList: {
        title: 'Technologies',
        tags: [
          react(),
          dotnet(),
          nodejs(),
          html5(),
          css3(),
          typescript(),
          docker(),
          git(),
        ],
      },
      links: [],
    },
    {
      role: 'Software Architect',
      company: 'Open International',
      image: import('@/assets/logos/open.png'),
      dates: [new Date('2016-01-30'), new Date('2017-07-30')],
      description: `
        Open International has provided technology that helps Telecommunications and Utility service providers meet their business goals and implement innovative business strategies.
        I focused on developing a billing and measurement module within Open Smartflex application, leveraging PL/SQL. Specializing in query optimization, I implemented multithreading techniques to enhance system performance significantly. This experience honed my PL/SQL skills while ensuring efficient query execution, contributing to the overall success of the project.
        **Responsabilities**
        ➔ Design and implement functionalities using in-house framework.
        ➔ Participate in agile development processes, attending stand-ups, sprint planning, and retrospective meetings.
      `,
      tagsList: {
        title: 'Technologies',
        tags: [dotnet(), html5(), css3()],
      },
      links: [],
    },
    {
      role: 'Fullstack JS/Java Developer',
      company: 'Zabud',
      image: import('@/assets/logos/zabud.png'),
      dates: [new Date('2013-01-30'), new Date('2016-07-30')],
      description: `
        Specializes in creating customized solutions, emphasizing seamless integration, scalability, and optimal performance. Their expertise caters to unique client requirements, supporting businesses across various industries to prosper in the digital landscape.
        I contributed to an educational software, focusing on student grade management. My role involved designing and implementing key features, ensuring an efficient and accurate experience for educators in effectively managing and recording student grades.
        I develop over a healthcare software, specializing in medical appointment management, designing and implementing features to optimize appointment scheduling and coordination, enhancing in medical scheduling and improving the overall patient experience.
      `,
      tagsList: {
        title: 'Technologies',
        tags: [java(), jsp(), git(), javascript(), html5(), css3()],
      },
      links: [],
    },
  ],
} as const satisfies ReadonlyDeep<ExperienceSection>;

export default experienceSectionData;

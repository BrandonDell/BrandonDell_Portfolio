import project1 from '../assets/projects/project-1.jpg';
import project2 from '../assets/projects/project-2.jpg';
import project3 from '../assets/projects/project-3.jpg';
import education1 from '../assets/ucf.jpg';
import education2 from '../assets/fsu.jpg';

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With 5 years of hands-on experience, I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, MySQL, PostgreSQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `Aspiring Junior Developer with a focus on backend web development with PHP and the Laravel framework. Recently graduated from UCF’s full-stack web development program, with hands-on experience in building dynamic web applications and RESTful APIs. Proficient in database management using MySQL, excelling in writing efficient queries and optimizing database performance. Skilled in front-end technologies such as HTML, CSS, and JavaScript, with a proven ability to create responsive and user-friendly interfaces. Experience with GitHub for version control and collaborative development. Committed to deliver high-quality code, eager to learn new technologies, and a team player. `;

export const EXPERIENCES = [
  {
    year: '2019 - 2023',
    role: 'General Manager',
    company: "Marlow's Tavern",
    description: `Accomplished leader with 15 years of management experience in the hospitality industry, specializing in leading and managing teams known for driving operational excellence. Adept at building and mentoring top-performing teams to achieve revenue goals, control costs, and enhance the overall business performance through effective leadership. `,
  },
  {
    year: '2018 - 2019',
    role: 'Sales Agent',
    company: 'State Farm Insurance',
    description: `Responsibilities include new business acquisition, customer service, and training and developing new sales team members. Supported best practices and identified referral and marketing opportunities to help increase marketing and revenue.`,
  },
  {
    year: '2016 - 2018',
    role: 'General Manager',
    company: 'Yard House',
    description: `Dynamic and results-driven manager leading high-volume restaurant operations. Proven track record of driving revenue growth, optimizing operational efficiency, and delivering exceptional guest experiences. Expertise in team leadership, financial management and strategic planning. Committed to uphold the highest standards of food quality, service excellence, and staff development.`,
  },
  {
    year: '2014 - 2015',
    role: 'Franchice Owner/Operator',
    company: 'Hammer Restaurant Group',
    description: `Planned and selected the site for the new location based on business and market analysis.  Raised capital investments to ensure a successful opening.  Maintained strong negotiating and relationship building skills to maintain success with investors, franchisors, marketing agencies, vendors and contractors.`,
    technologies: ['Ruby', 'Rails', 'PHP', 'Sqlite'],
  },
];

export const PROJECTS = [
  {
    title: 'E-Commerce Website',
    image: project1,
    description:
      'A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.',
    technologies: ['HTML', 'CSS', 'React', 'Node.js', 'MongoDB'],
  },
  {
    title: 'Task Management App',
    image: project2,
    description:
      'An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking.',
    technologies: ['HTML', 'CSS', 'Angular', 'Firebase'],
  },
  {
    title: 'Portfolio Website',
    image: project3,
    description:
      'A personal portfolio website showcasing projects, skills, and contact information.',
    technologies: ['HTML', 'CSS', 'React', 'Bootstrap'],
  },
];

export const EDUCATION = [
  {
    title: 'University of Central Florida',
    image: education1,
    description:
      'Full-Stack Web Develpment Certificate',
    technologies: ['HTML', 'CSS', 'React', 'Bootstrap', 'JavaScript', 'SQL', 'Node', 'MongoDB', 'jQuery', 'Tailwinds', 'Materialized', 'GitHub'],
  },
    {
    title: 'Florida State University',
    image: education2,
    description:
      'Bachelor of Social Science, Sociology-Psychology & Business Minors',
  },
];

export const CONTACT = {
  address: '5108 Woodland Ln. Alpharetta, GA 30009 ',
  phoneNo: '561-707-2545 ',
  email: 'bdellcioppia@gmail.com',
};

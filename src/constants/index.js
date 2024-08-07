import project1 from '../assets/projects/root2Roast.png';
import project2 from '../assets/projects/socialMediaApi.png';
import project3 from '../assets/projects/noteTaker.png';
import familyPic from '../assets/familyPic.jpg'
import education1 from '../assets/ucf.jpg';
import education2 from '../assets/fsu.jpg';

export const HERO_CONTENT = `Aspiring Junior Developer with a focus on backend web development with PHP and the Laravel framework. Recently graduated from UCF’s full-stack web development program, with hands-on experience in building dynamic web applications and RESTful APIs. Proficient in database management using MySQL, excelling in writing efficient queries and optimizing database performance. Skilled in front-end technologies such as HTML, CSS, and JavaScript, with a proven ability to create responsive and user-friendly interfaces. Experience with GitHub for version control and collaborative development. Committed to deliver high-quality code, eager to learn new technologies, and a team player.`;

export const ABOUT_TEXT = `I'm a recent graduate from the UCF Full-Stack Coding Bootcamp. I have a passion for technology and coding, and I'm excited to embark on a career in this dynamic field. When I'm not coding, I love spending quality time with family and friends. My hobbies include golfing and riding my Harley, which allow me to unwind and enjoy the great outdoors. I'm always driving myself to take on new challenges, both professionally and personally. `;

export const EXPERIENCES = [
  // {
  //   year: "2024 - Present",
  //   role: "Software Engineer",
  //   company: "Future Company XYZ",
  //   description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
  //   technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
  // },
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
  },
  {
    year: '2008 - 2014',
    role: 'General Manager',
    company: 'Yard House',
    description: `Managed a wide range of business operations for a successful restaurant – including staff hiring, training and development.  Consistently ensured customer satisfaction.  Cost-effectively maintained all inventory levels.  Developed and implemented a successful new training program for recently hired employees.  Managed time tracking and performance review operations for nearly 200 employees.  Accurately performed gap analysis and assessment of current evidence in compliance to procedures and recommended strategies to close gaps.`,
  },
];

export const PROJECTS = [
  {
    title: 'Portfolio Website',
    image: familyPic,
    description:
      'A personal portfolio website showcasing projects, skills, and contact information.',
    technologies: ['HTML', 'CSS', 'React', 'Tailwinds'],
  },
  {
    title: 'Root2Roast',
    image: project1,
    description:
      'A social platform that brings together the passion for gardening and cooking with search engines that allow you to explore new recipes with ingredients from your own garden.',
    technologies: ['HTML', 'CSS', 'React', 'Node.js', 'MongoDB'],
  },
  {
    title: 'Social Connnect API',
    image: project2,
    description:
      'A backend database used to create, read, update, and delete users',
    technologies: ['MongoDB', 'Mongoose', 'Express', 'Node'],
  },
  {
    title: 'Note Taker',
    image: project3,
    description:
      'This task list maker will allow users to create new tasks or notes that will be saved and listed until completed/deleted. ',
    technologies: ['HTML', 'CSS', 'React', 'Tailwinds'],
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

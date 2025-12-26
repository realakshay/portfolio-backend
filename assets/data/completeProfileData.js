const completeProfileData = {
  personal: {
    fName: "Akshay",
    lName: "Gaikwad",
    mobile: "9168871058",
    email: "gaikwadakshay663@gmail.com",
    linkedIn: "linkedin.com/in/realakshay16",
    github: "github.com/realakshay",
    shortBio:
      "A Frontend Developer with 5+ years of experience building clean, scalable, and user-focused web applications using React and modern JavaScript.",
    longBio: [
      "With 5+ years of dedicated experience in frontend development, I specialize in creating high-performance, accessible, and beautiful user interfaces. My journey started with a fascination for turning complex designs into smooth, interactive web experiences.",
      "I thrive in the React ecosystem, deeply leveraging modern JavaScript features and state management tools like Redux and Zustand to build highly maintainable and scalable applications. I'm passionate about performance optimization and cross-browser compatibility. I believe great software is built on clean code, thoughtful design, and continuous learning.",
    ],
  },
  skills: [
    { name: "React", iconName: "FaReact", color: "#61DAFB" }, // Zap for React
    { name: "Next.js", iconName: "FaCode", color: "#000000" }, // FileCode for Next.js
    { name: "TypeScript", iconName: "FaCode", color: "#3178C6" },
    { name: "JavaScript (ES6+)", iconName: "FaJs", color: "#F7DF1E" },
    { name: "Redux/Zustand", iconName: "FaCode", color: "#764ABC" }, // Pill/Generic for state management
    { name: "HTML", iconName: "FaHtml5", color: "#F05032" }, // Palette for styling
    { name: "CSS", iconName: "FaCss3", color: "#06B6D4" }, // Palette for styling
    { name: "Node.js (Basic)", iconName: "FaNodeJs", color: "#339933" },
    { name: "Git, GitHub & CI/CD", iconName: "FaGithub", color: "#F05032" },
    { name: "MongoDB", iconName: "FaDatabase", color: "#FF9900" },
    { name: "Jasmine Unit Testing", iconName: "FaCode", color: "#FF9900" },
  ],
  education: [
    {
      title: "Bachelors of Engineering",
      university: "University of Pune",
      date: " Jun 2015 - Jun 2019",
      description: [
        "Focused on Software Development, Data Structures, and Algorithms.",
        "Completed with 8.41 CGPA",
      ],
    },
  ],
  experience: [
    {
      title: "R&D Engineer",
      company: "DASSAULT SYSTEMS SOLUTIONS LAB",
      date: "Jun 2022 - Present",
      description: [
        "Led the architecture and migration of a legacy monolithic application to a micro-frontend structure using React and Webpack Module Federation.",
        "Developed scalable web applications with ReactJS and Redux, increasing user engagement by 30%.",
        "Designed collaboration widgets and workflows for OEMs and suppliers, streamlining monitoring and reducing admin effort by 15%.",
        "Built dynamic role-based views and event tracking interfaces, improving cross-functional visibility by 15%.",
        "Wrote unit tests using Jasmine, boosting code coverage and reducing post-release bugs by 25%.",
        "Conducted regular performance audits, optimized components, reducing load time by 18%, and implemented accessibility enhancements (WCAG).",
        "Refactored legacy code into modular React components, improving maintainability and consistency.",
      ],
    },
    {
      title: "Frontend Developer",
      company: "ATOS SYNTEL",
      date: "Dec 2019 - Jun 2022",
      description: [
        "Developed and maintained 5+ web applications using ReactJS, JavaScript, HTML, and SCSS.",
        "Built a complete vaccination booking flow, reducing booking time by 40% and increasing user satisfaction.",
        "Implemented asynchronous features using AJAX, improving user interaction time by 25% and fixing key UX bottlenecks.",
        "Created custom reusable components to reduce development time and ensure consistency.",
        "Integrated third-party APIs and services to expand application features with minimal overhead.",
        "Participated in client demos and incorporated feedback for iterative design improvements.",
      ],
    },
  ],
  projects: [
    {
      title: "My Portfolio",
      subtitle: "This site",
      desc: "The very site you are viewing. Features include mobile-first responsiveness, light/dark theme toggle, Framer Motion animations, and an integrated contact form via EmailJS to showcase skills and host work.",
      tags: ["React", "JavaScript", "Redux", "NodeJS", "CSS"],
      link: "#",
    },
    {
      title: "NearByBites ",
      subtitle: "Food Ordering App",
      desc: "A mobile food ordering app with a sleek dark theme. Features include restaurant listing, dynamic menu views, cart/checkout flows, customizable item detail screens, and integrated Google Maps for address picking via reverse geocoding.",
      tags: ["React Native", "JavaScript", "Redux toolkit", "Expo", "Styling"],
      link: "#",
    },
  ],
  testimonial: [
    {
      quote:
        "Akshay was a great professional to work with. We worked together at Atos and he helped me a lot to get started. He is one of the most dedicated professionals I’ve worked with. His expertise as a reactjs developer is considerable, and it helped our team come up with more efficient solutions on many scenarios. His contribution is valuable to the side, and I highly recommend Akshay and would love to work with him again.",
      author: "Aalekh Pradeep",
      company: "Atos Syntel",
    },
    {
      quote:
        "Akshay is an extremely talented developer. He picks up very fast and adds a great value to  the team. Among his various skills he is great at ReactJS and python. He writes clean code and makes it look easy.",
      author: "Pradnyoday Mirajkar",
      company: "Atos Syntel",
    },
    {
      quote:
        "Akshay was a fantastic person to work with, and is not only a multi-skilled and insightful colleague, but also an inspiring strategist. Very good person. Great employee with a very strong problem solving skills. Akshay is an asset to any company.",
      author: "Jahid Quraishi",
      company: "ATOS SYNTEL",
    },
  ],
};
export default completeProfileData;

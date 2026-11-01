// Single source of truth for the site. Every fact below comes from the resume.
// Empty strings are PLACEHOLDERS: fill them in and the matching links turn on automatically.

const base = import.meta.env.BASE_URL

export const resumeUrl = `${base}resume/Varshitha_Vangara_Resume.pdf`

export const profile = {
  name: 'Varshitha Vangara',
  role: 'Java Full Stack Developer',
  location: 'Bengaluru, Karnataka, India',
  languages: 'English, Telugu',
}

// PLACEHOLDERS: the contact details in the resume were not readable. Add the real ones here.
export const contact = {
  email: '', // e.g. 'name@gmail.com'
  linkedin: '', // e.g. 'https://www.linkedin.com/in/your-id'
  github: '', // e.g. 'https://github.com/your-username'
}

export const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'contact', label: 'Contact' },
]

export const skillGroups = [
  { title: 'Languages', items: ['Java', 'SQL', 'JavaScript', 'Python'] },
  { title: 'Core Java', items: ['OOP', 'Collections Framework', 'Exception Handling', 'Strings', 'Multithreading basics'] },
  { title: 'Java web and frameworks', items: ['JDBC', 'Servlets', 'JSP', 'Spring Boot'] },
  { title: 'Databases', items: ['MySQL'] },
  { title: 'Frontend', items: ['HTML5', 'CSS3', 'JavaScript'] },
  { title: 'Tools', items: ['Eclipse IDE', 'Apache Tomcat', 'Git', 'GitHub'] },
  { title: 'Concepts', items: ['Data Structures', 'REST APIs', 'MVC architecture'] },
]

export const foodwala = {
  title: 'Foodwala',
  subtitle: 'Online food ordering web application',
  overview:
    'A full-stack food delivery web application written in Java following the MVC pattern. Visitors browse restaurants, open a restaurant menu, add dishes to a cart, sign up or log in, and check out. It runs on Apache Tomcat with a MySQL database.',
  problem:
    'Ordering from several local restaurants means jumping between menus and starting a new order each time. Foodwala puts restaurant listings, menus, cart and checkout in one place, and keeps a guest’s cart intact when they decide to log in.',
  tech: ['Java', 'Servlets', 'JSP', 'JDBC', 'MySQL', 'Apache Tomcat', 'JavaScript', 'Eclipse'],
  features: [
    'Restaurant listing and a separate menu page for each restaurant',
    'User registration and login',
    'Food cart and checkout flow',
    'MySQL database integration',
    'MVC architecture',
    'JavaScript requests to Java servlets with JSON responses',
    'Guest cart kept after login or signup',
    'Session handling and server-side debugging',
  ],
  contributions: [
    'Built the application in Java following the MVC pattern, covering restaurant listing, per-restaurant menu pages, cart, login and signup, and checkout.',
    'Designed the MySQL schema and wrote JDBC data-access code for restaurants, menu items, users and cart data.',
    'Implemented add-to-cart with JavaScript requests to Java servlets that return JSON, and debugged server-response issues end to end.',
    'Fixed a session-handling issue so a guest user’s cart is retained after login or signup and the user lands on checkout.',
    'Deployed and tested locally on Apache Tomcat, and redesigned the UI for a cleaner, more professional look.',
  ],
  flow: [
    { name: 'Browser', text: 'JavaScript sends the add-to-cart request' },
    { name: 'Servlet', text: 'Controller handles the request and the user session' },
    { name: 'JDBC', text: 'Data-access code reads and writes cart data' },
    { name: 'MySQL', text: 'Restaurants, menu items, users and cart tables' },
  ],
  mvc: [
    { part: 'Model', text: 'MySQL schema and JDBC data-access code' },
    { part: 'View', text: 'JSP pages with JavaScript on the client' },
    { part: 'Controller', text: 'Java servlets that handle requests and return pages or JSON' },
  ],
  // Add real screenshots to public/screenshots and set `src`. A null src shows a marked placeholder.
  screenshots: [
    { src: 'screenshots/foodwala-home.jpg', caption: 'Home page with restaurant search', alt: 'Foodwala home page with the headline Good food, delivered to your door, a search bar and photos of biryani, pizza and pasta' },
    { src: null, caption: 'Restaurant menu page', file: 'foodwala-menu.jpg' },
    { src: null, caption: 'Cart and checkout', file: 'foodwala-cart.jpg' },
    { src: null, caption: 'Login and signup', file: 'foodwala-login.jpg' },
  ],
  // PLACEHOLDERS: set these when the repository exists. The project is not publicly deployed.
  repoUrl: '',
  demoUrl: '',
}

export const education = [
  { degree: 'Master of Computer Applications (MCA)', years: '2024 – 2026', school: 'SVU College Of CM CS, Sri Venkateswara University, Tirupati, Andhra Pradesh', score: '80%' },
  { degree: 'Bachelor of Science (B.Sc): Mathematics, Statistics and Computer Science', years: '2021 – 2024', school: 'D.K Govt College For Women (A), Vikram Simhapuri University', score: '82%' },
]

export const training = [
  {
    title: 'Java Full Stack Development with AI',
    org: 'TAP Academy, Bengaluru (APR_B2 batch)',
    kind: 'Training',
    text: 'Core Java, OOP, Collections, JDBC, Servlets, JSP, SQL, Spring and frontend technologies.',
  },
  { title: 'AI Fundamentals', org: 'IBM SkillsBuild', kind: 'Certification', text: 'Certification in the fundamentals of artificial intelligence.' },
]

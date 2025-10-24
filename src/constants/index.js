import {
  mobile,
  backend,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  ceoitbox,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  resumeFile,
  notes,
  kollab,
  mirraw,
  countryFinder,
  tictactoe,
  chess,
  cbxitImage,
  imsImage,
  helpdesk,
  securewebapp
} from "../assets";


export const userDetails = {
  name: "Raghbir",
  fullName: "Raghbir Singh",
  email: "raghbirsingh9101@gmail.com",
  whatsapp: "+919101151011",
  designation: "Associate Software Developer",
  shortInfo: "I develop Full-Stack Applications,\nscalable backend systems and cloud solutions",
  about: "I'm a skilled software developer with 2 years and 7 months of experience specializing in the MERN/MEAN stack (MongoDB, Express.js, React, Angular, Node.js). I have expertise in JavaScript, TypeScript, Python, and Java, with hands-on experience in building secure, scalable applications including SLM systems, helpdesk tools, and inventory management systems. Proficient in DevOps practices with Docker, NGINX, Kubernetes, CI/CD pipelines (GitHub Actions), and cloud platforms (AWS, Firebase, Azure). I excel at designing REST APIs, implementing authentication (JWT, OAuth2), and managing Linux servers. A strong problem solver with 100+ DSA problems solved on LeetCode and GeeksForGeeks. Let's work together to build efficient, production-ready solutions!",
};


export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

export const resume = resumeFile || "link"; //either store in assets or provide a resume link

const services = [
  {
    title: "Full Stack Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  }
];

const experiences = [
  {
    title: "Associate Software Developer",
    company_name: "CEOITBOX",
    icon: ceoitbox,
    iconBg: "#ffffff",
    date: "Feb 2024 - Present",
    site: "https://ceoitbox.com/",
    points: [
      "Developed secure, scalable applications including link shortener, SLM system, helpdesk, and IMS using MERN/MEAN stack.",
      "Built a dynamic Google Sheets-based table generator with field settings, user roles, and drag-and-drop features.",
      "Managed Linux servers and set up CI/CD pipelines with GitHub Actions and PM2 for automated deployments.",
      "Designed and implemented REST APIs with secure authentication and optimized backend performance.",
    ],
  },
  {
    title: "Software Developer Intern",
    company_name: "CEOITBOX",
    icon: ceoitbox,
    iconBg: "#E6DEDD",
    date: "Apr 2023 - Jan 2024",
    site: "https://ceoitbox.com/",
    points: [
      "Contributed to core features of production-ready web applications including SLM system, link shortener, and helpdesk ticketing tool.",
      "Collaborated with senior developers to build reusable components and optimize backend performance using MERN/MEAN Stack.",
      "Assisted in designing scalable REST APIs, implementing secure user authentication (JWT, OAuth2), and ensuring consistent UI/UX.",
      "Participated in code reviews and implemented best practices for maintainable, production-grade code.",
    ],
  },
  {
    title: "Full-Stack Developer",
    company_name: "The Help Foundation (Intern)",
    // icon: shopify,
    icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAABDbSURBVHgB5VsJdFRVmv7eq0pl30M2spGFhCRAAoRJEAgBREwjItDoTIM4rWO3R+nFoz22zXFaj8exmXFcZjx9etShW1GhERUFQSA0hE0wJBggZCEhIaGSSipJZasktbw3/73vVSUBkq4Ui8P0D5V69eq9++53779+95YAQMbfkGjZn/7+frgvMmRJgtUuw9DSi/LTjSg6WI5BmxWhwUHIzpqImLhQxMSGwsNThCgK0GiUO+12QJJkWAZkXGlqw+XLLfjujBEdnR3QanQoyE/H1OxYxMQHwkMjQhBEyLJA73BLvL29wW6V3QUsywysgLLTtfjzx9+hq6cHWdlxWLAwHYnJYdDScAoyGxJR7SRTJsE5UAKdlGWJn5Nldg21Bwn9ZjsaGzpw5Eg1vjlejeDAQKxcnYncuan8GkHQwB1xC7DSQaXvB4sqsWPHNwgNCsQDD0xH9uwk3nl3Z+DaZynWVl5aj63bz6CzoxMPr5uP7Fnx8PLS8O9F0XXwbgG2S3Y067vx/h+OwGaTseofcpCWEQmRTSXNJBPhZiGGA7RiNtXVBrzz7l8Q7OOHNQ/nICkpEhqRPdO1540bMLO33bvK8Nm281j9owwsXjQVWh3NKFNZppa8OYnb2s0R0iaZtSXDzmaTBtVmlXCgqAIfby7F6rVZWLYsi/sFV+SvAnaoFHtgT68Z//HqPsAsYsNv8hESGngTgY1PWL+6TD14/aWvoQv2xFO/KECAvx//TvEL8nW1bEzAw8EaWrrx3ltHERXngwfXzYGPrwfAHdHNU93xiNI1O2mcgA/+5zBOH6vHxlcfQHhEABzq7TbgVoMJ//L8p1i8YDpWkgopsypwb+mw2dstPDow50l9kGzA0aIG/PmTYjy38QeIjZ/Arxk/YHISbUYTnnv6C/zjP83D3PnxdDF5RuH6eQq3Yf7VUOhxRwOGNIuJXY27ih2PeJ6qutQh+m/Dvr0XcHBfLX75TD4iooJUuxZcByzJNrzxYjHCY73w0PocShZYUJUwmkeUJVH9XgE/vGPuArZa7WhtNcFD68Ed4vB22XU6Tw8EBnpQ3zQUPSS8+/Y+GK+IeO6VxeS9rw1XYwJ+68296Ouw4OlfL6WGtTD3WfDi81+gsaXnmmt5RyQtjXQfomOCsOnf19AIuxeiHIBNJhM2PP4JBgdtsFtFaLS6YddQuzSDMkWNaTP8sfG3K3kfLBYb3vy3XQiJDMT6R+bBw8PjGsDDjFDmLUlkG4eKqmGoHcDPnlXAssb0zR30skEnBF/nFQQP0Y/SwXDUXqI4faWT25c7Pk25RUJVhZ6Og+HjE4GAoHBylAHOl68fvfv48/fa+gGYzVZyJ2zGNXjy6XtRfrQRR4svEha7M447RBz+KHa6ra0b2z46iYefyKbGNUoXBPUWZr+jvVjMFJR2bDY7bli4iSiHI+16pDDfJdklJwYfHw9seL4AW98vQXe3FSPT2WvcrIT33j6CvPx4pKTGcGfxPUUet0QxHw2SUmKwZPkU/OH1Ilzt7JyAmZuvuNAKA6njqlU5ao6qeDrZcZPsYhiSZdzION1IfGe3Mv9x7z2Z0OvbUVXZwbE5tERU+ieTR5Tx4fvHseLBmWTcutGagyvyf6HA9iLVfmhdHv64+RA5M8l53jllFecvoqOtH/mLUnm8vdOFmePfzZ2EAbOFZrneeZ4DlijA791VhTUPTuXqJAh3PgmiGKOA5csz8NXnlU6z5IBbKFeuudiMnNwk1X7uIE81iihehGZ5TiqaDT1oa+3l5zngc2UtmD4zBn7+vjyVkwUJd74oGHx8vZA+LRzHimv5Z85pFR++hB+uybxB7yg4QjaGh3oBkpoPy+jta0Vb5zkYWqsxMGCjTEgk3isWE0Iy4O8XDp2Hv6J6spIT8KjA4iwlECInwlw3teGampubjC0flA4BbmxpRmJKwfDL4arwhkckBiPvZTm2xWrC0VPvoLT8Y5gHusDyeolxWGDvMg984ROSEU7AZ2Y/gNioWbxJu2SBqPWkNNJCn3XjrL+H+jEpMRzNrfohwJHhfvDz88Z4hYG1U5aj1WiGuK6rpL+/BVu2PorQsHjkznwM/QOXKUzI/NGd3XW40nIBlsFetLVfhLGjFmerv0BQQCxdux6FPwzA+RIJDZdE0gb3tc/f3wvxcROGAKdPjhk7o+LZGUsdLfwWkcqxCRFeiEuU4eUL2CwaGBp0qK0jx0BpJRExqlraUdtYgiV3vwCb3Iu9X7+K2Oh0REVNhq/vZNyb8gLNuAll5dtQenYbuntaOY3T09OIrw++DC/PQOQULMCiJYUoOWnFmZI2eHp6K0kRFQ7M1wiSkvcKvKIYrf8ypqbFDAFOmRyh5sNjoJa1/OUbJKOgQIKk+RyNzYxJ7IaPdxCSZ6QhZ/58WHtTKJ/15CopEp2aMXkZHQ/ik90bsfr+V7Dv8BvICL4fSZPyuY36+YRhfu5TmJ65CidPv4cTp/8EVmixbMli60JF9ec0GXswaepduGvhCpQc1OJI2SWy9zBesuqojCW2Wy0fry9ME2MTwpRjBuX0t5cwJWPCqHwvU9eqmkZ88MdDSMssRf2VL0mNtWweqe50JO+k3oxko8OU2DmYmr4U8TG5CA6KVceV+ObBLuKiOhAZEc/udHRHcWzqp/NVu7D/0Cb0DbQ6CjieCXpTJcSywYkRWUhLW4P6am/U11jQY+vEE4/nIzoqgWx9FAaT+n/hggEzZiYqgPV6I4KCvEd1Cgyw0diGPQd/i6aG/VTIKOCUaCdypyPJDv9MZ0SZE+seWh/ERCSTDYWj3diER9fvHNam40hCp6kB+4tfgaGthmuF1W5CT3c3WHccrkGQ1RAgKM/y9vaFThsAC3E8s6evRX7eT8acsK7ufkRFhikq7eunw9ieWUBdYxHZ4z5nBsOGRqMVYGVTqoJWm+cq5OPtg4F+Lan9OYQMxmFJ/m+ueYZCpIv4cPvPERjsw+3e2NmoqDT1jPFVzhLRWcAoBcLggBmDYg+ByETerB9B0ZjRzFIgn+GpHtFVfeYe6rJ2VMyMWTAYq4k+0aC2tgMhYVR020rQoC+m8+d4M+wah2gpvgYGxKNw0UbEx+ZxIGz0h2sQA9tpMsCbvJ6np5eS0tK/DlMNys59iUuXT6BJX87BCQ7lUYUNNOPIk+IXISv1l5iSOVl9xmgA2AKOBF8i8HlTvX290LDOjHID61xrWxd+9eRODErkJclbR0Z5Y+oMD6RmmnDqzH+TbbaQExH52pBCsJHmkEO6p+BZTElZrgLScM/Njkxdl7Fz70v4wZKNqKs7SvF3NbXryQdGoiiwZ9cxyvwMGLRWobRiOyUqvXzmmYr7ePth+rS1aNPnQl/dhWdeKMSYtDEHbKf++CuAu7p7yN40Y2RaMjktPV5+oZgGUqeoIg2QaGdza8LCexMQM6kBlfXbYGy/RO3Y+CIbV3yy59iobLKxDUiIy+Weuan5PM3gAc4r19QXIT25ELNnrkVDQwWSEnP4ZG56pQilxw3wD7Zh/t1piI7ugKm7ngj3CHQ0h6OkVE9Ukg55OYF46lcFUKjj0SfMTvbhT5QQt+HuLjPCQv0wKiPJQ4xI3phirChzClSmcKDRSLQsGog9X7fBd8APuYuexryZPWjtPIC6y8UUkge5s2lqKcVHnz+O8NA0pCbPo7DlR8nHICUhRswih9Pb24qPdzyJQorXjj5QNglfShgki4BDXzWz8A5ZE6LGdwMHp9VZqR+u0EmU1vYO8CMOuKW5C6GhvqO7LbaMyVJAWUOqLyh5OVM9WcvTRBYHrRQ2Dh0249hxO95+93X0musoxOwne9xC3JKJBslGlOtZ4szO0foQMYhUoDO7Ly3/DNETs3Df4hcpr1ZWH5mlSxqVElZTV8FDVup0RsLTOzvmdJogqjn86E6XNWGgBUAn4A5jP1zLnwUIQ86Ye07Od5Oa2ljWQ53q7rPS0owRCZPSsSBvMhbMeQrtnTXELh5He3sN2jsaedYmCh6IjpiGhIRpFK8LqFNaDPdMDK7MtIqBFdWw5Ijd8lBp4oqwy41t5iHADbWtmLcgGTdLlNjJhp9x1XaEhqTR7KWpoYulhOrXfLWCR3EOUTl9a2rxSzUG/s4BV9bpFXL7Bp7FNFBmKS7XQmW2lIpRmRVZcBSNqvIJjuUYhxKrIt8CtoUG9XylUi3xJ9U3tVDCPgB3RU2AVDVXzwlXX6MwEA7y5XYKc1hNhg5+zAHHT4xFbZUB/1/lYlUbJkZF8mMOOIeS6m9O1nEXL98KlfpeRFaXVe2ErRZz56TwsxzwvIIUVJxtRh95WOcy5B0vyuaa3t5BfHuqFtmzJvKzHHBIiCctJIfgRHGlEm9vs43dKmFV0rfHqzE5NQqR0f78HAfMAK5YmYXdu89ixNLKHSzKYrkWO3Z/h7uXZkJUJ1GNBwISksLh7xuBo4cq4aA472Rhs3v4wFkEekxARmYUMBwws1tPnQbrH5+N7VtO0OK3FXe69PdbsXX7Kax7JIewaZ3nR6wPJyUFICExDnv3lKsrbnbnPgq+/OIqQS/Y1fzBfV/gslGpDtZBBbE+s3R056clmBQXS+VrqLrsO0Klh+SxDXOwf285qi9c4TTNyEe72g35+9vSRINcVd2Ew8XVeOQns68Z8pGAaSZ9/TV4aO1d+M9//Qpm8yDghgPTqKsEtzu6MXKB7UV55/dH8ODf5yFsAnHIGEmXaIffwKoSot5w19xUNNa14O3X9uJn/7yUGENPREaGICjERsR513XjtEgrA5LdguBIHZV7EQDc3z3AVDJxoi/KTl0hkkBS2xFHWgjLF4gtDY8Pg6MaGRiw4r9e20OkeyAKFqYpl101x6Ps4pH5Qze9/AW8dDpseOYeWtuhRXMqxltbu66b4DOmkt0TGRkMrVYLd4UPJvkKVnG1tfbx/SKsuJB4oS+rWKkWl+zEXHpRDuFDE0WMFV3/4eYTaDEY8czzy6n8HO8+LVKPdqoh3/rdPuTOm4TC5dOVkRTl62q5LAvOQvxG7JeTgYyKlWQoNLNzZ8uwqwRndackSiKO/eUC/rT5IF5+bR2psr+6yxauA+bPINj6xh787qWdKFyWTdxVKq3xsNkTuTccvldZdlayN+6s/lqpKnFvzAZW4sX3jg9LKX84j1+/tBIRlFGNxq+7vH3YaOwlAm87MjPi8OOfLuRhR6Fdvx9PLPERsaO328rzhhbyKz9+ooCY1MAx02KXAMtQNnKa+2z4/Ru70dPZj188dz+CQn2cu+1utzDAHUYz3tz0JTy9Nfj5s/fRYgLj18b2HePcIK6EmX27zuKzrSW4b800LF46je/Uw1VJxs2aeflquyW/YrXYUVx0AZ9uKcWyNTOwlHwLc5iuFDxu/QSAjW5jQxu2fUCrDi19ePSnS5GaHkIPdYyujJu1cVzJ9hR7lohXrqzoxEebj8A/AFj/2CKy1yCXd8Mzce9XLbLyyxPLoIQzZZex5d2jCAkMQeGqFOTkpahLIzdn2xPjvplzKjl5Ebt3VBHd240VD80kwnGK4rDGGRHc/BmPkltzrlrhHflPbXZ/Vga9wYRZOemYvyARcQnh8PPTqL81kpT7nEuk8rAEiG98wNASnY1Ielq8q2nBgQNVOFtei8jwAKxYnYvpM+Io5jrUd2i18hYDvr5YKevRX+nEmdJaHD9UjQGzlZKCEEyZEYWo6EDExYfD11tLaefIVM9ul6mykVHfYKAFgR6Un9ajs6sdXt4iFizMQFZ2MiUztESiuXG/4ASMvyH5Xxx+a0TMTBDFAAAAAElFTkSuQmCC",
    iconBg: "#383E56",
    date: "Feb 2023 - Apr 2023",
    site:"https://helpprojectfoundation.in/Team",
    points: [
      'Teamed with other fellow Intern to create a website for "The Help Foundation" NGO.',
      "Learned and implemented various skills regarding coding and web development.",
    ],
  },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  // {
  //   name: "Three JS",
  //   icon: threejs,
  // },
  {
    name: "git",
    icon: git,
  },
  // {
  //   name: "figma",
  //   icon: figma,
  // },
  {
    name: "docker",
    icon: docker,
  },
];

const projects = [
  {
    name: "Inventory Management System",
    description:
      "Built a full-fledged Inventory Management System using MERN stack with modules for stock tracking, product categorization, supplier management, and low inventory alerts. Integrated user roles and permissions for secure access control. Deployed on Ubuntu with Docker containers and NGINX as reverse proxy.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "node.js",
        color: "pink-text-gradient",
      },
      {
        name: "docker",
        color: "blue-text-gradient",
      },
    ],
    image: imsImage,
    source_code_link: null,
    projectLink: null,
  },
  {
    name: "Link Shortener Platform",
    description:
      "Created a secure and scalable link shortening service with custom URL generation, analytics tracking, QR code generation, and user dashboard. Implemented rate limiting and authentication for enhanced security.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "node.js",
        color: "green-text-gradient",
      },
      {
        name: "jwt",
        color: "pink-text-gradient",
      },
    ],
    image: cbxitImage,
    source_code_link: null,
    projectLink: "https://cbxit.in",
  },
  {
    name: "Helpdesk Ticketing Tool",
    description:
      "Built a comprehensive helpdesk system with ticket management, priority assignment, user roles, status tracking, and real-time notifications. Integrated search functionality and reporting features for enhanced support management.",
    tags: [
      {
        name: "mean-stack",
        color: "blue-text-gradient",
      },
      {
        name: "websockets",
        color: "green-text-gradient",
      },
      {
        name: "rest-api",
        color: "pink-text-gradient",
      },
    ],
    image: helpdesk,
    source_code_link: null,
    projectLink: null,
  },
  {
    name: "Secure WebApp",
    description:
      "Developed a Google Sheets-based dynamic table generator with customizable field settings, user role management, drag-and-drop functionality, and real-time collaboration features for enhanced data management.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "google-api",
        color: "green-text-gradient",
      },
      {
        name: "typescript",
        color: "pink-text-gradient",
      },
    ],
    image: securewebapp,
    source_code_link: null,
    projectLink: "https://secure.ceoitbox.com/",
  },
];

const testimonials = [
  {
    testimonial:
      "Raghbir is an exceptional developer with strong technical skills in full-stack development. His ability to handle complex projects and deliver scalable solutions has been invaluable to our team.",
    name: "Malikrehan Meeranaik",
    designation: "Software Engineer",
    company: "BrainerHub Solutions",
    image: "https://avatars.githubusercontent.com/u/113381261?v=4",
  },
  {
    testimonial:
      `Working with Raghbir was a great experience. His expertise in DevOps and backend development helped streamline our deployment processes significantly. Highly recommend!`,
    name: "Amit Chakraborty",
    designation: "Sr. Developer",
    company: "Crosslynx",
    image: "https://media.licdn.com/dms/image/v2/D5603AQHo7YQ_W_ky3g/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1718488991164?e=1762992000&v=beta&t=2-mGOkuCzPO3nSGlc8fYlOdN7dsYd0IbNJtYNHNNb28",
  },
  {
    testimonial:
      `Raghbir demonstrated excellent problem-solving skills and a strong work ethic during his internship. His contributions to our NGO website were outstanding and professional.`,
    name: "Mohit Kumar",
    designation: "Dev",
    company: "FixItWizards",
    image: "https://avatars.githubusercontent.com/u/114150173?v=4",
  },
  
];

export { services, technologies, experiences, testimonials, projects };

// Import images
import Image1 from "../images/ui-project-1.jpg";
import Image2 from "../images/web-project-2.jpg";
import Image3 from "../images/mobile-project-2.jpg";
import Image4 from "../images/mobile-project-1.jpg";
import Image5 from "../images/web-project-1.jpg";
import Image6 from "../images/ui-project-2.jpg";
import A34 from "../images/projects/A34.png";
import A35 from "../images/projects/A35.png";
import A36 from "../images/projects/A36.png";

import A37 from "../images/projects/A37.png";
import A38 from "../images/projects/A38.png";
import A39 from "../images/projects/A39.png";

import A41 from "../images/projects/A41.png";
import A42 from "../images/projects/A42.png";
import A43 from "../images/projects/A43.png";

import A45 from "../images/projects/A45.jpeg";
import A46 from "../images/projects/A46.webp";
import A47 from "../images/projects/A47.jpeg";

import A53 from "../images/projects/A53.png";
import A54 from "../images/projects/A54.jpg";
import A55 from "../images/projects/A55.jpeg";

import A49 from "../images/projects/A49.jpeg";
import A50 from "../images/projects/A50.jpeg";
import A51 from "../images/projects/A51.jpeg";

import A66 from "../images/projects/A66.png";
import A69 from "../images/projects/A69.png";
import A68 from "../images/projects/A68.png";

import A70 from "../images/projects/A70.jpeg";
import A71 from "../images/projects/A71.jpg";
import A74 from "../images/projects/A74.jpg";

import A75 from "../images/projects/A75.png";
import A77 from "../images/projects/A77.png";
import A78 from "../images/projects/A78.png";

import A79 from "../images/projects/A79.png";
import A80 from "../images/projects/A80.png";
import A81 from "../images/projects/A81.png";

import A82 from "../images/projects/A82.jpg";
import A83 from "../images/projects/A83.jpg";
import A87 from "../images/projects/A87.jpg";

import A100 from "../images/projects/A100.jpg";
import A101 from "../images/projects/A101.jpg";
import A102 from "../images/projects/A102.jpg";
import A103 from "../images/projects/A103.jpg";

import Lb1 from "../images/projects/Lb3.png";
import Lb2 from "../images/projects/Lb4.png";
import Lb3 from "../images/projects/Lb5.png";

import H1 from "../images/projects/H1.png";
import H2 from "../images/projects/H2.png";
import H3 from "../images/projects/H3.png";

import LH1 from "../images/projects/LH1.png";
import LH2 from "../images/projects/LH2.png";
import LH3 from "../images/projects/LH3.png";

export const singleProjectData = {


  libralink: {
    ProjectHeader: {
      title: "LibraLink",
      publishDate: "Oct 10, 2023",
      tags: "Libralink is a library management system designed to bridge gap between books and users.",
    },
    ProjectImages: [
      {
        id: 1,
        title: "LibraLink",
        img: Lb1,
      },
      {
        id: 2,
        title: "LibraLink",
        img: Lb2,
      },
      {
        id: 3,
        title: "LibraLink",
        img: Lb3,
      },
    ],
    ProjectInfo: {
      ClientHeading: "About Project",
      CompanyInfo: [
        {
          id: 1,
          title: "Name",
          details: "LibraLink",
        },
        {
          id: 2,
          title: "Services",
          details: "Web Development",
        },
        {
          id: 3,
          title: "GitHub Link",
          details: "https://github.com/umar-7w4/LibraLink/",
        },
      ],
      Technologies: [
        {
          title: "Tools & Technologies",
          techs: [
            "Java Spring Boot",
            "Spring Data JPA",
            "JWT (JSON Web Tokens)",
            "PostgreSQL",
            "HTML",
            "CSS",
            "JavaScript",
          ],
        },
      ],
      ProjectDetailsHeading: "Description",
      ProjectDetails: [
        {
          id: 1,
          details:
            "Implemented secure user authentication and role-based authorization using Spring Security and JWT. Ensured that only authorized users can access specific functionalities.",
        },
        {
          id: 2,
          details:
            "Developed CRUD (Create, Read, Update, Delete) operations for various entities, including books, book copies, branches, checkouts, employees, fines, inventory, job roles, members, and users. Utilized Spring Data JPA for efficient database interactions.",
        },
        {
          id: 3,
          details:
            "Created custom exception classes for each entity to handle errors gracefully. Implemented a global exception handler to centralize error management. Designed repository interfaces and service layers for each entity to encapsulate business logic and database interactions. Ensured separation of concerns and maintainability.",
        },
        {
          id: 4,
          details:
            "Configured security settings using SecurityUtilityConfig and WebSecurityConfig, enhancing data security and user privacy. Developed utility classes such as PasswordUtil for secure password handling, TokenUtil for token management, and ValidationUtil for data validation.",
        },
        {
          id: 5,
          details:
            "Created HTML, CSS, and JavaScript files for various pages, including login, signup, book management, book copy management, checkout, member management, employee management, and a dashboard. Utilized JavaScript for client-side interactions and visual elements. Designed a dashboard page that presents summary statistics using charting libraries, facilitating data-driven decision-making.",
        },
        {
        id: 6,
          details:
            "The project is poised for future enhancements, including additional features, improved user interfaces, and enhanced data analytics capabilities.",
        },
      ],
      SocialSharing: [],
    },
    RelatedProject: {
      title: "Related Projects",
      Projects: [
        {
          id: 1,
          title: "Mobile UI",
          img: Image4,
        },
        {
          id: 2,
          title: "Web Application",
          img: Image5,
        },
        {
          id: 3,
          title: "UI Design",
          img: Image6,
        },
        {
          id: 4,
          title: "Kabul Mobile App UI",
          img: Image3,
        },
      ],
    },
  },

  homex: {
    ProjectHeader: {
      title: "HomeX",
      publishDate: "Nov 13, 2023",
      tags: "HomeX is a real-rstate web application that allows users to buy and sell their properties.",
    },
    ProjectImages: [
      {
        id: 1,
        title: "HomeX",
        img: H1,
      },
      {
        id: 2,
        title: "HomeX",
        img: H2,
      },
      {
        id: 3,
        title: "HomeX",
        img: H3,
      },
    ],
    ProjectInfo: {
      ClientHeading: "About Project",
      CompanyInfo: [
        {
          id: 1,
          title: "Name",
          details: "HomeX",
        },
        {
          id: 2,
          title: "Services",
          details: "Web Development",
        },
        {
          id: 3,
          title: "GitHub Link",
          details: "https://github.com/umar-7w4/Homex",
        },
      ],
      Technologies: [
        {
          title: "Tools & Technologies",
          techs: [
            "PHP",
            "MySQL",
            "HTML",
            "CSS",
            "JavaScript",
          ],
        },
      ],
      ProjectDetailsHeading: "Description",
      ProjectDetails: [
        {
          id: 1,
          details:
            "Developed architectural design and development, leveraging PHP and MySQL for backend processing and data management. This choice was strategic, aiming to harness PHP’s robust server-side scripting and MySQL’s efficient data handling capabilities.",
        },
        {
          id: 2,
          details:
            "Crafted user interface using HTML, CSS, and JavaScript, focusing on creating a responsive and user-friendly experience. My work included integrating interactive elements and animations to enhance usability and engagement, ensuring the system's adaptability across various devices and screen sizes.",
        },
        {
          id: 3,
          details:
            "My role extended to the development of key functionalities tailored for different user groups. I implemented a dynamic system where administrators have extensive control over property listings and client accounts, while clients benefit from an advanced search feature, enriching their property finding experience.",
        },
        {
          id: 4,
          details:
            "Recognizing the importance of financial planning in real estate transactions, I integrated a loan calculator tool within the application. This feature aids clients in making informed financial decisions, a testament to my commitment to adding value beyond basic functionalities.",
        },
        {
          id: 5,
          details:
            "As the project is in its developmental stage, I have been actively involved in iterative development. This includes planning for future enhancements and incorporating user feedback to refine the application continuously, demonstrating my adaptive and responsive approach to software development.",
        },
        {
        id: 6,
          details:
            " Looking ahead, my focus is on expanding the feature set of the system, enhancing its security measures, and further refining the user interface. My goal is to evolve the application into a more comprehensive, secure, and seamless tool for real estate management, in line with emerging needs and technological advancements.",
        },
      ],
      SocialSharing: [],
    },
    RelatedProject: {
      title: "Related Projects",
      Projects: [
        {
          id: 1,
          title: "Mobile UI",
          img: Image4,
        },
        {
          id: 2,
          title: "Web Application",
          img: Image5,
        },
        {
          id: 3,
          title: "UI Design",
          img: Image6,
        },
        {
          id: 4,
          title: "Kabul Mobile App UI",
          img: Image3,
        },
      ],
    },
  },


  basketo: {
    ProjectHeader: {
      title: "Basketo",
      publishDate: "Jul 26, 2022",
      tags: "A cryptocurrency market place that allows retail investors to invest in crypto baskets.",
    },
    ProjectImages: [
      {
        id: 1,
        title: "Basketo",
        img: A34,
      },
      {
        id: 2,
        title: "Basketo",
        img: A35,
      },
      {
        id: 3,
        title: "Basketo",
        img: A36,
      },
    ],
    ProjectInfo: {
      ClientHeading: "About Project",
      CompanyInfo: [
        {
          id: 1,
          title: "Name",
          details: "Basketo finance Ltd",
        },
        {
          id: 2,
          title: "Services",
          details: "Web3",
        },
        {
          id: 3,
          title: "Website",
          details: "https://www.basketofinance.com/",
        },
      ],
      Technologies: [
        {
          title: "Tools & Technologies",
          techs: [
            "React",
            "Next.js",
            "Node.js",
            "Express",
            "Vue.js",
            "TailwindCSS",
            "AdobeXD",
          ],
        },
      ],
      ProjectDetailsHeading: "Description",
      ProjectDetails: [
        {
          id: 1,
          details:
            "Built a decentralized marketplace for investing, tracking, and managing crypto baskets, allowing retail crypto investors to access professional investment strategies and diversify their crypto portfolios with minimal effort. Used React, Next.js, and Material UI for the frontend, and Node.js and Express for the backend. Used MongoDB for data retrieval, and the platform integrated with the blockchain through Ethers, a widely-used JavaScript library for Ethereum interactions. Additionally, Developed a component that facilitated Basketo’s integration with Coinbase and MetaMask wallets, enabling users to securely store and manage their digital assets.",
        },
        {
          id: 2,
          details:
            "Established a robust basket management system for Basketo users, organizing and directing the development of a platform that allow users access to a diverse range of crypto baskets created by fellow Basketo users. This enabled real-time tracking, value evaluation, and accurate historical performance analysis. Streamlined asset allocation and basket composition on the platform, optimized algorithm multiple times to provide accurate real-time analysis through a user-friendly dashboard.",
        },
        {
          id: 3,
          details:
            "Accomplished significant goals while working closely with other developers as a strong team. Written unit test cases, fixed critical bugs, and optimized web application’s performance. Followed agile methodologies through out the development process with regular sprints. Investigated and identified latest developments in web3 and blockchain technology, which helped in making critical decisions with respect to Basketo’s growth.",
        },
      ],
      SocialSharing: [],
    },
    RelatedProject: {
      title: "Related Projects",
      Projects: [
        {
          id: 1,
          title: "Mobile UI",
          img: Image4,
        },
        {
          id: 2,
          title: "Web Application",
          img: Image5,
        },
        {
          id: 3,
          title: "UI Design",
          img: Image6,
        },
        {
          id: 4,
          title: "Kabul Mobile App UI",
          img: Image3,
        },
      ],
    },
  },

  webox: {
    ProjectHeader: {
      title: "Webox",
      publishDate: "Mar 17, 2022",
      tags: "A smart contract market place to help blockchain developers.",
    },
    ProjectImages: [
      {
        id: 1,
        title: "Webox",
        img: A37,
      },
      {
        id: 2,
        title: "Webox",
        img: A38,
      },
      {
        id: 3,
        title: "Webox",
        img: A39,
      },
    ],
    ProjectInfo: {
      ClientHeading: "About Project",
      CompanyInfo: [
        {
          id: 1,
          title: "Name",
          details: "Webox Ltd",
        },
        {
          id: 2,
          title: "Services",
          details: "Web3",
        },
        {
          id: 3,
          title: "Website",
          details: "https://www.webox.tech/",
        },
      ],
      Technologies: [
        {
          title: "Tools & Technologies",
          techs: [
            "HTML",
            "CSS",
            "JavaScript",
            "Vue.js",
            "TailwindCSS",
            "AdobeXD",
            "React",
            "Next JS",
            "Material UI",
          ],
        },
      ],
      ProjectDetailsHeading: "Description",
      ProjectDetails: [
        {
          id: 1,
          details:
            "Webox is a platform that offers a marketplace for web3 smart contracts. This platform provides an opportunity for businesses and developers to explore, publish, and test smart contracts that can be integrated into their applications. By installing the Webox SDK and connecting to their web3 wallets, users can easily use the example code and smart contract documentation provided by the platform to integrate the contract functions into their applications.",
        },
        {
          id: 2,
          details:
            "The platform has three main features: Explore, Publish, and Playground. Explore allows users to browse and view various smart contracts by using different filters and search criteria. Publish enables users to share their own smart contracts with the wider community and generate documentation for others to discover and use. Playground is a testing environment where users can experiment with the functions of their smart contracts before deploying them. The interface is user-friendly, and the platform provides comprehensive documentation to make the process easier for everyone.",
        },
        {
          id: 3,
          details:
            "In summary, Webox provides a convenient marketplace for businesses and developers to explore, publish, and test smart contracts for integration into their applications, with easy-to-use tools and documentation.",
        },
      ],
      SocialSharing: [],
    },
    RelatedProject: {
      title: "Related Projects",
      Projects: [
        {
          id: 1,
          title: "Mobile UI",
          img: Image4,
        },
        {
          id: 2,
          title: "Web Application",
          img: Image5,
        },
        {
          id: 3,
          title: "UI Design",
          img: Image6,
        },
        {
          id: 4,
          title: "Kabul Mobile App UI",
          img: Image3,
        },
      ],
    },
  },

  voting: {
    ProjectHeader: {
      title: "ElectionGuard - Blockchain Powered Voting System",
      publishDate: "December 20, 2020",
      tags: "A blockchain based voting system that allows users to cast vote securely.",
    },
    ProjectImages: [
      {
        id: 1,
        title: "Voting",
        img: A45,
      },
      {
        id: 2,
        title: "Voting",
        img: A46,
      },
      {
        id: 3,
        title: "Voting",
        img: A47,
      },
    ],
    ProjectInfo: {
      ClientHeading: "About Project",
      CompanyInfo: [
        {
          id: 1,
          title: "Name",
          details: "Vel Tech",
        },
        {
          id: 2,
          title: "Services",
          details: "Voting",
        },
      ],
      Technologies: [
        {
          title: "Tools & Technologies",
          techs: [
            "HTML",
            "CSS",
            "JavaScript",
            " Bootstrap",
            "Angular",
            "Ether",
            "GETH",
            "Node JS",
            "Vue JS",
          ],
        },
      ],
      ProjectDetailsHeading: "Roles and Responsibilities",
      ProjectDetails: [
        {
          id: 1,
          details:
            "Designed a scalable voting system for university elections with 1000+ registrations and 600+ concurrent voters.",
        },
        {
          id: 2,
          details:
            "Implemented a voter registration module with Node; used SMS verification via Twilio for voter ID authenticity.",
        },
        {
          id: 3,
          details:
            "Deployed smart contracts on the blockchain for transparent vote tallying and automatic transaction handling.",
        },
        {
          id: 4,
          details:
            "Partnered with a senior research scholar to leverage AutoEncoders model to detect irregular voting patterns.",
        },
        {
          id: 5,
          details:
            "Hosted the application on AWS, optimized performance with Linux tool htop; ensured consistent system uptime.",
        },
      ],
      SocialSharing: [],
    },
    RelatedProject: {
      title: "Related Projects",
      Projects: [
        {
          id: 1,
          title: "Mobile UI",
          img: Image4,
        },
        {
          id: 2,
          title: "Web Application",
          img: Image5,
        },
        {
          id: 3,
          title: "UI Design",
          img: Image6,
        },
        {
          id: 4,
          title: "Kabul Mobile App UI",
          img: Image3,
        },
      ],
    },
  },

  doctor: {
    ProjectHeader: {
      title: "Healthcare Scheduling Application",
      publishDate: "May 26, 2021",
      tags: "An appointment scheduling application that allows users to schedule direct appointment with doctors based on location.",
    },
    ProjectImages: [
      {
        id: 1,
        title: "Doctor",
        img: A49,
      },
      {
        id: 2,
        title: "Doctor",
        img: A50,
      },
      {
        id: 3,
        title: "Doctor",
        img: A51,
      },
    ],
    ProjectInfo: {
      ClientHeading: "About Project",
      CompanyInfo: [
        {
          id: 1,
          title: "Name",
          details: "Vel Tech",
        },
        {
          id: 2,
          title: "Services",
          details: "Healthcare",
        },
      ],
      Technologies: [
        {
          title: "Tools & Technologies",
          techs: [
            "HTML",
            "CSS",
            "JavaScript",
            "Bootstrap",
            "Angular",
            "Springboot",
            "MySQL",
          ],
        },
      ],
      ProjectDetailsHeading: "Description",
      ProjectDetails: [
        {
          id: 1,
          details:
            "The Doctor Appointment Application is an online system that enables patients to schedule an appointment with a doctor at their convenience. This application has several modules that allow patients to book appointments and share feedback based on their personal experiences with the doctor.",
        },
        {
          id: 2,
          details:
            "Hospital authorities manage this web application, where administrators add details of doctors, which are then stored in the database. Patients register by providing necessary treatment-related information and can book appointments based on doctor availability. After booking an appointment, patients can visit the doctor at their given time and provide feedback about their experience.",
        },
        {
          id: 3,
          details:
            "To develop this system, we utilized a range of web technologies, frameworks, and searching/sorting algorithms. The front-end of the application was built using React, Angular, Typescript, HTML5, CSS3, and Bootstrap. Meanwhile, the back-end was developed using Spring framework, Spring boot, Java Junit, MySQL, Maven, and Node JS. We followed all phases of the Software Development Life Cycle (SDLC) and adopted a Test-Driven Development (TDD) approach to implement features.",
        },
      ],
      SocialSharing: [],
    },
    RelatedProject: {
      title: "Related Projects",
      Projects: [
        {
          id: 1,
          title: "Mobile UI",
          img: Image4,
        },
        {
          id: 2,
          title: "Web Application",
          img: Image5,
        },
        {
          id: 3,
          title: "UI Design",
          img: Image6,
        },
        {
          id: 4,
          title: "Kabul Mobile App UI",
          img: Image3,
        },
      ],
    },
  },

  leave: {
    ProjectHeader: {
      title: "Web-Based Leave Management Application",
      publishDate: "May 5th, 2020",
      tags: "A web-based system that allows users to apply leaves and admins to approve leaves on daily basis.",
    },
    ProjectImages: [
      {
        id: 1,
        title: "Leave",
        img: A53,
      },
      {
        id: 2,
        title: "Leave",
        img: A54,
      },
      {
        id: 3,
        title: "Leave",
        img: A55,
      },
    ],
    ProjectInfo: {
      ClientHeading: "About Project",
      CompanyInfo: [
        {
          id: 1,
          title: "Name",
          details: "Vel Tech",
        },
        {
          id: 2,
          title: "Services",
          details: "Management",
        },
      ],
      Technologies: [
        {
          title: "Tools & Technologies",
          techs: [
            "HTML",
            "CSS",
            "JavaScript",
            "Bootstrap",
            "Angular",
            "Springboot",
            "MySQL",
          ],
        },
      ],
      ProjectDetailsHeading: "Description",
      ProjectDetails: [
        {
          id: 1,
          details:
            "The Leave Management System is a web application designed to simplify the process of managing faculty and staff leave requests for a University or college. The system tracks user leave requests, approvals, and denials while providing the admin with real-time data on user absences. The Leave Management System was developed using a combination of Node.js, React, MySQL, HTML5, CSS3, Bootstrap, and other web technologies. The application is designed to be user-friendly, with a simple and intuitive interface that is easy to navigate.",
        },
        {
          id: 2,
          details:
            "Faculties and other staff can access the system to request leave, view their leave balances, and track the status of their requests. Admin can view all leave requests, approve or deny requests, and monitor facullty/staff leave balances. The system was implemented by my B.Tech college to manage faculties and other staff's leave requests. Users could log in to the system using their college email address and request leave for various reasons, such as medical appointments, family events, or personal time off. The system streamlined the process of managing faculty and staff leave requests, reducing administrative burden and increasing efficiency.",
        },
        {
          id: 3,
          details:
            "Overall, the Leave Management System is an effective tool for managing staff leave requests in a university, and can be customized to fit the specific needs of any business or educational institution. The use of Node.js, React, MySQL, and other web technologies ensures a high level of reliability, scalability, and security.",
        },
      ],
      SocialSharing: [],
    },
    RelatedProject: {
      title: "Related Projects",
      Projects: [
        {
          id: 1,
          title: "Mobile UI",
          img: Image4,
        },
        {
          id: 2,
          title: "Web Application",
          img: Image5,
        },
        {
          id: 3,
          title: "UI Design",
          img: Image6,
        },
        {
          id: 4,
          title: "Kabul Mobile App UI",
          img: Image3,
        },
      ],
    },
  },

  healthy: {
    ProjectHeader: {
      title: "The Healthy Eating Experience",
      publishDate: "January 7, 2020",
      tags: "Website",
    },
    ProjectImages: [
      {
        id: 1,
        title: "Healthy",
        img: A41,
      },
      {
        id: 2,
        title: "Healthy",
        img: A42,
      },
      {
        id: 3,
        title: "Healthy",
        img: A43,
      },
    ],
    ProjectInfo: {
      ClientHeading: "About Project",
      CompanyInfo: [
        {
          id: 1,
          title: "Name",
          details: "Umar 7W4",
        },
        {
          id: 2,
          title: "Services",
          details: "Education",
        },
        {
          id: 3,
          title: "Website",
          details: "https://umar-7w4.github.io/foodiefuel/",
        },
      ],
      Technologies: [
        {
          title: "Tools & Technologies",
          techs: ["HTML", "CSS", "JavaScript", "Bootstrap"],
        },
      ],
      ProjectDetailsHeading: "Description",
      ProjectDetails: [
        {
          id: 1,
          details:
            "In today's world, it is essential to maintain a strong immune system to stay healthy and protect ourselves from deadly diseases. This website focuses on healthy eating habits, especially on foods that boost our immune system. The COVID-19 pandemic has emphasized the importance of immunity, and incorporating immune-boosting foods into our diets is crucial. Consuming a well-balanced diet that includes high immune food materials such as fruits, vegetables, whole grains, lean protein sources, nuts, and seeds is an effective way to boost our immune system.",
        },
        {
          id: 2,
          details:
            "Users can explore and discover a range of crypto baskets that suit their investment goals and risk profiles. They can invest in these baskets with ease, track their performance in real-time, and have full control over their funds. Basketo also provides a self-custodian wallet for secure storage of funds. The platform is accessible and user-friendly for retail crypto investors of all levels, offering a range of tools and services for creators and investors, including support for multiple blockchains and marketplace analytics.",
        },
        {
          id: 3,
          details:
            "Getting started with Basketo is easy. Users simply need to visit the website and connect their crypto wallet. There may be minimum investment amounts for certain crypto baskets, which users can refer to in the individual offerings. Basketo is an ideal platform for retail crypto investors who want to explore different investment options and manage their portfolio with minimal effort.",
        },
      ],
      SocialSharing: [],
    },
    RelatedProject: {
      title: "Related Projects",
      Projects: [
        {
          id: 1,
          title: "Mobile UI",
          img: Image4,
        },
        {
          id: 2,
          title: "Web Application",
          img: Image5,
        },
        {
          id: 3,
          title: "UI Design",
          img: Image6,
        },
        {
          id: 4,
          title: "Kabul Mobile App UI",
          img: Image3,
        },
      ],
    },
  },

  
  basketofinance: {
      ProjectHeader: {
        title: "Basketo Finance Ltd",
        publishDate: "Jul 1, 2021 - May 31, 2023 (Part-time)",
        tags: "Basketo is a decentralized marketplace for investing, tracking, and managing crypto baskets.",
      },
      ProjectImages: [
        {
          id: 1,
          title: "Basketo",
          img: A34,
        },
        {
          id: 2,
          title: "Basketo",
          img: A35,
        },
        {
          id: 3,
          title: "Basketo",
          img: A36,
        },
      ],
      ProjectInfo: {
        ClientHeading: "About Company",
        CompanyInfo: [
          {
            id: 1,
            title: "Name",
            details: "Basketo finance Ltd",
          },
          {
            id: 2,
            title: "Services",
            details: "Web3",
          },
          {
            id: 3,
            title: "Website",
            details: "https://www.basketofinance.com/",
          },
        ],
        Technologies: [
          {
            title: "Tools & Technologies",
            techs: [
              "React.js",
              "Node.js",
              "MongoDB",
              "Material UI",
              "TailwindCSS",
              "Next.js",
              "Express.js",
              "AdobeXD",
              "Ethers.js",
              "Blockchain"
            ],
          },
        ],
        ProjectDetailsHeading: "Roles and Responsibilities",
        ProjectDetails: [
          {
            id: 1,
            details:
              "Contributed to developing a dynamic cryptocurrency marketplace at a fast-paced startup, focusing on crypto baskets.",
          },
          {
            id: 2,
            details:
              "Designed React user interfaces for dashboards, enabling users to create 200 dashboards and boosting engagement by 30%.",
          },
          {
            id: 3,
            details:
              "Implemented CoinGecko API integration using Axios, optimizing real-time pricing accuracy of 50+ cryptocurrencies.",
          },
          {
            id: 4,
            details:
              "Enhanced MongoDB database performance by 40% with distributed Redis caching and clustering, improving query speed.",
          },
          {
            id: 4,
            details:
              " Integrated MetaMask in wallet system, achieving a 20% rise in transaction efficiency and enhancing wallet functionality.",
          },
          {
            id: 4,
            details:
              "Led code reviews for a 10,000+ line codebase and managed CI/CD deployments, proving leadership in code quality",
          },
        ],
        SocialSharing: [],
      },
      RelatedProject: {
        title: "Related Projects",
        Projects: [
          {
            id: 1,
            title: "Mobile UI",
            img: Image4,
          },
          {
            id: 2,
            title: "Web Application",
            img: Image5,
          },
          {
            id: 3,
            title: "UI Design",
            img: Image6,
          },
          {
            id: 4,
            title: "Kabul Mobile App UI",
            img: Image3,
          },
        ],
      },
    },

    gerent: {
      ProjectHeader: {
        title: "Gerent",
        publishDate: "Jul 1, 2021 - July 31, 2023",
        tags: "Gerent is a leading Salesforce Summit consulting and implementation partner.",
      },
      ProjectImages: [
        {
          id: 1,
          title: "Gerent",
          img: A66,
        },
        {
          id: 2,
          title: "Gerent",
          img: A68,
        },
        {
          id: 3,
          title: "Gerent",
          img: A69,
        },
      ],
      ProjectInfo: {
        ClientHeading: "About Company",
        CompanyInfo: [
          {
            id: 1,
            title: "Name",
            details: "Gerent",
          },
          {
            id: 2,
            title: "Services",
            details: "Salesforce Consulting",
          },
          {
            id: 3,
            title: "Website",
            details: "https://www.gerent.com/",
          },
        ],
        Technologies: [
          {
            title: "Tools & Technologies",
            techs: [
              "Lightning Web Components",
              "Aura Components",
              "Apex",
              "SOQL",
              "SOSL",
              "Java",
              "Sales Cloud",
              "Service Cloud"
            ],
          },
        ],
        ProjectDetailsHeading: "Roles and Responsibilities",
        ProjectDetails: [
          {
            id: 1,
            details:
              "Implemented salesforce solutions with Flows, Validation rules, approval rules for Dodge and Holland America Group.",
          },
          {
            id: 2,
            details:
              "Developed record detail pages, file upload and management, calendar views using Lightning Web Components.",
          },
          {
            id: 3,
            details:
              "Built Salesforce Integration with MuleSoft, XMReality, and Five9 calling platform by developing Apex REST API.",
          },
          {
            id: 4,
            details:
              "Programmed Batch Apex classes and Triggers to automate bulk notifications to customers via Scheduled Jobs. ",
          },
          {
            id: 5,
            details:
              "Ensured that the code adhered to best coding practices, preventing it from exceeding Salesforce's governor limits.",
          },
        ],
        SocialSharing: [],
      },
      RelatedProject: {
        title: "Related Projects",
        Projects: [
          {
            id: 1,
            title: "Mobile UI",
            img: Image4,
          },
          {
            id: 2,
            title: "Web Application",
            img: Image5,
          },
          {
            id: 3,
            title: "UI Design",
            img: Image6,
          },
          {
            id: 4,
            title: "Kabul Mobile App UI",
            img: Image3,
          },
        ],
      },
    },

    capgemini: {
      ProjectHeader: {
        title: "Capgemini",
        publishDate: "Jan 1, 2021 - Jun 31, 2021",
        tags: "Capgemini SE is a French multinational information technology (IT) services and consulting company, headquartered in Paris.",
      },
      ProjectImages: [
        {
          id: 1,
          title: "Capgemini",
          img: A75,
        },
        {
          id: 2,
          title: "Capgemini",
          img: A77,
        },
        {
          id: 3,
          title: "Capgemini",
          img: A78,
        },
      ],
      ProjectInfo: {
        ClientHeading: "About Company",
        CompanyInfo: [
          {
            id: 1,
            title: "Name",
            details: "Capgemini",
          },
          {
            id: 2,
            title: "Services",
            details: "Software Consulting",
          },
          {
            id: 3,
            title: "Website",
            details: "https://www.capgemini.com/",
          },
        ],
        Technologies: [
          {
            title: "Tools & Technologies",
            techs: [
              "Java",
              "Spring Boot",
              "RESTful Web Services",
              "Spring Data JPA",
              "MySQL",
              "Elastic Search",
              "Apache Kafka",
              "React.js",
              "Angular.js"
            ],
          },
        ],
        ProjectDetailsHeading: "Roles and Responsibilities",
        ProjectDetails: [
          {
            id: 1,
            details:
              "Contributed to Healthcare Scheduling App, connecting 3000+ patients with 50+ doctors, streamlining appointments.",
          },
          {
            id: 2,
            details:
              "Assisted in managing data using Spring with MySQL, hosted on AWS EC2, ensuring efficient storage and retrieval.",
          },
          {
            id: 3,
            details:
              "Developed an autocomplete feature by implementing real-time data synchronization between MySQL and Elasticsearch.",
          },
          {
            id: 4,
            details:
              "Configured Debezium with MySQL’s binary log to capture row-level changes, streaming them to an Apache Kafka topic.",
          },
          {
            id: 5,
            details:
              "Developed Spring Boot producers for data publishing and consumers for efficient data retrieval from Kafka topics.",
          },
          {
            id: 6,
            details:
              "Actively involved in code reviews and authored test classes, significantly boosting overall test coverage from 43% to 88%.",
          }
        ],
        SocialSharing: [],
      },
      RelatedProject: {
        title: "Related Projects",
        Projects: [
          {
            id: 1,
            title: "Mobile UI",
            img: Image4,
          },
          {
            id: 2,
            title: "Web Application",
            img: Image5,
          },
          {
            id: 3,
            title: "UI Design",
            img: Image6,
          },
          {
            id: 4,
            title: "Kabul Mobile App UI",
            img: Image3,
          },
        ],
      },
    },

    georgiastate: {
      ProjectHeader: {
        title: "Georgia State University",
        publishDate: "Aug 1, 2023 - Present",
        tags: "Georgia State is among the most diverse universities in the nation.",
      },
      ProjectImages: [
        {
          id: 1,
          title: "Georgia State",
          img: A70,
        },
        {
          id: 2,
          title: "Georgia State",
          img: A71,
        },
        {
          id: 3,
          title: "Georgia State",
          img: A74,
        },
      ],
      ProjectInfo: {
        ClientHeading: "About Company",
        CompanyInfo: [
          {
            id: 1,
            title: "Name",
            details: "Georgia State University",
          },
          {
            id: 2,
            title: "Services",
            details: "University",
          },
          {
            id: 3,
            title: "Website",
            details: "https://www.gsu.edu/",
          },
        ],
        Technologies: [
          {
            title: "Tools & Technologies",
            techs: [
              "Data Structures and Algorithms",
              "Coding Questions Crafting",
              "Project Designing",
              "Public Speaking",
              "Grading",
              "Invigilation"
            ],
          },
        ],
        ProjectDetailsHeading: "Roles and Responsibilities",
        ProjectDetails: [
          {
            id: 1,
            details:
              "Instructed 240 students and handled 4 sections and teached course CSC - 4520 Design and Analysis of Algorithms to undergrad students.",
          },
          {
            id: 2,
            details:
              "Designed course materials, projects, hands-on assignments, and even crafted coding questions for exams hosted on platforms like TopCoder, Hackerearth, and LeetCode.",
          },
          {
            id: 3,
            details:
              "Recorded video lectures teaching various algorithms and helped students crack complex coding challlenges.",
          },
        ],
        SocialSharing: [],
      },
      RelatedProject: {
        title: "Related Projects",
        Projects: [
          {
            id: 1,
            title: "Mobile UI",
            img: Image4,
          },
          {
            id: 2,
            title: "Web Application",
            img: Image5,
          },
          {
            id: 3,
            title: "UI Design",
            img: Image6,
          },
          {
            id: 4,
            title: "Kabul Mobile App UI",
            img: Image3,
          },
        ],
      },
    },

    tesseract: {
      ProjectHeader: {
        title: "Tesseract Global Ltd",
        publishDate: "Feb 1, 2019 - Jul 31, 2019",
        tags: "Tesseract Global Solutions is a provider of Software solutions, EDI and Mobile Apps for Small and Medium size businesses.",
      },
      ProjectImages: [
        {
          id: 1,
          title: "Tesseract",
          img: A79,
        },
        {
          id: 2,
          title: "Tesseract",
          img: A80,
        },
        {
          id: 3,
          title: "Tesseract",
          img: A81,
        },
      ],
      ProjectInfo: {
        ClientHeading: "About Company",
        CompanyInfo: [
          {
            id: 1,
            title: "Name",
            details: "Tesseract Global Ltd",
          },
          {
            id: 2,
            title: "Services",
            details: "Software and Security Consulting",
          },
          {
            id: 3,
            title: "Website",
            details: "https://tesseractglobal.com/",
          },
        ],
        Technologies: [
          {
            title: "Tools & Technologies",
            techs: [
              "Python",
              "C#",
              "C++",
              "Wireshark",
              "Kali Linux",
              "NMap",
              "Metasploit",
              "Burp Suite"
            ],
          },
        ],
        ProjectDetailsHeading: "Roles and Responsibilities",
        ProjectDetails: [
          {
            id: 1,
            details:
              "Monitored and safeguarded the log sources and security access, Planned for disaster recovery in the event of any security breaches, Monitored for attacks, intrusions, and unusual, unauthorized, or illegal activities.",
          },
          {
            id: 2,
            details:
              "Used multiple virtualization software tools and developed knowledge of scripting languages such as Python, and PowerShell, and learned various cybersecurity principles.",
          },
          {
            id: 3,
            details:
              "Collected evidence and performed malware reverse engineering, and wrote custom scripts whenever required. Explored Network Security Threats, Vulnerabilities, and Dark Web Log Analysis.",
          },
        ],
        SocialSharing: [],
      },
      RelatedProject: {
        title: "Related Projects",
        Projects: [
          {
            id: 1,
            title: "Mobile UI",
            img: Image4,
          },
          {
            id: 2,
            title: "Web Application",
            img: Image5,
          },
          {
            id: 3,
            title: "UI Design",
            img: Image6,
          },
          {
            id: 4,
            title: "Kabul Mobile App UI",
            img: Image3,
          },
        ],
      },
    },

    lockhaven: {
      ProjectHeader: {
        title: "Lock Haven University",
        publishDate: "Jun 1, 2018 - Sep 31, 2018",
        tags: "Lock Haven University is located in central Pennsylvania and offers graduate as well as undergraduate degrees.",
      },
      ProjectImages: [
        {
          id: 1,
          title: "Lock Haven",
          img: A82,
        },
        {
          id: 2,
          title: "Lock Haven",
          img: A83,
        },
        {
          id: 3,
          title: "Lock Haven",
          img: A87,
        },
      ],
      ProjectInfo: {
        ClientHeading: "About Company",
        CompanyInfo: [
          {
            id: 1,
            title: "Name",
            details: "Lock Haven University",
          },
          {
            id: 2,
            title: "Services",
            details: "University",
          },
          {
            id: 3,
            title: "Website",
            details: "https://www.lockhaven.edu/",
          },
        ],
        Technologies: [
          {
            title: "Tools & Technologies",
            techs: [
              "R",
              "TensorFlow",
              "Python",
              "Pandas",
              "NumPy",
              "MATLAB",
              "Tableau",
            ],
          },
        ],
        ProjectDetailsHeading: "Roles and Responsibilities",
        ProjectDetails: [
          {
            id: 1,
            details:
              "Worked on real world basket ball data sets. Analyzed data, Graphically represented data. Used statistical methods and models to analyze trends in diverse data sets. Built scalable predictive models and helped the data science team scale our work in one or more industries.",
          },
          {
            id: 2,
            details:
              "Translated objectives into clear problem statements and work on actionable goals with the data science team. Built sophisticated statistical models, algorithms and trend analysis in order to discover predictive insights related to network and business objectives.",
          },
          {
            id: 3,
            details:
              "Worked on Big Data tools and technologies to sustain our continued operational transformation objectives and market leadership. Researched and developed approaches on how to improve business processes and customers’ experience by using our vast amounts of data.",
          },
        ],
        SocialSharing: [],
      },
      RelatedProject: {
        title: "Related Projects",
        Projects: [
          {
            id: 1,
            title: "Mobile UI",
            img: Image4,
          },
          {
            id: 2,
            title: "Web Application",
            img: Image5,
          },
          {
            id: 3,
            title: "UI Design",
            img: Image6,
          },
          {
            id: 4,
            title: "Kabul Mobile App UI",
            img: Image3,
          },
        ],
      },
    },
    indoor: {
      ProjectHeader: {
        title: "TensorFlow-Driven Real-Time Environmental Monitoring for Indoor Plant Growth",
        publishDate: "Jun 1, 2019 - Nov 24, 2019",
        tags: "Designed and fabricated multi-departmental project for six credit project design practicum course.",
      },
      ProjectImages: [
        {
          id: 1,
          title: "Indoor Plant",
          img: A100,
        },
        {
          id: 2,
          title: "Indoor Plant",
          img: A101,
        },
        {
          id: 3,
          title: "Indoor Plant",
          img: A103,
        },
      ],
      ProjectInfo: {
        ClientHeading: "University Associated",
        CompanyInfo: [
          {
            id: 1,
            title: "Name",
            details: "Vel Tech",
          },
          {
            id: 2,
            title: "Services",
            details: "University",
          },
          {
            id: 3,
            title: "Report",
            details: "https://github.com/umar-7w4/Indoor-planting-system/",
          },
        ],
        Technologies: [
          {
            title: "Tools & Technologies",
            techs: [
              "Python",
              "TensorFlow",
              "Cloud",
              "Microcontrollers",
              "Sensors",
              "Embedded Systems",
            ],
          },
        ],

        ProjectDetailsHeading: "Roles and Responsibilities",
        ProjectDetails: [
          {
            id: 1,
            details:
              "Collaborated with Electronic and Mechanical Engineering departments to design and fabricate an Indoor Plant Monitoring System, integrating hardware components like raspberry pi, sensors, and Adafruit IO cloud services.",
          },
          {
            id: 2,
            details:
              "Collected plant data through sensors and transmitted it to the cloud using MQTT protocol. Programmed raspberry pi using Python, and integrated it with Adafruit IO, allowing for data-driven plant monitoring and control.",
          },
          {
            id: 3,
            details:
              "Developed a voice-controlled system using IFTTT web-based services, enabling users to control the system through Google Assistant, enhancing user-friendliness and accessibility.",
          },
          {
            id: 4,
            details:
              "Designed and trained TensorFlow machine learning models to predict plant requirements based on collected data, automating system operations for efficient indoor plant growth and maintenance.",
          },
        ],
        SocialSharing: [],
      },
      RelatedProject: {
        title: "Related Projects",
        Projects: [
          {
            id: 1,
            title: "Mobile UI",
            img: Image4,
          },
          {
            id: 2,
            title: "Web Application",
            img: Image5,
          },
          {
            id: 3,
            title: "UI Design",
            img: Image6,
          },
          {
            id: 4,
            title: "Kabul Mobile App UI",
            img: Image3,
          },
        ],
      },
    },

    librehealth: {
      ProjectHeader: {
        title: "LibreHealth - Open Source Project",
        publishDate: "Oct 1, 2021 - Jul 10, 2022",
        tags: "LibreHealth is a an open source radiology information system, that is written for librehealth toolkit and manages the clinical workflow of radiology department.",
      },
      ProjectImages: [
        {
          id: 1,
          title: "LibreHealth",
          img: LH1,
        },
        {
          id: 2,
          title: "LibreHealth",
          img: LH2,
        },
        {
          id: 3,
          title: "LibreHealth",
          img: LH3,
        },
      ],
      ProjectInfo: {
        ClientHeading: "University Associated",
        CompanyInfo: [
          {
            id: 1,
            title: "Name",
            details: "LibreHealth",
          },
          {
            id: 2,
            title: "Services",
            details: "Health care",
          },
          {
            id: 3,
            title: "Website",
            details: "https://librehealth.io/",
          },
        ],
        Technologies: [
          {
            title: "Tools & Technologies",
            techs: [
              "Node.js",
              "Express",
              "Docker",
              "Kubernetes"
            ],
          },
        ],

        ProjectDetailsHeading: "Roles and Responsibilities",
        ProjectDetails: [
          {
            id: 1,
            details:
              "Contributed to LibreHealth’s open-source project, focusing on Java backend development and Angular frontend.",
          },
          {
            id: 2,
            details:
              "Developed 5+ modular components using Angular and Java, incorporating Spring Boot microservices architecture.",
          },
          {
            id: 3,
            details:
              "Built 10+ RESTful APIs with Spring Boot, facilitating efficient data exchange between Angular frontend and Java backend.",
          },
          {
            id: 4,
            details:
              "Aided in deploying 3 major updates using Docker and explored Kubernetes for better load balancing and scalability.",
          },
        ],
        SocialSharing: [],
      },
      RelatedProject: {
        title: "Related Projects",
        Projects: [
          {
            id: 1,
            title: "Mobile UI",
            img: Image4,
          },
          {
            id: 2,
            title: "Web Application",
            img: Image5,
          },
          {
            id: 3,
            title: "UI Design",
            img: Image6,
          },
          {
            id: 4,
            title: "Kabul Mobile App UI",
            img: Image3,
          },
        ],
      },
    },

    

};

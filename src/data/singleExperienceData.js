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

export const singleExperienceData = {

    basketofinance: {
        ProjectHeader: {
          title: "Basketo",
          publishDate: "Jul 1, 2022",
          tags: "Web Application",
        },
        ProjectImages: [
          {
            id: 1,
            title: "Kabul Project Management UI",
            img: A34,
          },
          {
            id: 2,
            title: "Kabul Project Management UI",
            img: A35,
          },
          {
            id: 3,
            title: "Kabul Project Management UI",
            img: A36,
          },
        ],
        ProjectInfo: {
          ClientHeading: "About Client",
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
                "Express.js"
              ],
            },
          ],
          ProjectDetailsHeading: "Description",
          ProjectDetails: [
            {
              id: 1,
              details:
                "Developed a platform for retail investors with atleast $10,000 in annual transactions, facilitating diversified crypto investments and real-time tracking using React, Next.js, Material UI, Mongo DB, and Node.js with Express.",
            },
            {
              id: 2,
              details:
                "Integrated the platform with the blockchain through Ethers for Ethereum interactions, along with Coinbase and MetaMask wallets, resulting in a 40% increase in user security and enabling digital asset management.",
            },
            {
              id: 3,
              details:
                "Optimized asset allocation and portfolio composition by 20% using quadratic programming algorithm, and provided accurate historical performance via user-friendly dashboard by using time series analysis techniques.",
            },
            {
              id: 4,
              details:
                "Followed Agile methodologies with regular sprints, collaborated with team through Slack, and handled unit testing, troubleshooted critical bugs, and GitHub deployments using CI/CD.",
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

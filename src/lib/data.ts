import { ExperienceCardProps, FooterButtonProps } from "./types";

import hbpLogo from "../images/hbpLogo.svg";
import ulLogo from "../images/ulLogo.svg";
import wmLogo from "../images/wmLogo.svg";
import hbpModalLogo from "../images/hbpModalLogo.svg";
import ulModalLogo from "../images/ulModalLogo.svg";
import wmModalLogo from "../images/wmModalLogo.svg";
import { colors } from "./colors";
import resume from "../docs/MMResume2.pdf";

// Experience Card Data
export const experienceCardData: ExperienceCardProps[] =

    [
        {
            id: 0,
            image: wmLogo,
            modalLogo: wmModalLogo,
            jobTitle: "SOFTWARE DEVELOPER CO-OP",
            backgroundColor: colors.WHITE,
            textColor: colors.WM_BLUE,
            company: "Wood Mackenzie",
            date: "July 2023 - Dec. 2023",
            location: "Boston, MA",
            bulletPoints: ["Incoming Software Developer Co-op at Wood Mackenzie. More details to come."],
        },
        {
            id: 1,
            image: hbpLogo,
            modalLogo: hbpModalLogo,
            jobTitle: "FULL STACK DEVELOPER",
            backgroundColor: colors.HBP_BLUE,
            textColor: colors.WHITE,
            company: "Hackbeanpot, Inc.",
            date: "April 2022 - Present",
            location: "Boston, MA",
            bulletPoints:
                [
                    "Utilizes React, TypeScript, Next, MongoDB to manage/develop HBP’s main site, application portal and internal tools", "Builds reusable and modular components for main site and internal tools using TypeScript, React Hooks, and styled-components", "Hosts engaging workshops to enhance the development team on Framer Motion and Three.js frameworks", "Conducts 50+ code reviews to verify design and implementation, identify bugs, and maintain consistency with HBP code standards", "Works closely with the design team to implement responsive web design and accessibility features", "Implements automated testing using Jest to ensure the reliability and maintainability of the codebase"

                ],
        },
        {
            id: 2,
            image: ulLogo,
            modalLogo: ulModalLogo,
            jobTitle: "FULL STACK DEVELOPMENT INTERN",
            backgroundColor: colors.UL_ORANGE,
            textColor: colors.WHITE,
            company: "UpperLevel CRM",
            date: "April 2022 - Sept. 2023",
            location: "Remote",
            bulletPoints: ['Utilized PHP, JavaScript, and MariaDB to expand the features and capabilities of the CRM and aid clients in automating their workflows using S.O.L.I.D principles',
            'Increased CRM application test coverage by 70% leading to increased stability of the application for future development',
            'Developed and maintained RESTful API endpoints for the CRM using PHP and Laravel',
            'Collaborated with the UX team to improve the user interface of the CRM resulting in a 25% increase in user engagement and customer satisfaction',
            'Implemented a real-time notification system using Pusher.js to alert clients of critical updates to their accounts, resulting in improved communication and reduced response time for support requests',
            'Conducted code reviews and provided constructive feedback to team members, resulting in a 20% reduction in bugs and improved code quality and consistency across the codebase.'
            ],
        },
    ]

// Footer Navagation button data
export const footerNavData: FooterButtonProps[] = [
    {
        btnText: "ABOUT",
        btnLink: "/#about",
    },
    {
        btnText: "SKILLS",
        btnLink: "/#skills",
    },
    {
        btnText: "EXPERIENCE",
        btnLink: "/#exp",
    },
    {
        btnText: "PROJECTS",
        btnLink: "#",
    },
    {
        btnText: "PHOTO",
        btnLink: "https://mikemundia.wordpress.com/",
    },
    {
        btnText: "RESUME",
        btnLink: resume,
    },
]



import { ExperienceCardProps, FooterButtonProps } from "./types";

import hbpLogo from "../images/hbpLogo.svg";
import ulLogo from "../images/ulLogo.svg";
import wmLogo from "../images/wmLogo.svg";
import photoMike from "../images/ppp.png";
import neu from "../images/neu.png";
import mvlogo from "../images/mvlogo.png";
import tslogo from "../images/tslogo.png";
import hbpModalLogo from "../images/hbpModalLogo.svg";
import ulModalLogo from "../images/ulModalLogo.svg";
import wmModalLogo from "../images/wmModalLogo.svg";
import light from "../images/light 1.png";
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
            image: light,
            modalLogo: hbpModalLogo,
            jobTitle: "CHEIF LIGHTING DESIGNER",
            backgroundColor: "#161616",
            textColor: colors.WHITE,
            company: "Boston Playwrights' Theatre",
            date: "March 2023 - Present",
            location: "Boston, MA",
            bulletPoints: ["More details to come."],
        },
        {
            id: 2,
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
            id: 3,
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
            'Conducted code reviews and provided constructive feedback to team members, resulting in a 20% reduction in bugs and improved code quality and consistency across the codebase.'
            ],
        },
        {
            id: 4,
            image: neu,
            modalLogo: hbpModalLogo,
            jobTitle: "COMPUTER SCIENCE RESIDENT ASSISTANT",
            backgroundColor: colors.NEU_RED,
            textColor: colors.WHITE,
            company: "Northeastern University",
            date: "Aug. 2022 - Present",
            location: "Boston, MA",
            bulletPoints: [
                "Supervises and mentors a group of 40+ computer science freshmen residents in a university dormitory setting",
                "Hosts computer science-themed events/workshops and tutored residents with various computer science intro courses",
                "Serves as a liaison between residents and residence hall staff, as well as university administration",
                "Organized a campus-wide hackathon event, which drew in over 200 participants.",
                "Designed and created graphic designs for event stickers, flyers, and social media posts, resulting in an increase in event attendance by 80% compared to the previous year."
              ],
        },

        {
            id: 5,
            image: mvlogo,
            modalLogo: hbpModalLogo,
            jobTitle: "LEAD STAGE ACTOR: MALCOLM",
            backgroundColor: colors.WHITE,
            textColor: colors.MV_GREEN,
            company: "Martha's Vineyard Playhouse",
            date: "April 2022 - May 2022",
            location: "Boston, MA",
            bulletPoints: ["Lead Role as Malcomn in Terrance Kidd's \"Not Exactly Dope\" for the Boston Playwrights Festival.", "Directed by: Terrance Kidd", "Produced by: Boston Playwrights' Theatre", "More details at https://mvplayhouse.org/theater/2022/05/boston-theater-marathon/"],


        },

        {
            id: 6,
            image: tslogo,
            modalLogo: hbpModalLogo,
            jobTitle: "SUPPORTING FILM ACTOR: M.I.T. HACKER",
            backgroundColor: colors.WHITE,
            textColor: colors.TS_GREEN,
            company: "Twist and Shout Communications",
            date: "Nov. 2021 - Dec. 2022",
            location: "Cambridge, MA",
            bulletPoints:["Supporting role as an M.I.T. Hacker in the upcoming season 4 of The Inside Man, produced by Twist and Shout Communications"]
            
        },


        {
            id: 7,
            image: photoMike,
            modalLogo: hbpModalLogo,
            jobTitle: "FOUNDER/PHOTOGRAPHER",
            backgroundColor: colors.WHITE,
            textColor: colors.BLACK,
            company: "Photography With Mike",
            date: "Jan. 2020 - Present",
            location: "Boston/Pittsburgh, MA/PA",
            bulletPoints: ["Photography With Mike is a photography business that I started in 2020. I specialize in portrait photography, but I also do event photography and wedding photography. I am currently based in Boston, MA, but I am willing to travel to Pittsburgh, PA for events. I am also willing to travel to other locations for events. I am currently looking for more clients to work with. Please contact me if you are interested in working with me.", "Lean more about me and my work at https://mikemundia.wordpress.com/"],
        }
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
        newTab: true,
    },
    {
        btnText: "RESUME",
        btnLink: resume,
        newTab: true,
    },
]



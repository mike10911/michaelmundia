import { ExperienceCardProps, ExperienceModalsProps } from "./types";

import hbpLogo from "../images/hbpLogo.svg";
import ulLogo from "../images/ulLogo.svg";
import wmLogo from "../images/wmLogo.svg";
import { colors } from "./colors";

// Experience Card Data
export const experienceCardData: ExperienceCardProps[] =

    [
        {
            image: wmLogo,
            jobTitle: "SOFTWARE DEVELOPMENT CO-OP",
            backgroundColor: colors.WHITE,
            textColor: colors.WM_BLUE,
            company: "Walmart",
            date: "May 2021 - Present",
            location: "Bentonville, AR",
            bulletPoints: [],
        },
        {
            image: hbpLogo,
            jobTitle: "FULL STACK DEVELOPER → TECH LEAD",
            backgroundColor: colors.HBP_BLUE,
            textColor: colors.WHITE,
            company: "Starlink",
            date: "September 2020 - May 2021",
            location: "R",
            bulletPoints: [],

        },
        {
            image: ulLogo,
            jobTitle: "FULL STACK DEVELOPMENT INTERN",
            backgroundColor: colors.UL_ORANGE,
            textColor: colors.WHITE,
            company: "HBP",
            date: "May 2020 - September 2020",
            location: "Bentonville, AR",
            bulletPoints: [],
        },
    ]

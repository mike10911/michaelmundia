import { ExperienceCardProps } from "./types";

import hbpLogo from "../images/hbpLogo.svg";
import ulLogo from "../images/ulLogo.svg";
import wmLogo from "../images/wmLogo.svg";
import { colors } from "./colors";

export const experienceCardData: ExperienceCardProps[] = 

[
    {
        image: wmLogo,
        jobTitle: "SOFTWARE DEVELOPMENT CO-OP",
        backgroundColor: colors.WHITE,
        textColor: colors.WM_BLUE,
    },
    {
        image: hbpLogo,
        jobTitle: "FULL STACK DEVELOPER → TECH LEAD",
        backgroundColor: colors.HBP_BLUE,
        textColor: colors.WHITE,
    },
    {
        image: ulLogo,
        jobTitle: "FULL STACK DEVELOPMENT INTERN",
        backgroundColor: colors.UL_ORANGE,
        textColor: colors.WHITE,
    },
]
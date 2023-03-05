
// PRIMARY BUTTON
export interface PrimaryButtonProps {
    btnText: string;
    btnLink?: string;
    newTab?: boolean;
    primaryColor?: string;
    secondaryColor?: string;
}

export interface StyledPrimaryButtonProps {
    primaryColor?: string;
    secondaryColor?: string;
}

// EXPERIENCE 
export interface ExperienceCardProps {
    image: string;
    jobTitle: string;
    backgroundColor: string;
    textColor?: string;
}

export interface ExperienceCardContainerProps {
    backgroundColor: string;
    textColor?: string;
}

// PRIMARY BUTTON
export interface PrimaryButtonProps {
    btnText: string;
    btnLink?: string;
    newTab?: boolean;
    primaryColor?: string;
    secondaryColor?: string;
    onClick?: (h: any) => any;
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
    company: string;
    date: string;
    location: string;
    bulletPoints: string[];
}

export interface ExperienceCardContainerProps {
    backgroundColor: string;
    textColor?: string;
}

export interface ExperienceModalsProps {
    image: string;
    title: string;
    company: string;
    date: string;
    location: string;
    bulletPoints: string[];
}

export interface ExperienceCardModalProps {
    handleClicked: (h: any) => any;
    jobTitle: string;
    company: string;
    date: string;
    location: string;
    bulletPoints: string[];
}


// PRIMARY BUTTON
export interface PrimaryButtonProps {
    btnText: string;
    btnLink?: string;
    newTab?: boolean;
    primaryColor?: string;
    secondaryColor?: string;
    onClick?: (h: any) => any;
}

export interface FooterButtonProps {
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
    id: number;
    image: string;
    jobTitle: string;
    backgroundColor: string;
    modalLogo: string;
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
    image: string;
    jobTitle: string;
    company: string;
    date: string;
    location: string;
    bulletPoints: string[];
}

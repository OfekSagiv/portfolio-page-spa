import {ICONS} from "../components/shared/icons/icons.jsx";

const CONTACT_INFO = {
    EMAIL: "ofeksagiv@gmail.com",
    GITHUB_LABEL: "github.com/OfekSagiv",
    GITHUB_URL: "https://github.com/OfekSagiv",
    LINKEDIN_LABEL: "linkedin.com/in/ofeksagiv",
    LINKEDIN_URL: "https://linkedin.com/in/ofek-sagiv",
    PHONE: "NA",
    LOCATION: "Tel Aviv, Israel",
};

export const SOCIAL_LINKS = [
    {
        icon: ICONS.github,
        text: CONTACT_INFO.GITHUB_LABEL,
        href: CONTACT_INFO.GITHUB_URL,
    },
    {
        icon: ICONS.linkedin,
        text: CONTACT_INFO.LINKEDIN_LABEL,
        href: CONTACT_INFO.LINKEDIN_URL,
    },
    {
        icon: ICONS.email,
        text: CONTACT_INFO.EMAIL,
        href: `mailto:${CONTACT_INFO.EMAIL}`,
    },
    {
        icon: ICONS.phone,
        text: CONTACT_INFO.PHONE,
    },
    {
        icon: ICONS.location,
        text: CONTACT_INFO.LOCATION,
    },
];

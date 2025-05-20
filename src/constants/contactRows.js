import {Icons} from "../components/shared/icons/icons.jsx";
import {CONTACT_INFO} from "./contactInfo.js";

const CONTACT_ROWS = [
    { icon: Icons.github, text: CONTACT_INFO.github.label, href: CONTACT_INFO.github.url },
    { icon: Icons.linkedin, text: CONTACT_INFO.linkedin.label, href: CONTACT_INFO.linkedin.url },
    { icon: Icons.email, text: CONTACT_INFO.email, href: `mailto:${CONTACT_INFO.email}` },
    { icon: Icons.phone, text: CONTACT_INFO.phone },
    { icon: Icons.location, text: CONTACT_INFO.location },
];

export { CONTACT_ROWS };

import { useRef } from "react";
import emailjs from "@emailjs/browser";
import {ERROR_MESSAGES, MESSAGES} from "../constants/messages";

export const useContactForm = () => {
    const formRef = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
            formRef.current,
            import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        )
            .then(() => {
                alert(MESSAGES.SUCCESS);
            })
            .catch((error) => {
                console.error(ERROR_MESSAGES.FAILED_TO_SEND, error);
                alert(ERROR_MESSAGES.ERROR);
            });
    };

    return { formRef, handleSubmit };
};

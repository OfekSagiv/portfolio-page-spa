import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { MESSAGES } from "../constants/messages";

export const useContactForm = () => {
    const formRef = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
            formRef.current,
            import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        )
            .then(() => {
                alert(MESSAGES.success);
            })
            .catch((error) => {
                console.error("Failed to send:", error);
                alert(MESSAGES.error);
            });
    };

    return { formRef, handleSubmit };
};

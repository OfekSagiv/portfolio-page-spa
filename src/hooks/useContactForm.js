import { useRef,useState } from "react";
import emailjs from "@emailjs/browser";
import {ERROR_MESSAGES, MESSAGES} from "../constants/messages";

export const useContactForm = () => {
    const formRef = useRef(null);
    const [captchaToken, setCaptchaToken] = useState(null);
    const [errorMessage, setErrorMessage] = useState(null);

    const handleSubmit = (e) => {
        setErrorMessage(null);
        e.preventDefault();
               const form = formRef.current;

                    if (form["bot-field"].value) {
                        setErrorMessage(ERROR_MESSAGES.BOT_FIELD);
                        return;
                   }

                   if (!captchaToken) {
                       setErrorMessage(ERROR_MESSAGES.CAPTCHA_MISSING);
                       return;
                   }
        emailjs.sendForm(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
            form,
            import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        )
            .then(() => {
                alert(MESSAGES.SUCCESS);
                               form.reset();
                                setCaptchaToken(null);
            })
            .catch((error) => {
                console.error(ERROR_MESSAGES.FAILED_TO_SEND, error);
                alert(ERROR_MESSAGES.ERROR);
            });
    };

    return { formRef, handleSubmit , setCaptchaToken, errorMessage};
};

// EmailJS keys are designed to be used in the browser. Override them per
// environment with VITE_EMAILJS_* variables (see .env.example).
export const emailjsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || "service_mj5c8ko",
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "template_bfsjnku",
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "qmgsrfZ_iCngP8j-v",
};

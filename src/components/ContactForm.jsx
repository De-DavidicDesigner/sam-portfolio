import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import { LuCircleAlert, LuCircleCheck, LuLoaderCircle, LuSend } from "react-icons/lu";
import { emailjsConfig } from "../config/emailjs";
import Button from "./ui/Button";

const inputClasses =
  "w-full rounded-lg border border-line bg-bg/70 px-4 py-3 text-sm text-fg placeholder:text-subtle transition-colors focus:border-accent/60 focus:outline-none";

const Field = ({ id, label, children }) => (
  <div className="space-y-2">
    <label htmlFor={id} className="font-mono text-xs text-muted">
      {label}
    </label>
    {children}
  </div>
);

const ContactForm = () => {
  const formRef = useRef(null);
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      await emailjs.sendForm(emailjsConfig.serviceId, emailjsConfig.templateId, formRef.current, {
        publicKey: emailjsConfig.publicKey,
      });
      formRef.current.reset();
      setStatus("success");
    } catch (error) {
      console.error("EmailJS send failed:", error);
      setStatus("error");
    }
  };

  const sending = status === "sending";

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      className="space-y-5 rounded-xl border border-line bg-surface/80 p-6 sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <Field id="name" label="name">
          <input id="name" name="name" type="text" required autoComplete="name" placeholder="Jane Doe" className={inputClasses} />
        </Field>
        <Field id="email" label="email">
          <input id="email" name="email" type="email" required autoComplete="email" placeholder="jane@company.com" className={inputClasses} />
        </Field>
      </div>
      <Field id="title" label="subject">
        <input id="title" name="title" type="text" required placeholder="Backend role / project enquiry" className={inputClasses} />
      </Field>
      <Field id="message" label="message">
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          placeholder="Tell me about the system you're building..."
          className={`${inputClasses} resize-y`}
        />
      </Field>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <Button type="submit" disabled={sending} className="w-full sm:w-auto">
          {sending ? (
            <>
              <LuLoaderCircle className="animate-spin" aria-hidden="true" /> Sending…
            </>
          ) : (
            <>
              <LuSend aria-hidden="true" /> Send message
            </>
          )}
        </Button>

        <p role="status" aria-live="polite" className="text-sm">
          {status === "success" && (
            <span className="flex items-center gap-2 text-accent">
              <LuCircleCheck aria-hidden="true" /> Message sent — I'll get back to you soon.
            </span>
          )}
          {status === "error" && (
            <span className="flex items-center gap-2 text-danger">
              <LuCircleAlert aria-hidden="true" /> Something went wrong. Please try again or email me.
            </span>
          )}
        </p>
      </div>
    </form>
  );
};

export default ContactForm;

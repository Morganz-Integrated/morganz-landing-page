"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const STRINGS = {
  nameRequired: "Please enter your name.",
  emailRequired: "Please enter your email address.",
  emailInvalid: "Please enter a valid email address.",
  messageRequired: "Please enter a message.",
  formSuccess: "Thanks. Your message has been captured. Our engineering team will contact you.",
};

export default function ContactForm() {
  const [feedback, setFeedback] = useState("");
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    const form = formRef.current;
    if (!form) return;
    const fields = Array.from(form.querySelectorAll<HTMLInputElement | HTMLTextAreaElement>("input, textarea"));
    let isDirty = false;
    const setDirty = () => {
      isDirty = fields.some((field) => field.value.trim().length > 0);
    };
    fields.forEach((field) => {
      field.addEventListener("input", setDirty);
      field.addEventListener("change", setDirty);
    });
    const onBefore = (event: BeforeUnloadEvent) => {
      if (!isDirty) return;
      event.preventDefault();
      event.returnValue = "";
    };
    window.addEventListener("beforeunload", onBefore);
    return () => {
      window.removeEventListener("beforeunload", onBefore);
      fields.forEach((field) => {
        field.removeEventListener("input", setDirty);
        field.removeEventListener("change", setDirty);
      });
    };
  }, []);

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const name = form.querySelector<HTMLInputElement>("#name");
    const email = form.querySelector<HTMLInputElement>("#email");
    const message = form.querySelector<HTMLTextAreaElement>("#message");
    const fields = [name, email, message].filter(Boolean) as (HTMLInputElement | HTMLTextAreaElement)[];

    fields.forEach((f) => f.removeAttribute("aria-invalid"));

    const errors: typeof fields = [];
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (name && !name.value.trim()) errors.push(name);
    if (email && !email.value.trim()) errors.push(email);
    else if (email && !emailPattern.test(email.value.trim())) errors.push(email);
    if (message && !message.value.trim()) errors.push(message);

    if (errors.length > 0) {
      errors.forEach((f) => f.setAttribute("aria-invalid", "true"));
      setFeedback(
        name && !name.value.trim()
          ? STRINGS.nameRequired
          : email && !email.value.trim()
            ? STRINGS.emailRequired
            : email && !emailPattern.test(email.value.trim())
              ? STRINGS.emailInvalid
              : STRINGS.messageRequired,
      );
      errors[0].focus();
      return;
    }

    setFeedback(STRINGS.formSuccess);
    form.reset();
  };

  return (
    <form ref={formRef} id="contact-form" data-contact-form onSubmit={onSubmit} noValidate>
      <Label htmlFor="name">Name</Label>
      <Input id="name" name="name" type="text" className="form-control" autoComplete="name" required />

      <Label htmlFor="email">Email</Label>
      <Input
        id="email"
        name="email"
        type="email"
        className="form-control"
        autoComplete="email"
        inputMode="email"
        spellCheck={false}
        required
      />

      <Label htmlFor="message">Message</Label>
      <Textarea id="message" name="message" rows={5} className="form-control" autoComplete="off" required />

      <p id="contact-form-feedback" className="small" aria-live="polite">
        {feedback}
      </p>
      <Button className="btn primary" type="submit">
        Send
      </Button>
    </form>
  );
}
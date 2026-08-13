"use client";

import { useState, type FormEvent } from "react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { contactSchema } from "@/lib/schemas";

type Status = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setFieldErrors({});
    setErrorMessage("");

    const formData = new FormData(event.currentTarget);
    const raw = {
      name: formData.get("name")?.toString() ?? "",
      email: formData.get("email")?.toString() ?? "",
      subject: formData.get("subject")?.toString() ?? "",
      message: formData.get("message")?.toString() ?? "",
    };

    const result = contactSchema.safeParse(raw);

    if (!result.success) {
      const errors: Record<string, string> = {};
      for (const issue of result.error.issues) {
        errors[issue.path[0] as string] = issue.message;
      }
      setFieldErrors(errors);
      return;
    }

    setStatus("submitting");

    try {
      await addDoc(collection(db, "messages"), {
        ...result.data,
        createdAt: serverTimestamp(),
      });
      setStatus("success");
      event.currentTarget.reset();
    } catch {
      setStatus("error");
      setErrorMessage("Something went wrong sending your message. Try again in a moment.");
    }
  }

  if (status === "success") {
    return (
      <section id="contact" className="mx-auto max-w-5xl px-6 py-16 border-t border-border">
        <h2 className="font-serif text-2xl text-text mb-6">Contact</h2>
        <p className="max-w-md text-text-muted">
          Message sent — thanks for reaching out, I&apos;ll get back to you soon.
        </p>
      </section>
    );
  }

  return (
    <section id="contact" className="mx-auto max-w-5xl px-6 py-16 border-t border-border">
      <h2 className="font-serif text-2xl text-text mb-6">Contact</h2>
      <form onSubmit={handleSubmit} noValidate className="max-w-md flex flex-col gap-4">
        <div className="flex flex-col gap-1">
          <label htmlFor="name" className="text-sm text-text-muted">Name</label>
          <input
            id="name"
            name="name"
            type="text"
            className="border border-border rounded-lg px-3 py-2 text-text focus:outline-none focus:border-accent"
          />
          {fieldErrors.name && <span className="text-xs text-red-600">{fieldErrors.name}</span>}
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="email" className="text-sm text-text-muted">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            className="border border-border rounded-lg px-3 py-2 text-text focus:outline-none focus:border-accent"
          />
          {fieldErrors.email && <span className="text-xs text-red-600">{fieldErrors.email}</span>}
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="subject" className="text-sm text-text-muted">Subject</label>
          <input
            id="subject"
            name="subject"
            type="text"
            className="border border-border rounded-lg px-3 py-2 text-text focus:outline-none focus:border-accent"
          />
          {fieldErrors.subject && <span className="text-xs text-red-600">{fieldErrors.subject}</span>}
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="message" className="text-sm text-text-muted">Message</label>
          <textarea
            id="message"
            name="message"
            rows={5}
            className="border border-border rounded-lg px-3 py-2 text-text focus:outline-none focus:border-accent resize-none"
          />
          {fieldErrors.message && <span className="text-xs text-red-600">{fieldErrors.message}</span>}
        </div>

        {status === "error" && <p className="text-sm text-red-600">{errorMessage}</p>}

        <button
          type="submit"
          disabled={status === "submitting"}
          className="self-start bg-accent text-white text-sm rounded-lg px-5 py-2.5 hover:opacity-90 transition-opacity disabled:opacity-50"
        >
          {status === "submitting" ? "Sending..." : "Send"}
        </button>
      </form>
    </section>
  );
}
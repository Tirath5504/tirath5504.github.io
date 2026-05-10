"use client";

import { FormEvent, useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");

    const formData = new FormData(e.currentTarget);
    const data: Record<string, string> = {};
    formData.forEach((value, key) => {
      data[key] = value.toString();
    });

    try {
      const response = await fetch(
        "https://hook.eu2.make.com/3ardugz0lrynnm9tix5bereepmsrher9",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        },
      );

      if (response.ok) {
        setStatus("success");
        e.currentTarget.reset();
        alert("Message sent successfully!");
      } else {
        setStatus("error");
        alert("Oops! Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error(error);
      setStatus("error");
      alert("Oops! Something went wrong. Please try again.");
    }
  };

  return (
    <form
      className="contact-form fade-in"
      id="contact-form"
      onSubmit={handleSubmit}
    >
      <div className="form-group">
        <label className="form-label" htmlFor="name">
          Your Name
        </label>
        <input
          type="text"
          className="form-input"
          name="name"
          id="name"
          required
        />
      </div>

      <div className="form-group">
        <label className="form-label" htmlFor="email">
          Your Email
        </label>
        <input
          type="email"
          className="form-input"
          name="email"
          id="email"
          required
        />
      </div>

      <div className="form-group">
        <label className="form-label" htmlFor="subject">
          Subject
        </label>
        <input
          type="text"
          className="form-input"
          name="subject"
          id="subject"
          required
        />
      </div>

      <div className="form-group">
        <label className="form-label" htmlFor="message">
          Message
        </label>
        <textarea
          className="form-textarea"
          name="message"
          id="message"
          rows={5}
          required
        ></textarea>
      </div>

      <button
        type="submit"
        className="btn btn-primary"
        style={{ width: "100%" }}
        disabled={status === "submitting"}
      >
        <i className="uil uil-message"></i>{" "}
        {status === "submitting" ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}

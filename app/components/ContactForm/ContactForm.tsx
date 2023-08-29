"use client";

import React, { useState, FormEvent } from "react";
import "./ContactForm.css";

export default function ContactForm() {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsLoading(true); // Set loading to true when the request starts

    try {
      const formData = new FormData(event.currentTarget);
      const response = await fetch("/api/submit", {
        method: "POST",
        body: formData,
      });

      // Handle response if necessary
      const data = await response.json();
      // ...
    } catch (error) {
      // Handle error if necessary
      console.error(error);
    } finally {
      setIsLoading(false); // Set loading to false when the request completes
    }
  }

  return (
    <form onSubmit={onSubmit} className="ContactForm">
      <span className="ReachMe">Reach me</span>
      <div className="InputWrapper">
        <label className="InputLabel">Your Name</label>
        <input className="Input" type="text" name="name" />
      </div>

      <div className="InputWrapper">
        <label className="InputLabel">Your Phone Number</label>
        <input
          className="Input"
          type="tel"
          name="phoneNumber"
          pattern="^\d{10}$"
        />
      </div>

      <div className="InputWrapper">
        <label className="InputLabel">Event Description</label>
        <textarea className="TextArea" name="description" />
      </div>
      <div className="InputWrapper">
        <label className="InputLabel">Event Date and Time</label>
        <input className="Input" type="datetime-local" />
      </div>

      <button className="Submit" type="submit" disabled={isLoading}>
        {isLoading ? "Loading..." : "Submit"}
      </button>
    </form>
  );
}

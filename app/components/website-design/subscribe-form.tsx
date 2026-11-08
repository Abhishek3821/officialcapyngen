"use client";

import { useState, type FormEvent } from "react";
import styles from "./sections.module.css";

export default function SubscribeForm() {
  const [message, setMessage] = useState("");
  function subscribe(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const email = new FormData(event.currentTarget).get("email");
    try {
      localStorage.setItem("capyngen-podcast-interest", String(email));
      setMessage("Interest saved on this device. Email delivery is not connected yet.");
    } catch {
      setMessage("Email delivery is not connected yet. You can explore the episode previews below.");
    }
  }
  return <><form className={styles.subscribeForm} onSubmit={subscribe}><label className={styles.srOnly} htmlFor="podcast-email">Email address</label><input id="podcast-email" type="email" name="email" placeholder="Your email address" autoComplete="email" required maxLength={254} onChange={() => setMessage("")} /><button type="submit">Subscribe <span aria-hidden="true">↗</span></button></form><p className={styles.subscribeNote} role="status">{message || "Preview sign-up · Interest is saved on this device only."}</p></>;
}

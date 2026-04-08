"use client";
import { useState } from "react";
import { Send, CheckCircle } from "lucide-react";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => {
      setSent(false);
      setForm({ name: "", email: "", message: "" });
    }, 3500);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div className="grid sm:grid-cols-2 gap-4">
        <div className="flex flex-col gap-1.5">
          <label className="font-share text-white/40 text-xs tracking-[0.2em] uppercase">
            Name
          </label>
          <input
            type="text"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            required
            placeholder="Your Name"
            className="bg-white/5 border border-white/10 focus:border-accent rounded-lg px-4 py-3 text-white outline-none transition-colors placeholder:text-white/20 text-sm"
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="font-share text-white/40 text-xs tracking-[0.2em] uppercase">
            Email
          </label>
          <input
            type="email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            required
            placeholder="your@email.com"
            className="bg-white/5 border border-white/10 focus:border-accent rounded-lg px-4 py-3 text-white outline-none transition-colors placeholder:text-white/20 text-sm"
          />
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <label className="font-share text-white/40 text-xs tracking-[0.2em] uppercase">
          Message
        </label>
        <textarea
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          required
          rows={5}
          placeholder="Tell me about your project..."
          className="bg-white/5 border border-white/10 focus:border-accent rounded-lg px-4 py-3 text-white outline-none transition-colors placeholder:text-white/20 text-sm resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={sent}
        className="flex items-center justify-center gap-2 w-full py-3.5 bg-accent text-white text-sm font-bold rounded-lg btn-box hover:bg-accent/80 active:translate-y-0.5 transition-all duration-300 disabled:opacity-80 disabled:cursor-not-allowed"
      >
        {sent ? (
          <>
            <CheckCircle size={16} />
            Message Sent!
          </>
        ) : (
          <>
            <Send size={16} />
            Send Message
          </>
        )}
      </button>
    </form>
  );
}

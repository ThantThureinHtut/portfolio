"use client";
import { useActionState, useState } from "react";
import { Send, CheckCircle, AlertCircle } from "lucide-react";
import { sendEmail } from "@/app/(projects)/actions/sendEmail";
import { motion, AnimatePresence } from "framer-motion";

const errorVariants = {
  initial: { opacity: 0, y: -6, height: 0 },
  animate: { opacity: 1, y: 0, height: "auto", transition: { duration: 0.25, ease: "easeOut" } },
  exit: { opacity: 0, y: -4, height: 0, transition: { duration: 0.2, ease: "easeIn" } },
};

const bannerVariants = {
  initial: { opacity: 0, y: 12, scale: 0.97 },
  animate: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.35, ease: "easeOut" } },
  exit: { opacity: 0, y: -8, scale: 0.97, transition: { duration: 0.25, ease: "easeIn" } },
};

function FieldError({ message }) {
  return (
    <AnimatePresence initial={false}>
      {message && (
        <motion.p
          key={message}
          variants={errorVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          className="flex items-center gap-1.5 text-xs text-red-400 overflow-hidden"
        >
          <AlertCircle size={12} className="shrink-0" />
          {message}
        </motion.p>
      )}
    </AnimatePresence>
  );
}

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [state, action, isPending] = useActionState(sendEmail, null);

  return (
    <form action={action} className="flex flex-col gap-5">
      {/* ── Success / global error banner ── */}
      <AnimatePresence>
        {state?.message && (
          <motion.div
            variants={bannerVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className={`flex items-center gap-3 px-4 py-3 rounded-lg border text-sm font-share ${
              state.success
                ? "bg-green-500/10 border-green-500/30 text-green-400"
                : "bg-red-500/10 border-red-500/30 text-red-400"
            }`}
          >
            {state.success ? (
              <CheckCircle size={16} className="shrink-0" />
            ) : (
              <AlertCircle size={16} className="shrink-0" />
            )}
            {state.message}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="grid sm:grid-cols-2 gap-4">
        <div className="flex flex-col gap-1.5">
          <label className="font-share text-white/40 text-xs tracking-[0.2em] uppercase">
            Name
          </label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            required
            disabled={isPending}
            placeholder="Your Name"
            className="bg-white/5 border border-white/10 focus:border-accent rounded-lg px-4 py-3 text-white outline-none transition-colors placeholder:text-white/20 text-sm"
          />
          <FieldError message={state?.errors?.name?.[0]} />
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
            name="email"
            disabled={isPending}
            placeholder="your@email.com"
            className="bg-white/5 border border-white/10 focus:border-accent rounded-lg px-4 py-3 text-white outline-none transition-colors placeholder:text-white/20 text-sm"
          />
          <FieldError message={state?.errors?.email?.[0]} />
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
          name="message"
          disabled={isPending}
          rows={5}
          placeholder="Tell me about your project..."
          className="bg-white/5 border border-white/10 focus:border-accent rounded-lg px-4 py-3 text-white outline-none transition-colors placeholder:text-white/20 text-sm resize-none"
        />
        <FieldError message={state?.errors?.message?.[0]} />
      </div>

      <button
        type="submit"
        disabled={isPending}
        className="flex items-center justify-center gap-2 w-full py-3.5 bg-accent text-white text-sm font-bold rounded-lg btn-box hover:bg-accent/80 active:translate-y-0.5 transition-all duration-300 disabled:opacity-80 disabled:cursor-not-allowed"
      >
        {isPending ? (
          <>
            <CheckCircle size={16} />
            Sending…
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

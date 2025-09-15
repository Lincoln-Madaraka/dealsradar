"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import { toast } from "react-toastify";
import { motion } from "framer-motion";

const ContactForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(form);
    toast.success("Message submitted successfully!");
    setForm({ name: "", email: "", message: "" });
  };

  return (
      <motion.form
        onSubmit={handleSubmit}
        className="space-y-4 bg-white p-6 max-w-2xl mx-auto rounded-lg shadow"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={form.name}
          onChange={handleChange}
          required
          className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 ring-primary placeholder-gray-700"
        />

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={form.email}
          onChange={handleChange}
          required
          className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 ring-primary placeholder-gray-700"
        />

        <textarea
          name="message"
          placeholder="Your Message"
          rows={6}
          value={form.message}
          onChange={handleChange}
          required
          className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 ring-primary placeholder-gray-700"
        />

        <button
          type="submit"
          className="bg-primary text-white px-6 py-2 rounded hover:bg-primary-hover transition-colors duration-200"
        >
          Send Message
        </button>
      </motion.form>
  );
};

export default ContactForm;

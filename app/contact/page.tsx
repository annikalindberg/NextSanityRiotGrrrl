'use client'
import React from "react";
import toast from "react-hot-toast";
import { sendEmail } from "@/actions/sendEmail";

export default function Contact() {
  return (
    <div>
      <h1>Contact</h1>
       <form
        className="mt-10 flex flex-col dark:text-black"
        action={async (formData) => {
          const { data, error } = await sendEmail(formData);

          if (error) {
            toast.error(error);
            return;
          }

          toast.success("Email sent successfully!");
        }}
      >
                <label htmlFor="senderEmail" className="dark:text-white mb-1 mt-2 text-left">
          Your Email:
        </label>
        <input
                  id="senderEmail"

          className="h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="senderEmail"
          type="email"
          required
          maxLength={500}
          placeholder="Enter your email here"
        />
               <label htmlFor="message" className="dark:text-white mt-3 text-left">
          Your Message:
        </label>
        <textarea
          id="message"
          className="h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="message"
          placeholder="Write your message here"
          required
          maxLength={5000}
        />
        <button
          type="submit"
          className="bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 text-white font-semibold py-3 rounded-lg mt-5"      >
          Send Email
        </button>
      </form>
    </div>
  );
}
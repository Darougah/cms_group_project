import React from "react";

const ContactForm = ({ blok }) => {
  return (
    <div className="mt-10 mx-auto half max-w-3xl">
      <form className="space-y-6">
        <div>
          <h2 className="text-3xl font-semibold mb-4">{blok.email_header}</h2>
          <input
            type="email"
            placeholder="Email Address"
            className="p-2 rounded-md text-black w-full border border-gray-700"
          />
        </div>

        <div>
          <h2 className="text-3xl font-semibold mb-4">{blok.message_header}</h2>
          <textarea
            placeholder="Enter your message"
            className="p-2 rounded-md text-black w-full border border-gray-700"
          />
        </div>

        <button
          className="text-white px-4 py-2 rounded-md bg-blue-600 hover:bg-blue-800"
          type="submit"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default ContactForm;

import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import emailjs from "emailjs-com";
import { toast, ToastContainer } from "react-toastify"; // Import toastify
import "react-toastify/dist/ReactToastify.css"; // Import the Toastify styles

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if any field is empty
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("All fields are required!"); // Display error toast
      return; // Prevent form submission if fields are empty
    }

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(
        (result) => {
          toast.success("Message Sent!"); // Display success toast
          setFormData({ name: "", email: "", message: "" }); // Reset form fields
        },
        (error) => {
          toast.error("Oops! Something went wrong. Please try again."); // Display error toast on failure
        }
      );
  };

  // Get the current year dynamically
  const currentYear = new Date().getFullYear();

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="px-4 w-full min-w-[300px] md:w-[500px] sm:w-2/3 p-6">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Get In Touch
          </h2>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="relative">
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                placeholder="Name..."
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
            </div>

            <div className="relative">
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                placeholder="example@gmail.com"
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </div>

            <div className="relative">
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={formData.message}
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                placeholder="Your Message..."
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
            >
              Send Message
            </button>
          </form>

          {/* Contact Details & Copyright Section */}
          <div className="mt-8 text-center text-white">
            <p className="text-lg font-semibold">
              Email:{" "}
              <a
                href="mailto:tntashikrahman@gmail.com"
                className="text-blue-400 hover:text-blue-300"
              >
                tntashikrahman@gmail.com
              </a>
            </p>
            <p className="text-lg font-semibold">
              Phone:{" "}
              <a
                href="tel:+8801706924313"
                className="text-blue-400 hover:text-blue-300"
              >
                +8801706924313
              </a>
            </p>
            <p className="text-sm mt-4 text-gray-400">
              &copy; AshikRahman {currentYear}. All Rights Reserved.
            </p>
          </div>
        </div>
      </RevealOnScroll>

      {/* Toast Container for displaying notifications */}
      <ToastContainer />
    </section>
  );
};

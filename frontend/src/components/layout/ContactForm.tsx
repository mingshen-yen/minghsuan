import { useState } from "react";
import { ArrowUpRight } from "lucide-react";

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form data:", formData);
    //handleBuyMeCoffee();
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // const handleBuyMeCoffee = () => {
  //   window.open("https://ko-fi.com/joinmi", "_blank");
  // };

  return (
    <>
      <div className="w-full">
        <form onSubmit={handleSubmit} className="text-sm text-shadow-black">
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            {/* Name Field */}
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full py-1 border-b border-gray-300 focus:border-b-2 focus:border-slate-100 outline-none transition resize-none"
              placeholder="Name*"
            />
            {/* Email Field */}
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full py-1 border-b border-slate-200 focus:border-b-2 focus:border-slate-100 outline-none transition resize-none"
              placeholder="Email*"
            />
          </div>
          {/* Subject Field */}
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className="w-full py-1 border-b border-gray-300 focus:border-b-2 focus:ring-slate-100 outline-none transition resize-none"
            placeholder="Subject*"
          />
          {/* Message Field */}
          <div className="my-6">
            <label
              htmlFor="message"
              className="flex items-center gap-2 font-medium uppercase mb-2"
            >
              Message*
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={6}
              className="w-full border border-gray-300 focus:ring-2 focus:ring-slate-300 focus:border-transparent outline-none transition resize-none"
            />
          </div>

          {/* Submit to trigger native form validation first */}
          <button
            type="submit"
            className="w-fit text-white px-5 py-2 font-semibold hover:bg-[#057247] transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center gap-1 cursor-pointer"
          >
            Submit
            <ArrowUpRight className="w-5 h-5" />
          </button>
        </form>
      </div>
    </>
  );
};

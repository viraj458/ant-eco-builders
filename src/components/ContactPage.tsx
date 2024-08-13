import React, { useState } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contactNumber: "",
    companyName: "",
    enquiry: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    contactNumber: "",
    enquiry: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setErrors({
      ...errors,
      [name]: "",
    });
  };

  const validateForm = () => {
    const newErrors = {
      name: "",
      email: "",
      contactNumber: "",
      enquiry: "",
    };

    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.contactNumber)
      newErrors.contactNumber = "Contact Number is required";
    if (!formData.enquiry) newErrors.enquiry = "Enquiry is required";

    setErrors(newErrors);

    return Object.values(newErrors).every((error) => error === "");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setSubmitted(true);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center w-full px-4">
      <div className="container max-w-[1600px] mx-auto">
        <div className="bg-gray-300 p-7 text-center w-full flex flex-col items-center justify-center rounded-xl">
          <h1 className="text-4xl font-bold py-4">Contact Us</h1>

          <div className="flex flex-col space-y-2 ">
            <span className="flex items-center space-x-10 justify-between">
              <p><FaPhoneAlt/></p>
              <p className="w-full">(+123) 456-7890</p>
            </span>

            <span className="flex justify-between items-center space-x-10">
              <p><MdEmail/></p>
              <p className="w-full">info@antecobuilders.com</p>
            </span>

            <span className="flex justify-between items-center space-x-10">
              <p><FaLocationDot/></p>
              <p className="w-full">12 Lower Cambridge Street,Loughborough,LE11 1PH</p>
            </span>
            
          </div>
        </div>

        <div className="mt-8 text-center w-full h-20 flex items-center justify-center">
          <h2 className="text-2xl font-bold">General Enquiries</h2>
        </div>

        <div className="mt-16 flex flex-col items-center justify-center w-full">
          <div className="w-full max-w-lg">
            <form
              className="w-full space-y-6 bg-white p-8 shadow rounded"
              onSubmit={handleSubmit}
            >
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-4 bg-gray-200 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-500"
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email Address"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-4 bg-gray-200 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-500"
              />

              <input
                type="tel"
                name="contactNumber"
                placeholder="Your Contact Number"
                value={formData.contactNumber}
                onChange={handleChange}
                className="w-full p-4 bg-gray-200 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-500"
              />

              <input
                type="text"
                name="companyName"
                placeholder="Your Company Name"
                value={formData.companyName}
                onChange={handleChange}
                className="w-full p-4 bg-gray-200 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-500"
              />

              <textarea
                name="enquiry"
                placeholder="Your Enquiry"
                value={formData.enquiry}
                onChange={handleChange}
                className="w-full p-4 bg-gray-200 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-500 h-32"
              ></textarea>

              <div className="flex flex-col items-center space-y-4">
                <button
                  type="button"
                  className="bg-gray-400 py-3 px-6 w-full rounded-lg hover:bg-gray-500 hover:text-white transition-colors duration-300"
                >
                  I'm not a robot
                </button>
                <button
                  type="submit"
                  className="bg-black text-white py-3 px-6 w-full rounded-lg hover:bg-gray-500 transition-colors duration-300"
                >
                  Submit
                </button>
              </div>
            </form>

            {submitted && (
              <div className="mt-6 text-green-500 text-center">
                <p>Your enquiry has been submitted successfully!</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;

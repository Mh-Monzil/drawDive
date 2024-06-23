import Lottie from 'lottie-react';
import contactAnimation from '../assets/contact.json';

const Contact = () => {
  return (
    <section className="py-6 mt-12 md:mt-24">
      <h2 className="text-center font-semibold text-4xl mb-6 md:mb-12">Contact Us</h2>
      <div className="grid max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x">
        <div className="py-6 md:py-0 md:px-6">
          <Lottie className="" animationData={contactAnimation} ></Lottie>
        </div>
        <form
          noValidate=""
          className="flex flex-col py-6 space-y-6 md:py-0 md:px-6"
        >
          <label className="block">
            <span className="mb-1">Full name</span>
            <input
              type="text"
              placeholder="Leroy Jenkins"
              className="block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:ring-[#E76F51] border-2 p-3"
            />
          </label>
          <label className="block">
            <span className="mb-1">Email address</span>
            <input
              type="email"
              placeholder="leroy@jenkins.com"
              className="block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:ring-[#E76F51] border-2 p-3"
            />
          </label>
          <label className="block">
            <span className="mb-1">Message</span>
            <textarea
              rows="3"
              className="block w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-[#E76F51] border-2 p-3"
            ></textarea>
          </label>
          <button
            type="button"
            className="self-center px-8 py-3 text-lg rounded focus:ring hover:ring focus:ring-opacity-75 bg-[#E76F51] text-gray-50 focus:ring-[#E76F51] "
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;

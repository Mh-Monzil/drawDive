import { Link } from "react-router-dom";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer className="footer p-10 bg-[#202942] text-gray-300 mt-12 md:mt-24">
        <aside>
          <h2 className="text-2xl font-bold">
            Draw<span className="text-[#E76F51]">Dive</span>
          </h2>
          <p>
            DrawDive Industries Ltd.
            <br />
            Providing reliable art and craft since 2012
          </p>
        </aside>
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Art Supplies Finder</a>
          <a className="link link-hover">Artist Showcase</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <Link>
            <a className="link link-hover">Contact</a>
          </Link>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
        <form>
          <h6 className="footer-title">Newsletter</h6>
          <fieldset className="form-control">
            <p className="font-medium mb-3">Enter your email address</p>
            <div className="sm:join flex flex-col sm:flex-row space-y-2 sm:space-y-0">
              <input
                type="text"
                placeholder="username@site.com"
                className="input input-bordered join-item"
              />
              <button className="btn bg-[#E76F51] join-item border-[#E76F51] text-white hover:bg-[#fb6c48] hover:border-[#fb6c48]">
                Subscribe
              </button>
            </div>
          </fieldset>
        </form>
      </footer>
      <div className=" bg-[#202942]  flex  flex-col justify-around items-center gap-2 py-8 px-4">
        <div className="flex items-center gap-2 md:gap-6">
          <a href=""><FaFacebook className="text-[#E76F51] text-5xl  p-1 hover:scale-110 transition-all duration-300 cursor-pointer" /></a>
          <a href=""><FaLinkedin className="text-[#E76F51] text-5xl  p-1 hover:scale-110 transition-all duration-300 cursor-pointer" /></a>
          <a href=""><FaTwitter className="text-[#E76F51] text-5xl  p-1 hover:scale-110 transition-all duration-300 cursor-pointer" /></a>
        </div>
        <p className="text-gray-300 text-center">Copyright © 2024 - All right reserved by DrawDive</p>
      </div>
    </>
  );
};

export default Footer;

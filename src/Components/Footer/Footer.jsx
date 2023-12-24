import { FaInstagram } from "react-icons/fa6";
import { FaSquareFacebook } from "react-icons/fa6";
import { TfiTwitterAlt } from "react-icons/tfi";

const Footer = () => {
  return (
    <>
      <section className="footer p-10 bg-gray-800 text-white">
        <nav>
          <header className="footer-title">Services</header>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <header className="footer-title">Company</header>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <header className="footer-title">Social</header>
          <div className="grid grid-flow-col gap-4">
            <a>
              <TfiTwitterAlt size={25} />
            </a>
            <a>
              <FaSquareFacebook size={25} />
            </a>
            <a>
              <FaInstagram size={25} />
            </a>
          </div>
        </nav>
      </section>
      <section className="footer footer-center p-4 bg-gray-900 text-white">
        <aside>
          <p className="text-lg">
            Copyright © 2023 - All right reserved by Task Master Ltd
          </p>
        </aside>
      </section>
    </>
  );
};

export default Footer;

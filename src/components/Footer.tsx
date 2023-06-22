import {
  FaFacebookSquare,
  FaTwitter,
  FaInstagram,
  FaPinterest,
} from "react-icons/fa";
const Footer = () => {
  return (
    <footer>
      <div className="flex justify-center items-center flex-col gap-5 bg-DarkViolet relative w-full h-[350px]">
        <h2 className="z-10 text-2xl text-white md:text-3xl font-semibold">
          Boost your links today
        </h2>
        <button className="z-20 px-6 md:text-lg bg-Cyan py-2 rounded-3xl text-white relative hover:before:content-[''] hover:before:absolute hover:before:inset-0 hover:before:bg-Gray/40 hover:before:rounded-3xl">
          Get Started
        </button>
        <div className="absolute inset-0 md:bg-bgBoostDesk bg-center bg-cover bg-bgBoostMb" />
      </div>
      <div className="flex flex-col justify-center items-center text-center w-full gap-6 md:flex-row md:items-start md:justify-between px-8 md:px-16 lg:px-32 py-8 bg-VeryDarkViolet text-GrayishViolet">
        <h2 className="text-3xl text-white">Shortly</h2>
        <div className="flex md:items-start flex-col gap-6 md:flex-row md:gap-8">
          <div>
            <h3 className="mb-2 text-lg text-slate-100">Features</h3>
            <ul className="text-sm space-y-1">
              <li>
                <a href="#" className="hover:text-Cyan">
                  Link Shortening
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-Cyan">
                  Branded Links
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-Cyan">
                  Analytics
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-2 text-lg text-slate-100">Resources</h3>
            <ul className="text-sm space-y-1">
              <li>
                <a href="#" className="hover:text-Cyan">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-Cyan">
                  Developers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-Cyan">
                  Support
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-2 text-lg text-slate-100">Company</h3>
            <ul className="text-sm space-y-1">
              <li>
                <a className="hover:text-Cyan" href="#">
                  About
                </a>
              </li>
              <li>
                <a className="hover:text-Cyan" href="#">
                  Our Team
                </a>
              </li>
              <li>
                <a className="hover:text-Cyan" href="#">
                  Careers
                </a>
              </li>
              <li>
                <a className="hover:text-Cyan" href="#">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="text-white flex gap-6">
          <button className="hover:text-Cyan">
            <FaFacebookSquare size={26} />
          </button>
          <button className="hover:text-Cyan">
            <FaTwitter size={26} />
          </button>
          <button className="hover:text-Cyan">
            <FaPinterest size={26} />
          </button>
          <button className="hover:text-Cyan">
            <FaInstagram size={26} />
          </button>
        </div>
      </div>
    </footer>
  );
};
export default Footer;

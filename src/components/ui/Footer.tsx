import { NavLink } from "react-router-dom";
import { FaFacebookSquare, FaYoutube, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
const Footer = () => {
  return (
    <>
      <footer className="bg-[#EFF2F9] ">
        <div className="py-16 my-10 flex items-center justify-around">
          {/* logo and short description */}
          <div>
            <h1 className=" text-gradient text-2xl md:text-3xl font-bold">
              RideWave
            </h1>
            <p className="mt-2 ">Catch the Perfect Ride, Anytime, Anywhere.</p>
          </div>
          {/* pages */}
          <div>
            <h4 className="text-lg font-semibold">Explore</h4>
            <ul>
              <li>
                <NavLink to="/">Privacy Policy</NavLink>
              </li>
              <li>
                <NavLink to="/about">Terms of Service</NavLink>
              </li>
              <li>
                <NavLink to="/auth"> Contact Us</NavLink>
              </li>
            </ul>
          </div>
          {/* social icons */}
          <div>
            <h4 className="text-lg font-semibold">Follow us on:</h4>
            <ul>
              <li className="flex items-center gap-2">
                <FaFacebookSquare className="text-xl" /> <p>Facebook</p>
              </li>
              <li className="flex items-center gap-2">
                <FaLinkedin className="text-xl" /> <p>LinkedIn</p>
              </li>
              <li className="flex items-center gap-2">
                <FaSquareXTwitter  className="text-xl" /> <p>Twitter</p>
              </li>
              <li className="flex items-center gap-2">
                <FaYoutube className="text-xl" /> <p>Youtube</p>
              </li>
            </ul>
          </div>
        </div>
        <p className="text-center">
          &copy; 2024 RideWave. All rights reserved.
        </p>
      </footer>
    </>
  );
};

export default Footer;
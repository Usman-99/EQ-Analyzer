import { useNavigate } from "react-router-dom";
import { SiFacebook } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { HashLink } from "react-router-hash-link";
export default function Footer() {
  const navigate = useNavigate();
  return (
    <footer className="footer w3-center w3-black w3-padding-64">
      <button
        className="btn btn-success"
        onClick={() => {
          window.scrollTo(0, 0);
        }}
      >
        <i className="fa fa-arrow-up w3-margin-right"></i>Go to Top
      </button>
      <div className="w3-xlarge w3-section">
        <ul className="flex gap-4" style={{ display: "-webkit-inline-flex" }}>
          <li>
            <a>
              <SiFacebook size={25} className="" />
            </a>
          </li>
          <li>
            <a>
              <FaLinkedin size={25} />
            </a>
          </li>
          <li>
            <a>
              <FaGithub size={25} />
            </a>
          </li>
        </ul>
      </div>
      <p className="w3-large text-info">
        <b>INTERVIEW EQ ANALYZER</b>
        <b className="px-3">&copy;</b>
      </p>
      <br />
      <HashLink to="/#predict">
        <button
          className="btn btn-light border-info  btn-small  w3-margin-bottom"
          style={{ border: "4px solid" }}
        >
          <b>Predict now</b>
        </button>
      </HashLink>
    </footer>
  );
}

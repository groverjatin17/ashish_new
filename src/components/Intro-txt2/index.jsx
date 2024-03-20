import { useEffect } from "react";
import addParlx from "../../common/addParlx";
import Link from "next/link";

const IntroTxt2 = () => {
  useEffect(() => {
    setTimeout(() => addParlx());
  }, []);

  return (
    <header
      className="slider simpl fixed-slider bg-img valign"
      style={{ backgroundImage: "url(/img/slid/a2.jpg)" }}
      data-overlay-dark="6"
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-9">
            <div className="caption center mt-50">
              <h6>DIGITAL TRANSFORMATION.</h6>
              <h1>It Frog</h1>
              <p>
                Empowering businesses to digitize and thrive in the digital age
                with innovative solutions and support.
              </p>
              <Link href="/contact/contact-light">
                <a className="btn-curve btn-lit mt-40">
                  <span>Get Started Now</span>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default IntroTxt2;

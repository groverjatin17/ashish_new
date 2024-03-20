import React from "react";
import Split from "../Split";

const AboutIntro = () => {
  return (
    <section className="intro-section section-padding pb-0">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-4">
            <div className="htit sm-mb30">
              <h4>Who We Are ?</h4>
            </div>
          </div>
          <div className="col-lg-8 offset-lg-1 col-md-8">
            <div className="text">
              <Split>
                <p className="wow txt words chars splitting" data-splitting>
                  Welcome to our Itfrog! We specialize in providing web
                  development services to businesses of all sizes, from small
                  startups to large corporations. Our team of experienced
                  developers and designers are committed to delivering
                  high-quality web solutions that are tailored to meet our
                  clients unique needs and objectives. We pride ourselves on
                  our attention to detail, commitment to customer satisfaction,
                  and ability to stay at the forefront of web development trends
                  and technologies. Whether you need a simple website or a
                  complex web application, we have the expertise and creativity
                  to bring your vision to life. Get in touch with us today to
                  learn how we can help you achieve your web development goals
                </p>
              </Split>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutIntro;

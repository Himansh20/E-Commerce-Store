import React from "react";
import Layout from "./../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={"About us - Ecommer app"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/about.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2">
          At UNIK, we are passionate about delivering top-notch products and exceptional service to our customers. Established with a vision to redefine online shopping, we strive to create an unparalleled shopping experience that combines convenience, quality, and affordability.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;

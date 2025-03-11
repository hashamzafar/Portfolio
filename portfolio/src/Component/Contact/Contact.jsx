import React from "react";
import "./contact.css";

const Contact = () => {
  return (
    <div className="container card mt-5" id="contact">
      <div className="row shadow-lg p-4 rounded ">
        {/* Project Details */}

        <div className="col-md-6">
          <h2 className="mb-3">Hasham Zafar</h2>
          <p>
            I am a passionate **full-stack developer** with experience in
            **React, JavaScript, TypeScript, Next and express**. I have worked
            on building **responsive, user-friendly, and scalable web
            applications**.
          </p>
          <p>
            With a keen eye for design and performance, I ensure that every
            project is **optimized for speed and accessibility**. I enjoy
            solving complex problems and continuously learning new technologies
            to enhance my skills.
          </p>
        </div>

        {/* Contact Information */}
        <div className="col-md-6">
          <img src="/assets/hat-hz.png" className="card-img" alt="Logo" />
          <h2 className="mb-3">Get in Touch</h2>
          <p>
            <strong>Email:</strong> hasham307@gmail.com
          </p>
          <p>
            <strong>Mobile:</strong> +39 3512963810
          </p>
          <div className="d-flex gap-3">
            <a
              href="https://github.com"
              target="_blank"
              className="text-primary"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              className="text-primary"
            >
              LinkedIn
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              className="text-primary"
            >
              Twitter
            </a>
          </div>
        </div>
      </div>
    </div>
  );
  //   return (
  //     <>
  //       <div className="card row">
  //         <img src="/assets/hat-hz.png" className="card-img" alt="Logo" />
  //         <div className="card-body ">
  //           <h5 className="card-title">Hasham Zafar</h5>
  //           <p className="card-text">
  //             Some quick example text to build on the card title and make up the
  //             bulk of the card's content.
  //           </p>
  //         </div>
  //       </div>
  //     </>
  //   );
};

export default Contact;

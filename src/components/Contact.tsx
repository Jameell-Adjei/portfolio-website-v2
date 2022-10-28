import React, { useRef } from "react";
import { useOnScreen } from "../helperFuncs";

const Contact: React.FC = () => {
  const ref: any = useRef<HTMLElement>(null);

  const contactOnScreen = useOnScreen(ref, {
    threshold: 0.25,
  });
  return (
    <section
      className={`global contact-section basePadding m-fadeOut ${
        contactOnScreen ? "m-fadeIn" : ""
      }`}
      id="contact"
      ref={ref}
    >
      <h1 className="contact-section__title">Getting in Touch with me</h1>

      <p className="contact-section__desc">
        My{" "}
        <a href="mailto:jameelladjei@gmail.com" className="about-section__link">
          email
        </a>{" "}
        is open for anyone to send a message. I am also currently looking for
        job opportunities in web development. Feel free to message me or ask any
        question you have. I will respond in a timely manner.
      </p>
    </section>
  );
};

export default Contact;

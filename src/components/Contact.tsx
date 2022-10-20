import React, { useRef } from "react";
import { useOnScreen } from "../helperFuncs";
const Contact: React.FC = () => {
  const ref: any = useRef<HTMLElement>(null);

  const contactOnScreen = useOnScreen(ref, {
    rootMargin: "0px 0px  1px 0px",
    threshold: 0,
  });
  return (
    <section
      className={`global contact-section basePadding ${
        contactOnScreen ? "animate" : ""
      }`}
      id="contact"
      ref={ref}
    >
      <h1 className="contact-section__title">Getting in Touch with me</h1>

      <p className="contact-section__desc">
        My email is open for anyone to send a message. I am also currently
        looking for job opportunities in web development. Feel free to message
        me or ask any question you have. I will respond in a timely manner.
      </p>

      <button className="contact-section__button">See More</button>
    </section>
  );
};

export default Contact;

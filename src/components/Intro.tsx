import React, { useRef } from "react";
import { useOnScreen } from "../helperFuncs";
import IntroLinks from "./IntroLinks";

const Intro: React.FC = () => {
  const ref: any = useRef<HTMLElement>(null);


  const introOnScreen= useOnScreen(ref, { threshold: 0.25 });

  return (
    <section className={`global intro basePadding m-fadeOut ${introOnScreen? 'm-fadeIn' : ''}`} id="intro" ref={ref}>
        <h2 className="intro__main--header">Hello there, I'm ...</h2>
        <h2 className="intro__main--name">Jameell</h2>
        <h2 className="intro__main--header">
          and I build applications that run on the web.
        </h2>
        <p className="intro__desc">
          I am a web developer based in New York that develops front-end as well
          as full-stack applications. Also I have developed software in various
          programming languages.
        </p>
        <IntroLinks />
    </section>
  );
};

export default Intro;

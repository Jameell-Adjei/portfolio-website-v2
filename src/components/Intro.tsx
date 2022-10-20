import React, { useRef } from "react";
import { useOnScreen } from "../helperFuncs";
import IntroLinks from "./IntroLinks";

const Intro: React.FC = () => {
  const ref: any = useRef<HTMLElement>(null);


  const introOnScreen= useOnScreen(ref, { rootMargin: "0px 0px 350px 0px" });

  return (
    <div className={`global intro basePadding ${introOnScreen? 'animate' : ''}`} id="intro" ref={ref}>
        <h1 className="intro__main--header">Hello there, I'm ...</h1>
        <h1 className="intro__main--name">Jameell</h1>
        <h1 className="intro__main--header">
          and I build applications that run on the web.
        </h1>
        <p className="intro__desc">
          I am a web developer based in New York that develops front-end as well
          as full-stack applications. Also I have developed software in various
          programming languages.
        </p>
        <IntroLinks />
    </div>
  );
};

export default Intro;

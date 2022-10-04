import React, { ReactNode, useCallback } from "react";
import useEmblaCarousel, {
  EmblaEventType,
  EmblaOptionsType,
} from "embla-carousel-react";
import TechSkill from "./TechSkill";
import { techSkillData } from "../data";
import { PrevButton, NextButton } from "./CarouselButtons";
import Autoplay from "embla-carousel-autoplay";

const TechSkillCarosuel: React.FC = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      dragFree: true,
      skipSnaps: false,
      direction: "rtl",
    },
    [Autoplay({ delay: 2000, stopOnInteraction: false })]
  );

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {techSkillData.map((skill) => (
            <TechSkill title={skill.name} className={skill.iconClass} />
          ))}
        </div>

        <NextButton onClick={scrollNext} />
        <PrevButton onClick={scrollPrev} />
      </div>
    </div>
  );
};

export default TechSkillCarosuel;

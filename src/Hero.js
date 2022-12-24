import React from "react";
import phoneImg from "./images/phone.svg";
import { useGlobalContext } from "./context";

const Hero = () => {
  const { closeSubmenu } = useGlobalContext();

  return (
    <section className="hero" onMouseOver={closeSubmenu}>       
      <div className="hero-center">
        <article className="hero-info">
          <h1>Payments infrastructure for the internet</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia
            vitae culpa esse corrupti cupiditate ex sit magni, repellendus
            suscipit repudiandae! Officiis, minima atque placeat voluptate
            dolores omnis ut illo sint. Blanditiis molestiae nam doloribus,
            adipisci quos aliquid totam nihil quo consequuntur. Quasi adipisci,
            ea velit optio laborum est! Quasi, harum?
          </p>
          <button className="btn">Start now</button>
        </article>
        <article className="hero-images">
          <img className="phone-img" src={phoneImg} alt="phone" />
        </article>
      </div>
    </section>
  );
};

export default Hero;

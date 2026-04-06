"use client";

import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import "./hero.scss";

gsap.registerPlugin(ScrollTrigger);

const RevolutHero = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { contextSafe } = useGSAP({ scope: containerRef });

  useGSAP(() => {
    ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top -1px", // Triggers the moment the user scrolls down slightly
      end: "+=20%",      // Short pin to give the animation time to finish
      pin: true,
      onEnter: () => handleFirstAnim(),
      onLeaveBack: () => handleSecondAnim(),
    });
  }, { scope: containerRef });

  const handleFirstAnim = contextSafe(() => {
    gsap.to(".hero-text", {
      y: -200,
      opacity: 0,
    });
    // Use global query for header as it's outside this component's scope
    // gsap.to(document.querySelector("header") || ".header", {
    //   // y: -200,
    //   opacity: 0,
    // });
    gsap.to(".presentation", {
      zIndex: 5,
    });
    gsap.to(".presentation-text", {
      opacity: 1,
      transform: "translateY(0) scale(1)",
      zIndex: 1,
    });
    gsap.to(".presentation-slides", {
      transform: "translateY(calc(-14.6 * var(--h-unit))) scale(0.641026)",
    });
    gsap.to(".box", {
      width: "100vw",
      height: "100vh",
      borderRadius: 0,
    });
    gsap.to(".slide-main", {
      borderWidth: 0,
      borderRadius: "calc(2.5 * var(--h-unit))",
    });
    gsap.to(".slide-card-avatar img", {
      transform: "translate(-50%, calc(12.48 * var(--h-unit))) scale(1.6)",
    });
    gsap.to(".slide-card-banner img", {
      transform: "translate(-50%, calc(12.48 * var(--h-unit))) scale(1.56)",
    });
    gsap.to(".slide-secondary-one", {
      opacity: 1,
      transform: "translateX(0) scale(.9)",
    });
    gsap.to(".slide-secondary-two", {
      opacity: 1,
      transform: "translateX(0) scale(.9)",
    });
  });

  const handleSecondAnim = contextSafe(() => {
    gsap.to(".hero-text", {
      y: 0,
      opacity: 1,
    });
    // gsap.to(document.querySelector("header") || ".header", {
    //   // y: 0,
    //   opacity: 1,
    // });
    gsap.to(".presentation", {
      zIndex: -1,
    });
    gsap.to(".presentation-text", {
      transform: "translateY(75px) scale(0.75)",
      opacity: 0,
      zIndex: 0,
    });
    gsap.to(".presentation-slides", {
      transform: "translateY(0) scale(1)",
    });
    gsap.to(".box", {
      width: "calc(48 * var(--h-unit))",
      height: "calc(70 * var(--h-unit))",
      borderTopLeftRadius: "calc(2.5 * var(--h-unit))",
      borderTopRightRadius: "calc(2.5 * var(--h-unit))",
      borderBottomLeftRadius: 0,
      borderBottomRightRadius: 0,
    });
    gsap.to(".slide-main", {
      borderWidth: "3px",
      borderRadius: "calc(2.5 * var(--h-unit)) calc(2.5 * var(--h-unit)) 0 0",
    });
    gsap.to(".slide-card-avatar img", {
      transform: "translate(-50%, 0px) scale(1.6)",
    });
    gsap.to(".slide-card-banner img", {
      transform: "translate(-50%, 0px) scale(1.56)",
    });
    gsap.to(".slide-secondary-one", {
      opacity: 0,
      transform: "translateX(-30%) scale(.9)",
    });
    gsap.to(".slide-secondary-two", {
      opacity: 0,
      transform: "translateX(30%) scale(.9)",
    });
  });

  return (
    <div id="app-desktop" ref={containerRef}>
      <main className="main">
        <div className="main-container">
          <section className="hero">
            <div className="hero-image">
              <img src="/banner.webp" className="hero-image-banner" alt="banner" />
              <img src="/avatar.webp" className="hero-image-avatar" alt="avatar" />
            </div>
            <div className="hero-text">
              <h1 className="">Change the way you money</h1>
              <p className="">For those who want more from their money — there’s Revolut. Sign up for free, in a tap.</p>
            </div>
          </section>
          <section className="presentation">
            <div className="box"></div>
            <div className="presentation-text">
              <h2 className="">MAKE YOUR SPEND, WELL-SPENT</h2>
              <p className="">Grabbing a coffee? Add some cashback. When in Japan? Spend in Yen. Big life change? Try a Joint
                Account. However you spend — Revolut is all you need.
              </p>
            </div>
            <div className="presentation-slides">
              <div className="slide-secondary slide-secondary-one">
                <img src="/card-1.webp" className="" alt="photo" />
              </div>
              <div className="slide-main rounded-2xl">
                <div className="slide-card rounded-2xl">
                  <img src="/card.webp" className="slide-card-infos" alt="photo" />
                  <div className="slide-card-banner">
                    <img src="/banner.webp" className="" alt="banner" />
                  </div>
                  <div className="slide-card-avatar">
                    <img src="/avatar.webp" className="" alt="avatar" />
                  </div>
                </div>
              </div>
              <div className="slide-secondary slide-secondary-two">
                <img src="/card-2.webp" className="" alt="photo" />
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default RevolutHero;

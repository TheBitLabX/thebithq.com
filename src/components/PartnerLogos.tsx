"use client";
import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";

export default function PartnerLogos() {
  gsap.registerPlugin(ScrollTrigger);

    useEffect(() => {
      const additionalX = { val: 0 };
      let additionalXAnim: gsap.core.Tween | undefined;
      let offset = 0;
      let originalImages: HTMLElement[] = gsap.utils.toArray(".partners .image");
      const container = document.querySelector<HTMLElement>(".partners");
      const sliderWidth = container && container.offsetWidth;

      // DUPLICATE IMAGES FOR LOOP
      originalImages.forEach((image) => {
        var clone = image.cloneNode(true);
        container!.appendChild(clone);
      });

      let images: any[] = gsap.utils.toArray(".image");

      // SET ANIMATION
      images.forEach((item) => {
        gsap.to(item, {
          x: `-=${Number(sliderWidth! / 2)}`,
          duration: 30,
          repeat: -1,
          ease: "none",
          modifiers: {
            x: gsap.utils.unitize((x) => {
              offset += additionalX.val;
              x = (parseFloat(x) + offset) % -Number(sliderWidth! * 0.5);
              return x;
            }),
          },
        });
      });

      const imagesScrollerTrigger = ScrollTrigger.create({
        trigger: ".partners",
        start: "top 50%",
        end: "bottom 50%",
        onUpdate: function (self) {
          const velocity = self.getVelocity();
          if (velocity > 0) {
            if (additionalXAnim) additionalXAnim.kill();
            additionalX.val = -velocity / 2000;
            additionalXAnim = gsap.to(additionalX, { val: 0 });
          }
          if (velocity < 0) {
            if (additionalXAnim) additionalXAnim.kill();
            additionalX.val = -velocity / 4000;
            additionalXAnim = gsap.to(additionalX, { val: 0 });
          }
        },
      });
    }, []);

  return (
    <div
      className='partners mt-6 z-10 flex flex-nowrap overflow-visible w-[600vh]'
      style={{ maxWidth: "auto" }}
    >
      {Array.from({ length: 4 }, (_, i) => (
        <div
          key={i}
          className='image saturate-0 p-4 inline-flex items-center hover:z-20 hover:saturate-100'
        >
          <Image
            className='transition duration-300 ease-out overflow-hidden w-full'
            src={`/img/partners/${i + 1}.png`}
            alt={`Brand ${i + 1}`}
            width={183}
            height={83}
          />
        </div>
      ))}
    </div>
  );
}

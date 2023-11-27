import React, { useEffect } from "react";
import Image from "next/image";

type PartnerLogosProps = {
  logos: string[];
};

const partnerLogos: string[] = [
  "/img/partners/1.png",
  "/img/partners/2.png",
  "/img/partners/3.png",
  "/img/partners/4.png",

  // ... more logos
];

const PartnerLogosCo: React.FC<PartnerLogosProps> = ({ logos }) => {
  return (
    <div className='logo-container'>
      {logos.map((logo, index) => (
        <Image
          key={index}
          src={logo}
          alt={`Partner Logo ${index}`}
          className='logo'
          width={183}
          height={83}
        />
      ))}
      {/* Duplicate the logos for a seamless loop */}
      {logos.map((logo, index) => (
        <Image
          key={`duplicate-${index}`}
          src={logo}
          alt={`Partner Logo ${index}`}
          className='logo'
          width={183}
          height={83}
        />
      ))}
      {logos.map((logo, index) => (
        <Image
          key={`duplicate-${index}`}
          src={logo}
          alt={`Partner Logo ${index}`}
          className='logo'
          width={183}
          height={83}
        />
      ))}
      {logos.map((logo, index) => (
        <Image
          key={`duplicate-${index}`}
          src={logo}
          alt={`Partner Logo ${index}`}
          className='logo'
          width={183}
          height={83}
        />
      ))}
    </div>
  );
};
export default function PartnerLogos() {
  return (
    <div className='partners mt-6 z-10 flex flex-nowrap overflow-hidden w-[600vh]'>
      <PartnerLogosCo logos={partnerLogos} />
    </div>
  );
}

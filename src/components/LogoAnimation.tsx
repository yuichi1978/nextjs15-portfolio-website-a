"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import udemy from "../../public/assets/udemy.png";
import fiverr from "../../public/assets/fiverr.png";
import elementor from "../../public/assets/elementor.png";
import logitech from "../../public/assets/logitech.png";
import oracle from "../../public/assets/oracle.png";

const images = [
  { src: udemy, alt: "figma" },
  { src: fiverr, alt: "fiverr" },
  { src: elementor, alt: "elementor" },
  { src: logitech, alt: "logitech" },
  { src: oracle, alt: "oracle" },
  { src: udemy, alt: "figma" },
  { src: fiverr, alt: "fiverr" },
  { src: elementor, alt: "elementor" },
  { src: logitech, alt: "logitech" },
  { src: oracle, alt: "oracle" },
  { src: udemy, alt: "figma" },
  { src: fiverr, alt: "fiverr" },
  { src: elementor, alt: "elementor" },
  { src: logitech, alt: "logitech" },
  { src: oracle, alt: "oracle" },
  { src: udemy, alt: "figma" },
  { src: fiverr, alt: "fiverr" },
  { src: elementor, alt: "elementor" },
  { src: logitech, alt: "logitech" },
  { src: oracle, alt: "oracle" },
];

export default function LogoAnimation() {
  return (
    <div className="py-8 my-24 bg-purple-300/10 skew-y-3 opacity-80 glass">
      <div className="container mx-auto">
        <div
          className="
            overflow-hidden [mask-image:linear-gradient(to_right,_transparent,_black_25%,_black_75%,_transparent)]"
        >
          <motion.div
            className="flex flex-none pr-14 gap-14"
            animate={{
              translateX: "-50%",
            }}
            transition={{
              duration: 35,
              repeat: Infinity,
              ease: "linear",
              repeatType: "loop",
            }}
          >
            {images.map((image, index) => (
              <Image src={image.src} key={index} alt={image.alt} height={30} />
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}

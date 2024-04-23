import React, { useEffect, useRef } from "react"; 
import { motion, useInView, useAnimation} from "framer-motion";

export const Reveal = ({ children }) => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const animation = useAnimation();

  useEffect(() => {
    if (isInView) {
      animation.start({ opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.2 } });
    } else {
      animation.start({ opacity: 0, y: 20 });
    }
  }, [isInView]);

  return (
    <div ref={ref}>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={animation}>
        {children}
      </motion.div>
    </div>
  );
};
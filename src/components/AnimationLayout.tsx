import { FC } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const AnimationLayout: FC = () => {
  const { pathname } = useLocation();
  return (
    <motion.div
      key={pathname}
      initial="initial"
      animate="in"
      variants={{
        initial: { opacity: 0 },
        in: { opacity: 1 },
        out: { opacity: 0 },
      }}
      transition={{ type: "tween", ease: "linear", duration: 0.5 }}
    >
      <Outlet />
    </motion.div>
  );
};

export default AnimationLayout;

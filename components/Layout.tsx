import styles from './style.module.scss';
import Meta from './Meta';
import React from 'react';
import Footer from './Footer/Footer';
import { motion, AnimatePresence } from 'framer-motion'; // Import motion and AnimatePresence
import { Box } from '@mui/material';
import Header from './Header/Header';
import FooterCopy from './FooterCopy/FooterCopy';

const Layout = ({ children }: { children: any }) => {
  // const variants = {
  //   hidden: { opacity: 1, x: 1300, y: 0 },
  //   enter: { opacity: 1, x: 0, y: 0 },
  //   exit: { opacity: 1, x: -1300, y: 0 },
  // };
  return (
    <>
      <Meta />
      <Header />
      <AnimatePresence mode="wait">
        <motion.main
          key={typeof window !== 'undefined' && (window.location.pathname as any)}
          // variants={variants} // Pass the variant object into Framer Motion
          // initial="hidden" // Set the initial state to variants.hidden
          // animate="enter" // Animated state to variants.enter
          // exit="exit" // Exit state (used later) to variants.exit
          // transition={{ type: 'just', delay: 0.1 }}
        >
          <Box>{children}</Box>
          {/* <Footer /> */}
          <FooterCopy />
        </motion.main>
      </AnimatePresence>
    </>
  );
};

export default Layout;

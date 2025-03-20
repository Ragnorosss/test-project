import { motion, AnimatePresence } from 'framer-motion';
import { PropsWithChildren } from 'react';
import { useLocation } from 'react-router-dom';

function AnimateWrapper({ children }: PropsWithChildren) {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, scale: 0.98, x: 10 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        exit={{ opacity: 0, scale: 1.02, x: -10 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
      >
        {' '}
        {children}
      </motion.div>
    </AnimatePresence>
  );
}

export default AnimateWrapper;

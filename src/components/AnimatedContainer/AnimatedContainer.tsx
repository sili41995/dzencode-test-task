import { FC } from 'react';
import { motion } from 'framer-motion';
import { IProps } from './AnimatedContainer.types';

const AnimatedContainer: FC<IProps> = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }}
    style={{ width: '100%' }}
  >
    {children}
  </motion.div>
);

export default AnimatedContainer;

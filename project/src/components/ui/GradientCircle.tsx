import React from 'react';
import { motion } from 'framer-motion';

interface GradientCircleProps {
  className?: string;
  colors: string[];
}

export const GradientCircle = ({ className = '', colors }: GradientCircleProps) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.8 }}
    className={`rounded-full bg-gradient-to-r ${colors.join(' ')} ${className}`}
  />
);
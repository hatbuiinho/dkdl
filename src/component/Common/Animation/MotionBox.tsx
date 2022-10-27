import React, { ReactNode } from 'react';
import { HTMLMotionProps, motion } from 'framer-motion';

type Props = { children: ReactNode } & HTMLMotionProps<'div'>;

const MotionBox = (props: Props) => {
  return <motion.div {...props}>{props.children}</motion.div>;
};

export default MotionBox;

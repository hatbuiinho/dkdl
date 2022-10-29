import { Flex } from '@chakra-ui/react';
import { HTMLMotionProps, Variants } from 'framer-motion';
import React, { ReactNode } from 'react';
import MotionBox from './MotionBox';

type Props = {
  children: ReactNode;
  duration?: number;
  type?: string;
} & HTMLMotionProps<'div'>;
const fadeInVariants: Variants = {
  start: {
    opacity: 0,
    translateY: 10,
  },
  end: {
    opacity: 1,
    translateY: 0,
  },
};

const FadeIn = (props: Props) => {
  const { children: Children, duration = 0.8, type = 'tween' } = props;
  return (
    <MotionBox
      {...props}
      variants={fadeInVariants}
      transition={{ type: type, duration: duration }}
      initial="start"
      whileInView="end"
      viewport={{ once: true, amount: 0.2 }}
      // as={Flex}
    >
      {Children}
    </MotionBox>
  );
};

export default FadeIn;

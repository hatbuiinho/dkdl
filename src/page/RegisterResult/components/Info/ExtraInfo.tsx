import { Button, Flex, HStack, Image, Input, Stack, Text } from '@chakra-ui/react';
// import {
//   Carousel,
//   CarouselItem,
//   CarouselItems,
//   useCarousel,
//   useCarouselItem,
// } from 'chakra-framer-carousel';
import React from 'react';
import Carousel from 'framer-motion-carousel';

const images = [
  'https://images.unsplash.com/photo-1606567595334-d39972c85dbe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=',
  'https://images.unsplash.com/photo-1572402230267-f3e267c1e5a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1497206365907-f5e630693df0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1551085254-e96b210db58a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1552728089-57bdde30beb3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1555169062-013468b47731?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1444464666168-49d633b86797?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
];
const colors = ['#f90', '#ef0', '#e0f'];

const ExtraInfo = () => {
  return (
    <Flex w={600} h={400} justifyContent="center" mx={'auto'}>
      <Carousel interval={3000} loop autoPlay>
        {images.map((item, i) => (
          <Flex align={'center'} justify="center">
            <Image
              src={item}
              objectFit="cover"
              h="100%"
              w="100%"
              // objectPosition="center center"
              borderRadius={10}
              _hover={{ scale: 1.1 }}
            />
          </Flex>
        ))}
      </Carousel>
    </Flex>
  );
};

// function Toolbar() {
//   const { onNext, onPrevious } = useCarousel();
//   return (
//     <Flex w="full" justify="center">
//       <HStack>
//         <Button w="115px" onClick={onPrevious}>
//           Previous
//         </Button>
//         <Button w="115px" onClick={onNext}>
//           Next
//         </Button>
//       </HStack>
//     </Flex>
//   );
// }

function Card({ image, index }) {
  // const { numberOfSlides, onClickHandler, position } = useCarouselItem();
  // const isCenter = position === 'center';
  return (
    <Flex
      boxSize={'400px'}
      pos="relative"
      boxShadow="lg"
      as="button"
      // onClick={onClickHandler}
    >
      <Flex
        borderRadius="full"
        bg="whiteAlpha.400"
        p={2}
        left={2}
        top={2}
        position="absolute"
      >
        {/* <Text>{`${index + 1}/${numberOfSlides}`}</Text> */}
      </Flex>

      <Image
        src={image}
        boxSize={'400px'}
        objectFit="cover"
        objectPosition="center center"
        borderRadius={10}
        _hover={{
          scale: 1.1,
        }}
      />
    </Flex>
  );
}

export default ExtraInfo;

import React from 'react';
import { Carousel } from "react-responsive-carousel";

import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img1 from "../assets/1.jpg";
import img2 from "../assets/2.jpg";
import img3 from "../assets/3.jpg";
import img4 from "../assets/4.jpg";
import img5 from "../assets/5.png";

import { Box, Image, Heading, Container, Stack, Text } from '@chakra-ui/react'; // Import Container from Chakra UI

const headingOptions = {
  position: 'absolute',
  left: '50%',
  top: '50%',
  transform: "translate(-50%, -50%)",
  textTransform: 'uppercase',
  p: '4',
  size: "4xl",
  bgColor: "blackAlpha.600",
  color: "white"
}

const Home = () => {
  return (
    <Box>
      <MyCarousel />
      <Container alignSelf={'center'} w={'100%'} maxW="container.xl" minH="100vh" pr={16}> {/* Use correct prop values */}
        <Heading textTransform="uppercase" borderBottom="2px solid" w="fit-content" py={2} margin="auto">
          Services
        </Heading>
        
        <Stack 
          p={4}
          h="full"
          alignItems={['center', 'stretch']}
          direction={['column', 'row']}
        >
          <Image src={img5} h={['40', '400']} filter="hue-rotate(-120deg)" />
          <Text textAlign="center" letterSpacing="widest" p={['4', '16']} lineHeight="190%">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum laboriosam cupiditate tenetur consequuntur eum neque expedita vitae alias, debitis odit est itaque nemo nisi, autem repellat dolore ullam excepturi, natus aspernatur. Consequatur nihil assumenda illum vero! Doloribus rerum, iusto distinctio quam accusamus debitis sapiente facere beatae? Hic dicta eum cumque?
          </Text>
        </Stack>
      </Container>
    </Box>
  );
};

const MyCarousel = () => {
  return (
    <Carousel autoPlay infiniteLoop interval={1000} showStatus={false} showThumbs={false} showArrows={false}>
      <Box w="full" h="100vh">
        <Image src={img1} />
        <Heading {...headingOptions}>
          watch the future
        </Heading>
      </Box>

      <Box w="full" h="100vh">
        <Image src={img2} />
        <Heading {...headingOptions}>
          future is gaming
        </Heading>
      </Box>

      <Box w="full" h="100vh">
        <Image src={img3} />
        <Heading {...headingOptions}>
          gaming console
        </Heading>
      </Box>

      <Box w="full" h="100vh">
        <Image src={img4} />
        <Heading {...headingOptions}>
          night life is cool
        </Heading>
      </Box>
    </Carousel>
  );
};

export default Home;

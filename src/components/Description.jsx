import React, { useEffect, useState, useRef } from 'react';
import { Box, Text, VStack, HStack, Button, Container, Heading, Badge, Flex } from '@chakra-ui/react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import AboutMe from './AboutMe';

const MotionBox = motion.create(Box);
const MotionText = motion.create(Text);
const MotionHeading = motion.create(Heading);

const Description = ({ refAbout, heroRef }) => {
    const [windowHeight, setWindowHeight] = useState(0);
    const { scrollY } = useScroll();

    const midgroundY = useTransform(scrollY, [0, 1000], [0, -150]);
    const foregroundY = useTransform(scrollY, [0, 1000], [0, -50]);

    const rotation = useTransform(scrollY, [0, 1000], [0, 5]);

    useEffect(() => {
        setWindowHeight(window.innerHeight);
    }, []);

    const scrollTo = (ref) =>
        ref?.current?.scrollIntoView({ behavior: "smooth", block: "start" });

    return (
        <Box position="relative" overflow="hidden">
            {/* Sección Hero con Parallax */}
            <Box
                position="relative"
                height={{ base: "100vh", md: "100vh" }}
                minHeight={{ base: "600px", md: "700px" }}
                overflow="hidden"
                bg="linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)"
                ref={heroRef}
            >
                {/* Capa de fondo con parallax */}
                <MotionBox
                    position="absolute"
                    top="0"
                    left="0"
                    right="0"
                    bottom="0"
                    bg="linear-gradient(45deg, #e53e3e 0%, #c53030 25%, #9b2c2c 50%, #742a2a 75%, #1a202c 100%)"
                    opacity="0.1"
                    transform="scale(1.2)"
                    bgImg={'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1169'}
                />

                {/* Elementos decorativos animados - responsive */}
                <MotionBox
                    position="absolute"
                    top={{ base: "15%", md: "20%" }}
                    right={{ base: "5%", md: "10%" }}
                    width={{ base: "120px", md: "200px" }}
                    height={{ base: "120px", md: "200px" }}
                    borderRadius="50%"
                    bg="rgba(229, 62, 62, 0.2)"
                    style={{ y: midgroundY, rotate: rotation }}
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.6, 0.3]
                    }}
                    transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />

                <MotionBox
                    position="absolute"
                    top={{ base: "65%", md: "60%" }}
                    left={{ base: "2%", md: "5%" }}
                    width={{ base: "100px", md: "150px" }}
                    height={{ base: "100px", md: "150px" }}
                    borderRadius="20px"
                    bg="rgba(197, 48, 48, 0.3)"
                    animate={{
                        y: [-10, 10, -10],
                        rotate: [0, 180, 360]
                    }}
                    transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />

                {/* Contenido principal */}
                <Container
                    maxW={{ base: "container.sm", md: "container.md", lg: "container.xl" }}
                    height="100%"
                    position="relative"
                    zIndex="10"
                    px={{ base: 4, md: 8 }}
                >
                    <Flex
                        direction="column"
                        justify="center"
                        align="center"
                        height="100%"
                        textAlign="center"
                    >
                        <MotionHeading
                            as="h1"
                            size={{ base: "2xl", md: "3xl", lg: "4xl" }}
                            color="white"
                            mb={{ base: 4, md: 6 }}
                            textShadow="0 4px 20px rgba(0,0,0,0.5)"
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.2 }}
                            lineHeight={{ base: "1.2", md: "1.1" }}
                        >
                            Portafolio
                            <Text
                                as="span"
                                color="red.400"
                                ml={{ base: 2, md: 4 }}
                                display={{ base: "block", sm: "inline" }}
                            >
                                Web
                            </Text>
                        </MotionHeading>

                        <MotionText
                            fontSize={{ base: "md", md: "lg", lg: "xl" }}
                            color="gray.200"
                            mb={{ base: 6, md: 8 }}
                            maxW={{ base: "90%", md: "600px" }}
                            px={{ base: 4, md: 0 }}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.5 }}
                            lineHeight={{ base: "1.5", md: "1.4" }}
                        >
                            Si lo imaginas, lo puedes programar - Alejandro Taboada
                        </MotionText>

                        <Flex
                            direction={{ base: "column", sm: "row" }}
                            gap={{ base: 4, sm: 4 }}
                            align="center"
                            justify="center"
                            w="100%"
                        >
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.8, delay: 0.8 }}
                            >
                                <Button
                                    size={{ base: "md", md: "lg" }}
                                    bg="red.500"
                                    color="white"
                                    _hover={{ bg: "red.600", transform: "translateY(-2px)" }}
                                    _active={{ bg: "red.700" }}
                                    borderRadius="full"
                                    px={{ base: 6, md: 8 }}
                                    boxShadow="0 8px 25px rgba(229, 62, 62, 0.3)"
                                    transition="all 0.3s ease"
                                    onClick={() => scrollTo(refAbout)}
                                    width={{ base: "200px", sm: "auto" }}
                                >
                                    Sobre mí
                                </Button>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.8, delay: 1 }}
                            >
                                <Button
                                    as='a'
                                    size={{ base: "md", md: "lg" }}
                                    variant="outline"
                                    borderColor="red.400"
                                    color="red.400"
                                    _hover={{
                                        bg: "red.500",
                                        color: "white",
                                        transform: "translateY(-2px)"
                                    }}
                                    borderRadius="full"
                                    px={{ base: 6, md: 8 }}
                                    transition="all 0.3s ease"
                                    width={{ base: "200px", sm: "auto" }}
                                    href='https://www.linkedin.com/in/joaquin-figueroa-284292346/'
                                >
                                    Aprender Más
                                </Button>
                            </motion.div>
                        </Flex>
                    </Flex>
                </Container>
            </Box>

            {/* Componente AboutMe con ref */}
            <Box pt={{ base: "60px", md: "80px" }} ref={refAbout}>
                <AboutMe />
            </Box>
        </Box>
    );
};

export default Description;
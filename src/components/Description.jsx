import React, { useEffect, useState, useRef } from 'react';
import { Box, Text, VStack, HStack, Button, Container, Heading, Badge, Flex } from '@chakra-ui/react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import AboutMe from './AboutMe';

const MotionBox = motion(Box);
const MotionText = motion(Text);
const MotionHeading = motion(Heading);

const Description = ({ refAbout, heroRef }) => {
    const [windowHeight, setWindowHeight] = useState(0);
    const { scrollY } = useScroll();

    // Configuración del parallax con diferentes velocidades
    const midgroundY = useTransform(scrollY, [0, 1000], [0, -150]);
    const foregroundY = useTransform(scrollY, [0, 1000], [0, -50]);

    // Efecto de rotación sutil
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
                height="100vh"
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
                    opacity="0.8"
                    transform="scale(1.2)"
                    bgImg={'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiIckAWo05yz4r56LnNAeVqAJAmLBEDd3SMRNhlcE6RmD4bbWkLqLPJbr5VpBOnFXriD7SvJIz30nJafAuIfW3zw6JrOP6RAGxEpV0VEIm-wjbG4ljlvF5-ioVKNfvQwrL8qSXe7BMhqHC8/w1200-h630-p-k-no-nu/phpCode.pnghttps://www.hostingplus.lat/wp-content/uploads/2021/11/editor_codigo.jpg'}
                />

                {/* Elementos decorativos animados */}
                <MotionBox
                    position="absolute"
                    top="20%"
                    right="10%"
                    width="200px"
                    height="200px"
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
                    top="60%"
                    left="5%"
                    width="150px"
                    height="150px"
                    borderRadius="20px"
                    bg="rgba(197, 48, 48, 0.3)"
                    style={{ y: foregroundY, rotate: rotation }}
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
                <Container maxW="container.xl" height="100%" position="relative" zIndex="10">
                    <Flex
                        direction="column"
                        justify="center"
                        align="center"
                        height="100%"
                        textAlign="center"
                    >
                        <MotionHeading
                            as="h1"
                            size="4xl"
                            color="white"
                            mb={6}
                            textShadow="0 4px 20px rgba(0,0,0,0.5)"
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.2 }}
                        >
                            Portafolio
                            <Text as="span" color="red.400" ml={4}>
                                Web
                            </Text>
                        </MotionHeading>

                        <MotionText
                            fontSize="xl"
                            color="gray.200"
                            mb={8}
                            maxW="600px"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.5 }}
                        >
                            Si lo imaginas, lo puedes programar - Joaquin Figueroa
                        </MotionText>

                        <HStack spacing={4}>
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.8, delay: 0.8 }}
                            >
                                <Button
                                    size="lg"
                                    bg="red.500"
                                    color="white"
                                    _hover={{ bg: "red.600", transform: "translateY(-2px)" }}
                                    _active={{ bg: "red.700" }}
                                    borderRadius="full"
                                    px={8}
                                    boxShadow="0 8px 25px rgba(229, 62, 62, 0.3)"
                                    transition="all 0.3s ease"
                                    onClick={() => scrollTo(refAbout)}
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
                                    size="lg"
                                    variant="outline"
                                    borderColor="red.400"
                                    color="red.400"
                                    _hover={{
                                        bg: "red.500",
                                        color: "white",
                                        transform: "translateY(-2px)"
                                    }}
                                    borderRadius="full"
                                    px={8}
                                    transition="all 0.3s ease"
                                >
                                    Aprender Más
                                </Button>
                            </motion.div>
                        </HStack>
                    </Flex>
                </Container>
            </Box>

            {/* Componente AboutMe con ref */}
            <Box pt='80px' ref={refAbout}>
                <AboutMe />
            </Box>
        </Box>
    );
};

export default Description;
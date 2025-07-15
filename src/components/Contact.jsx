import React from 'react';
import {
    Box,
    Container,
    Stack,
    Text,
    Link,
    Button,
    Input,
    InputGroup,
    InputRightElement,
    Divider,
    IconButton,
    useColorModeValue,
    Heading,
    VStack,
    HStack,
    Grid,
    GridItem,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import {
    FaGithub,
    FaLinkedin,
    FaTwitter,
    FaInstagram,
    FaEnvelope,
    FaPhone,
    FaMapMarkerAlt,
    FaArrowUp,
    FaPaperPlane
} from 'react-icons/fa';

const MotionBox = motion(Box);
const MotionButton = motion(Button);
const MotionIconButton = motion(IconButton);

const Contact = ({contactRef}) => {
    const bgGradient = useColorModeValue(
        'linear(to-r, gray.900, red.900, gray.900)',
        'linear(to-r, gray.900, red.900, gray.900)'
    );

    const cardBg = useColorModeValue('whiteAlpha.100', 'whiteAlpha.100');
    const textColor = useColorModeValue('white', 'white');
    const accentColor = useColorModeValue('red.400', 'red.300');

    const socialLinks = [
        { icon: FaGithub, href: '#', label: 'GitHub' },
        { icon: FaLinkedin, href: '#', label: 'LinkedIn' },
        { icon: FaTwitter, href: '#', label: 'Twitter' },
        { icon: FaInstagram, href: '#', label: 'Instagram' },
    ];

    const quickLinks = [
        { name: 'Inicio', href: '#' },
        { name: 'Sobre Mí', href: '#' },
        { name: 'Proyectos', href: '#' },
        { name: 'Blog', href: '#' },
        { name: 'Contacto', href: '#' },
    ];

    const containerVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.4 }
        }
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <MotionBox
            bgGradient={bgGradient}
            color={textColor}
            py={16}
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            position="relative"
            overflow="hidden"
            ref={contactRef}
        >
            {/* Elementos decorativos de fondo */}
            <Box
                position="absolute"
                top="0"
                left="0"
                right="0"
                bottom="0"
                opacity={0.1}
                bgImage="radial-gradient(circle at 20% 80%, red.500 0%, transparent 50%), radial-gradient(circle at 80% 20%, red.400 0%, transparent 50%)"
            />

            <Container maxW="7xl" position="relative">
                <Grid templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(4, 1fr)' }} gap={8}>
                    {/* Sección de contacto principal */}
                    <GridItem colSpan={{ base: 1, lg: 2 }}>
                        <MotionBox variants={itemVariants}>
                            <VStack align="start" spacing={6}>
                                <Heading size="lg" color={accentColor}>
                                    ¡Trabajemos Juntos!
                                </Heading>
                                <Text fontSize="md" opacity={0.9}>
                                    ¿Tienes un proyecto en mente? Me encantaría escuchar tus ideas y ayudarte a hacerlas realidad.
                                </Text>

                                <VStack align="start" spacing={3} w="full">
                                    <HStack>
                                        <FaEnvelope color="red.400" />
                                        <Text>contacto@ejemplo.com</Text>
                                    </HStack>
                                    <HStack>
                                        <FaPhone color="red.400" />
                                        <Text>+502 1234-5678</Text>
                                    </HStack>
                                    <HStack>
                                        <FaMapMarkerAlt color="red.400" />
                                        <Text>Ciudad de Guatemala, Guatemala</Text>
                                    </HStack>
                                </VStack>

                                <HStack spacing={4}>
                                    {socialLinks.map((social, index) => (
                                        <MotionIconButton
                                            key={index}
                                            as={Link}
                                            href={social.href}
                                            aria-label={social.label}
                                            icon={<social.icon />}
                                            variant="ghost"
                                            color={textColor}
                                            _hover={{
                                                color: accentColor,
                                                transform: 'scale(1.1)',
                                            }}
                                            whileHover={{ scale: 1.1 }}
                                            whileTap={{ scale: 0.95 }}
                                        />
                                    ))}
                                </HStack>
                            </VStack>
                        </MotionBox>
                    </GridItem>

                    {/* Enlaces rápidos */}
                    <GridItem>
                        <MotionBox variants={itemVariants}>
                            <VStack align="start" spacing={4}>
                                <Heading size="md" color={accentColor}>
                                    Enlaces Rápidos
                                </Heading>
                                <VStack align="start" spacing={2}>
                                    {quickLinks.map((link, index) => (
                                        <Link
                                            key={index}
                                            href={link.href}
                                            _hover={{
                                                color: accentColor,
                                                textDecoration: 'none',
                                                transform: 'translateX(5px)',
                                            }}
                                            transition="all 0.2s"
                                        >
                                            {link.name}
                                        </Link>
                                    ))}
                                </VStack>
                            </VStack>
                        </MotionBox>
                    </GridItem>

                    {/* Newsletter */}
                    <GridItem>
                        <MotionBox variants={itemVariants}>
                            <VStack align="start" spacing={4}>
                                <Heading size="md" color={accentColor}>
                                    Newsletter
                                </Heading>
                                <Text fontSize="sm" opacity={0.9}>
                                    Suscríbete para recibir actualizaciones sobre mis proyectos y artículos.
                                </Text>
                                <VStack w="full" spacing={3}>
                                    <Input
                                        placeholder="Tu email"
                                        bg={cardBg}
                                        border="1px"
                                        borderColor="whiteAlpha.300"
                                        _hover={{ borderColor: accentColor }}
                                        _focus={{ borderColor: accentColor, boxShadow: `0 0 0 1px ${accentColor}` }}
                                    />
                                    <MotionButton
                                        w="full"
                                        bg={accentColor}
                                        color="white"
                                        _hover={{ bg: 'red.500' }}
                                        leftIcon={<FaPaperPlane />}
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        Suscribirse
                                    </MotionButton>
                                </VStack>
                            </VStack>
                        </MotionBox>
                    </GridItem>
                </Grid>

                {/* Divider */}
                <Divider my={8} borderColor="whiteAlpha.300" />

                {/* Footer bottom */}
                <MotionBox variants={itemVariants}>
                    <HStack justify="space-between" align="center" flexWrap="wrap">
                        <Text fontSize="sm" opacity={0.8}>
                            © 2025 Tu Nombre. Todos los derechos reservados.
                        </Text>
                        <HStack spacing={4}>
                            <Link href="#" fontSize="sm" _hover={{ color: accentColor }}>
                                Privacidad
                            </Link>
                            <Link href="#" fontSize="sm" _hover={{ color: accentColor }}>
                                Términos
                            </Link>
                            <MotionIconButton
                                aria-label="Ir arriba"
                                icon={<FaArrowUp />}
                                variant="ghost"
                                color={textColor}
                                _hover={{ color: accentColor }}
                                onClick={scrollToTop}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                            />
                        </HStack>
                    </HStack>
                </MotionBox>
            </Container>
        </MotionBox>
    );
};

export default Contact;
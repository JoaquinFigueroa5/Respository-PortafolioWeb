import React, { useState } from 'react';
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
    Textarea,
    useToast
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
import emailjs from 'emailjs-com';

const MotionBox = motion(Box);
const MotionButton = motion(Button);
const MotionIconButton = motion(IconButton);

const Contact = ({ contactRef }) => {
    const [email, setEmail] = useState('');
    const [mensaje, setMensaje] = useState('');
    const [esValido, setEsValido] = useState(false);

    const toast = useToast();

    const bgGradient = useColorModeValue(
        'linear(to-r, gray.900, red.900, gray.900)',
        'linear(to-r, gray.900, red.900, gray.900)'
    );

    const cardBg = useColorModeValue('whiteAlpha.100', 'whiteAlpha.100');
    const textColor = useColorModeValue('white', 'white');
    const accentColor = useColorModeValue('red.400', 'red.300');

    const socialLinks = [
        { icon: FaGithub, href: 'https://github.com/JoaquinFigueroa5', label: 'GitHub' },
        { icon: FaLinkedin, href: 'https://www.linkedin.com/in/joaquin-figueroa-284292346/', label: 'LinkedIn' },
        { icon: FaTwitter, href: '#', label: 'Twitter' },
        { icon: FaInstagram, href: '#', label: 'Instagram' },
    ];

    const emailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;

    const handleChange = (e) => {
        e.stopPropagation();
        setEmail(e.target.value);
        setEsValido(emailRegex.test(e.target.value));
    }

    const handleSendEmail = async (e) => {
        e.preventDefault();

        try {
            const result = await emailjs.send(
                'service_owzped8',
                'template_kerehsq',
                {
                    from_email: email,
                    msj: mensaje
                },
                'YRVspwU1uynrfK0kw'
            );

            toast({
                title: 'El email se envió correctamente',
                status: 'success',
                duration: 4000,
                isClosable: true,
                position: 'top-right',
                containerStyle: {
                    background: 'linear-gradient(135deg, #F0FFF4 0%, #C6F6D5 100%)',
                    color: '#22543D',
                    border: '1px solid rgba(56, 161, 105, 0.3)',
                    padding: '16px 20px',
                    borderRadius: '12px',
                    fontSize: '14px',
                    fontWeight: 600,
                    boxShadow: '0 8px 32px rgba(56, 161, 105, 0.15), 0 2px 8px rgba(0, 0, 0, 0.08)',
                    backdropFilter: 'blur(8px)',
                    borderLeft: '4px solid #38A169',
                    maxWidth: '400px',
                    minWidth: '300px'
                }
            });

            setEmail('');
            setMensaje('');

        } catch (error) {
            toast.error('Hubo un error al enviar el correo.', {
                style: {
                    background: 'linear-gradient(135deg, #FFF5F5 0%, #FED7D7 100%)',
                    color: '#742A2A',
                    border: '1px solid rgba(229, 62, 62, 0.3)',
                    padding: '16px 20px',
                    borderRadius: '12px',
                    fontSize: '14px',
                    fontWeight: 600,
                    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif',
                    boxShadow: '0 8px 32px rgba(229, 62, 62, 0.15), 0 2px 8px rgba(0, 0, 0, 0.08)',
                    backdropFilter: 'blur(8px)',
                    borderLeft: '4px solid #E53E3E',
                    position: 'relative',
                    overflow: 'hidden',
                    maxWidth: '400px',
                    minWidth: '300px'
                },
                iconTheme: {
                    primary: '#E53E3E',
                    secondary: '#FFFFFF',
                },
                duration: 4000,
                position: 'bottom-right',
            });
        }
    }


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
                                        <Text as='a' href='mailto:figueroaalvarez594@gmail.com' >figueroaalvarez594@gmail.com</Text>
                                    </HStack>
                                    <HStack>
                                        <FaPhone color="red.400" />
                                        <Text as='a' href='tel:58694127' >+502 5869-4127</Text>
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

                    <GridItem>
                        <MotionBox variants={itemVariants}>
                            <VStack align="start" spacing={4}>
                                <Heading size="md" color={accentColor}>
                                    Contacto Directo
                                </Heading>
                                <Text fontSize="sm" opacity={0.9}>
                                    Si quieres enviarme un correo directamente puedes hacerlo aqui.
                                </Text>
                                <VStack w="full" spacing={3}>
                                    <Input
                                        placeholder="Tu correo aqui..."
                                        bg={cardBg}
                                        border="1px"
                                        borderColor="whiteAlpha.300"
                                        _hover={{ borderColor: accentColor }}
                                        _focus={{ borderColor: accentColor, boxShadow: `0 0 0 1px ${accentColor}` }}
                                        type='email'
                                        value={email}
                                        onChange={handleChange}
                                    />
                                    <Textarea
                                        placeholder="Tu mensaje aquí..."
                                        bg={cardBg}
                                        border="1px"
                                        borderColor="whiteAlpha.300"
                                        _hover={{ borderColor: accentColor }}
                                        _focus={{ borderColor: accentColor, boxShadow: `0 0 0 1px ${accentColor}` }}
                                        value={mensaje}
                                        onChange={(e) => setMensaje(e.target.value)}
                                    />
                                    <MotionButton
                                        w="full"
                                        bg={accentColor}
                                        color="white"
                                        _hover={{ bg: 'red.500' }}
                                        leftIcon={<FaPaperPlane />}
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        isDisabled={!esValido}
                                        onClick={handleSendEmail}
                                    >
                                        Enviar
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
                            © 2025 Herbert Joaquin Figueroa Alvarez. Todos los derechos reservados.
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
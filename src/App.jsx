import React, { useState, useEffect } from 'react';
import {
  Box,
  Flex,
  Text,
  Button,
  Container,
  IconButton,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  VStack,
  HStack,
  useColorMode,
  useColorModeValue,
  useDisclosure,
  useBreakpointValue,
  Tooltip,
  Link,
  useTheme
} from '@chakra-ui/react';
import {
  HamburgerIcon,
  CloseIcon,
  MoonIcon,
  SunIcon
} from '@chakra-ui/icons';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaCode
} from 'react-icons/fa';

const MotionBox = motion(Box);
const MotionFlex = motion(Flex);
const MotionButton = motion(Button);
const MotionIconButton = motion(IconButton);

const App = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const isMobile = useBreakpointValue({ base: true, md: false });
  const theme = useTheme();

  // Colores dinámicos basados en el modo
  const bgColor = useColorModeValue('rgba(255, 255, 255, 0.9)', 'rgba(26, 26, 26, 0.9)');
  const bgColorTransparent = useColorModeValue('transparent', 'transparent');
  const textColor = useColorModeValue('gray.800', 'white');
  const primaryColor = useColorModeValue('blue.500', 'cyan.400');
  const secondaryColor = useColorModeValue('red.500', 'red.400');
  const drawerBg = useColorModeValue('white', 'gray.800');
  const borderColor = useColorModeValue('rgba(0, 0, 0, 0.1)', 'rgba(255, 255, 255, 0.1)');

  // Efecto scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: 'Inicio', href: '#inicio' },
    { label: 'Sobre Mí', href: '#sobre' },
    { label: 'Proyectos', href: '#proyectos' },
    { label: 'Habilidades', href: '#habilidades' },
    { label: 'Contacto', href: '#contacto' },
  ];

  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com/JoaquinFigueroa5', label: 'GitHub' },
    { icon: FaLinkedin, href: 'https://www.linkedin.com/in/joaquin-figueroa-284292346/', label: 'LinkedIn' },
    { icon: FaEnvelope, href: 'mailto:figueroaalvarez594@gmail.com', label: 'Email' },
  ];

  const navbarVariants = {
    initial: { y: -100, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  const logoVariants = {
    initial: { scale: 0, rotate: -180 },
    animate: {
      scale: 1,
      rotate: 0,
      transition: { type: 'spring', stiffness: 200, damping: 20 }
    },
    hover: {
      scale: 1.1,
      rotate: 5,
      transition: { type: 'spring', stiffness: 400, damping: 10 }
    },
  };

  const menuItemVariants = {
    initial: { y: -20, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    hover: {
      y: -2,
      scale: 1.05,
      transition: { type: 'spring', stiffness: 400, damping: 10 }
    },
  };

  const socialIconVariants = {
    hover: {
      scale: 1.2,
      rotate: 360,
      transition: { type: 'spring', stiffness: 300, damping: 10 }
    },
  };

  const MobileDrawer = () => (
    <Drawer isOpen={isOpen} placement="right" onClose={onClose} size="sm">
      <DrawerOverlay />
      <DrawerContent bg={drawerBg} backdropFilter="blur(20px)">
        <DrawerCloseButton />
        <DrawerHeader borderBottomWidth="1px">
          <Flex align="center" gap={2}>
            <Box as={FaCode} color={primaryColor} size="24px" />
            <Text
              fontSize="xl"
              fontWeight="bold"
              bgGradient={`linear(45deg, ${primaryColor}, ${secondaryColor})`}
              bgClip="text"
            >
              DevPortfolio
            </Text>
          </Flex>
        </DrawerHeader>

        <DrawerBody>
          <VStack spacing={4} align="stretch" mt={4}>
            {menuItems.map((item, index) => (
              <MotionBox
                key={item.label}
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
              >
                <Button
                  as={Link}
                  href={item.href}
                  variant="ghost"
                  w="full"
                  justifyContent="flex-start"
                  fontWeight="600"
                  borderRadius="md"
                  _hover={{
                    bg: primaryColor,
                    color: 'white',
                    transform: 'translateX(10px)',
                  }}
                  transition="all 0.3s ease"
                  onClick={onClose}
                >
                  {item.label}
                </Button>
              </MotionBox>
            ))}
          </VStack>

          <HStack spacing={4} justify="center" mt={8}>
            {socialLinks.map((social, index) => (
              <MotionBox
                key={social.label}
                variants={socialIconVariants}
                whileHover="hover"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.5 + index * 0.1 }}
              >
                <Tooltip label={social.label}>
                  <IconButton
                    as={Link}
                    href={social.href}
                    icon={<Box as={social.icon} />}
                    color={primaryColor}
                    variant="ghost"
                    size="lg"
                    borderRadius="md"
                    bg="rgba(255, 255, 255, 0.1)"
                    backdropFilter="blur(10px)"
                    _hover={{
                      bg: primaryColor,
                      color: 'white',
                    }}
                    isExternal
                  />
                </Tooltip>
              </MotionBox>
            ))}
          </HStack>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );

  return (
    <Box minH="100vh" bg={useColorModeValue('gray.50', 'gray.900')} color={textColor}>
      <MotionBox
        variants={navbarVariants}
        initial="initial"
        animate="animate"
        position="fixed"
        top={0}
        left={0}
        right={0}
        zIndex={1000}
      >
        <Box
          bg={scrolled ? bgColor : bgColorTransparent}
          backdropFilter={scrolled ? 'blur(20px)' : 'none'}
          borderBottom={scrolled ? `1px solid ${borderColor}` : 'none'}
          transition="all 0.3s ease"
          shadow={scrolled ? 'sm' : 'none'}
        >
          <Container maxW="container.lg">
            <Flex justify="space-between" align="center" py={4}>
              {/* Logo */}
              <MotionBox
                variants={logoVariants}
                initial="initial"
                animate="animate"
                whileHover="hover"
              >
                <Flex align="center" gap={2}>
                  <Box as={FaCode} color={primaryColor} size="32px" />
                  <Text
                    fontSize="xl"
                    fontWeight="bold"
                    bgGradient={`linear(45deg, ${primaryColor}, ${secondaryColor})`}
                    bgClip="text"
                  >
                    DevPortfolio
                  </Text>
                </Flex>
              </MotionBox>

              {/* Desktop Menu */}
              {!isMobile && (
                <HStack spacing={1}>
                  {menuItems.map((item, index) => (
                    <MotionBox
                      key={item.label}
                      variants={menuItemVariants}
                      initial="initial"
                      animate="animate"
                      whileHover="hover"
                      transition={{ delay: index * 0.1 }}
                    >
                      <Button
                        as={Link}
                        href={item.href}
                        variant="ghost"
                        color={textColor}
                        fontWeight="600"
                        mx={1}
                        px={4}
                        py={2}
                        position="relative"
                        _hover={{
                          textDecoration: 'none',
                          _after: {
                            width: '80%',
                          },
                        }}
                        _after={{
                          content: '""',
                          position: 'absolute',
                          bottom: 0,
                          left: '50%',
                          width: 0,
                          height: '2px',
                          bg: primaryColor,
                          transition: 'all 0.3s ease',
                          transform: 'translateX(-50%)',
                        }}
                      >
                        {item.label}
                      </Button>
                    </MotionBox>
                  ))}
                </HStack>
              )}

              {/* Right Side Controls */}
              <HStack spacing={2}>
                {/* Theme Toggle */}
                <Tooltip label={colorMode === 'light' ? 'Modo Oscuro' : 'Modo Claro'}>
                  <MotionIconButton
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                    onClick={toggleColorMode}
                    variant="ghost"
                    borderRadius="md"
                    bg="rgba(255, 255, 255, 0.1)"
                    backdropFilter="blur(10px)"
                    _hover={{
                      bg: primaryColor,
                      color: 'white',
                    }}
                  />
                </Tooltip>

                {/* Social Icons - Desktop */}
                {!isMobile && (
                  <HStack spacing={1} ml={2}>
                    {socialLinks.map((social, index) => (
                      <MotionBox
                        key={social.label}
                        variants={socialIconVariants}
                        whileHover="hover"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.5 + index * 0.1 }}
                      >
                        <Tooltip label={social.label}>
                          <IconButton
                            as={Link}
                            href={social.href}
                            icon={<Box as={social.icon} />}
                            color={primaryColor}
                            variant="ghost"
                            size="sm"
                            borderRadius="md"
                            bg="rgba(255, 255, 255, 0.1)"
                            backdropFilter="blur(10px)"
                            _hover={{
                              bg: primaryColor,
                              color: 'white',
                            }}
                            isExternal
                          />
                        </Tooltip>
                      </MotionBox>
                    ))}
                  </HStack>
                )}

                {/* Mobile Menu Button */}
                {isMobile && (
                  <MotionIconButton
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    icon={<HamburgerIcon />}
                    onClick={onOpen}
                    variant="ghost"
                    borderRadius="md"
                    bg="rgba(255, 255, 255, 0.1)"
                    backdropFilter="blur(10px)"
                    _hover={{
                      bg: primaryColor,
                      color: 'white',
                    }}
                  />
                )}
              </HStack>
            </Flex>
          </Container>
        </Box>
      </MotionBox>

      {/* Mobile Drawer */}
      <MobileDrawer />

      {/* Contenido de ejemplo para mostrar el efecto scroll */}
      <Box pt="80px">
        {/* Aquí va el contenido del resto de la página */}
      </Box>
    </Box>
  );
};

export default App;
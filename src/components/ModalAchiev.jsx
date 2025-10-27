import React from 'react';
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    Text,
    VStack,
    Icon,
    Badge,
    Box,
    HStack,
    useColorModeValue,
    Flex,
    Tag,
    TagLabel
} from '@chakra-ui/react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCheckCircle, FaStar } from 'react-icons/fa';

const MotionBox = motion(Box);
const MotionFlex = motion(Flex);

const ModalAchiev = ({ isOpen, onClose, achievement }) => {
    const bgColor = useColorModeValue('white', 'gray.800');
    const textColor = useColorModeValue('gray.800', 'white');
    const mutedColor = useColorModeValue('gray.600', 'gray.400');
    const primaryColor = useColorModeValue('red.500', 'red.400');
    const secondaryColor = useColorModeValue('gray.500', 'gray.400');
    const cardBg = useColorModeValue('gray.50', 'gray.700');
    const accentBg = useColorModeValue('red.50', 'rgba(245, 101, 101, 0.1)');
    const borderColor = useColorModeValue('red.100', 'rgba(245, 101, 101, 0.2)');

    const achievementDetails = {
        "Diploma por haber participado en SpaceApps de la NASA.": {
            description: "Participé en el evento SpaceApps Challenge organizado por la NASA, donde tuve la oportunidad de trabajar en proyectos innovadores relacionados con la exploración espacial y tecnología.",
            skills: ["Trabajo en equipo", "Resolución de problemas", "Innovación tecnológica"],
            impact: "Esta experiencia me permitió desarrollar habilidades de colaboración y pensamiento creativo en un ambiente de competencia internacional."
        },
        "Parte de desarrollo web en la universidad Mariano Galvez.": {
            description: "Tuve la oportunidad de ser parte del equipo de desarrollo web en la Universidad Mariano Gálvez, contribuyendo a proyectos académicos y fortaleciendo mis conocimientos en tecnologías web modernas.",
            skills: ["Desarrollo Full Stack", "Git", "Trabajo colaborativo"],
            impact: "Esta experiencia me permitió aplicar mis conocimientos en proyectos reales y trabajar con metodologías profesionales de desarrollo."
        },
        "Certificación en React por ADA-SCHOOL.": {
            description: "Completé exitosamente el programa de certificación en React de ADA-SCHOOL, dominando conceptos avanzados de esta popular biblioteca de JavaScript.",
            skills: ["React", "Hooks", "State Management", "Component Design"],
            impact: "Esta certificación consolidó mis habilidades en desarrollo frontend moderno y me preparó para crear aplicaciones web escalables y eficientes."
        },
        "Elegido para la ExpoKinal por buen rendimiento tecnico.": {
            description: "Fui seleccionado para representar a mi institución en la ExpoKinal debido a mi excelente rendimiento técnico y dedicación en proyectos de desarrollo.",
            skills: ["Presentación de proyectos", "Comunicación técnica", "Innovación"],
            impact: "Este reconocimiento validó mi esfuerzo y dedicación en el campo del desarrollo de software y me motivó a seguir mejorando."
        },
        "Diploma por haber participado en Telescope de la UNIS.": {
            description: "Participé en el evento Telescope organizado por la Universidad del Istmo (UNIS), un espacio de innovación y emprendimiento tecnológico.",
            skills: ["Emprendimiento", "Tecnología", "Networking"],
            impact: "Esta experiencia me expuso a las últimas tendencias en tecnología y me conectó con profesionales del sector."
        },
        "Graduado de Kinal con un Tecnico en informatica (Programador Junior).": {
            description: "Me gradué exitosamente del Centro Educativo Técnico Laboral KINAL con el título de Técnico en Informática, especializado como Programador Junior.",
            skills: ["Programación", "Bases de datos", "Desarrollo web", "Metodologías ágiles"],
            impact: "Esta formación me proporcionó las bases sólidas necesarias para iniciar mi carrera profesional en el desarrollo de software."
        }
    };

    if (!achievement) return null;

    const details = achievementDetails[achievement.title] || {
        description: "Información detallada sobre este logro.",
        skills: [],
        impact: ""
    };

    const overlayVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 }
    };

    const contentVariants = {
        hidden: {
            scale: 0.8,
            opacity: 0,
            y: 50
        },
        visible: {
            scale: 1,
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                stiffness: 300,
                damping: 25,
                staggerChildren: 0.1
            }
        },
        exit: {
            scale: 0.8,
            opacity: 0,
            y: 50,
            transition: {
                duration: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { x: -20, opacity: 0 },
        visible: {
            x: 0,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 300,
                damping: 25
            }
        }
    };

    const iconVariants = {
        hidden: { scale: 0, rotate: -180 },
        visible: {
            scale: 1,
            rotate: 0,
            transition: {
                type: "spring",
                stiffness: 200,
                damping: 15
            }
        },
        hover: {
            scale: 1.1,
            rotate: 5,
            transition: { duration: 0.3 }
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <Modal isOpen={isOpen} onClose={onClose} size="xl" isCentered motionPreset="none">
                    <ModalOverlay
                        as={motion.div}
                        variants={overlayVariants}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        backdropFilter="blur(10px)"
                        bg="blackAlpha.600"
                    />
                    <ModalContent
                        as={motion.div}
                        variants={contentVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        bg={bgColor}
                        borderRadius="2xl"
                        mx={4}
                        overflow="hidden"
                        boxShadow="2xl"
                    >
                        {/* Header con gradiente decorativo */}
                        <Box
                            position="relative"
                            bg={accentBg}
                            borderBottom="2px solid"
                            borderColor={borderColor}
                            overflow="hidden"
                        >
                            {/* Efecto de brillo animado */}
                            <MotionBox
                                position="absolute"
                                top={0}
                                left="-100%"
                                width="100%"
                                height="100%"
                                bgGradient={`linear(90deg, transparent, ${primaryColor}40, transparent)`}
                                animate={{
                                    left: ["100%", "-100%"]
                                }}
                                transition={{
                                    duration: 3,
                                    repeat: Infinity,
                                    ease: "linear"
                                }}
                            />

                            <ModalHeader pt={8} pb={6} position="relative">
                                <MotionFlex
                                    align="center"
                                    gap={4}
                                    variants={itemVariants}
                                >
                                    <MotionBox
                                        variants={iconVariants}
                                        whileHover="hover"
                                    >
                                        <Flex
                                            align="center"
                                            justify="center"
                                            w="64px"
                                            h="64px"
                                            borderRadius="xl"
                                            bg={bgColor}
                                            boxShadow="lg"
                                            border="3px solid"
                                            borderColor={primaryColor}
                                        >
                                            <Icon
                                                as={achievement.icon}
                                                color={primaryColor}
                                                boxSize={8}
                                            />
                                        </Flex>
                                    </MotionBox>

                                    <VStack align="start" spacing={2} flex={1}>
                                        <HStack>
                                            <Icon as={FaStar} color={primaryColor} boxSize={4} />
                                            <Badge
                                                colorScheme="red"
                                                fontSize="xs"
                                                px={3}
                                                py={1}
                                                borderRadius="full"
                                                fontWeight="bold"
                                                textTransform="uppercase"
                                                letterSpacing="wide"
                                            >
                                                {achievement.year}
                                            </Badge>
                                        </HStack>
                                        <Text
                                            fontSize="xl"
                                            fontWeight="bold"
                                            color={textColor}
                                            lineHeight="1.3"
                                        >
                                            {achievement.title}
                                        </Text>
                                    </VStack>
                                </MotionFlex>
                            </ModalHeader>
                            <ModalCloseButton
                                top={4}
                                right={4}
                                borderRadius="full"
                                bg={bgColor}
                                _hover={{ bg: primaryColor, color: 'white' }}
                                transition="all 0.3s"
                            />
                        </Box>

                        <ModalBody py={6} px={6}>
                            <VStack align="stretch" spacing={6}>
                                {/* Descripción */}
                                <MotionBox variants={itemVariants}>
                                    <VStack align="stretch" spacing={3}>
                                        <HStack spacing={2}>
                                            <Box w="4px" h="20px" bg={primaryColor} borderRadius="full" />
                                            <Text
                                                fontSize="md"
                                                color={primaryColor}
                                                fontWeight="bold"
                                                textTransform="uppercase"
                                                letterSpacing="wide"
                                            >
                                                Descripción
                                            </Text>
                                        </HStack>
                                        <Box
                                            p={4}
                                            bg={cardBg}
                                            borderRadius="xl"
                                            borderLeft="4px solid"
                                            borderColor={primaryColor}
                                        >
                                            <Text fontSize="sm" color={mutedColor} lineHeight="1.8">
                                                {details.description}
                                            </Text>
                                        </Box>
                                    </VStack>
                                </MotionBox>

                                {/* Habilidades */}
                                {details.skills.length > 0 && (
                                    <MotionBox variants={itemVariants}>
                                        <VStack align="stretch" spacing={3}>
                                            <HStack spacing={2}>
                                                <Box w="4px" h="20px" bg={primaryColor} borderRadius="full" />
                                                <Text
                                                    fontSize="sm"
                                                    color={primaryColor}
                                                    fontWeight="bold"
                                                    textTransform="uppercase"
                                                    letterSpacing="wide"
                                                >
                                                    Habilidades Desarrolladas
                                                </Text>
                                            </HStack>
                                            <Flex flexWrap="wrap" gap={2}>
                                                {details.skills.map((skill, index) => (
                                                    <MotionBox
                                                        key={index}
                                                        initial={{ scale: 0, opacity: 0 }}
                                                        animate={{ scale: 1, opacity: 1 }}
                                                        transition={{
                                                            delay: index * 0.05,
                                                            type: "spring",
                                                            stiffness: 300
                                                        }}
                                                        whileHover={{
                                                            scale: 1.05,
                                                            y: -2
                                                        }}
                                                    >
                                                        <Tag
                                                            size="md"
                                                            borderRadius="full"
                                                            variant="subtle"
                                                            bg={accentBg}
                                                            border="1px solid"
                                                            borderColor={borderColor}
                                                            px={4}
                                                            py={2}
                                                            cursor="default"
                                                            _hover={{
                                                                bg: primaryColor,
                                                                color: 'white',
                                                                borderColor: primaryColor
                                                            }}
                                                            transition="all 0.3s"
                                                        >
                                                            <Icon as={FaCheckCircle} mr={2} boxSize={3} />
                                                            <TagLabel fontWeight="600" fontSize="sm">
                                                                {skill}
                                                            </TagLabel>
                                                        </Tag>
                                                    </MotionBox>
                                                ))}
                                            </Flex>
                                        </VStack>
                                    </MotionBox>
                                )}

                                {/* Impacto */}
                                <MotionBox variants={itemVariants}>
                                    <VStack align="stretch" spacing={3}>
                                        <HStack spacing={2}>
                                            <Box w="4px" h="20px" bg={primaryColor} borderRadius="full" />
                                            <Text
                                                fontSize="sm"
                                                color={primaryColor}
                                                fontWeight="bold"
                                                textTransform="uppercase"
                                                letterSpacing="wide"
                                            >
                                                Impacto
                                            </Text>
                                        </HStack>
                                        <Box
                                            p={4}
                                            bg={cardBg}
                                            borderRadius="xl"
                                            position="relative"
                                            overflow="hidden"
                                        >
                                            <Box
                                                position="absolute"
                                                top={0}
                                                left={0}
                                                w="4px"
                                                h="100%"
                                                bgGradient={`linear(to-b, ${primaryColor}, ${secondaryColor})`}
                                            />
                                            <Text fontSize="sm" color={mutedColor} lineHeight="1.8" ml={2}>
                                                {details.impact}
                                            </Text>
                                        </Box>
                                    </VStack>
                                </MotionBox>
                            </VStack>
                        </ModalBody>

                        <ModalFooter borderTop="1px solid" borderColor={borderColor} py={4}>
                            <MotionBox
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Button
                                    onClick={onClose}
                                    borderRadius="full"
                                    px={8}
                                    bg={primaryColor}
                                    color="white"
                                    fontWeight="bold"
                                    _hover={{
                                        bg: secondaryColor,
                                        transform: 'translateY(-2px)',
                                        boxShadow: 'lg'
                                    }}
                                    _active={{
                                        transform: 'translateY(0)',
                                    }}
                                    transition="all 0.3s"
                                    boxShadow="md"
                                >
                                    Cerrar
                                </Button>
                            </MotionBox>
                        </ModalFooter>
                    </ModalContent>
                </Modal>
            )}
        </AnimatePresence>
    );
};

export default ModalAchiev;
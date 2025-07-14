import React, { useState } from 'react';
import {
    Box,
    Card,
    CardBody,
    CardFooter,
    Image,
    Text,
    Heading,
    Button,
    SimpleGrid,
    IconButton,
    HStack,
    VStack,
    Badge,
    useColorModeValue
} from '@chakra-ui/react';
import { ChevronLeft, ChevronRight, ExternalLink, Github } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const MotionBox = motion(Box);
const MotionCard = motion(Card);

// Datos de ejemplo para los proyectos
const projectsData = [
    {
        id: 1,
        title: "Catalogo de vehiculos",
        description: "Trabajo profesional donde se hizo un catalogo general de todos los vehiculos que estan en venta cono sus respectivos filtros.",
        technologies: ["React", "Node.js", "MongoDB", "Express.js", "Chakra-UI"],
        images: [
            "../../public/AutoVentas/carousel.png",
            "../../public/AutoVentas/cards.png",
            "../../public/AutoVentas/modal.png"
        ]
    },
    {
        id: 2,
        title: "Banca Online",
        description: "Aplicación para la gestion de recursos bancarios como transferencia y depositos.",
        technologies: ["React.js", "Chakra-UI", "MongoDB", "Express.js", "Node.js"],
        images: [
            "../../public/Bancos/dashboard.png",
            "../../public/Bancos/favoritos.png",
            "../../public/Bancos/usuarios.png"
        ]
    },
    {
        id: 3,
        title: "Social Media Dashboard",
        description: "Dashboard para gestión de redes sociales con análisis de métricas y programación de publicaciones.",
        technologies: ["React", "D3.js", "Express"],
        images: [
            "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
            "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
            "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=400&h=300&fit=crop"
        ]
    },
    {
        id: 4,
        title: "Weather App",
        description: "Aplicación del clima con pronósticos detallados, mapas interactivos y alertas meteorológicas.",
        technologies: ["React Native", "API Rest", "Redux"],
        images: [
            "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=400&h=300&fit=crop",
            "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=400&h=300&fit=crop",
            "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop"
        ]
    }
];

const ImageCarousel = ({ images, projectId }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextImage = () => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
    };

    const prevImage = () => {
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    return (
        <Box position="relative" height="300px" overflow="hidden" borderRadius="md">
            <AnimatePresence mode="wait">
                <MotionBox
                    key={currentIndex}
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.3 }}
                    position="absolute"
                    width="100%"
                    height="100%"
                >
                    <Image
                        src={images[currentIndex]}
                        alt={`Proyecto ${projectId} - Imagen ${currentIndex + 1}`}
                        width="100%"
                        height="100%"
                        objectFit="cover"
                    />
                </MotionBox>
            </AnimatePresence>

            {/* Controles del carousel */}
            <IconButton
                aria-label="Imagen anterior"
                icon={<ChevronLeft size={20} />}
                position="absolute"
                left="10px"
                top="50%"
                transform="translateY(-50%)"
                bg="rgba(0,0,0,0.6)"
                color="white"
                size="sm"
                onClick={prevImage}
                _hover={{ bg: "rgba(0,0,0,0.8)" }}
            />

            <IconButton
                aria-label="Imagen siguiente"
                icon={<ChevronRight size={20} />}
                position="absolute"
                right="10px"
                top="50%"
                transform="translateY(-50%)"
                bg="rgba(0,0,0,0.6)"
                color="white"
                size="sm"
                onClick={nextImage}
                _hover={{ bg: "rgba(0,0,0,0.8)" }}
            />

            {/* Indicadores */}
            <HStack
                position="absolute"
                bottom="10px"
                left="50%"
                transform="translateX(-50%)"
                spacing={2}
            >
                {images.map((_, index) => (
                    <Box
                        key={index}
                        width="8px"
                        height="8px"
                        borderRadius="full"
                        bg={index === currentIndex ? "red.400" : "whiteAlpha.600"}
                        cursor="pointer"
                        onClick={() => setCurrentIndex(index)}
                        transition="all 0.2s"
                    />
                ))}
            </HStack>
        </Box>
    );
};

const ProjectCard = ({ project }) => {
    const cardBg = useColorModeValue('white', 'gray.800');
    const borderColor = useColorModeValue('gray.200', 'gray.600');

    return (
        <MotionCard
            maxW="sm"
            bg={cardBg}
            borderWidth="1px"
            borderColor={borderColor}
            borderRadius="lg"
            overflow="hidden"
            shadow="lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{
                y: -5,
                shadow: "xl",
                transition: { duration: 0.2 }
            }}
            transition={{ duration: 0.3 }}
        >
            <ImageCarousel images={project.images} projectId={project.id} />

            <CardBody>
                <VStack align="start" spacing={3}>
                    <Heading size="md" color="red.500">
                        {project.title}
                    </Heading>

                    <Text fontSize="sm" color="gray.600" noOfLines={3}>
                        {project.description}
                    </Text>

                    <HStack spacing={2} flexWrap="wrap">
                        {project.technologies.map((tech, index) => (
                            <Badge
                                key={index}
                                colorScheme="red"
                                variant="subtle"
                                fontSize="xs"
                                px={2}
                                py={1}
                            >
                                {tech}
                            </Badge>
                        ))}
                    </HStack>
                </VStack>
            </CardBody>

            <CardFooter>
                <HStack spacing={3} width="100%">
                    <Button
                        leftIcon={<ExternalLink size={16} />}
                        colorScheme="red"
                        variant="solid"
                        size="sm"
                        flex={1}
                    >
                        Ver Demo
                    </Button>
                    <Button
                        leftIcon={<Github size={16} />}
                        colorScheme="red"
                        variant="outline"
                        size="sm"
                        flex={1}
                    >
                        Código
                    </Button>
                </HStack>
            </CardFooter>
        </MotionCard>
    );
};

const ProjectsShowcase = () => {
    return (
        <Box
            minH="100vh"
            bgGradient='blackAlpha'
            py={10}
            px={6}
        >
            <VStack spacing={8} maxW="7xl" mx="auto">
                <MotionBox
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <Heading
                        size="2xl"
                        textAlign="center"
                        bgGradient="linear(to-r, red.400, gray.400)"
                        bgClip="text"
                        mb={4}
                    >
                        Mis Proyectos
                    </Heading>
                    <Text
                        textAlign="center"
                        fontSize="lg"
                        color="gray.400"
                        maxW="2xl"
                    >
                        Explora una colección de proyectos que demuestran mis habilidades en desarrollo web y diseño de interfaces.
                    </Text>
                </MotionBox>

                <SimpleGrid
                    columns={{ base: 1, md: 2 }}
                    spacing={8}
                    width="100%"
                >
                    {projectsData.map((project, index) => (
                        <MotionBox
                            key={project.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                        >
                            <ProjectCard project={project} />
                        </MotionBox>
                    ))}
                </SimpleGrid>
            </VStack>
        </Box>
    );
};

export default ProjectsShowcase;
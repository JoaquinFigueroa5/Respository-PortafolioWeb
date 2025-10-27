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

const projectsData = [
    {
        id: 1,
        title: "Catalogo de vehiculos",
        description: "Trabajo profesional donde se hizo un catalogo general de todos los vehiculos que estan en venta cono sus respectivos filtros.",
        technologies: ["React", "Node.js", "MongoDB", "Express.js", "Chakra-UI"],
        images: [
            "/AutoVentas/carousel.png",
            "/AutoVentas/cards.png",
            "/AutoVentas/modal.png"
        ],
        github: 'https://github.com/JoaquinFigueroa5/Repository-AutoVentas.git',
        deploy: 'https://autoventasjuanes-dd720.web.app/'
    },
    {
        id: 2,
        title: "Banca Online",
        description: "Aplicación para la gestion de recursos bancarios como transferencia y depositos con funciones aisladas para administrador y cliente.",
        technologies: ["React.js", "Chakra-UI", "MongoDB", "Express.js", "Node.js"],
        images: [
            "/Bancos/dashboard.png",
            "/Bancos/favoritos.png",
            "/Bancos/usuarios.png"
        ],
        github: 'https://github.com/JoaquinFigueroa5/Repository-FrontendBanco.git',
        deploy: 'https://bancoonline-d49b0.web.app/'
    },
    {
        id: 3,
        title: "Blog",
        description: "Proyecto de un blog donde en los cursos correspondientes hay publicaciones y se pueden comentar sobre las publicaciones.",
        technologies: ["React.js", "MongoDB", "Express.js", "Node.js", "Chakra-UI"],
        images: [
            "/Blog/dashboard.png",
            "/Blog/Publications.png",
            "/Blog/Comentarios.png",
        ],
        github: 'https://github.com/JoaquinFigueroa5/Repository-BlogFrontend.git',
        deploy: 'No disponible'
    },
    {
        id: 4,
        title: "Videntia",
        description: "Aplicacion impulsada por IA para reconocer y describir imagenes de manera especifica y poder enviar los resultado al gmail personal.",
        technologies: ["React.js", "API REST", "Chakra-UI", "IA"],
        images: [
            "/Videntia/dashboard.png",
            "/Videntia/analizando.png",
            "/Videntia/respuesta.png",
            "/Videntia/gmail.png",
        ],
        github: 'https://github.com/LuisDeLeon24/MetadataExperimentos.git',
        deploy: 'https://videntia-999-6d296.web.app/'
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
    const cardBg = useColorModeValue("white", "gray.800");
    const borderCol = useColorModeValue("gray.200", "gray.600");

    return (
        <MotionCard
            maxW="xl"
            mx="auto"
            bg={cardBg}
            borderWidth="1px"
            borderColor={borderCol}
            borderRadius="lg"
            overflow="hidden"
            shadow="lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ y: -5, shadow: "xl", transition: { duration: 0.2 } }}
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
                        {project.technologies.map((tech, i) => (
                            <Badge
                                key={i}
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
                <HStack spacing={3} w="100%">
                    <Button
                        as='a'
                        leftIcon={<ExternalLink size={16} />}
                        colorScheme="red"
                        size="sm"
                        flex={1}
                        href={project.deploy}
                    >
                        Ver Demo
                    </Button>
                    <Button
                        as='a'
                        leftIcon={<Github size={16} />}
                        colorScheme="red"
                        variant="outline"
                        size="sm"
                        flex={1}
                        href={project.github}
                    >
                        Código
                    </Button>
                </HStack>
            </CardFooter>
        </MotionCard>
    );
};


const ProjectsShowcase = ({proyectRef}) => {
    return (
        <Box
            minH="100vh"
            bgGradient='blackAlpha'
            py={5}
            px={6}
            ref={proyectRef}
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
                        (Solo se muestran proyectos bastante completos e interesantes)
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
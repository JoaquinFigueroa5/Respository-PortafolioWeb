import React, { useState } from 'react';
import {
    Box,
    Container,
    Heading,
    Text,
    VStack,
    HStack,
    Button,
    Badge,
    Progress,
    Divider,
    Icon,
    Flex,
    Avatar,
    useColorModeValue,
    Grid,
    GridItem,
    Card,
    CardBody,
    Tooltip,
    Image,
    IconButton
} from '@chakra-ui/react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    FaCode,
    FaReact,
    FaNodeJs,
    FaPython,
    FaGithub,
    FaLinkedin,
    FaMapMarkerAlt,
    FaBriefcase,
    FaGraduationCap,
    FaHeart,
    FaEnvelope,
    FaPhone,
    FaStar,
    FaAward,
    FaRocket,
    FaJava,
    FaDatabase,
    FaHtml5,
    FaCss3,
    FaUikit
} from 'react-icons/fa';

const MotionBox = motion(Box);
const MotionCard = motion(Card);
const MotionBadge = motion(Badge);

const AboutMe = () => {
    const [activeTab, setActiveTab] = useState('about');
    const [isHovered, setIsHovered] = useState(false);
    const [selectedSkill, setSelectedSkill] = useState(null);

    const bgColor = useColorModeValue('gray.50', 'gray.900');
    const cardBg = useColorModeValue('white', 'gray.800');
    const textColor = useColorModeValue('gray.800', 'white');
    const mutedColor = useColorModeValue('gray.600', 'gray.400');

    const person = {
        name: "Joaquin Figueroa",
        role: "Junior Full Stack Developer",
        location: "Ciudad de Guatemala",
        email: "figueroaalvarez594@email.com",
        phone: "+502 5869-4127",
        avatar: "../../public/yo4.jpg",
        bio: "Soy Herbert Joaquin Figueroa Alvarez, un desarrollador web Junior de 18 años que le apasiona seguir aprendiendo de todo sobre la programacion y el software en general. Soy una persona proactiva que quiere seguir superandose y con la posibilidad de seguir escalando en lo profesional.",
        skills: [
            { name: "React", level: 88, color: "blue.500", icon: FaReact, colorScheme: 'react' },
            { name: "Node.js", level: 85, color: "green.500", icon: FaNodeJs, colorScheme: 'node' },
            { name: "Python", level: 40, color: "yellow.500", icon: FaPython, colorScheme: 'python' },
            { name: "JAVA", level: 80, color: "red.600", icon: FaJava, colorScheme: 'java' },
            { name: "MySQL", level: 80, color: "purple.500", icon: FaDatabase, colorScheme: 'mysql' },
            { name: "Git", level: 90, color: "gray.500", icon: FaGithub, colorScheme: 'git' },
            { name: "MongoDB", level: 90, color: "green.500", icon: FaDatabase, colorScheme: 'mongodb' },
            { name: "HTML", level: 80, color: "orange.500", icon: FaHtml5, colorScheme: 'html' },
            { name: "CSS", level: 60, color: "blue.500", icon: FaCss3, colorScheme: 'css' },
            { name: "Chakra UI", level: 80, color: "cyan.500", icon: FaUikit, colorScheme: 'chakra' },
        ],
        achievements: [
            { title: "Elegido para la expokinal", year: "2025", icon: FaAward },
            { title: "Parte de desarrollo en la universidad Mariano Galvez", year: "2025", icon: FaGithub },
            { title: "Certificación en React por ADA-SCHOOL", year: "2025", icon: FaRocket }
        ],
        experience: [
            {
                company: "2do primaria - 6to primaria.",
                position: "Primaria",
                duration: "2015 - 2019",
                description: "Colegio Cristiano Pueblo de Dios (Excepcion de 1ro primaria que fue en Colegio Claret)"
            },
            {
                company: "1ro Basico - 3ro Basico",
                position: "Basicos",
                duration: "2020 - 2022",
                description: "Colegio Cristiano Pueblo de Dios"
            },
            {
                company: "4to Diversificado - 6to Diversificado",
                position: "Diversificado",
                duration: "2023 - Presente",
                description: "Centro Educativo Tecnico Laboral KINAL"
            },
        ],
        interests: ["Inteligencia Artificial", "Video Juegos", "Paisajes", "Música", "Programar", "Aprender", "Innovar", "Ingles"]
    };

    const tabs = [
        { id: 'about', label: 'Sobre Mí', icon: FaBriefcase },
        { id: 'skills', label: 'Habilidades', icon: FaCode },
        { id: 'experience', label: 'Educación', icon: FaGraduationCap },
        { id: 'contact', label: 'Contacto', icon: FaEnvelope }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 100
            }
        }
    };

    const skillVariants = {
        hidden: { width: 0 },
        visible: { width: "100%" }
    };

    const renderTabContent = () => {
        switch (activeTab) {
            case 'about':
                return (
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={containerVariants}
                    >
                        <VStack spacing={6} align="stretch">
                            <motion.div variants={itemVariants}>
                                <Text fontSize="lg" color={mutedColor} lineHeight="1.8">
                                    {person.bio}
                                </Text>
                            </motion.div>

                            <motion.div variants={itemVariants}>
                                <Heading size="md" mb={4} color={textColor}>
                                    Logros Destacados
                                </Heading>
                                <Grid templateColumns="repeat(auto-fit, minmax(250px, 1fr))" gap={4}>
                                    {person.achievements.map((achievement, index) => (
                                        <MotionCard
                                            key={index}
                                            bg={cardBg}
                                            border="1px solid"
                                            borderColor="red.200"
                                            whileHover={{
                                                scale: 1.05,
                                                boxShadow: "0 10px 25px rgba(229, 62, 62, 0.2)"
                                            }}
                                            cursor="pointer"
                                        >
                                            <CardBody>
                                                <HStack spacing={3}>
                                                    <Icon as={achievement.icon} color="red.500" boxSize={6} />
                                                    <VStack align="start" spacing={1}>
                                                        <Text fontWeight="bold" fontSize="sm" color={textColor}>
                                                            {achievement.title}
                                                        </Text>
                                                        <Text fontSize="xs" color={mutedColor}>
                                                            {achievement.year}
                                                        </Text>
                                                    </VStack>
                                                </HStack>
                                            </CardBody>
                                        </MotionCard>
                                    ))}
                                </Grid>
                            </motion.div>

                            <motion.div variants={itemVariants}>
                                <Heading size="md" mb={4} color={textColor}>
                                    Intereses
                                </Heading>
                                <Flex wrap="wrap" gap={3}>
                                    {person.interests.map((interest, index) => (
                                        <MotionBadge
                                            key={index}
                                            colorScheme="red"
                                            variant="subtle"
                                            px={3}
                                            py={2}
                                            borderRadius="full"
                                            fontSize="sm"
                                            whileHover={{ scale: 1.1 }}
                                            whileTap={{ scale: 0.95 }}
                                            cursor="pointer"
                                        >
                                            <Icon as={FaHeart} mr={2} boxSize={3} />
                                            {interest}
                                        </MotionBadge>
                                    ))}
                                </Flex>
                            </motion.div>
                        </VStack>
                    </motion.div>
                );

            case 'skills':
                return (
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={containerVariants}
                    >
                        <VStack spacing={6} align="stretch">
                            {person.skills.map((skill, index) => (
                                <motion.div
                                    key={index}
                                    variants={itemVariants}
                                    onHoverStart={() => setSelectedSkill(skill.name)}
                                    onHoverEnd={() => setSelectedSkill(null)}
                                >
                                    <Box
                                        p={4}
                                        bg={cardBg}
                                        borderRadius="lg"
                                        border="1px solid"
                                        borderColor={selectedSkill === skill.name ? skill.color : "gray.200"}
                                        transition="all 0.3s ease"
                                        cursor="pointer"
                                    >
                                        <HStack justify="space-between" mb={3}>
                                            <HStack spacing={3}>
                                                <Icon as={skill.icon} color={skill.color} boxSize={5} />
                                                <Text fontWeight="bold" color={textColor}>
                                                    {skill.name}
                                                </Text>
                                            </HStack>
                                            <Badge colorScheme={skill.colorScheme} variant="subtle">
                                                {skill.level}%
                                            </Badge>
                                        </HStack>
                                        <motion.div
                                            initial="hidden"
                                            animate="visible"
                                            variants={skillVariants}
                                            transition={{ duration: 1, delay: index * 0.1 }}
                                        >
                                            <Progress
                                                value={skill.level}
                                                colorScheme={skill.colorScheme}
                                                size="lg"
                                                borderRadius="full"
                                                bg="gray.100"
                                            />
                                        </motion.div>
                                    </Box>
                                </motion.div>
                            ))}
                        </VStack>
                    </motion.div>
                );

            case 'experience':
                return (
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={containerVariants}
                    >
                        <VStack spacing={6} align="stretch">
                            {person.experience.map((exp, index) => (
                                <motion.div key={index} variants={itemVariants}>
                                    <MotionCard
                                        bg={cardBg}
                                        border="1px solid"
                                        borderColor="gray.200"
                                        whileHover={{
                                            borderColor: "red.300",
                                            transform: "translateX(10px)"
                                        }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <CardBody>
                                            <VStack align="start" spacing={3}>
                                                <HStack justify="space-between" width="100%">
                                                    <VStack align="start" spacing={1}>
                                                        <Text fontWeight="bold" fontSize="lg" color={textColor}>
                                                            {exp.position}
                                                        </Text>
                                                        <Text color="red.500" fontWeight="semibold">
                                                            {exp.company}
                                                        </Text>
                                                    </VStack>
                                                    <Badge
                                                        colorScheme="red"
                                                        variant="outline"
                                                        fontSize="lg"   
                                                        px={4}          
                                                        py={1}           
                                                        borderRadius="md"
                                                    >
                                                        {exp.duration}
                                                    </Badge>

                                                </HStack>
                                                <Text color={mutedColor} lineHeight="1.6">
                                                    {exp.description}
                                                </Text>
                                            </VStack>
                                        </CardBody>
                                    </MotionCard>
                                </motion.div>
                            ))}
                        </VStack>
                    </motion.div>
                );

            case 'contact':
                return (
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={containerVariants}
                    >
                        <VStack spacing={6} align="stretch">
                            <motion.div variants={itemVariants}>
                                <Grid templateColumns="repeat(auto-fit, minmax(250px, 1fr))" gap={4}>
                                    <MotionCard
                                        bg={cardBg}
                                        whileHover={{ scale: 1.05 }}
                                        cursor="pointer"
                                    >
                                        <CardBody>
                                            <HStack spacing={3}>
                                                <Icon as={FaEnvelope} color="red.500" boxSize={5} />
                                                <VStack align="start" spacing={1}>
                                                    <Text fontSize="sm" color={mutedColor}>
                                                        Email
                                                    </Text>
                                                    <Text as='a' fontWeight="bold" fontSize="sm" color={textColor} href='mailto:figueroaalvarez594@gmail.com' >
                                                        {person.email}
                                                    </Text>
                                                </VStack>
                                            </HStack>
                                        </CardBody>
                                    </MotionCard>

                                    <MotionCard
                                        bg={cardBg}
                                        whileHover={{ scale: 1.05 }}
                                        cursor="pointer"
                                    >
                                        <CardBody>
                                            <HStack spacing={3}>
                                                <Icon as={FaPhone} color="red.500" boxSize={5} />
                                                <VStack align="start" spacing={1}>
                                                    <Text fontSize="sm" color={mutedColor}>
                                                        Teléfono
                                                    </Text>
                                                    <Text as='a' fontWeight="bold" fontSize="sm" color={textColor} href='tel:58694127' >
                                                        {person.phone}
                                                    </Text>
                                                </VStack>
                                            </HStack>
                                        </CardBody>
                                    </MotionCard>
                                </Grid>
                            </motion.div>

                            <motion.div variants={itemVariants}>
                                <Heading size="md" mb={4} color={textColor}>
                                    Redes Sociales
                                </Heading>
                                <HStack spacing={4}>
                                    {[
                                        { icon: FaGithub, color: "gray.600", label: "GitHub", src: "https://github.com/JoaquinFigueroa5" },
                                        { icon: FaLinkedin, color: "blue.600", label: "LinkedIn", src: "https://www.linkedin.com/in/joaquin-figueroa-284292346/" },
                                        { icon: FaEnvelope, color: "red.400", label: "Email", src: "mailto:figueroaalvarez594@gmail.com" }
                                    ].map((social, index) => (
                                        <Tooltip key={index} label={social.label} hasArrow>
                                            <MotionBox
                                                whileHover={{ scale: 1.2, rotate: 5 }}
                                                whileTap={{ scale: 0.9 }}
                                            >
                                                <IconButton
                                                    as='a'
                                                    href={social.src}
                                                    boxSize={10}
                                                    color={social.color}
                                                    variant='ghost'
                                                    aria-label={social.label}
                                                    icon={ <Icon as={social.icon} boxSize={10} /> }
                                                />
                                            </MotionBox>
                                        </Tooltip>
                                    ))}
                                </HStack>
                            </motion.div>
                        </VStack>
                    </motion.div>
                );

            default:
                return null;
        }
    };

    return (
        <Box bg={bgColor} minHeight="100vh" py={10}>
            <Container maxW="container.xl">
                <MotionBox
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    {/* Header Card */}
                    <MotionCard
                        bg={cardBg}
                        borderRadius="2xl"
                        overflow="hidden"
                        boxShadow="0 25px 50px rgba(0,0,0,0.1)"
                        mb={8}
                        onHoverStart={() => setIsHovered(true)}
                        onHoverEnd={() => setIsHovered(false)}
                    >
                        <Box
                            bg="linear-gradient(135deg, #e53e3e 0%, #c53030 50%, #9b2c2c 100%)"
                            height="120px"
                            position="relative"
                        >
                            <MotionBox
                                position="absolute"
                                top="-10px"
                                right="-10px"
                                width="100px"
                                height="100px"
                                borderRadius="50%"
                                bg="rgba(255,255,255,0.1)"
                                animate={{
                                    scale: isHovered ? 1.2 : 1,
                                    rotate: isHovered ? 180 : 0
                                }}
                                transition={{ duration: 0.5 }}
                            />
                        </Box>

                        <CardBody position="relative" pt={0}>
                            <HStack spacing={6} align="start">
                                <MotionBox
                                    mt={-16}
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <Avatar
                                        size="2xl"
                                        src={person.avatar}
                                        border="6px solid white"
                                        boxShadow="0 10px 30px rgba(0,0,0,0.2)"
                                    />
                                </MotionBox>

                                <VStack align="start" spacing={2} flex={1} pt={4}>
                                    <Heading size="xl" color={textColor}>
                                        {person.name}
                                    </Heading>
                                    <Text fontSize="lg" color="red.500" fontWeight="semibold">
                                        {person.role}
                                    </Text>
                                    <HStack spacing={4} color={mutedColor}>
                                        <HStack spacing={1}>
                                            <Icon as={FaMapMarkerAlt} />
                                            <Text fontSize="sm">{person.location}</Text>
                                        </HStack>
                                        <HStack spacing={1}>
                                            <Icon as={FaStar} color="yellow.400" />
                                            <Text fontSize="sm">4.9/5</Text>
                                        </HStack>
                                    </HStack>
                                </VStack>
                            </HStack>
                        </CardBody>
                    </MotionCard>

                    {/* Navigation Tabs */}
                    <HStack spacing={4} mb={8} justify="center">
                        {tabs.map((tab) => (
                            <Button
                                key={tab.id}
                                variant={activeTab === tab.id ? "solid" : "ghost"}
                                colorScheme="red"
                                leftIcon={<Icon as={tab.icon} />}
                                onClick={() => setActiveTab(tab.id)}
                                borderRadius="full"
                                px={6}
                                transform={activeTab === tab.id ? "scale(1.05)" : "scale(1)"}
                                transition="all 0.3s ease"
                            >
                                {tab.label}
                            </Button>
                        ))}
                    </HStack>

                    {/* Content Area */}
                    <MotionCard
                        bg={cardBg}
                        borderRadius="2xl"
                        boxShadow="0 25px 50px rgba(0,0,0,0.1)"
                        overflow="hidden"
                    >
                        <CardBody p={8}>
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeTab}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    {renderTabContent()}
                                </motion.div>
                            </AnimatePresence>
                        </CardBody>
                    </MotionCard>
                </MotionBox>
            </Container>
        </Box>
    );
};

export default AboutMe;
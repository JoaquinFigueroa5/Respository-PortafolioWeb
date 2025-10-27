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
    Icon,
    Avatar,
    useColorModeValue,
    Card,
    CardBody,
    Tooltip,
    IconButton,
    useBreakpointValue,
    Stack,
    SimpleGrid,
    useDisclosure
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
    FaUikit,
    FaFire,
    FaEye,
    FaDocker,
    FaPhp
} from 'react-icons/fa';
import { GrMysql as SiMysql } from "react-icons/gr";
import { SiMongodb, SiChakraui, SiFirebase, SiRender } from "react-icons/si";
import ModalAchiev from './ModalAchiev';

const MotionBox = motion(Box);
const MotionCard = motion(Card);
const MotionBadge = motion(Badge);

const AboutMe = () => {
    const [activeTab, setActiveTab] = useState('about');
    const [isHovered, setIsHovered] = useState(false);
    const [selectedSkill, setSelectedSkill] = useState(null);
    const [selectedAchievement, setSelectedAchievement] = useState(null);
    const { isOpen, onOpen, onClose } = useDisclosure();

    const bgColor = useColorModeValue('gray.50', 'gray.900');
    const cardBg = useColorModeValue('white', 'gray.800');
    const textColor = useColorModeValue('gray.800', 'white');
    const mutedColor = useColorModeValue('gray.600', 'gray.400');

    const containerMaxW = useBreakpointValue({ base: 'container.sm', md: 'container.md', lg: 'container.xl' });
    const headerDirection = useBreakpointValue({ base: 'column', md: 'row' });
    const avatarSize = useBreakpointValue({ base: 'xl', md: '2xl' });
    const headerSpacing = useBreakpointValue({ base: 4, md: 6 });
    const cardPadding = useBreakpointValue({ base: 4, md: 6, lg: 8 });
    const tabsDirection = useBreakpointValue({ base: 'column', sm: 'row' });
    const tabsSpacing = useBreakpointValue({ base: 2, sm: 4 });
    const buttonSize = useBreakpointValue({ base: 'sm', md: 'md' });
    const headingSize = useBreakpointValue({ base: 'lg', md: 'xl' });
    const roleSize = useBreakpointValue({ base: 'md', md: 'lg' });

    const person = {
        name: "Joaquin Figueroa",
        role: "Junior Full Stack Developer",
        location: "Ciudad de Guatemala",
        email: "figueroaalvarez594@email.com",
        phone: "+502 5869-4127",
        avatar: "/yo4.jpg",
        bio: "Soy Herbert Joaquin Figueroa Alvarez, un desarrollador web Junior de 18 años que le apasiona seguir aprendiendo de todo sobre la programacion y el software en general. Soy una persona proactiva que quiere seguir superandose y con la posibilidad de seguir escalando en lo profesional.",
        skills: [
            { name: "React", level: 88, color: "blue.500", icon: FaReact, colorScheme: 'blue' },
            { name: "Node.js", level: 85, color: "green.500", icon: FaNodeJs, colorScheme: 'green' },
            { name: "Python", level: 40, color: "yellow.500", icon: FaPython, colorScheme: 'yellow' },
            { name: "JAVA", level: 80, color: "red.600", icon: FaJava, colorScheme: 'red' },
            { name: "MySQL", level: 80, color: "blue.500", icon: SiMysql, colorScheme: 'blue' },
            { name: "MongoDB", level: 90, color: "green.500", icon: SiMongodb, colorScheme: 'green' },
            { name: "Docker", level: 70, color: "blue.400", icon: FaDocker, colorScheme: 'blue' },
            { name: "Git", level: 90, color: "gray.500", icon: FaGithub, colorScheme: 'gray' },
            { name: "HTML", level: 80, color: "orange.500", icon: FaHtml5, colorScheme: 'orange' },
            { name: "CSS", level: 80, color: "blue.500", icon: FaCss3, colorScheme: 'blue' },
            { name: "PHP", level: 60, color: "purple.600", icon: FaPhp, colorScheme: 'purple' },
            { name: "Chakra UI", level: 80, color: "cyan.500", icon: SiChakraui, colorScheme: 'cyan' },
            { name: "Firebase", level: 75, color: "orange.400", icon: SiFirebase, colorScheme: 'orange' },
            { name: "Render", level: 70, color: "purple.400", icon: SiRender, colorScheme: 'purple' }
        ],
        achievements: [
            { title: "Diploma por haber participado en SpaceApps de la NASA.", year: "2025", icon: FaAward },
            { title: "Parte de desarrollo web en la universidad Mariano Galvez.", year: "2025", icon: FaGithub },
            { title: "Certificación en React por ADA-SCHOOL.", year: "2025", icon: FaRocket },
            { title: "Elegido para la ExpoKinal por buen rendimiento tecnico.", year: "2025", icon: FaCode },
            { title: "Diploma por haber participado en Telescope de la UNIS.", year: "2025", icon: FaEye },
            { title: "Graduado de Kinal con un Tecnico en informatica (Programador Junior).", year: "2025", icon: FaGraduationCap }
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
                duration: "2023 - 2025",
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

    const handleAchievementClick = (achievement) => {
        setSelectedAchievement(achievement);
        setTimeout(() => onOpen(), 0);
    };

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
                                <Text fontSize={{ base: 'md', md: 'lg' }} color={mutedColor} lineHeight="1.8">
                                    {person.bio}
                                </Text>
                            </motion.div>

                            <motion.div variants={itemVariants}>
                                <Heading size={{ base: 'sm', md: 'md' }} mb={4} color={textColor}>
                                    Logros Destacados
                                    <Badge ml={{ base: 0, md: 5 }} colorScheme="red" variant="subtle" fontSize={{ base: 'xs', md: 'xs' }}>
                                        Haz click en cada logro para ver más
                                    </Badge>
                                </Heading>
                                <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={4}>
                                    {person.achievements.map((achievement, index) => (
                                        <Tooltip label='Click para ver más' >
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
                                                onClick={() => handleAchievementClick(achievement)}
                                            >
                                                <CardBody p={{ base: 3, md: 4 }}>
                                                    <Stack direction={{ base: 'column', sm: 'row' }} spacing={3} align={{ base: 'center', sm: 'flex-start' }}>
                                                        <Icon as={achievement.icon} color="red.500" boxSize={{ base: 5, md: 6 }} />
                                                        <VStack align={{ base: 'center', sm: 'start' }} spacing={1}>
                                                            <Text
                                                                fontWeight="bold"
                                                                fontSize={{ base: 'xs', md: 'sm' }}
                                                                color={textColor}
                                                                textAlign={{ base: 'center', sm: 'left' }}
                                                            >
                                                                {achievement.title}
                                                            </Text>
                                                            <Text fontSize={{ base: 'xs', md: 'xs' }} color={mutedColor}>
                                                                {achievement.year}
                                                            </Text>
                                                        </VStack>
                                                    </Stack>
                                                </CardBody>
                                            </MotionCard>
                                        </Tooltip>
                                    ))}
                                </SimpleGrid>
                            </motion.div>

                            <motion.div variants={itemVariants}>
                                <Heading size={{ base: 'sm', md: 'md' }} mb={4} color={textColor}>
                                    Intereses
                                </Heading>
                                <Box display="flex" flexWrap="wrap" gap={2} justifyContent={{ base: 'center', md: 'flex-start' }}>
                                    {person.interests.map((interest, index) => (
                                        <MotionBadge
                                            key={index}
                                            colorScheme="red"
                                            variant="subtle"
                                            px={{ base: 2, md: 3 }}
                                            py={2}
                                            borderRadius="full"
                                            fontSize={{ base: 'xs', md: 'sm' }}
                                            whileHover={{ scale: 1.1 }}
                                            whileTap={{ scale: 0.95 }}
                                            cursor="pointer"
                                        >
                                            <Icon as={FaHeart} mr={1} boxSize={3} />
                                            {interest}
                                        </MotionBadge>
                                    ))}
                                </Box>
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
                        <VStack spacing={4} align="stretch">
                            {person.skills.map((skill, index) => (
                                <motion.div
                                    key={index}
                                    variants={itemVariants}
                                    onHoverStart={() => setSelectedSkill(skill.name)}
                                    onHoverEnd={() => setSelectedSkill(null)}
                                >
                                    <Box
                                        p={{ base: 3, md: 4 }}
                                        bg={cardBg}
                                        borderRadius="lg"
                                        border="1px solid"
                                        borderColor={selectedSkill === skill.name ? skill.color : "gray.200"}
                                        transition="all 0.3s ease"
                                        cursor="pointer"
                                    >
                                        <Stack
                                            direction={{ base: 'column', sm: 'row' }}
                                            justify="space-between"
                                            align={{ base: 'flex-start', sm: 'center' }}
                                            mb={3}
                                            spacing={2}
                                        >
                                            <HStack spacing={3}>
                                                <Icon as={skill.icon} color={skill.color} boxSize={5} />
                                                <Text fontWeight="bold" color={textColor} fontSize={{ base: 'sm', md: 'md' }}>
                                                    {skill.name}
                                                </Text>
                                            </HStack>
                                            <Badge colorScheme={skill.colorScheme} variant="subtle" fontSize={{ base: 'xs', md: 'sm' }}>
                                                {skill.level}%
                                            </Badge>
                                        </Stack>
                                        <motion.div
                                            initial="hidden"
                                            animate="visible"
                                            variants={skillVariants}
                                            transition={{ duration: 1, delay: index * 0.1 }}
                                        >
                                            <Progress
                                                value={skill.level}
                                                colorScheme={skill.colorScheme}
                                                size={{ base: 'md', md: 'lg' }}
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
                        <VStack spacing={4} align="stretch">
                            {person.experience.map((exp, index) => (
                                <motion.div key={index} variants={itemVariants}>
                                    <MotionCard
                                        bg={cardBg}
                                        border="1px solid"
                                        borderColor="gray.200"
                                        whileHover={{
                                            borderColor: "red.300",
                                            transform: { base: "translateY(-2px)", md: "translateX(10px)" }
                                        }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <CardBody p={{ base: 4, md: 6 }}>
                                            <VStack align="start" spacing={3}>
                                                <Stack
                                                    direction={{ base: 'column', md: 'row' }}
                                                    justify="space-between"
                                                    width="100%"
                                                    align={{ base: 'flex-start', md: 'center' }}
                                                    spacing={2}
                                                >
                                                    <VStack align="start" spacing={1}>
                                                        <Text
                                                            fontWeight="bold"
                                                            fontSize={{ base: 'md', md: 'lg' }}
                                                            color={textColor}
                                                        >
                                                            {exp.position}
                                                        </Text>
                                                        <Text
                                                            color="red.500"
                                                            fontWeight="semibold"
                                                            fontSize={{ base: 'sm', md: 'md' }}
                                                        >
                                                            {exp.company}
                                                        </Text>
                                                    </VStack>
                                                    <Badge
                                                        colorScheme="red"
                                                        variant="outline"
                                                        fontSize={{ base: 'xs', md: 'sm' }}
                                                        px={{ base: 2, md: 4 }}
                                                        py={1}
                                                        borderRadius="md"
                                                    >
                                                        {exp.duration}
                                                    </Badge>
                                                </Stack>
                                                <Text
                                                    color={mutedColor}
                                                    lineHeight="1.6"
                                                    fontSize={{ base: 'sm', md: 'md' }}
                                                >
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
                                <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
                                    <MotionCard
                                        bg={cardBg}
                                        whileHover={{ scale: 1.05 }}
                                        cursor="pointer"
                                    >
                                        <CardBody p={{ base: 4, md: 6 }}>
                                            <HStack spacing={3}>
                                                <Icon as={FaEnvelope} color="red.500" boxSize={5} />
                                                <VStack align="start" spacing={1}>
                                                    <Text fontSize={{ base: 'xs', md: 'sm' }} color={mutedColor}>
                                                        Email
                                                    </Text>
                                                    <Text
                                                        as='a'
                                                        fontWeight="bold"
                                                        fontSize={{ base: 'xs', md: 'sm' }}
                                                        color={textColor}
                                                        href='mailto:figueroaalvarez594@gmail.com'
                                                        wordBreak="break-all"
                                                    >
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
                                        <CardBody p={{ base: 4, md: 6 }}>
                                            <HStack spacing={3}>
                                                <Icon as={FaPhone} color="red.500" boxSize={5} />
                                                <VStack align="start" spacing={1}>
                                                    <Text fontSize={{ base: 'xs', md: 'sm' }} color={mutedColor}>
                                                        Teléfono
                                                    </Text>
                                                    <Text
                                                        as='a'
                                                        fontWeight="bold"
                                                        fontSize={{ base: 'xs', md: 'sm' }}
                                                        color={textColor}
                                                        href='tel:58694127'
                                                    >
                                                        {person.phone}
                                                    </Text>
                                                </VStack>
                                            </HStack>
                                        </CardBody>
                                    </MotionCard>
                                </SimpleGrid>
                            </motion.div>

                            <motion.div variants={itemVariants}>
                                <Heading size={{ base: 'sm', md: 'md' }} mb={4} color={textColor}>
                                    Redes Sociales
                                </Heading>
                                <Stack direction={{ base: 'column', sm: 'row' }} spacing={4} align="center">
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
                                                    size={{ base: 'md', md: 'lg' }}
                                                    color={social.color}
                                                    variant='ghost'
                                                    aria-label={social.label}
                                                    icon={<Icon as={social.icon} boxSize={{ base: 6, md: 8 }} />}
                                                />
                                            </MotionBox>
                                        </Tooltip>
                                    ))}
                                </Stack>
                            </motion.div>
                        </VStack>
                    </motion.div>
                );

            default:
                return null;
        }
    };

    return (
        <>
            <Box bg={bgColor} minHeight="100vh" py={{ base: 4, md: 6, lg: 10 }}>
                <Container maxW={containerMaxW} px={{ base: 4, md: 6 }}>
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
                            mb={{ base: 6, md: 8 }}
                            onHoverStart={() => setIsHovered(true)}
                            onHoverEnd={() => setIsHovered(false)}
                        >
                            <Box
                                bg="linear-gradient(135deg, #e53e3e 0%, #c53030 50%, #9b2c2c 100%)"
                                height={{ base: "80px", md: "120px" }}
                                position="relative"
                            >
                                <MotionBox
                                    position="absolute"
                                    top="-10px"
                                    right="-10px"
                                    width={{ base: "60px", md: "100px" }}
                                    height={{ base: "60px", md: "100px" }}
                                    borderRadius="50%"
                                    bg="rgba(255,255,255,0.1)"
                                    animate={{
                                        scale: isHovered ? 1.2 : 1,
                                        rotate: isHovered ? 180 : 0
                                    }}
                                    transition={{ duration: 0.5 }}
                                />
                            </Box>

                            <CardBody position="relative" pt={0} p={cardPadding}>
                                <Stack direction={headerDirection} spacing={headerSpacing} align={{ base: 'center', md: 'start' }}>
                                    <MotionBox
                                        mt={{ base: -12, md: -16 }}
                                        whileHover={{ scale: 1.05 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <Avatar
                                            size={avatarSize}
                                            src={person.avatar}
                                            border="6px solid white"
                                            boxShadow="0 10px 30px rgba(0,0,0,0.2)"
                                        />
                                    </MotionBox>

                                    <VStack
                                        align={{ base: 'center', md: 'start' }}
                                        spacing={2}
                                        flex={1}
                                        pt={{ base: 2, md: 4 }}
                                        textAlign={{ base: 'center', md: 'left' }}
                                    >
                                        <Heading size={headingSize} color={textColor}>
                                            {person.name}
                                        </Heading>
                                        <Text fontSize={roleSize} color="red.500" fontWeight="semibold">
                                            {person.role}
                                        </Text>
                                        <Stack
                                            direction={{ base: 'column', sm: 'row' }}
                                            spacing={4}
                                            color={mutedColor}
                                            align="center"
                                        >
                                            <HStack spacing={1}>
                                                <Icon as={FaMapMarkerAlt} />
                                                <Text fontSize="sm">{person.location}</Text>
                                            </HStack>
                                            <HStack spacing={1}>
                                                <Icon as={FaStar} color="yellow.400" />
                                                <Text fontSize="sm">4.9/5</Text>
                                            </HStack>
                                        </Stack>
                                    </VStack>
                                </Stack>
                            </CardBody>
                        </MotionCard>

                        {/* Navigation Tabs */}
                        <Stack direction={tabsDirection} spacing={tabsSpacing} mb={{ base: 6, md: 8 }} align="center">
                            {tabs.map((tab) => (
                                <Button
                                    key={tab.id}
                                    variant={activeTab === tab.id ? "solid" : "ghost"}
                                    colorScheme="red"
                                    leftIcon={<Icon as={tab.icon} />}
                                    onClick={() => setActiveTab(tab.id)}
                                    borderRadius="full"
                                    px={{ base: 3, md: 6 }}
                                    size={buttonSize}
                                    transform={activeTab === tab.id ? "scale(1.05)" : "scale(1)"}
                                    transition="all 0.3s ease"
                                    width={{ base: 'full', sm: 'auto' }}
                                >
                                    {tab.label}
                                </Button>
                            ))}
                        </Stack>

                        {/* Content Area */}
                        <MotionCard
                            bg={cardBg}
                            borderRadius="2xl"
                            boxShadow="0 25px 50px rgba(0,0,0,0.1)"
                            overflow="hidden"
                        >
                            <CardBody p={cardPadding}>
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

            <ModalAchiev
                isOpen={isOpen}
                onClose={onClose}
                achievement={selectedAchievement}
            />
        </>
    );
};

export default AboutMe;
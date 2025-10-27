import React, { useState, useEffect } from 'react';
import {
    IconButton,
    Box,
    useColorModeValue,
    Tooltip,
} from '@chakra-ui/react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaArrowUp, FaRocket } from 'react-icons/fa';

const MotionIconButton = motion.create(IconButton);
const MotionBox = motion.create(Box);

const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [scrollProgress, setScrollProgress] = useState(0);
    const [isHovered, setIsHovered] = useState(false);

    const bgColor = useColorModeValue('red.500', 'red.600');
    const hoverBgColor = useColorModeValue('red.600', 'red.500');
    const shadowColor = useColorModeValue('red.500', 'red.600');

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.pageYOffset;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const scrollPercent = (scrollTop / docHeight) * 100;

            setScrollProgress(scrollPercent);
            setIsVisible(scrollTop > 300);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    const buttonVariants = {
        hidden: {
            opacity: 0,
            scale: 0,
            y: 100,
            rotate: -180,
        },
        visible: {
            opacity: 1,
            scale: 1,
            y: 0,
            rotate: 0,
            transition: {
                type: 'spring',
                stiffness: 400,
                damping: 25,
                duration: 0.6,
            },
        },
        hover: {
            scale: 1.15,
            y: -5,
            transition: {
                type: 'spring',
                stiffness: 400,
                damping: 10,
            },
        },
        tap: {
            scale: 0.95,
            y: 0,
        },
    };

    const progressVariants = {
        initial: { pathLength: 0 },
        animate: {
            pathLength: scrollProgress / 100,
            transition: { duration: 0.3, ease: 'easeInOut' }
        },
    };

    const pulseVariants = {
        pulse: {
            scale: [1, 1.2, 1],
            opacity: [0.7, 0.3, 0.7],
            transition: {
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
            },
        },
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <MotionBox
                    position="fixed"
                    bottom="30px"
                    right="30px"
                    zIndex={1000}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    variants={buttonVariants}
                >
                    {/* Círculo de progreso de fondo */}
                    <Box
                        position="absolute"
                        top="50%"
                        left="50%"
                        transform="translate(-50%, -50%)"
                        w="70px"
                        h="70px"
                    >
                        <svg width="70" height="70" style={{ transform: 'rotate(-90deg)' }}>
                            {/* Círculo de fondo */}
                            <circle
                                cx="35"
                                cy="35"
                                r="32"
                                fill="none"
                                stroke="rgba(255, 255, 255, 0.1)"
                                strokeWidth="2"
                            />
                            {/* Círculo de progreso */}
                            <motion.circle
                                cx="35"
                                cy="35"
                                r="32"
                                fill="none"
                                stroke="#FF6B6B"
                                strokeWidth="3"
                                strokeLinecap="round"
                                strokeDasharray="201.06" // 2 * PI * 32
                                strokeDashoffset="201.06"
                                variants={progressVariants}
                                initial="initial"
                                animate="animate"
                                style={{
                                    strokeDashoffset: `${201.06 - (201.06 * scrollProgress) / 100}`,
                                }}
                            />
                        </svg>
                    </Box>

                    {!isHovered && (
                        <MotionBox
                            position="absolute"
                            transform="translate(-50%, -50%)"
                            w="60px"
                            h="60px"
                            border="2px solid"
                            borderColor={bgColor}
                            borderRadius="full"
                            variants={pulseVariants}
                            animate="pulse"
                        />
                    )}

                    {/* Botón principal */}
                    <Tooltip
                        label="Subir al inicio"
                        placement="left"
                        hasArrow
                        bg={bgColor}
                        color="white"
                    >
                        <MotionIconButton
                            aria-label="Scroll to top"
                            icon={isHovered ? <FaRocket /> : <FaArrowUp />}
                            size="lg"
                            isRound
                            bg={bgColor}
                            color="white"
                            _hover={{ bg: hoverBgColor }}
                            boxShadow={`0 8px 32px ${shadowColor}40`}
                            variants={buttonVariants}
                            whileHover="hover"
                            whileTap="tap"
                            onClick={scrollToTop}
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                            position="relative"
                            zIndex={2}
                            fontSize="18px"
                            w="60px"
                            h="60px"
                            transition="all 0.3s ease"
                        />
                    </Tooltip>

                    {/* Partículas decorativas */}
                    <AnimatePresence>
                        {isHovered && (
                            <>
                                {[...Array(6)].map((_, i) => (
                                    <MotionBox
                                        key={i}
                                        position="absolute"
                                        top="50%"
                                        left="50%"
                                        w="4px"
                                        h="4px"
                                        bg={bgColor}
                                        borderRadius="full"
                                        initial={{
                                            opacity: 0,
                                            scale: 0,
                                            x: 0,
                                            y: 0,
                                        }}
                                        animate={{
                                            opacity: [0, 1, 0],
                                            scale: [0, 1, 0],
                                            x: Math.cos((i * 60) * Math.PI / 180) * 40,
                                            y: Math.sin((i * 60) * Math.PI / 180) * 40,
                                        }}
                                        transition={{
                                            duration: 1,
                                            repeat: Infinity,
                                            delay: i * 0.1,
                                        }}
                                    />
                                ))}
                            </>
                        )}
                    </AnimatePresence>
                </MotionBox>
            )}
        </AnimatePresence>
    );
};

export default ScrollToTopButton;
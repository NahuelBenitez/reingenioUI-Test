import { 
  Flex, 
  Box, 
  Heading, 
  Button, 
  useColorModeValue,
  SlideFade,
  ScaleFade,
  useDisclosure,
  IconButton,
  Avatar,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Badge
} from '@chakra-ui/react';
import { 
  FiPlus, 
  FiMenu, 
  FiBell, 
  FiUser,
  FiLogOut,
  FiSettings 
} from 'react-icons/fi';
import { motion } from 'framer-motion';
import { useState } from 'react';

const MotionBox = motion(Box);
const MotionButton = motion(Button);

const Navbar = ({ onOpen }) => {
  const [isHovered, setIsHovered] = useState(false);
  const bg = useColorModeValue('white', 'gray.800');
  const color = useColorModeValue('gray.800', 'white');
  const hoverBg = useColorModeValue('teal.50', 'teal.700');
  const { isOpen: isMenuOpen, onToggle: onMenuToggle } = useDisclosure();

  return (
    <Box
      as="header"
      position="sticky"
      top="0"
      zIndex="sticky"
      boxShadow="sm"
      bg={bg}
      color={color}
    >
      <Flex
        px={{ base: 4, md: 6 }}
        py={3}
        align="center"
        justify="space-between"
        maxW="1200px"
        mx="auto"
      >
        {/* Logo y título */}
        <Flex align="center">
          <SlideFade in={true} offsetY={-20}>
            <Flex align="center">
              <MotionBox
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                mr={3}
              >
                <Avatar
                  name="Agenda Contactos"
                  src="https://avatars.dicebear.com/api/bottts/your-custom-seed.svg"
                  size="sm"
                  bg="teal.500"
                />
              </MotionBox>
              <Heading 
                size="lg" 
                fontWeight="extrabold"
                bgGradient="linear(to-r, teal.400, teal.600)"
                bgClip="text"
              >
                AgendaContact
              </Heading>
            </Flex>
          </SlideFade>
        </Flex>

        {/* Menú principal (desktop) */}
        <Flex 
          display={{ base: 'none', md: 'flex' }} 
          align="center"
          gap={6}
        >
          <MotionButton
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            leftIcon={<FiPlus />}
            colorScheme="teal"
            variant="solid"
            size="sm"
            onClick={onOpen}
            position="relative"
            overflow="hidden"
          >
            <Box as="span" position="relative" zIndex={1}>
              Nuevo Contacto
            </Box>
            {isHovered && (
              <MotionBox
                position="absolute"
                top={0}
                left={0}
                w="full"
                h="full"
                bg="rgba(255,255,255,0.2)"
                initial={{ x: '-100%' }}
                animate={{ x: '100%' }}
                transition={{ duration: 0.6 }}
              />
            )}
          </MotionButton>

          <IconButton
            aria-label="Notificaciones"
            icon={<FiBell />}
            variant="ghost"
            fontSize="xl"
            isRound
            position="relative"
          >
            <Badge 
              colorScheme="red" 
              variant="solid" 
              position="absolute"
              top="1"
              right="1"
              fontSize="xs"
              borderRadius="full"
              w="4"
              h="4"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              3
            </Badge>
          </IconButton>

          <Menu>
            <MenuButton
              as={Button}
              variant="ghost"
              leftIcon={<FiUser />}
              rightIcon={<FiMenu />}
              size="sm"
              _hover={{ bg: hoverBg }}
              _active={{ bg: hoverBg }}
            >
              Mi cuenta
            </MenuButton>
            <MenuList>
              <MenuItem icon={<FiUser />}>Perfil</MenuItem>
              <MenuItem icon={<FiSettings />}>Configuración</MenuItem>
              <MenuItem icon={<FiLogOut />} color="red.500">
                Cerrar sesión
              </MenuItem>
            </MenuList>
          </Menu>
        </Flex>

        {/* Menú móvil */}
        <Box display={{ base: 'block', md: 'none' }}>
          <ScaleFade in={isMenuOpen} unmountOnExit>
            <Box
              position="fixed"
              top="16"
              left="0"
              right="0"
              bg={bg}
              p={4}
              boxShadow="md"
            >
              <Button
                leftIcon={<FiPlus />}
                colorScheme="teal"
                variant="solid"
                w="full"
                mb={2}
                onClick={onOpen}
              >
                Nuevo Contacto
              </Button>
              <Button
                leftIcon={<FiUser />}
                variant="ghost"
                w="full"
              >
                Mi cuenta
              </Button>
            </Box>
          </ScaleFade>

          <IconButton
            aria-label="Toggle menu"
            icon={<FiMenu />}
            variant="ghost"
            onClick={onMenuToggle}
          />
        </Box>
      </Flex>
    </Box>
  );
};

export default Navbar;
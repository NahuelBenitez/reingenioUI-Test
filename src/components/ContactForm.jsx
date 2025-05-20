import { useState } from 'react'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  FormControl,
  FormLabel,
  Input,
  VStack,
  Select,
  useToast,
} from '@chakra-ui/react'

const ContactForm = ({ isOpen, onClose, onSubmit, initialData = {}, provinces = [] }) => {
  const [formData, setFormData] = useState({
    nombre: initialData.nombre || '',
    apellido: initialData.apellido || '',
    provincia: initialData.provincia || '',
    telefono: initialData.telefono || '',
    id: initialData.id || null
  })
  const toast = useToast()

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    // Validación básica
    if (!formData.nombre || !formData.apellido || !formData.provincia || !formData.telefono) {
      toast({
        title: 'Error',
        description: 'Todos los campos son obligatorios',
        status: 'error',
        duration: 3000,
        isClosable: true,
      })
      return
    }
    
    onSubmit(formData)
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent as="form" onSubmit={handleSubmit}>
        <ModalHeader>{initialData.id ? 'Editar Contacto' : 'Nuevo Contacto'}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <VStack spacing={4}>
            <FormControl isRequired>
              <FormLabel>Nombre</FormLabel>
              <Input 
                name="nombre" 
                value={formData.nombre} 
                onChange={handleChange} 
                placeholder="Ej: Juan"
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Apellido</FormLabel>
              <Input 
                name="apellido" 
                value={formData.apellido} 
                onChange={handleChange} 
                placeholder="Ej: Pérez"
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Provincia</FormLabel>
                <Select 
        name="provincia" 
        value={formData.provincia} 
        onChange={handleChange} 
        placeholder="Selecciona una provincia"
      >
        {provinces.map(province => (
          <option key={province.id} value={province.name}>
            {province.name}
          </option>
        ))}
      </Select>
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Teléfono</FormLabel>
              <Input 
                name="telefono" 
                type="tel" 
                value={formData.telefono} 
                onChange={handleChange}
                placeholder="Ej: 3515551234"
              />
            </FormControl>
          </VStack>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="blue" mr={3} type="submit">
            Guardar
          </Button>
          <Button variant="ghost" onClick={onClose}>Cancelar</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

export default ContactForm
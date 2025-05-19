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
} from '@chakra-ui/react'

const ContactForm = ({ isOpen, onClose, onSubmit, initialData = {} }) => {
  const [formData, setFormData] = useState({
    nombre: initialData.nombre || '',
    apellido: initialData.apellido || '',
    provincia: initialData.provincia || '',
    telefono: initialData.telefono || '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit(formData)
    onClose()
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
              <Input name="nombre" value={formData.nombre} onChange={handleChange} />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Apellido</FormLabel>
              <Input name="apellido" value={formData.apellido} onChange={handleChange} />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Provincia</FormLabel>
              <Select name="provincia" value={formData.provincia} onChange={handleChange} placeholder="Selecciona una provincia">
                <option value="Buenos Aires">Buenos Aires</option>
                <option value="Córdoba">Córdoba</option>
                <option value="Santa Fe">Santa Fe</option>
                <option value="Mendoza">Mendoza</option>
                <option value="Tucumán">Tucumán</option>
              </Select>
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Teléfono</FormLabel>
              <Input name="telefono" type="tel" value={formData.telefono} onChange={handleChange} />
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
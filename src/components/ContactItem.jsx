import { Box, Text, Flex, IconButton, useDisclosure } from '@chakra-ui/react'
import { EditIcon, DeleteIcon } from '@chakra-ui/icons'
import ContactForm from './ContactForm'

const ContactItem = ({ contact, onEdit, onDelete, provinces })=> {
  const { isOpen, onOpen, onClose } = useDisclosure()

  const handleEdit = (updatedContact) => {
    onEdit({ ...updatedContact, id: contact.id })
    onClose() // Cerrar el modal después de enviar los datos
  }

  return (
    <>
      <Box p={4} borderWidth="1px" borderRadius="lg" mb={2}>
        <Flex justifyContent="space-between" alignItems="center">
          <Box>
            <Text fontWeight="bold">{contact.firstName || contact.nombre} {contact.lastName || contact.apellido}</Text>
            <Text>{contact.province?.name || contact.provincia}</Text>
            <Text>{contact.phone || contact.telefono}</Text>
          </Box>
          <Box>
            <IconButton
              icon={<EditIcon />}
              onClick={onOpen}
              mr={2}
              aria-label="Editar contacto"
            />
            <IconButton
              icon={<DeleteIcon />}
              onClick={() => onDelete(contact.id)}
              aria-label="Eliminar contacto"
              colorScheme="red"
            />
          </Box>
        </Flex>
      </Box>
      
      <ContactForm 
  isOpen={isOpen} 
  onClose={onClose} 
  onSubmit={handleEdit}
  initialData={{
    nombre: contact.firstName || contact.nombre,
    apellido: contact.lastName || contact.apellido,
    provincia: contact.province?.name || contact.provincia,
    telefono: contact.phone || contact.telefono,
    id: contact.id
  }}
  provinces={provinces}
/>
    </>
  )
}

export default ContactItem
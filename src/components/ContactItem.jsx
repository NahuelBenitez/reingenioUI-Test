import { Box, Text, Flex, IconButton, useDisclosure } from '@chakra-ui/react'
import { EditIcon, DeleteIcon } from '@chakra-ui/icons'
import ContactForm from './ContactForm'

const ContactItem = ({ contact, onEdit, onDelete }) => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  const handleEdit = (updatedContact) => {
    onEdit({ ...updatedContact, id: contact.id })
  }

  return (
    <>
      <Box p={4} borderWidth="1px" borderRadius="lg" mb={2}>
        <Flex justifyContent="space-between" alignItems="center">
          <Box>
            <Text fontWeight="bold">{contact.nombre} {contact.apellido}</Text>
            <Text>{contact.provincia}</Text>
            <Text>{contact.telefono}</Text>
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
        initialData={contact}
      />
    </>
  )
}

export default ContactItem
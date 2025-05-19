import { VStack } from '@chakra-ui/react'
import ContactItem from './ContactItem'

const ContactList = ({ contacts, onEdit, onDelete }) => {
  return (
    <VStack spacing={4} mt={4}>
      {contacts.map(contact => (
        <ContactItem 
          key={contact.id} 
          contact={contact} 
          onEdit={onEdit} 
          onDelete={onDelete} 
        />
      ))}
    </VStack>
  )
}

export default ContactList
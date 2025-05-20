import { VStack } from '@chakra-ui/react'
import ContactItem from './ContactItem'

const ContactList = ({ contacts, onEdit, onDelete ,  provinces  }) => {
  return (
    <VStack spacing={4} mt={4}>
      {contacts.map(contact => (
        <ContactItem 
          key={contact.id} 
          contact={contact} 
          onEdit={onEdit} 
          onDelete={onDelete} 
            provinces={provinces}
        />
      ))}
    </VStack>
  )
}

export default ContactList
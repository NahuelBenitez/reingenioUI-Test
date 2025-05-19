import { useState } from 'react'
import { Box, useDisclosure } from '@chakra-ui/react'
import Navbar from '../components/Navbar'
import ContactForm from '../components/ContactForm'
import ContactList from '../components/ContactList'


const Home = () => {
  const [contacts, setContacts] = useState([])
  const { isOpen, onOpen, onClose } = useDisclosure()

  const handleAddContact = (newContact) => {
    setContacts([...contacts, { ...newContact, id: Date.now() }])
  }

  const handleEditContact = (updatedContact) => {
    setContacts(contacts.map(contact => 
      contact.id === updatedContact.id ? updatedContact : contact
    ))
  }

  const handleDeleteContact = (id) => {
    setContacts(contacts.filter(contact => contact.id !== id))
  }

  return (
    <Box>
      <Navbar onOpen={onOpen} />
      <Box p={4}>
        <ContactList 
          contacts={contacts} 
          onEdit={handleEditContact} 
          onDelete={handleDeleteContact} 
        />
      </Box>
      <ContactForm 
        isOpen={isOpen} 
        onClose={onClose} 
        onSubmit={handleAddContact} 
      />
    </Box>
  )
}

export default Home
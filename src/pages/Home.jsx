import { useState, useEffect } from 'react'
import { Box, useDisclosure, useToast } from '@chakra-ui/react'
import Navbar from '../components/Navbar'
import ContactForm from '../components/ContactForm'
import ContactList from '../components/ContactList'
import { 
  getContacts, 
  createContact, 
  updateContact, 
  deleteContact,
  getProvinces
} from '../services/api'

const Home = () => {
  const [contacts, setContacts] = useState([])
  const [provinces, setProvinces] = useState([])
  const { isOpen, onOpen, onClose } = useDisclosure()
  const toast = useToast()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [contactsData, provincesData] = await Promise.all([
          getContacts(),
          getProvinces()
        ]);
        setContacts(contactsData);
        setProvinces(provincesData);
      } catch (error) {
        toast({
          title: 'Error al cargar datos',
          description: 'No se pudieron cargar los contactos y provincias',
          status: 'error',
          duration: 5000,
          isClosable: true,
        })
      }
    }
    fetchData();
  }, [toast])

  const handleAddContact = async (newContact) => {
    try {
      await createContact(newContact, provinces);
      
      toast({
        title: 'Contacto creado',
        status: 'success',
        duration: 3000,
        isClosable: true,
      });
      
      const updatedContacts = await getContacts();
      setContacts(updatedContacts);
      onClose();
    } catch (error) {
      console.error('Error completo:', error);
      
      let errorMessage = 'Error al crear el contacto';
      if (error.response?.data?.message) {
        errorMessage = error.response.data.message;
      } else if (error.message) {
        errorMessage = error.message;
      }

      toast({
        title: 'Error',
        description: errorMessage,
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    }
  }

  const handleEditContact = async (updatedContact) => {
  try {
    const result = await updateContact(updatedContact.id, updatedContact, provinces);
    
    toast({
      title: 'Contacto actualizado',
      status: 'success',
      duration: 3000,
      isClosable: true,
    });
    
    const updatedContacts = await getContacts();
    setContacts(updatedContacts);
  } catch (error) {
    let errorMessage = 'Error al actualizar contacto';
    
    if (error.response?.data?.message) {
      errorMessage = error.response.data.message;
    } else if (error.message) {
      errorMessage = error.message;
    }

    toast({
      title: 'Error',
      description: errorMessage,
      status: 'error',
      duration: 5000,
      isClosable: true,
    });
    
    console.error('Error completo al actualizar:', {
      error,
      contactData: updatedContact,
      provinces
    });
  }
};

  const handleDeleteContact = async (id) => {
    try {
      await deleteContact(id);
      
      toast({
        title: 'Contacto eliminado',
        status: 'success',
        duration: 3000,
        isClosable: true,
      });
      
      const updatedContacts = await getContacts();
      setContacts(updatedContacts);
    } catch (error) {
      toast({
        title: 'Error al eliminar',
        description: 'No se pudo eliminar el contacto',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    }
  }

  return (
    <Box>
      <Navbar onOpen={onOpen} />
      <Box p={4}>
        <ContactList 
          contacts={contacts} 
          onEdit={handleEditContact} 
          onDelete={handleDeleteContact} 
           provinces={provinces}
        />
      </Box>
      <ContactForm 
        isOpen={isOpen} 
        onClose={onClose} 
        onSubmit={handleAddContact} 
        provinces={provinces}
      />
    </Box>
  )
}

export default Home
import axios from 'axios';

const API_BASE_URL = 'http://localhost:3000';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Función auxiliar para encontrar el ID de la provincia por nombre
const findProvinceIdByName = (provinces, provinceName) => {
  const province = provinces.find(p => p.name === provinceName);
  return province ? province.id : null;
};

export const getContacts = async () => {
  try {
    const response = await api.get('/contacts');
    return response.data;
  } catch (error) {
    console.error('Error fetching contacts:', error);
    throw error;
  }
};

export const createContact = async (contactData, provinces) => {
  try {
   
    const province = provinces.find(p => p.name === contactData.provincia);
    if (!province) {
      throw new Error('Provincia no encontrada');
    }

    // Formatear los datos según lo que espera el backend
    const formattedData = {
      firstName: contactData.nombre,
      lastName: contactData.apellido,
      provinceId: province.id, // Asegurarnos de enviar el ID numérico
      phone: contactData.telefono
    };

    console.log('Datos a enviar:', formattedData); // Para depuración

    const response = await api.post('/contacts', formattedData);
    return response.data;
  } catch (error) {
    console.error('Detalles del error al crear contacto:', {
      error: error.response?.data || error.message,
      requestData: contactData,
      provinces: provinces
    });
    throw error;
  }
};

export const updateContact = async (id, contactData, provinces) => {
  try {
    // Encontrar la provincia por nombre
    const province = provinces.find(p => p.name === contactData.provincia);
    if (!province) {
      throw new Error('Provincia no encontrada');
    }

    // Preparar datos para el backend
    const formattedData = {
      firstName: contactData.nombre,
      lastName: contactData.apellido,
      provinceId: province.id,
      phone: contactData.telefono.replace(/\D/g, '') // Limpiar formato de teléfono
    };

    console.log('Enviando datos de actualización:', { id, formattedData });

    const response = await api.put(`/contacts/${id}`, formattedData);
    return response.data;
  } catch (error) {
    console.error('Detalles del error al actualizar:', {
      error: error.response?.data || error.message,
      requestData: contactData
    });
    throw error;
  }
};
export const deleteContact = async (id) => {
  try {
    await api.delete(`/contacts/${id}`);
  } catch (error) {
    console.error('Error deleting contact:', error);
    throw error;
  }
};

export const getProvinces = async () => {
  try {
    const response = await api.get('/provinces');
    return response.data;
  } catch (error) {
    console.error('Error fetching provinces:', error);
    throw error;
  }
};
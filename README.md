# AgendaContact - Aplicación de Gestión de Contactos

Esta aplicación web permite administrar una agenda de contactos de manera intuitiva y eficiente, cumpliendo con los requisitos especificados en la asignación técnica de Reingenio.


## Características

- ✅ **Agregar nuevos contactos** con información detallada
- 📋 **Listar todos los contactos** existentes en la agenda
- 🔄 **Editar contactos** ya existentes en el sistema
- ❌ **Eliminar contactos** que ya no se necesiten
- 💾 **Persistencia de datos** mediante API REST
- 🎨 **Interfaz visual moderna** e intuitiva

## Tecnologías Utilizadas

- **React 19** - Biblioteca para construir la interfaz de usuario
- **Vite** - Herramienta de compilación rápida y optimizada
- **Chakra UI** - Sistema de diseño para componentes accesibles y con estilo
- **Axios** - Cliente HTTP para realizar peticiones a la API
- **Framer Motion** - Biblioteca para animaciones fluidas
- **React Icons** - Iconos de alta calidad para mejorar la UX

## Requisitos Previos

- Node.js (v18.0.0 o superior)
- npm (v8.0.0 o superior) o yarn (v1.22.0 o superior)
- Backend API para la gestión de contactos (ejecutándose en http://localhost:3000)

## Instalación

1. Clonar el repositorio:
   ```bash
   git clone https://github.com/tu-usuario/reingenio-ui.git
   cd reingenio-ui
   ```

2. Instalar las dependencias:
   ```bash
   npm install
   # o 
   yarn install
   ```

3. Iniciar el servidor de desarrollo:
   ```bash
   npm run dev
   # o
   yarn dev
   ```

4. Abrir la aplicación en el navegador:
   ```
   http://localhost:5173
   ```

## Estructura del Proyecto

```
reingenio-ui/
├── public/           # Archivos estáticos públicos
├── src/              # Código fuente principal
│   ├── components/   # Componentes reutilizables
│   │   ├── ContactForm.jsx   # Formulario para crear/editar contactos
│   │   ├── ContactItem.jsx   # Componente para mostrar un contacto individual
│   │   ├── ContactList.jsx   # Lista de todos los contactos
│   │   └── Navbar.jsx        # Barra de navegación superior
│   ├── services/     # Servicios y lógica de negocio
│   │   └── api.js    # Cliente API para comunicación con el backend
│   ├── App.jsx       # Componente principal de la aplicación
│   ├── main.jsx      # Punto de entrada de la aplicación
│   └── ...           # Otros archivos y carpetas
└── ...               # Archivos de configuración
```

## Decisiones Técnicas

### Arquitectura

- **Componentes Modulares**: La aplicación está estructurada en componentes reutilizables que manejan responsabilidades específicas, facilitando el mantenimiento y las pruebas.
  
- **Separación de Responsabilidades**: La lógica de la API está separada de los componentes visuales para mantener una clara separación de responsabilidades.

- **Estado Centralizado**: La gestión del estado se realiza principalmente en el componente `Home.jsx`, que actúa como contenedor de los datos y coordina las operaciones CRUD.

### Estilo y UX

- **Chakra UI**: Se eligió esta biblioteca por su facilidad de uso, accesibilidad y componentes personalizables que permiten crear una interfaz moderna sin necesidad de escribir CSS extenso.

- **Animaciones Sutiles**: Se implementaron animaciones con Framer Motion para mejorar la experiencia del usuario sin ser intrusivas.

- **Diseño Responsivo**: La aplicación está diseñada para funcionar correctamente en dispositivos móviles y de escritorio.

### API y Comunicación

- **Axios**: Se utiliza para realizar peticiones HTTP al backend, facilitando el manejo de errores y transformaciones de datos.

- **Formato de Datos**: La aplicación se encarga de transformar los datos entre el formato que espera la API y el que se utiliza en la interfaz de usuario.

### Desafíos y Soluciones

- **Manejo de Errores**: Se implementó un sistema de notificaciones con toasts para informar al usuario sobre errores o acciones exitosas.

- **Validación de Datos**: Se agregó validación básica en el formulario para asegurar que todos los campos requeridos se completen correctamente.

- **Cierre de Modal**: Se implementó un cierre automático del modal de edición después de guardar cambios para mejorar la experiencia de usuario.

## Mejoras Futuras

- Implementar autenticación de usuarios
- Agregar búsqueda y filtrado de contactos
- Implementar paginación para grandes listas de contactos
- Añadir capacidad para agrupar contactos por categorías
- Permitir importar/exportar contactos en formato CSV

## Autor

[Jorge Nahuel Benitez] - [jorgenahuelbenitez07@gmail.com]

## Licencia

Este proyecto está licenciado bajo la Licencia MIT - ver el archivo [LICENSE.md](LICENSE.md) para más detalles.
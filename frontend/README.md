CuidadorApp Frontend

Esta es la parte visual de la aplicacion para gestionar cuidadores y pacientes.

    Usamos:

React 19 para crear las pantallas
Vite para que cargue rapido
SWC para compilar rapido el codigo
React Router para cambiar entre paginas
Axios para conectar con el servidor
Fuentes de Google y iconos de Material

    Orden:

La carpeta src tiene todo el codigo
En components estan los pedazos reutilizables como botones y tarjetas
En pages estan las pantallas completas
En services esta el codigo que habla con el servidor

    paso a paso:

Abre la terminal en la carpeta frontend y escribe:
npm install

    Como trabajar en desarrollo:

Escribe en la terminal:
npm run dev

Abre tu navegador y ve a http://localhost:3000
Veras la aplicacion funcionando. Si cambias algo en el codigo se actualiza solo.

    Para hacer el build final:

Cuando termines de programar y quieras subir a internet escribe:
npm run build

Esto crea una carpeta dist con todo optimizado y listo para subir al servidor.

    Paginas que tiene la app:

Inicio: es donde eliges si eres cuidador o familia
Login de familias: para que entren los familiares
Dashboard familias: pantalla principal de familias
Login cuidadores: para que entren los cuidadores
Dashboard cuidadores: pantalla principal de cuidadores

    Paginas como admin: http://localhost:3000/admin/dashboard
Admin dashboard: para el administrador
Admin pacientes: donde se gestionan los pacientes
Admin cuidadores: donde se gestionan los cuidadores


    Componentes que puedes usar:

Button: para hacer botones. Le pones variant primary o secondary, size md o lg, y un icono si quieres.

Card: hace tarjetas con bordes bonitos. Si le pones hover se ve mejor cuando pasas el mouse.

Input: campos de texto para formularios. Le pones label para la etiqueta, type para el tipo, icon si quieres un iconito.

Badge: etiquetas de colores para estados. variant puede ser success, warning, error.

StatCard: tarjetas con numeros y estadisticas. Muestra titulo, valor, icono y si subio o bajo.

    Como usar los servicios:

En api.js estan las funciones para traer datos del servidor. Por ejemplo:

Para traer todos los cuidadores: cuidadorService.getAll()
Para crear uno nuevo: cuidadorService.create(datos)
Lo mismo hay para pacientes, guardias y pagos.
Por ahora el backend no esta conectado, esto es solo el frontend. 
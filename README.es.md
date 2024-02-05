Este sitio de alquiler de autos fue creado por el desarrollador Full Stack Pavlo
Lystopad.

Tarea de prueba: Crear una solicitud para una empresa que brinda servicios de
alquiler de autos. en Ucrania. La aplicación consta de 3 páginas:

Página de inicio con una descripción general de los servicios prestados por la
empresa. Estilización y diseño a tu criterio. una página que contiene un
catálogo de coches de varias configuraciones, que el usuario puede filtrar por
marca, precio por hora de Alquiler de coche y número de kilómetros recorridos
por el coche durante su funcionamiento. (kilometraje). una página con anuncios
que el usuario ha agregado a favoritos. El La apariencia del programa debe
consistir en una navegación (diseño a su gusto). discreción y un área de
visualización. Tarea técnica Según el diseño, Implementar una tarjeta de anuncio
de alquiler de autos. Se deben mostrar 12 anuncios en el primero. página del
catálogo, y el resto de ellos - después de hacer clic en Cargar más botón. Si
hace clic en el botón "corazón" en la tarjeta publicitaria, debería agregarse a
la lista de favoritos y el color del botón debería cambiar. Al actualizar la
página, se debe registrar el resultado final de las acciones del usuario. Es
decir, si agrega un anuncio a sus favoritos y actualiza la página, el botón aún
permanece en el estado "anuncio favorito" con el color apropiado. Si haces clic
en el corazón botón nuevamente, el anuncio debe eliminarse de la lista de
favoritos y el color del botón debería cambiar a su estado original. Si haces
clic en Aprender botón más, debería abrirse una ventana modal con información
detallada sobre el automóvil y sus condiciones de alquiler. La ventana modal
debe cerrarse haciendo clic en el botón en forma de "cruz", haciendo clic en el
fondo o presionando la tecla Esc llave. En el código, el kilometraje del
automóvil debe escribirse con un valor (para ejemplo, 4500). En la interfaz de
usuario, se muestra con una coma (4500). El coche de alquiler El botón debe
implementarse como un enlace que permitirá al usuario conectarse con la empresa
a través del número de teléfono +380730000000. Agregar filtrado. desplegable con
coche marcas make.json: muestra anuncios con automóviles de la marca
correspondiente. Crea rutas. usando reaccionar enrutador. La aplicación debe
tener las siguientes rutas: "/" - inicio página con una descripción general de
los servicios prestados por la empresa "/catalog" - una página que contiene un
catálogo de coches de varias configuraciones "/favoritos": una página con
anuncios que el usuario ha agregado a favoritos. el usuario ingresó usando una
ruta que no existe, debe ser redirigido a la página de inicio.

Para trabajar con una lista de anuncios, cree su propio backend personal para el
desarrollo. utilizando el servicio de interfaz de usuario https://mockapi.io/.
Crea un recurso de anuncios. Utilizar el constructor de recursos y describir el
objeto publicitario como se describe a continuación.

Propaganda

Cree un anuncio en Mockapi con los siguientes campos: id, año, marca, modelo,
tipo, img, descripción, combustibleConsumo, motorTamaño, accesorios,
funcionalidades, alquilerPrecio, alquilerEmpresa, dirección,
alquilerCondiciones, kilometraje (ver captura de pantalla a continuación). ¡Está
prohibido agregar nuevos campos! para llenar el colección, puede tomar ads.json.
Si faltan datos o están incompletos, agréguelo usted mismo. 1 Puedes elegir tú
mismo la imagen del coche. El La base de datos debe contener al menos 32
anuncios con diferentes significados (a su discreción). Paginación implementada,
donde debería haber una página de paginación. acomodar 12 anuncios. La
paginación debe implementarse en el lado de Mockapi. Agregar filtrado: menú
desplegable con marcas de automóviles make.json - muestra anuncios con
automóviles de la marca correspondiente

Menú desplegable de tareas adicionales con precios por hora de alquiler de coche
(paso 10$) - mostrar anuncios con coches cuyo precio de alquiler pertenece al
rango de precios seleccionado por el usuario un grupo de entradas para
determinar el rango de kilometraje dentro del cual el usuario buscar un anuncio
Criterios de rendimiento El diseño se fija en rh, semántico y válido. Uso
obligatorio de Redux La biblioteca Axios se utiliza para consultas Paginación
está implementado en el backend. No hay errores en la consola del navegador. La
interactividad funciona según los términos de referencia. El código está
formateado. y no contiene código no utilizado. El repositorio debe describirse
en LÉAME.md. El proyecto se implementa en páginas de github o netlify.com.

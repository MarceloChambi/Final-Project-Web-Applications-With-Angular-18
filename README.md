# Final-Project-Web-Applications-With-Angular-18
Este repositorio contiene el desarrollo del proyecto final para el curso de Angular 18, impartido por Galaxy Training. El proyecto se centra en la creación de un aplicativo Angular que consume un endpoint de la API de Chuck Norris (https://api.chucknorris.io/), siguiendo las mejores prácticas de desarrollo de componentes standalone y organización en Angular.

## Funcionalidades Implementadas
Componentes Standalone:
+ Navbar: Menú de navegación con rutas a Home y ConsumoEndPoint.
+ Dashboard: Muestra el consumo del endpoint y un spinner de carga mientras se procesan las solicitudes.
+Footer: Componente estilizado con CSS personalizado.

Modelo:
Modelo basado en una interface que valida la estructura del chiste obtenido desde la API de Chuck Norris.

Servicio:
Clase de servicio para consumir el endpoint https://api.chucknorris.io/jokes/random utilizando un método HTTP GET.

Rutas:
+ Home: Página principal del proyecto.
+ ConsumoEndPoint: Página que muestra el consumo del endpoint seleccionado.

Validación y Manejo de Errores:
Validación para mostrar un mensaje de error en caso de que el endpoint no esté disponible.

Spinner:
Indicador de carga para mejorar la experiencia del usuario mientras se consume el API.

## API Utilizada
Chuck Norris API: https://api.chucknorris.io
Endpoint: https://api.chucknorris.io/jokes/random

Este endpoint devuelve un chiste aleatorio en formato JSON con la estructura: json
{
  "icon_url": "https://assets.chucknorris.host/img/avatar/chuck-norris.png",
  "id": "abc123",
  "url": "",
  "value": "Chuck Norris can divide by zero."
}

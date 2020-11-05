## BBVA Test

Esta es una aplicación de test para el BBVA que consta de dos vistas:

* Una vista de login, donde el usuario introduce sus credenciales para poder entrar a la aplicación.

* La vista principal de la aplicación, donde se le muestra al usuario el tiempo del último acceso y un botón para desloguearse.

#### Instalación

La aplicación consta de dos partes. La parte Frontal desarrollada en Angular. Y la parte del servidor montada con NodeJs donde se han almacenado los usuarios en un fichero JSON. Para poder iniciar la aplicación primero se ha de ejecutar el FRONT y luego el BACK. Se deben realizar los siguientes pasos:

Para poder instalar las dependencias tenemos que tener instalado en nuestro ordenador una de las ultimas versiones de NodeJS y el instalador de dependencias npm que viene por defecto al instalar Node.

Se puede descargar la versión de Node para cualquier sistema operativo aquí:  https://nodejs.org/en/download/

Una vez instalado Node mediante el terminal de línea de comandos nos situamos en la raiz de la carpeta donde se nos ha descargado el proyecto.

A continuación procedemos a instalar las dependencias para poder ejecutar ambas aplicaciones.


En el FRONT:

* Nos situamos dentro de la carpeta front/ del proyecto con el el terminal y dentro nos bajamos las dependencias mediante el comando `npm install`.

En el Node:

* Entramos en la carpeta node/ del proyecto y seguimos el mismo proceso de instalar las dependencias que para el front ejecutando el comando `npm install`.


#### Ejecución

Para poder lanzar la prueba necesitamos ejecutar las dos aplicaciones.

En el FRONT:

* Dentro de la carpeta front/, ejecutamos el comando `ng serve` para levantar la aplicación frontal mediante la CLI de angular.

* Probamos que la aplicación frontal se haya levantado correctamente. Introducimos en el navegador la url http://localhost:4200, y si todo funciona correctamente nos mostrará la página de login.

En el Node:

* Dentro de la carpeta node/, ejecutamos el comando `nodemon server` para levantar la aplicación node en el puerto 3000.

* Probamos que la aplicación Node se haya levantado correctamente. Introducimos en el navegador la url 
http://localhost:3000, y si todo se ha instalado correctamente el navegador nos mostrará el mensaje  _Hello world!_.


#### Prueba

Con las dos aplicaciones funcionando. Procedemos a probar el funcionamiento de la app. Para poder loguearte correctamente podéis probar con los siguientes usuarios:

* mail: luis@accenture.com,
* password: 123456,

* mail: juan@accenture.com,
* password: 123456



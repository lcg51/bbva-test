## BBVA Test

Esta es una aplicación de test para el BBVA que consta de dos vistas:

* Una vista de login, donde el usuario introduce sus credenciales para poder entrar a la aplicación.

* La vista principal de la aplicación, donde se le muestra al usuario el tiempo del último acceso y un botón para desloguearse.


La aplicación consta de dos partes. La parte Frontal desarrollada en Angular. Y la parte del servidor montada con NodeJs donde se han almacenado los usuarios en un fichero JSON. Para poder iniciar la aplicación primero se ha de ejecutar el FRONT y luego el BACK. Se deben realizar los siguientes pasos:

Para poder instalar las dependencias tenemos que tener instalado en nuestro ordenador una de las ultimas versiones de NodeJS y el instalador de dependencias npm que viene por defecto al instalar Node.

Se puede descargar la versión de Node para cualquier sistema operativo aquí:  https://nodejs.org/en/download/


Para el FRONT:

* Nos situamos dentro de la carpeta front/ del proyecto con el el terminal y dentro nos bajamos las dependencias mediante el comando `npm install`.

* Una vez instaladas las dependencias, ejecutamos el comando ng serve para levantar la aplicación mediante el angular CLI.


Para el Node:

* Entramos en la carpeta node/ del proyecto y seguimos el mismo proceso de instalar las dependencias que para el front ejecutando el comando `npm install`.

* Una vez instaladas, ejecutamos el comando nodemon server para levantar el servidor node en el puerto 3000.


Una vez lanzadas las dos aplicaciones, podemos entrar en el navegador en http://localhost:4200 y probar la aplicación.


Para poder hacer el login correctamente podéis probar con los siguientes usuarios:

* mail: luis@accenture.com,
* password: 123456,

* mail: juan@accenture.com,
* password: 123456



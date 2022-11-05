# TEMPORIZADOR ONLINE

Eliseo Francisco Arévalo Espinoza
[Visitar la página](https://eliseodesign.github.io/temporizador/)

## Descripción

Temporizador funcional constrindo con Javascript. Usando una estructura de funciones que simulan el tiempo, ademas de hacer uso de la funcion nativa setTimeOut y setInterval

## Tecnologías

- HTML
- CSS
- JS vanilla

## Funcionalidad

- ### **main.js** contiene el código con las funciones principal del temporizador, obteniendo asi la mayoria de elementos del `html`

  la primera parte del código escucha los eventos `input` para formatear los numeros a dos digitos y `keyup`, para llamar a `playing()` al dar enter, ademas definimos variables a utlizar durante la ejecución del código

  **function playing** es la función principal es el nucleo del programa.
  Lo primero dentro de la función es inicializar las variables de tiempo, obtenidas de los inputs, luego obtenemos los milisegundos totales para asi llamar a la funcion **stop()** que detendra el programa, controlamos que los inputs sean != 0, y si el programa ya esta corriendo.

  Luego se llama una a **cargarSegundo()** que iniciara un efecto domino que se llamara asi misma hasta completar un minuto y luego la función **cargarMinutos()** de igual manera hasta completar una hora y asi llamar a **cargarHoras**

  **toogleINC** inicia/finaliza con el programa y el conteo del tiempo pero de manera de control de las animaciones y la representación del tiempo en el document

  **stop** detiene el programa de manera logica y llama la función **toogleINC**

---

- **sound.js** programa el sonido de lluvia, hover y alarma del temporizador llamando a la funcion play de cada audio

---

- **list.js** con este programa creamos una lista de items de tiempos predefinidos para hacer mas amigable la interfaz y permitir al usuario ingresar tiempos ya definidos

Obtenemos los elementos del documento html haciendo uso del id de cada item en las etiquetas, y al hacer click en estos items definimos el tiempo y lo mandamos a la funcion **playing()**

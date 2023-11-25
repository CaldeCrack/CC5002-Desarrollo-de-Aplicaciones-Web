# Ejercicio 6: "*Spring Boot*"

**Nombre**: Andrés Calderón

---

## Observaciones

Tenga en cuenta las siguientes observaciones al realizar el ejercicio:

- El ejercicio es de carácter **personal**; la copia será penalizada con **nota mínima**.
- De ser necesario investigar, usted esta **autorizado a utilizar internet** como herramienta.
- El uso de modelos generativos de lenguaje como **ChatGPT está estrictamente prohibido** y será penalizado con **nota mínima**.

## Pregunta 1

Como hemos visto en auxiliares previas, el *engine* de templates **Thymeleaf** permite a los desarrolladores crear "fragmentos" de HTML que pueden ser importados a distintas templates. El objetivo de esta pregunta es llevar a la practica lo anterior. Para ello ud. cuenta con una version incompleta de un fragmento en `fragment.html` y una version incompleta de una template en `index.html`.

**Observacion:** Puede asumir que ambos archivos se encuentran en una misma carpeta.

**Respuesta:**

```html
<!-- fragment.html -->
<nav th:fragment="navbar" class="navbar">  
    <a href="#home">Home</a>
    <a href="#about">About</a>
    <a href="#services">Services</a>
    <a href="#contact">Contact</a>
</nav>
```

```html
<!-- index.html -->
<!DOCTYPE html>
<html xmlns:th="http://www.thymeleaf.org">
  <head>
    [...]
  </head>
  <body>
    <div th:replace="~{fragment :: navbar}">
  </body>
</html>
```

## Pregunta 2

Investigue 3 ventajas de utilizar Spring Boot como *backend* en vez de Flask.

**Respuesta:**

Una primera ventaja sería que está basado en Java que es un lenguaje de programación compilado, lo cual hace que la ejecución sea mucho más eficiente, además de que soporta multithreading no como Python, también este framework está diseñado para ser modular lo cual lo hace ideal para el desarrollo de arquitecturas basadas en microservicios, y por último, Spring Boot ofrece por defecto una gran cantidad de extensiones útiles para desarrollar aplicaciones web.

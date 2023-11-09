# Ejercicio 5

**Nombre**: Andrés Calderón

---

## Observaciones

Tenga en cuenta las siguientes observaciones al realizar el ejercicio:

- El ejercicio es de carácter **personal**; la copia será penalizada con **nota mínima**.
- De ser necesario investigar, usted esta **autorizado a utilizar internet** como herramienta.
- El uso de modelos generativos de lenguaje como **ChatGPT está estrictamente prohibido** y será penalizado con **nota mínima**.

## Pregunta 1

HTTP es un protocolo *stateless*, esto significa que no existe ninguna relación entre dos pares (request, response). Esto es particularmente problematico al intentar mantener la coherencia entre una cadena de requests dependientes como por ejemplo el manipular un carrito de compras en un sitio de e-commerce. Como se ha mencionado en clases, una solución para este problema es el uso de **cookies**, las cuales nos permiten mantener un mismo contexto para varias requests.

Si bien las cookies son muy utiles para mantener una o más sesiones mientras nos comunicamos con un servidor web, el usarlas o no es una decision moralmente no trivial. En efecto, a lo largo del tiempo el uso de las cookies ha sido cuestionado en numerosas ocasiones.

El objetivo de esta pregunta es que usted investigue las razones por las que el uso de las cookies es controversial y las explique con sus propias palabras.

**Respuesta**:

Una de las principales causas es la privacidad de los usuarios, puesto que las *cookies* pueden hacer un seguimiento no consentido de información a la que se accede en el internet o proveer la propia información personal del usuario.

## Pregunta 2

Como vimos en el auxiliar, al usar la función **fetch** de Javascript estamos cargando un recurso desde una URL diferente a la que se esta usando. Por esto pueden haber problemas de Cross Origin Request Sharing o **CORS** por sus siglas en inglés.

Investigue y explique qué es CORS. Detalle por qué es importante este mecanismo (**Hint**: Las peticiones AJAX llevan las cookies que se tienen en el sitio objetivo). Nombre una cabecera HTTP de solicitud y una cabecera HTTP de respuesta asociado a este mecanismo.

**Respuesta**:

**CORS** se basa en resolver el problema de que un cierto dominio cree una request a un dominio ajeno para obtener recursos alojados en la misma, para ello este mecanismo lo que hace es realizar una verificación previa del dominio que creó la request y revisa si le permitirá realizar esta acción, esto se logra añadiendo cabeceras HTTP que permiten a un servidor comprobar si el dominio está autorizado para realizar la request.

Gracias a este mecanismo es que se evitan problemas como por ejemplo enviar cookies con información sensible a dominios ajenos.

Un ejemplo de cabecera HTTP de solicitud es `Access-Control-Allow-Origin` y de respuesta es `Origin`.

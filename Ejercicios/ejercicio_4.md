# Ejercicio 4: "*Unrestricted File Upload*"

**Nombre**: Andrés Calderón Guardia

---

## Introduccion

Hemos enfatizado la importancia de ser extremadamente cautelosos en el manejo de la entrada de los usuarios, incluyendo los archivos. De hecho, la vulnerabilidad [*Unrestricted File Upload*](https://owasp.org/www-community/vulnerabilities/Unrestricted_File_Upload), la cual corresponde a confiar plenamente en los archivos subidos por el usuario, puede tener consecuencias catastróficas.

El objetivo de este ejercicio es comprender bien las posibles **consecuencias** de un manejo de archivos "mediocre" y las formas de **prevenirlas**.

## Pregunta 1

Investigue y explique **con sus propias palabras** 3 posibles ataques que un usuario malicioso podria realizar a una aplicacion web con la vulnerabilidad *Unrestricted File Upload*". Se espera que para cada ataque se mencionen las **consecuencias** del mismo.

**Respuesta:**

Un primer ejemplo es el subir archivos con nombres que constituyan una ruta, de modo que la aplicación al momento de subir este sería redirigido a una carpeta distinta a la que se subiría el archivo normalmente, de modo que el usuario podría ser capaz de obtener información disponible en otros directorios tales como contraseñas, información personal, entre otros.

Otro tipo de ataque es uno producido por subir gifs que no poseen una paleta de colores global ni una local, de modo que esta no puede ser inicializada apropiadamente, generando un memory leak en el proceso, por lo que estos datos que se filtraron podrían contener información sensible de la cual el atacante se podría aprovechar.

Finalmente está el caso de simplemente subir un archivo infectado con algún virus que no haya sido detectado por la página, produciendo que el mismo pueda ser descargado por usuarios que estén utilizando la página infectando sus computadoras en el proceso.

## Pregunta 2

Ahora que ya tenemos claro que descuidar el manejo de archivos es peligroso, les pedimos listar 5 metodos preventivos para esta vulnerabilidad.

**Respuesta:**

- Siempre chequear que el nombre del archivo sea uno válido antes de subirlo a la plataforma.
- Solo aceptar extensiones permitidas dentro de la página web, no solo fijandose en la del nombre sino también en la extensión real del archivo.
- La carpeta donde se suban los archivos no debería tener ningún permiso de ejecución sobre la aplicación.
- Utilizar funciones de hash para transformar el nombre de los archivos a unos encriptados.
- Restringir tanto el tamaño que tiene el archivo como el largo del nombre que posee.

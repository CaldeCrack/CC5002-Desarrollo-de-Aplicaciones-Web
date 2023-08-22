# Ejercicio 1

**Nombre**: Andrés Calderón Guardia

---

## Pregunta 1

Explique por que el realizar validaciones del input del usuario en el front-end es una facilidad pero no una medida de seguridad.

**Respuesta**:

Pues al hacer una validación en el front-end le estamos indicando al usuario que el formulario que está intentando enviar no es válido, pero este tipo de autentificación es fácil de bypassear, entonces esta persona sería capaz de enviar datos maliciosos por ciertos medios y ahí el front-end no sería capaz de hacer la validación.

## Pregunta 2

Usted cuenta con el siguiente codigo HTML:

```html
<div>
    <p>Contador: <span id="contador">0</span></p>
    <button type="button" id="btn-resta">-1</button>
    <button type="button" id="btn-suma">+1</button>
</div>
```

Implemente un contador bidireccional utilizando la plantilla disponible mas abajo, solo programe donde se le indica. Se espera que tras apretar un boton, el contador se actualice sin la necesidad de recargar la pagina. **No esta permitido modificar el HTML**.

**Respuesta**:

```js
// se buscan los elementos necesarios
let addBtn = document.getElementById("btn-suma");
let subBtn = document.getElementById("btn-resta");
let cnt = document.getElementById("contador");

let n = 0; // contador

const suma = () => {
    n++;
    cnt.innerText = n;
};

const resta = () => {
    n--;
    cnt.innerText = n;
};
// asignar respectivamente las funciones al evento "click"
addBtn.addEventListener("click", suma)
subBtn.addEventListener("click", resta)
```

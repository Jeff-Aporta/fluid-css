# Fluid CSS

![App Icon](static/img/app.svg)

## Sitio web
[https://jeff-aporta.github.io/fluid-css](https://jeff-aporta.github.io/fluid-css)

![JavaScript Badge](https://img.shields.io/badge/JavaScript-ES6-yellow.svg) ![Node.js Badge](https://img.shields.io/badge/Node.js-support%20for%20any%20version-brightgreen.svg) ![License Badge](https://img.shields.io/badge/license-MIT-blue.svg)

## Introducción
Fluid CSS es un sistema avanzado para manejar y manipular estilos CSS de manera dinámica. Este sistema permite definir reglas CSS responsivas que se ajustan automáticamente a variables como el tamaño de la pantalla, mejorando la experiencia visual en aplicaciones web. Se utilizan estrategias de inserción de estilos por JS haciendo uso de `@media` de CSS.

## Instalación
Para utilizar Fluid CSS en tu proyecto, puedes optar por las siguientes opciones:

### CDN
Agrega el siguiente enlace a tu código HTML:
```html
<script src="https://jeff-aporta.github.io/fluid-css/static/js/index.all.min.js"></script>
```

### npm
Instala Fluid CSS como un módulo de npm ejecutando el siguiente comando:
```bash
npm install fluid-css-lng
```

## Tipos de Argumentos y Ejemplos

### 1. `btwX(limitsInside, props)`, `btwY(limitsInside, props)`
- **Argumentos**:
  - `limitsInside`: Similar a `btwX`, define los límites inferior y superior para la altura. Se pueden pasar en un arreglo o como argumentos desagrupados.
  - `props`: Un objeto que contiene las propiedades CSS a aplicar, que pueden ser:
    - `{attr: "valor-dentro"}`
    - `{attr: ["valor-dentro","valor-fuera"]}`
    - `{attr: ["valor-por-debajo","valor-dentro", "valor-por-encima"]}`

- **Ejemplo**:
```javascript
// Define estilos que cambian según la altura de la ventana.
fluidCSS().btwY([400, 800], { height: ['100vh', '50vh'] }).end();
fluidCSS().btwX([400, 800], { height: ['100vw', '50vw'] }).end();
// IGUAL QUE
fluidCSS().btwY(400, 800, { height: ['100vh', '50vh'] }).end();
fluidCSS().btwX(400, 800, { height: ['100vw', '50vw'] }).end();

// CASO CUANDO SÓLO SE DESEA APLICAR UN ESTILO DENTRO DEL RANGO
fluidCSS().btwY(400, 800, { height: '100vh' }).end();
fluidCSS().btwX(400, 800, { height: '100vw' }).end();
// IGUAL QUE
fluidCSS().btwY([400, 800], { height: '100vh' }).end();
fluidCSS().btwX([400, 800], { height: '100vw' }).end();

// CASO CUANDO SE DESEA APLICAR UN ESTILO FUERA DEL RANGO
fluidCSS().btwY(400, 800, { height: [null,'100vh'] }).end(); // TAMBIEN SE PUEDE USAR [null,'100vh']
fluidCSS().btwX(400, 800, { height: [null,'100vw'] }).end(); // TAMBIEN SE PUEDE USAR [null,'100vw']
// IGUAL QUE
fluidCSS().btwY([400, 800], { height: [null,'100vh'] }).end(); // TAMBIEN SE PUEDE USAR [null,'100vh']
fluidCSS().btwX([400, 800], { height: [null,'100vw'] }).end(); // TAMBIEN SE PUEDE USAR [null,'100vw']

// CASO CUANDO SE DESEA APLICAR UN ESTILO POR FUERA Y OTRO POR DENTRO DEL RANGO
fluidCSS().btwY(400, 800, { height: ['100vh', '50vh'] }).end();
fluidCSS().btwX(400, 800, { height: ['100vw', '50vw'] }).end();
// IGUAL QUE
fluidCSS().btwY([400, 800], { height: ['100vh', '50vh'] }).end();
fluidCSS().btwX([400, 800], { height: ['100vw', '50vw'] }).end();

// CASO CUANDO SE DESEA APLICAR UN ESTILO POR DEBAJO DEL RANGO, OTRO POR DENTRO Y OTRO POR ENCIMA
fluidCSS().btwY(400, 800, { height: ['40vh', '50vh', '100vh'] }).end();
fluidCSS().btwX(400, 800, { height: ['40vw', '50vw', '100vw'] }).end();
// IGUAL QUE
fluidCSS().btwY([400, 800], { height: ['40vh', '50vh', '100vh'] }).end();
fluidCSS().btwX([400, 800], { height: ['40vw', '50vw', '100vw'] }).end();
```

### 4. `ltX(limitBreak, props), ltY(limitBreak, props)`
La función `ltX` y `ltY` permiten aplicar estilos cuando el valor de la variable es menor o igual al límite establecido. La relación matemática es:

x <= límite.

- **Argumentos**:
  - `limitBreak`: Un valor que define el límite inferior para aplicar los estilos.
  - `props`: Un objeto que contiene las propiedades CSS a aplicar, que pueden ser:
    - `{attr: "valor-verdadero"}`
    - `{attr: ["valor-verdadero","valor-falso"]}`

- **Ejemplo**:
```javascript
// Caso cuando se desea agregar un estilo por debajo (true case) y otro por encima (false case).
fluidCSS().ltY(500, { backgroundColor: ['green', 'yellow'] }).end();
fluidCSS().ltX(500, { backgroundColor: ['green', 'yellow'] }).end();

// Caso cuando se desea agregar un estilo únicamente por debajo (true case).
fluidCSS().ltY(500, { backgroundColor: 'green' }).end();
fluidCSS().ltX(500, { backgroundColor: 'green' }).end();

// Caso cuando se desea agregar un estilo únicamente por encima (false case).
fluidCSS().ltY(500, { backgroundColor: [null,'yellow'] }).end(); // También se puede usar [,'yellow']
fluidCSS().ltX(500, { backgroundColor: [null,'yellow'] }).end(); // También se puede usar [,'yellow']
```

### 5. `gtX(limitBreak, props), gtY(limitBreak, props)`
La función `gtX` y `gtY` permiten aplicar estilos cuando el valor de la variable es mayor al límite establecido. La relación matemática es:

x > límite.

- **Argumentos**:
  - `limitBreak`: Un valor que define el límite inferior para aplicar los estilos.
  - `props`: Un objeto que contiene las propiedades CSS a aplicar, que pueden ser:
    - `{attr: "valor-verdadero"}`
    - `{attr: ["valor-verdadero","valor-falso"]}`

- **Ejemplo**:
```javascript
// Caso cuando se desea agregar un estilo por encima (true case) y otro por debajo (false case).
fluidCSS().gtX(600, { opacity: [0, 1] }).end();
fluidCSS().gtY(600, { opacity: [0, 1] }).end();

// Caso cuando se desea agregar un estilo únicamente por encima (true case).
fluidCSS().gtX(600, { opacity: '1' }).end();
fluidCSS().gtY(600, { opacity: '1' }).end();

// Caso cuando se desea agregar un estilo únicamente por debajo (false case).
fluidCSS().gtX(600, { opacity: [null, 1] }).end(); // También se puede usar [,1]
fluidCSS().gtY(600, { opacity: [null, 1] }).end(); // También se puede usar [,1]
```

### 7. `lerpX(limits, props), lerpY(limits, props)`
La función `lerpX` y `lerpY` permiten realizar una interpolación lineal entre dos valores. La relación matemática es:

x = (vf - vi) * t + vi

<br>

<img src="https://latex.codecogs.com/png.image?\large&space;\dpi{200}\bg{white}&space;x=(v_f-v_i)t&plus;v_i" title=" x=(v_f-v_i)t+v_i" />

<br>

donde **t** es el porcentaje de la ventana con respecto al rango. **t** es un valor entre 0 y 1 que representa la posición del valor actual dentro del rango definido por `limits`. cuando **t** es 0, el valor interpolado es igual al valor inicial (`vi`), y cuando **t** es 1, el valor interpolado es igual al valor final (`vf`). **t** es un valor crucial en esta función, ya que determina la proporción en la que se aplica la interpolación.

- **Argumentos**:
  - `limits`: Un arreglo que define los límites inferior y superior para la interpolación, que deben ser números reales. La proyección puede ser abierta o cerrada dependiendo de los valores en este arreglo, donde:
    - Un valor de "o" indica que la proyección es abierta por debajo. Esto significa que t no tiene restricción en los reales.
    - Un valor de "e" indica que la proyección es abierta por encima. Esto significa que t tiene restricción en solo a valores en el intervalo [0,1].
  - `props`: Un objeto que contiene las propiedades CSS a aplicar, que deben ser del tipo:
    - `{attr: ["valor-proyección-inicio","valor-proyección-fin"]}`.

- **Ejemplos**:
```javascript
// Proyección cerrada tanto por debajo como por encima.
fluidCSS().lerpX([390, 1200], { width: [200, 800] }).end();

// Proyección cerrada por debajo.
fluidCSS().lerpX([390, 1200, "o"], { width: [200, 800] }).end();

// Proyección cerrada por encima.
fluidCSS().lerpX([390, 1200, "e"], { width: [200, 800] }).end();
```

INVITAR A
Más en mi portafolio
[https://jeff-aporta.github.io/portafolio](https://jeff-aporta.github.io/portafolio)
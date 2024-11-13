# Fluid CSS

<h2>
    Documentación:
    <br/>
    <br/>
    <a target="_blank" href="https://jeff-aporta.github.io/fluid-css">
        https://jeff-aporta.github.io/fluid-css
        <br/>
        <br/>
        <p align="center">
            <img src="static/img/app.svg" width="250" height="250" />
        </p>
    </a>
</h2>

Fluid CSS es un sistema avanzado para manejar y manipular estilos CSS de manera dinámica, diseñado para adaptarse a condiciones específicas mediante comandos de estilo personalizados. Este sistema permite definir reglas CSS responsivas, ajustándose automáticamente a variables como el tamaño de la pantalla.

## Instalación

### CDN
Para usar Fluid CSS en tu proyecto, solo necesitas agregar el siguiente enlace a tu código HTML:

```html
<script src="https://jeff-aporta.github.io/fluid-css/static/js/index.all.min.js"></script>
```

### npm
También puedes instalar Fluid CSS como un módulo de npm ejecutando el siguiente comando en tu proyecto:

```bash
npm install fluid-css-lng
```

## Comprobar funcionamiento

### Uso con IIFE
Para comprobar que Fluid CSS está funcionando correctamente con IIFE:

```html
<script src="https://jeff-aporta.github.io/fluid-css/static/js/index.all.min.js"></script>
<script>
    console.log(fluidCSS); // Debería mostrar la función: ƒ I(e){if(!e)return new ...
</script>
```

### Uso como módulo en Node.js
Para verificar Fluid CSS como módulo:

```javascript
import fluidCSS from "fluid-css-lng";

console.log(fluidCSS); // Debería mostrar la función: ƒ fluidCSS(props) { ...
```

## Características principales

- **Interpolación Lineal**  
  Ajusta de forma fluida los atributos que utilizan unidades en píxeles, permitiendo que los elementos de la interfaz se adapten proporcionalmente. Ideal para transiciones suaves y escalado preciso en diseños responsivos.

- **Condiciones Dinámicas**  
  Define comportamientos específicos basados en condiciones dinámicas como "menor que", "mayor que" y "entre", aplicadas al ancho o altura de la ventana. De esta forma, los elementos responden a diferentes propiedades según rangos de dimensiones.

- **Fácil Integración**  
  Fluid CSS es compatible con cualquier proyecto web y es sencillo de implementar tanto en el lado del cliente como en el lado del servidor. Esto lo hace ideal para proyectos que requieren una adaptación dinámica de los estilos en función de las dimensiones de la ventana, mejorando la experiencia visual sin complicaciones.

## Ventajas de usar Fluid CSS

Fluid CSS es perfecto para proyectos que necesitan adaptarse de manera elegante y responsiva a una variedad de dispositivos y resoluciones. Su implementación flexible y adaptable permite que los estilos se ajusten automáticamente, optimizando la presentación en diferentes contextos y tamaños de pantalla.

<br />
<hr />
<br />

<h2 align="right">
  Más en mi portafolio
  <br />
  <a href="https://jeff-aporta.github.io/portafolio">
    https://jeff-aporta.github.io/portafolio
  </a>
</h2>

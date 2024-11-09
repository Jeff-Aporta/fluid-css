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

**Fluid CSS** es un sistema avanzado para el manejo y manipulación dinámica de estilos CSS, basado en comandos personalizados. Está diseñado para ajustar y personalizar los estilos de tu proyecto en función de condiciones específicas, como el tamaño de la pantalla, mediante reglas CSS dinámicas.

Fluid CSS permite crear diseños responsivos y fluidos, mejorando la experiencia de usuario al hacer que las interfaces se adapten de manera precisa a diferentes tamaños de pantalla.

## Características principales

### Interpolación Lineal

Ajusta de manera fluida los atributos CSS que utilizan unidades en píxeles, permitiendo que los elementos de la interfaz se adapten proporcionalmente. Esto garantiza transiciones suaves y escalado preciso, ideal para diseños responsivos.

```
.lerpX(sz, props)
```

### Condiciones Dinámicas

Define comportamientos específicos según condiciones dinámicas, tales como "menor que", "mayor que" y "entre", aplicadas al ancho o altura de la ventana. Esto permite ajustar los elementos de la interfaz en función de diferentes rangos de dimensiones, optimizando su adaptación según el tamaño de la pantalla.

```
.ltX(sz, props) .gtX(sz, props) .btwX(szs, props)
```

```
.ltY(sz, props) .gtY(sz, props) .btwY(szs, props)
```

### Fácil Integración

**Fluid CSS** es compatible con cualquier proyecto web y es fácil de implementar. Funciona tanto en el lado del cliente como en el lado del servidor usando npm, lo que lo hace flexible y adaptable a distintos entornos de desarrollo.

Es ideal para proyectos que requieren una adaptación dinámica y responsiva de los estilos según las dimensiones de la ventana, proporcionando una experiencia visual optimizada y sin complicaciones adicionales.

## Instalación

### CDN

Para usar Fluid CSS en tu proyecto, puedes integrarlo de forma sencilla mediante la URL en tu código HTML:

```
https://jeff-aporta.github.io/fluid-css/static/js/index.all.min.js
```

```html
<script
  type="text/javascript"
  src="https://jeff-aporta.github.io/fluid-css/static/js/index.all.min.js"
></script>
```

### npm

Si prefieres instalar Fluid CSS usando npm, ejecuta el siguiente comando:

```bash
npm install fluid-css-lng
```

## Uso

Una vez instalado, puedes comenzar a utilizar Fluid CSS en tu proyecto. A continuación, se muestra un ejemplo básico de cómo definir un estilo condicional con el tamaño de la pantalla:

```javascript
fluidCSS({
  code: `
      600px<x<1200px?{
         font-size: (16px, 12px);
      }
   `,
  clss: "extra-classes",
});
```

```javascript
fluidCSS()
  .btwX([600, 1200], {
    fontSize: ["16px", "12px"],
  })
  .end("extra-classes");
```

Este código ajusta el tamaño de la fuente dependiendo del ancho de la pantalla. Si el ancho está entre 600px y 1200px, el tamaño será de 16px. Si está fuera de ese rango, se aplicará 12px.

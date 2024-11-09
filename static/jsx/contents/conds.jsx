function _conds() {
  setTimeout(PR.prettyPrint);
  return (
    <$FMD>
      <$h1>Condiciones</$h1>
      Las reglas de condición if en Fluid CSS permiten crear estilos
      condicionales que se aplican en función del ancho de la pantalla. Estas
      reglas definen cómo deben cambiar las propiedades CSS a medida que el
      ancho de la ventana varía, permitiendo adaptar el diseño de la interfaz a
      diferentes tamaños de pantalla.
      {sep}
      <MenorQue />
      {sep}
      <MayorQue />
      {sep}
      <Entre />
    </$FMD>
  );
}
function MenorQue() {
  return (
    <$index label="Menor que (<)">
      <$h4>Menor que (&lt;)</$h4>
      <$CardF>
        Esta condición se aplica cuando el ancho de la pantalla es menor que el
        valor especificado. Útil para definir estilos específicos cuando la
        interfaz debe adaptarse a pantallas más pequeñas.
        <$CardDef title="Menor que en X" elevation={0}>
          Esta regla define un punto de ajuste en el ancho de la pantalla donde
          se pueden aplicar estilos específicos. Permite establecer valores
          condicionales en función de si el ancho es menor que un valor límite
          (X). Esto facilita el diseño adaptativo en distintos dispositivos o
          tamaños de pantalla.
          <$h />
          <strong>
            <$secundario>Estructura de interprete</$secundario>
          </strong>
          Esta estructura permite definir condiciones directamente en el
          atributo code, lo cual es ideal para casos en los que se busca una
          implementación más directa o rápida sin tener que definir cada ajuste
          por separado.
          <$h />
          <strong>Forma general</strong>
          <$$h />
          <$code style={{ color: "khaki" }}>
            {[
              "fluidCSS({",
              "   code: `",
              "      x<widthLimitpx?{",
              "         attr-kebab-case: (true value, false value);",
              "      }",
              "   `,",
              "   clss: 'cls-1 cls-2 ... extra-classes'",
              "})",
            ].join("\n")}
          </$code>
          <$$h />
          <strong>Ejemplo de uso</strong>
          <$$h />
          <$PR lang="javascript">
            {[
              "fluidCSS({",
              "   code: `",
              "      x<900px?{",
              "         background-color: (red, blue);",
              "      }",
              "   `,",
              "   clss: 'cls-1 cls-2 extra-classes'",
              "})",
            ].join("\n")}
          </$PR>
          <$$h />
          <strong>
            <$secundario>Estructura cascada</$secundario>
          </strong>
          La estructura en cascada permite crear una cadena de ajustes más
          organizada, en la que cada condición se aplica en una línea y se
          evalúa en función del valor de widthPxLimit. Esto facilita la
          legibilidad y hace que sea más sencillo añadir o modificar condiciones
          según se necesite.
          <$h />
          <strong>Forma general</strong>
          <$$h />
          <$code style={{ color: "khaki" }}>
            {[
              "fluidCSS()",
              "   .ltX(widthPxLimit, {",
              "      attrCamelCase: ['true-value', 'false-value' ]",
              "   })",
              "   .end(...extraClasses);",
            ].join("\n")}
          </$code>
          <$$h />
          <strong>Ejemplo de uso</strong>
          <$$h />
          <$PR lang="javascript">
            {[
              "fluidCSS()",
              "   .ltX(900, {",
              "      backgroundColor: ['red', 'blue' ]",
              "   })",
              "   .end('cls-1 cls-2 extra-classes');",
            ].join("\n")}
          </$PR>
        </$CardDef>
        <$CardF elevation={6} className="pad-10px">
          La condición ltY en **fluidCSS** permite aplicar estilos específicos
          cuando la altura de la pantalla es menor que un valor determinado, lo
          cual es ideal para adaptarse a pantallas más pequeñas o en modo
          horizontal en dispositivos móviles.
          <p>
            Esto permite que el diseño se ajuste automáticamente para mejorar la
            experiencia visual en espacios reducidos, adaptando elementos como
            el tamaño de texto, el margen y otros estilos según el espacio
            disponible.
          </p>
        </$CardF>
      </$CardF>
    </$index>
  );
}
function MayorQue() {
  return (
    <$index label="Mayor que (>)">
      <$h4>Mayor que (&gt;)</$h4>
      <$CardF>
        Esta condición se aplica cuando el ancho de la pantalla es mayor que el
        valor especificado. Es ideal para definir estilos específicos en
        pantallas grandes, permitiendo que la interfaz aproveche el espacio
        adicional de dispositivos con mayor resolución.
        <$CardDef title="Mayor que en X" elevation={0}>
          La regla de "mayor que" establece un punto de ajuste en el que se
          aplican estilos específicos cuando el ancho de la pantalla supera un
          valor límite (X). Esto permite configurar diseños que se adaptan y
          enriquecen en pantallas más amplias, optimizando la experiencia de
          usuario para dispositivos de escritorio o grandes formatos.
          <$h />
          <strong>
            <$secundario>Estructura de interprete</$secundario>
          </strong>
          Esta estructura permite definir condiciones directamente en el
          atributo code, lo cual es ideal para casos en los que se busca una
          implementación directa y rápida, sin necesidad de configurar cada
          ajuste por separado.
          <$h />
          <strong>Forma general</strong>
          <$$h />
          <$code style={{ color: "khaki" }}>
            {[
              "fluidCSS({",
              "   code: `",
              "      x>widthLimitpx?{",
              "         attr-kebab-case: (true value, false value);",
              "      }",
              "   `,",
              "   clss: 'cls-1 cls-2 ... extra-classes'",
              "})",
            ].join("\n")}
          </$code>
          <$$h />
          <strong>Ejemplo de uso</strong>
          <$$h />
          <$PR lang="javascript">
            {[
              "fluidCSS({",
              "   code: `",
              "      x>1200px?{",
              "         font-size: (18px, 14px);",
              "      }",
              "   `,",
              "   clss: 'cls-1 cls-2 extra-classes'",
              "})",
            ].join("\n")}
          </$PR>
          <$$h />
          En este ejemplo, la condición x&gt;1200px establece que, si el ancho
          de la pantalla es mayor a 1200 píxeles, el tamaño de la fuente
          (font-size) será de 18px. de lo contrario, el tamaño de la fuente será
          de 14px. La propiedad clss permite añadir clases adicionales que se
          ajustarán según la condición.
          <$$h />
          <strong>
            <$secundario>Estructura cascada</$secundario>
          </strong>
          La estructura en cascada permite organizar ajustes en una secuencia
          fácil de leer y entender. Cada condición se aplica en una línea y se
          evalúa según el valor de widthPxLimit, facilitando la adición o
          modificación de condiciones según sea necesario.
          <$h />
          <strong>Forma general</strong>
          <$code style={{ color: "khaki" }}>
            {[
              "fluidCSS()",
              "   .gtX(widthPxLimit, {",
              "      attrCamelCase: ['true-value', 'false-value' ]",
              "   })",
              "   .end(...extraClasses);",
            ].join("\n")}
          </$code>
          <$$h />
          <strong>Ejemplo de uso</strong>
          <$PR lang="javascript">
            {[
              "fluidCSS()",
              "   .gtX(1200, {",
              "      fontSize: ['18px', '14px' ]",
              "   })",
              "   .end('cls-1 cls-2 extra-classes');",
            ].join("\n")}
          </$PR>
          <$$h />
          En este caso, gtX(1200) evalúa si el ancho de la pantalla es mayor a
          1200 píxeles. Si es así, el tamaño de la fuente (fontSize) será de
          18px. De lo contrario, será de 14px. La función .end permite
          especificar clases adicionales que se aplicarán en ambos casos,
          facilitando la configuración visual.
        </$CardDef>
        <Card elevation={6} className="pad-10px">
          La condición gtY en fluidCSS permite aplicar estilos distintos cuando
          la pantalla es más alta que un valor específico, ideal para adaptarse
          a dispositivos móviles en modo vertical.
          <p>
            Con una estructura simple, puedes definir cambios en el diseño según
            la altura disponible, logrando una adaptación visual más cómoda y
            personalizada.
          </p>
        </Card>
      </$CardF>
    </$index>
  );
}

function Entre() {
  return (
    <$index label="Entre (<<)">
      <$h4>Entre (&lt;&lt;)</$h4>
      <$CardF>
        La condición Entre en fluidCSS permite aplicar estilos cuando el ancho o
        la altura de la pantalla están dentro de un rango específico. Es útil
        para ajustar el diseño en dispositivos con pantallas de tamaños
        intermedios, como tabletas o ventanas redimensionadas.
        <p>
          Además de la estructura básica bifurcada, que evalúa dos condiciones
          (por debajo y por encima de un valor límite), también se puede
          utilizar la forma trifurcada, que agrega una condición intermedia para
          definir estilos más específicos en tres rangos de tamaño.
        </p>
        <$CardDef title="Forma General (Bifurcada)" elevation={0}>
          <$$h />
          La **forma general bifurcada** en `fluidCSS` permite definir reglas
          que aplican estilos específicos cuando el ancho o la altura de la
          pantalla está dentro de un rango determinado.
          <p>
            Se utiliza una sintaxis simple que permite indicar qué estilos se
            deben aplicar cuando la pantalla está dentro del rango de tamaños y
            qué estilos aplicar cuando está fuera de ese rango. Esto facilita la
            creación de diseños que se adaptan a diferentes tamaños de pantalla,
            sin tener que escribir reglas complejas o separadas.
          </p>
          <strong>
            <$secundario>Estructura de interprete</$secundario>
          </strong>
          <$h />
          <strong>Forma general</strong>
          <$code style={{ color: "khaki" }}>
            {[
              "fluidCSS({",
              "   code: `",
              "      widthBelowLimitpx<x<widthAboveLimitpx?{",
              "         attr-kebab-case: (true value, false value);",
              "      }",
              "   `,",
              "   clss: 'cls-1 cls-2 ... extra-classes'",
              "})",
            ].join("\n")}
          </$code>
          <$$h />
          <strong>Ejemplo de uso</strong>
          <$PR lang="javascript">
            {[
              "fluidCSS({",
              "   code: `",
              "      600px<x<1200px?{",
              "         font-size: (16px, 12px);",
              "      }",
              "   `,",
              "   clss: 'cls-1 cls-2 extra-classes'",
              "})",
            ].join("\n")}
          </$PR>
          <$$h />
          En este ejemplo, la condición 600px&lt;x&lt;1200px establece que si el
          ancho de la pantalla está entre 600 y 1200 píxeles, el tamaño de la
          fuente será de 16px. Si el ancho está fuera de ese rango (es menor a
          600 píxeles o mayor a 1200 píxeles), el tamaño de la fuente será de
          12px. La propiedad clss permite añadir clases adicionales que se
          aplicarán según la condición.
          <$$h />
          <strong>
            <$secundario>Estructura cascada</$secundario>
          </strong>
          La estructura en cascada también permite aplicar estas condiciones de
          manera sencilla y organizada, tanto para casos bifurcados como
          trifurcados, en una secuencia que mejora la legibilidad y la
          organización del código.
          <$h />
          <strong>Forma general</strong>
          <$code style={{ color: "khaki" }}>
            {[
              "fluidCSS()",
              "   .btwX([minWidthPxLimit, maxWidthPxLimit], {",
              "      attrCamelCase: 'true-value'",
              "   })",
              "   .end(...extraClasses);",
              "",
              "fluidCSS()",
              "   .btwX([minWidthPxLimit, maxWidthPxLimit], {",
              "      attrCamelCase: ['true-value', 'false-value' ]",
              "   })",
              "   .end(...extraClasses);",
              "",
              "fluidCSS()",
              "   .btwX([minWidthPxLimit, maxWidthPxLimit], {",
              "      attrCamelCase: ['below-value', 'btw-value', 'above-value']",
              "   })",
              "   .end(...extraClasses);",
            ].join("\n")}
          </$code>
          <$$h />
          <strong>Ejemplo de uso</strong>
          <$PR lang="javascript">
            {[
              "fluidCSS()",
              "   .btwX([600, 1200], {",
              "      fontSize: '16px'",
              "   })",
              "   .end('cls-1 cls-2 extra-classes');",
              "",
              "fluidCSS()",
              "   .btwX([600, 1200], {",
              "      fontSize: ['16px', '12px' ]",
              "   })",
              "   .end('cls-1 cls-2 extra-classes');",
              "",
              "fluidCSS()",
              "   .btwX([600, 1200], {",
              "      fontSize: ['12px', '16px', '20px']",
              "   })",
              "   .end('cls-1 cls-2 extra-classes');",
              "",
            ].join("\n")}
          </$PR>
        </$CardDef>
        <Card elevation={6} className="pad-10px">
          La condición btwY en fluidCSS funciona de manera similar a btwX, pero
          en lugar de basarse en el ancho de la pantalla, se aplica en función
          de la altura.
          <p>
            Esta condición permite definir estilos cuando la altura de la
            pantalla está dentro de un rango específico, lo cual es útil para
            ajustar el diseño en dispositivos con pantallas verticales o cuando
            la altura de la ventana cambia, como en el caso de la rotación de
            dispositivos móviles.
          </p>
          Al igual que en btwX, se puede usar tanto en forma bifurcada (con dos
          valores: dentro y fuera del rango) como en forma trifurcada (con tres
          valores: por debajo, dentro y por encima del rango).
        </Card>
      </$CardF>
    </$index>
  );
}
